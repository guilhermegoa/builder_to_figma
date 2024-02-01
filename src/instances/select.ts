import { type BlockList } from '../utils/reader/jsonReader'

interface ISelect {
  component: ComponentNode
  block: BlockList
  action: {
    options: string[]
  }
}

function createSelect({ component, block, action }: ISelect): InstanceNode {
  const instance: any = component.createInstance()

  instance.name = block.id
  instance.x = Number(block.position.left.replace('px', '')) * 2
  instance.y = Number(block.position.top.replace('px', '')) * 2

  const node = instance.children[0].children

  const titleNode = node[0].children[0]
  titleNode.visible = true
  titleNode.children[1].characters = 'Selecione uma opção'

  action.options.forEach((option: string, index: number) => {
    const description = node[index * 2 + 1]
    description.visible = false

    const optionNode = node[index * 2 + 2]
    optionNode.visible = true

    const optionTitle = optionNode.children[0].children[0]
    optionTitle.visible = true
    optionTitle.children[0].characters = option

    const optionDescription = optionNode.children[0].children[1]
    optionDescription.visible = false
  })

  figma.currentPage.appendChild(instance)
  return instance
}

export default createSelect
