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
// import createObservationComponent from './instances/observation'
import calculateY from './utils/calculateY'
// import calculateX from './utils/calculateX'

export default function (): void {
  // CREATE_FIGMA event handler
  once<CreateFigmaHandler>('CREATE_FIGMA', async function (key: string): Promise<void> {
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
      let component: any = null
      if (block.actions.length > 0) {
        block.actions.forEach(async (action: any) => {
          if (action.content !== false) {
            switch (action.typeOfContent) {
              case 'chat-state':
                break
              case 'select': {
                component = await createSelect(block)
                break
              }
              case 'select-immediate': {
                component = await createSelectImediate(block, action)
                break
              }
              case 'text':
              case 'SendMessage': {
                component = await createSendMessage(block, action)
                break
              }
              default:
                break
            }
          }
        })
      } else {
        component = await createMacro(block)
      }

      const trackingNodes = [] as InstanceNode[]
      let trackingY = { y: 0, height: 0 }
      block.trackings.forEach(async (tracking, index) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const newNode: InstanceNode = await createTracking({ tracking, position: block.position, index })
        trackingY = calculateY(newNode, trackingY)
        trackingNodes.push(newNode)
      })

      const idComponent = await createId(block)

      // const directionsObservation = block.condicaoSaida.map((item) => {
      //   const figmaId = json.find((block) => block.id === item.blockDestinationId)?.figmaId
      //   return `${item.condiction} --> go to ${figmaId}`
      // }).join('\n')

      // const directionObservationNode = await createObservationComponent(block, directionsObservation)
      if (component !== null) {
        const group = figma.group(
          [
            idComponent,
            component,
            // directionObservationNode,
            ...trackingNodes
          ],
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

    // Update all components NO DELETE
    const component = await figma.importComponentByKeyAsync('3c5b1beaef624b8c28ffa9de75461407702de61f')
    const instance = component.createInstance()
    figma.currentPage.appendChild(instance)
    instance.remove()

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
