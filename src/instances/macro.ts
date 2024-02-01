import { type BlockList } from '../utils/reader/jsonReader'

function createMacro(component: ComponentNode, block: BlockList): InstanceNode {
  const instance: any = component.createInstance()
  instance.name = block.id
  instance.children[1].characters = block.figmaId
  instance.x = Number(block.position.left.replace('px', '')) * 2
  instance.y = Number(block.position.top.replace('px', '')) * 2
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  figma.currentPage.appendChild(instance)
  return instance
}

export default createMacro
