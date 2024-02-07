/* eslint-disable max-len */
import { type BlockList } from '../utils/reader/jsonReader'

interface IId {
  component: ComponentNode
  block: BlockList
}

export default function createApi({ component, block }: IId): InstanceNode[] {
  const apiComponents: InstanceNode[] = block.apiRequests.map((request) => {
    const instance: InstanceNode = component.createInstance()
    instance.x = Number(block.position.left.replace('px', '')) * 2 + 240
    instance.y = Number(block.position.top.replace('px', '')) * 2
    instance.name = 'API Request'

    const text = instance.children[1] as TextNode
    text.characters = `url: ${request.settings?.uri}
method: ${request.settings?.method ?? '-'}
headers: ${JSON.stringify(request.settings?.headers) ?? '-'}
body: ${request.settings?.body ?? '-'}
variable: ${request.settings?.responseBodyVariable ?? '-'}`

    figma.currentPage.appendChild(instance)
    return instance
  })
  return apiComponents
}
