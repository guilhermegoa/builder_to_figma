import { type BlockList } from '../utils/reader/jsonReader'

function createSelectImediate(component: ComponentNode, block: BlockList, action: any): InstanceNode {
  const instance: any = component.createInstance()
  instance.name = block.id
  instance.children[0].children[1].children[0].children[0].children[3].characters = 'Title teste'
  // eslint-disable-next-line max-len
  instance.children[0].children[1].children[0].children[1].children[0].children[0].characters = action.content // body
  instance.children[0].children[1].children[2].children[0].children.forEach((b: any, idx: any) => {
    if (idx < action.options.length) b.children[0].characters = action.options[idx]
  }) // buttons
  instance.x = Number(block.position.left.replace('px', '')) * 2
  instance.y = Number(block.position.top.replace('px', '')) * 2
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  figma.currentPage.appendChild(instance)
  return instance
}

export default createSelectImediate
