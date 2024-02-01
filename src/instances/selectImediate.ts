import { type BlockList } from '../utils/reader/jsonReader'

function createSelectImediate(component: ComponentNode, block: BlockList, action: any): InstanceNode {
  const instance: any = component.createInstance()
  instance.name = block.id

  const node = instance.children[0].children[1].children

  node[0].children[0].visible = false // header
  node[0].children[1].children[0].children[0].characters = action.content // body
  node[0].children[1].children[0].children[1].visible = false // footer

  const buttons = node[2].children[0].children

  action.options.forEach((option: string, index: number) => {
    const button = buttons[index]
    button.visible = true
    button.children[0].characters = option
  })

  instance.x = Number(block.position.left.replace('px', '')) * 2
  instance.y = Number(block.position.top.replace('px', '')) * 2

  figma.currentPage.appendChild(instance)
  return instance
}

export default createSelectImediate
