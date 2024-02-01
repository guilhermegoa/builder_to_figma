import { type BlockList } from '../utils/reader/jsonReader'

interface ISendMessage {
  component: ComponentNode
  block: BlockList
  action: {
    content: string
  }
}

function createSendMessage({ component, block, action }: ISendMessage): InstanceNode {
  const instance: any = component.createInstance()
  instance.name = block.id
  // eslint-disable-next-line max-len
  instance.children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].characters =
    action.content
  instance.x = Number(block.position.left.replace('px', '')) * 2
  instance.y = Number(block.position.top.replace('px', '')) * 2

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  figma.currentPage.appendChild(instance)
  return instance
}

export default createSendMessage
