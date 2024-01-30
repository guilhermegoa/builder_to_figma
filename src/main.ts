import { once, showUI } from '@create-figma-plugin/utilities'
import { type CloseHandler, type CreateFigmaHandler } from './types/eventHandler.type'
import { getBotJson } from './utils/flowDownloader'
import { type BlockList } from './utils/jsonReader'
import {
  createId,
  createSelect,
  createMacro,
  createSendMessage,
  createSelectImediate
} from './instances/index'
import createTracking from './instances/tracking'
import createObservationComponent from './instances/observation'
import calculateY from './utils/calculateY'
// import calculateX from './utils/calculateX'

export default function (): void {
  // CREATE_FIGMA event handler
  once<CreateFigmaHandler>('CREATE_FIGMA', async function (key: string): Promise<void> {
    const [
      idComponent,
      // dynamicContentComponent,
      macroComponent,
      observationComponent,
      selectComponent,
      selectImediateComponent,
      sendMessageComponent,
      trackingComponent
    ] = await Promise.all([
      figma.importComponentByKeyAsync('6ca6d4651bef9bda556960d72a8427c0f44f25e0'),
      // figma.importComponentByKeyAsync('2f43d0db522f94bc1a84b8f6a531fcde255679c4'),
      figma.importComponentByKeyAsync('1af1e3e0d5fc69d496d3909c5143edb0f2ace6ea'),
      figma.importComponentByKeyAsync('467d5c428b3b2c1b82447d7da01aaa0c3209cba2'),
      figma.importComponentByKeyAsync('8ae2d54f6f76aa2bfe23df1361def19ef9c0249d'),
      figma.importComponentByKeyAsync('38a80132b23e2c09bfdaba75f9e837e2a3d73642'),
      figma.importComponentByKeyAsync('2f43d0db522f94bc1a84b8f6a531fcde255679c4'),
      figma.importComponentByKeyAsync('0dececd32f95c805215e31e5dedbdbc9bb589e93')
    ])

    await Promise.all([
      figma.loadFontAsync({ family: 'Roboto', style: 'Regular' }),
      figma.loadFontAsync({ family: 'Roboto', style: 'Bold' }),
      figma.loadFontAsync({ family: 'Roboto', style: 'Medium' }),
      figma.loadFontAsync({ family: 'Arial', style: 'Regular' })
    ])

    const json = await getBotJson(key)
    console.log(json)
    let lastBlockPosition = { x: 0, y: 0, heigth: 0, width: 0 }
    async function createElements(block: BlockList): Promise<void> {
      let instance: any = null
      if (block.actions.length > 0) {
        block.actions.forEach(async (action: any) => {
          if (action.content !== false) {
            switch (action.typeOfContent) {
              case 'chat-state':
                break
              case 'select': {
                instance = createSelect(selectComponent, block)
                break
              }
              case 'select-immediate': {
                instance = createSelectImediate(selectImediateComponent, block, action)
                break
              }
              case 'text':
              case 'SendMessage': {
                instance = createSendMessage(sendMessageComponent, block, action)
                break
              }
              default:
                break
            }
          }
        })
      } else {
        instance = createMacro(macroComponent, block)
      }

      const trackingNodes = [] as InstanceNode[]
      let trackingY = { y: 0, height: 0 }
      block.trackings.forEach(async (tracking, index) => {
        const newNode: InstanceNode = createTracking({
          tracking,
          position: block.position,
          index,
          component: trackingComponent
        })
        trackingY = calculateY(newNode, trackingY)
        trackingNodes.push(newNode)
      })

      const idInstance = createId(idComponent, block)

      const directionsObservation = block.condicaoSaida
        .map((item) => {
          const figmaId = json.find((block) => block.id === item.blockDestinationId)?.figmaId
          return `${item.condiction} --> go to ${figmaId}`
        })
        .join('\n')

      const directionObservationNode = createObservationComponent(
        observationComponent,
        block,
        directionsObservation
      )
      if (instance !== null) {
        const group = figma.group(
          [idInstance, instance, directionObservationNode, ...trackingNodes],
          figma.currentPage
        )

        group.name = block.figmaId
        const absolutePositionX = lastBlockPosition.x + lastBlockPosition.width
        const absolutePositionY = lastBlockPosition.y + lastBlockPosition.heigth
        if (lastBlockPosition.x !== 0) {
          if (group.x > lastBlockPosition.x && group.x < absolutePositionX) {
            group.x = absolutePositionX + 10
          }
        }
        if (lastBlockPosition.y !== 0) {
          if (group.y > lastBlockPosition.y && group.y < absolutePositionY) {
            group.y = absolutePositionY + 10
          }
        }
        lastBlockPosition = { x: group.x, y: group.y, heigth: group.height, width: group.width }
      }
    }

    json.forEach(async (block: BlockList) => {
      await createElements(block)
    })

    figma.closePlugin()
  })

  // CLOSE event handler
  once<CloseHandler>('CLOSE', function () {
    figma.closePlugin()
  })

  showUI({
    height: 137,
    width: 240
  })
}
