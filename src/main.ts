import { once, showUI } from '@create-figma-plugin/utilities'
import { type CloseHandler, type CreateFigmaHandler } from './types/eventHandler.type'
import { getBotJson } from './utils/flowDownloader'
import { type BlockList } from './utils/jsonReader'

export default function (): void {
  // CREATE_FIGMA event handler
  once<CreateFigmaHandler>('CREATE_FIGMA', async function (key: string): Promise<void> {
    await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' })
    await figma.loadFontAsync({ family: 'Roboto', style: 'Bold' })
    await figma.loadFontAsync({ family: 'Roboto', style: 'Medium' })

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
                const component = await figma.importComponentByKeyAsync(
                  '8ae2d54f6f76aa2bfe23df1361def19ef9c0249d'
                )

                const instance: any = component.createInstance()
                instance.name = block.id
                instance.x = Number(block.position.left.replace('px', ''))
                instance.y = Number(block.position.top.replace('px', ''))
                break
              }
              case 'select-immediate': {
                const component = await figma.importComponentByKeyAsync(
                  '38a80132b23e2c09bfdaba75f9e837e2a3d73642'
                )
                const instance: any = component.createInstance()
                instance.name = block.id
                instance.children[0].children[1].children[0].children[0].children[3].characters =
                  'Title teste'
                instance.children[0].children[1].children[0].children[1].children[0].children[0].characters =
                  action.content // body
                instance.children[0].children[1].children[2].children[0].children.forEach(
                  (b: any, idx: any) => {
                    if (idx < action.options.length) b.children[0].characters = action.options[idx]
                  }
                ) // buttons
                instance.x = Number(block.position.left.replace('px', ''))
                instance.y = Number(block.position.top.replace('px', ''))
                break
              }
              case 'SendMessage': {
                const component = await figma.importComponentByKeyAsync(
                  '2f43d0db522f94bc1a84b8f6a531fcde255679c4'
                )
                const instance: any = component.createInstance()
                instance.name = block.id
                // eslint-disable-next-line max-len
                instance.children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].characters =
                  action.content
                instance.x = Number(block.position.left.replace('px', ''))
                instance.y = Number(block.position.top.replace('px', ''))
                break
              }
              default:
                break
            }
          }
        })
      } else {
        const component = await figma.importComponentByKeyAsync('1af1e3e0d5fc69d496d3909c5143edb0f2ace6ea')
        const instance: any = component.createInstance()
        instance.name = block.id
        instance.children[1].characters = block.figmaId
        instance.x = Number(block.position.left.replace('px', ''))
        instance.y = Number(block.position.top.replace('px', ''))
      }
      const idComponent = await figma.importComponentByKeyAsync('6ca6d4651bef9bda556960d72a8427c0f44f25e0')
      const idInstance: any = idComponent.createInstance()
      idInstance.x = Number(block.position.left.replace('px', ''))
      idInstance.y = Number(block.position.top.replace('px', '')) - 30
      idInstance.name = block.figmaId
      // idInstance.children[0].characters = 'A.1.2.3' <--- Quebrado
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
