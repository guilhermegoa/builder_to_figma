interface Option extends FrameNode {
  children: any[] | TextNode[]
}

function createSelect(component: ComponentNode, block: any): InstanceNode {
  const instance: InstanceNode = component.createInstance()
  instance.name = block.id
  instance.x = Number(block.position.left.replace('px', '')) * 2
  instance.y = Number(block.position.top.replace('px', '')) * 2

  const title = instance.children[0] as TextNode
  title.characters = 'Select'

  for (let i = 1; i < instance.children.length - 2; i += 2) {
    const description = instance.children[i] as FrameNode
    description.visible = false

    const option = instance.children[i + 1] as Option
    option.visible = true

    const frameOptionTitle = option.children[0].children[0] as Option
    frameOptionTitle.visible = true
    frameOptionTitle.children[0].characters = `Option ${i}`

    const frameOptionDescription = option.children[0].children[1] as Option
    frameOptionDescription.visible = false
  }

  figma.currentPage.appendChild(instance)
  return instance
}

export default createSelect
