import { type BlockList } from '../utils/jsonReader'

function createObservationComponent(
  component: ComponentNode,
  block: BlockList,
  text: string,
  name: string
): InstanceNode {
  const instance: any = component.createInstance()
  // console.log(component)
  instance.name = name
  // eslint-disable-next-line max-len
  instance.children[0].children[1].children[1].characters = text
  instance.x = Number(block.position.left.replace('px', '')) * 2
  instance.y = Number(block.position.top.replace('px', '')) * 2

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  figma.currentPage.appendChild(instance)
  return instance
}

export default createObservationComponent
