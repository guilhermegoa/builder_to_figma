import { once, showUI } from '@create-figma-plugin/utilities'
import { type CloseHandler, type CreateFigmaHandler } from './types/eventHandler.type'
import { getBotJson } from './utils/flowDownloader'
import { type BlockList } from './utils/jsonReader'
import { createId, createTracking, createObservationComponent } from './instances/index'
import components from './utils/figmaComponents'
import loadFigmaFonts from './utils/loadFigmaFonts'
import sendMessageHandler from './utils/sendMessageHandler'
import { createMainGroup } from './utils/figmaGroups'

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

    function createElements(block: BlockList): void {
      const messagesGroup = sendMessageHandler(
        [selectComponent, selectImediateComponent, sendMessageComponent, macroComponent],
        block
      )

      const trackingsGroup = createTracking(trackingComponent, block)

      createId(idComponent, block)

      const directionsObservation = block.condicaoSaida
        .map((item) => {
          const figmaId = json.find((block) => block.id === item.blockDestinationId)?.figmaId
          return `${item.condiction} --> go to ${figmaId}`
        })
        .join('\n')

      createObservationComponent(observationComponent, block, directionsObservation)
      createMainGroup([messagesGroup!, trackingsGroup!], block.figmaId)
    }

    json.forEach(async (block: BlockList) => {
      createElements(block)
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
