import { once, showUI } from '@create-figma-plugin/utilities'
import { CloseHandler, CreateFigmaHandler } from './types/eventHandler.type'
import { getBotJson } from './utils/flowDownloader'

export default function () {
  // CREATE_FIGMA event handler
  once<CreateFigmaHandler>('CREATE_FIGMA', async function (key: string) {
    await figma.loadFontAsync({ family: 'Roboto', style: 'Regular' })
    await figma.loadFontAsync({ family: 'Roboto', style: 'Bold' })
    await figma.loadFontAsync({ family: 'Roboto', style: 'Medium' })
    console.log('passou')

    const json = await getBotJson(key)

    json.forEach((block: any) => {
      if (block.actions.length > 0) {
        block.actions.forEach(async (action: any) => {
          switch (action.typeOfContent) {
            case 'chat-state':
              console.log('chat-state')
              break
            case 'select': {
              console.log('select')
              const component = await figma.importComponentByKeyAsync('8ae2d54f6f76aa2bfe23df1361def19ef9c0249d')
              const instance: any = component.createInstance()
              instance.x = Number(block.position.left.replace('px', ''))
              instance.y = Number(block.position.top.replace('px', ''))
              break
            }
            case 'select-immediate': {
              console.log('select-immediate')
              const component = await figma.importComponentByKeyAsync('38a80132b23e2c09bfdaba75f9e837e2a3d73642')
              const instance: any = component.createInstance()
              instance.children[0].children[1].children[0].children[0].children[3].characters = 'Title teste' // title
              instance.children[0].children[1].children[0].children[1].children[0].children[0].characters = action.content // body
              instance.children[0].children[1].children[2].children[0].children.forEach((b: any, idx: any) => { if (idx < action.options.length) b.children[0].characters = action.options[idx] }) // buttons
              instance.x = Number(block.position.left.replace('px', ''))
              instance.y = Number(block.position.top.replace('px', ''))
              break
            }
            case 'text': {
              console.log('text')
              const component = await figma.importComponentByKeyAsync('2f43d0db522f94bc1a84b8f6a531fcde255679c4')
              const instance: any = component.createInstance()
              instance.children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].characters = 'Mesnsagem de teste'
              instance.x = Number(block.position.left.replace('px', ''))
              instance.y = Number(block.position.top.replace('px', ''))
              break
            }
            default:
              console.log('default')
              break
          }
        })
      }
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
