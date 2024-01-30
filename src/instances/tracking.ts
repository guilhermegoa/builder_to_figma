import { type ITracking } from '../utils/jsonReader'

interface ICreateTracking {
  component: ComponentNode
  tracking: ITracking
  position: {
    left: string
    top: string
  }
  index: number
}
function createTracking({ tracking, position, index, component }: ICreateTracking): InstanceNode {
  const instance: InstanceNode = component.createInstance()
  instance.x = Number(position.left.replace('px', '')) * 2
  instance.y = Number(position.top.replace('px', '')) * 2
  instance.relativeTransform = [
    [-1, 1.2246468525851679e-16, instance.x],
    [1.2246468525851679e-16, 1, instance.y]
  ]

  // TODO: futuramente usar o instance.height para fazer calculos dinamicos da posição y
  const title = instance.children[0] as TextNode
  const content = instance.children[1] as TextNode

  title.characters = tracking.category!
  content.characters = tracking.action!
  figma.currentPage.appendChild(instance)
  return instance
}

export default createTracking
