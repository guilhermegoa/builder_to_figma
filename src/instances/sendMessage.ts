async function createSendMessage(block: any, action: any): Promise<InstanceNode> {
  const component = await figma.importComponentByKeyAsync('2f43d0db522f94bc1a84b8f6a531fcde255679c4')
  const instance: any = component.createInstance()
  instance.name = block.id
  // eslint-disable-next-line max-len
  instance.children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].characters =
    action.content
  instance.x = Number(block.position.left.replace('px', '')) * 2
  instance.y = Number(block.position.top.replace('px', '')) * 2

  return instance
}

export default createSendMessage
