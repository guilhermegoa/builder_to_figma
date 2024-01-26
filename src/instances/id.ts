async function createId(block: any): Promise<InstanceNode> {
  const idComponent = await figma.importComponentByKeyAsync('6ca6d4651bef9bda556960d72a8427c0f44f25e0')
  const instance: InstanceNode = idComponent.createInstance()
  instance.x = Number(block.position.left.replace('px', '')) * 2
  instance.y = Number(block.position.top.replace('px', '')) * 2 - 30
  instance.name = block.figmaId

  const text = instance.children[0] as TextNode
  text.characters = block.figmaId

  return instance
}

export default createId
