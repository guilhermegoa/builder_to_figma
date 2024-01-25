async function createSelectImediate(block: any, action: any): Promise<InstanceNode> {
  const component = await figma.importComponentByKeyAsync('38a80132b23e2c09bfdaba75f9e837e2a3d73642')
  const instance: any = component.createInstance()
  instance.name = block.id
  instance.children[0].children[1].children[0].children[0].children[3].characters = 'Title teste'
  // eslint-disable-next-line max-len
  instance.children[0].children[1].children[0].children[1].children[0].children[0].characters = action.content // body
  instance.children[0].children[1].children[2].children[0].children.forEach((b: any, idx: any) => {
    if (idx < action.options.length) b.children[0].characters = action.options[idx]
  }) // buttons
  instance.x = Number(block.position.left.replace('px', '')) * 2
  instance.y = Number(block.position.top.replace('px', '')) * 2

  return instance
}

export default createSelectImediate
