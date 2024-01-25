async function createSelect(block: any): Promise<InstanceNode> {
  const component = await figma.importComponentByKeyAsync('8ae2d54f6f76aa2bfe23df1361def19ef9c0249d')
  const instance: any = component.createInstance()
  instance.name = block.id
  instance.x = Number(block.position.left.replace('px', '')) * 2
  instance.y = Number(block.position.top.replace('px', '')) * 2

  return instance
}

export default createSelect
