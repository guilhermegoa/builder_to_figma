async function createMacro(block: any): Promise<InstanceNode> {
  const component = await figma.importComponentByKeyAsync('1af1e3e0d5fc69d496d3909c5143edb0f2ace6ea')
  const instance: any = component.createInstance()
  instance.name = block.id
  instance.children[1].characters = block.figmaId
  instance.x = Number(block.position.left.replace('px', '')) * 2
  instance.y = Number(block.position.top.replace('px', '')) * 2

  return instance
}

export default createMacro
