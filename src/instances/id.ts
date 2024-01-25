async function createId(block: any): Promise<InstanceNode> {
  const idComponent = await figma.importComponentByKeyAsync('6ca6d4651bef9bda556960d72a8427c0f44f25e0')
  const instance: any = idComponent.createInstance()
  instance.x = Number(block.position.left.replace('px', '')) * 2
  instance.y = Number(block.position.top.replace('px', '')) * 2 - 30
  instance.name = block.figmaId
  // idInstance.children[0].characters = 'A.1.2.3' <--- Quebrado

  return instance
}

export default createId
