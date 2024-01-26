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

    async function createElements(block: BlockList): Promise<void> {
      if (block.actions.length > 0) {
        block.actions.forEach(async (action: any) => {
          if (action.content !== false) {
            switch (action.typeOfContent) {
              case 'chat-state':
                break
              case 'select': {
                await createSelect(block)
                break
              }
              case 'select-immediate': {
                await createSelectImediate(block, action)
                break
              }
              case 'text':
              case 'SendMessage': {
                await createSendMessage(block, action)
                break
              }
              default:
                break
            }
          }
        })
      } else {
        await createMacro(block)
      }
      await createId(block)
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
