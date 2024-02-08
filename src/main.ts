import { once, showUI } from '@create-figma-plugin/utilities'
import { type CloseHandler, type CreateFigmaHandler } from './types/eventHandler.type'
import { getBotJson } from './utils/reader/flowDownloader'
import { type BlockList } from './utils/reader/jsonReader'
import components from './utils/figmaUtils/figmaComponents'
import loadFigmaFonts from './utils/figmaUtils/loadFigmaFonts'
import configMainFrame from './utils/figmaUtils/configMainFrame'
import createElements from './utils/figmaUtils/create/createElements'

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
      trackingComponent,
      apiComponent,
      titleComponent
    ] = await components

    await loadFigmaFonts()

    const json = await getBotJson(key)
    console.log(json)

    const mainFrame = figma.createFrame()

    json.forEach(async (block: BlockList) => {
      createElements({
        block,
        frame: mainFrame,
        json,
        components: [
          selectComponent,
          selectImediateComponent,
          sendMessageComponent,
          macroComponent,
          trackingComponent,
          idComponent,
          apiComponent,
          observationComponent
        ]
      })
    })

    configMainFrame({ frame: mainFrame, titleComponent })

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
