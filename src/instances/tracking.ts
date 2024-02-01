import createFigmaGroup from '../utils/figmaUtils/group/createFigmaGroup'
import { type BlockList } from '../utils/reader/jsonReader'

function createTracking(component: ComponentNode, block: BlockList): GroupNode | null {
  const instances = block.trackings.map((tracking) => {
    const instance: InstanceNode = component.createInstance()

    instance.x = Number(block.position.left.replace('px', '')) * 2
    instance.y = Number(block.position.top.replace('px', '')) * 2
    instance.relativeTransform = [
      [-1, 1.2246468525851679e-16, instance.x],
      [1.2246468525851679e-16, 1, instance.y]
    ]
    const title = instance.children[0] as TextNode
    const content = instance.children[1] as TextNode

    title.characters = tracking.category!
    content.characters = tracking.action!
    figma.currentPage.appendChild(instance)

    return instance
  })

  const trackingGroup = createFigmaGroup({ components: instances, groupName: 'Trackings', align: 'vertical' })

  return trackingGroup
}

export default createTracking
