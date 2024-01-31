import { type BlockList } from '../utils/jsonReader'

function createId(component: ComponentNode, block: BlockList): InstanceNode {
  const instance: InstanceNode = component.createInstance()
  instance.x = Number(block.position.left.replace('px', '')) * 2
  instance.y = Number(block.position.top.replace('px', '')) * 2 - 30
  instance.name = block.figmaId

  const text = instance.children[0] as TextNode
  text.characters = block.figmaId

  figma.currentPage.appendChild(instance)
  return instance
}

export default createId
