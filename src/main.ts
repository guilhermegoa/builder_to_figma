import { once, showUI } from '@create-figma-plugin/utilities'
import { type CloseHandler, type CreateFigmaHandler } from './types/eventHandler.type'
import { getBotJson } from './utils/reader/flowDownloader'
import { type BlockList } from './utils/reader/jsonReader'
import { createId, createTracking, createObservationComponent } from './instances/index'
import components from './utils/figmaUtils/figmaComponents'
import loadFigmaFonts from './utils/figmaUtils/loadFigmaFonts'
import sendMessageHandler from './utils/figmaUtils/sendMessageHandler'
import { alignGroupBottom, createMainGroup } from './utils/figmaUtils/figmaGroups'

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

      const id = createId(idComponent, block)

      const directionsObservation = block.condicaoSaida.map((item) => {
        const figmaId = json.find((block) => block.id === item.blockDestinationId)?.figmaId
        return `${item.condiction} --> go to ${figmaId}`
      })

      directionsObservation.push(`default --> go to ${block.saidaPadrao}`)

      const destinyBlock = createObservationComponent(
        observationComponent,
        block,
        directionsObservation.join('\n\n'),
        'Directions'
      )
      const mainGroup = createMainGroup({
        groups: [messagesGroup!, trackingsGroup!],
        groupName: block.figmaId,
        components: [id, destinyBlock]
      })
      alignGroupBottom({ group: mainGroup!, subjectToChange: destinyBlock })
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
