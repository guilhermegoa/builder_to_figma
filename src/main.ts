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
import components from './utils/figmaComponents'
import loadFigmaFonts from './utils/loadFigmaFonts'
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
    ] = await components

    await loadFigmaFonts()

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

      // const trackingNodes = [] as InstanceNode[]
      // let trackingY = { y: 0, height: 0 }
      // block.trackings.forEach(async (tracking, index) => {
      //   const newNode: InstanceNode = createTracking({
      //     tracking,
      //     position: block.position,
      //     index,
      //     component: trackingComponent
      //   })
      //   trackingY = calculateY(newNode, trackingY)
      //   trackingNodes.push(newNode)
      // })
      createTracking(trackingComponent, block)
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
        const group = figma.group([idInstance, instance, directionObservationNode], figma.currentPage)

        group.name = block.figmaId
        // alignGroupVertical(group)
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
