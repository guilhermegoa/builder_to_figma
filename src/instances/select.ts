function createSelect(component: ComponentNode, block: any): InstanceNode {
  const instance: InstanceNode = component.createInstance()
  instance.name = block.id
  instance.x = Number(block.position.left.replace('px', '')) * 2
  instance.y = Number(block.position.top.replace('px', '')) * 2

  figma.currentPage.appendChild(instance)
  return instance
}

export default createSelect
