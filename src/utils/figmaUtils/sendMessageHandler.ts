import { createSelect, createSelectImediate, createSendMessage, createMacro } from '../../instances'
import { type BlockList } from '../reader/jsonReader'
import createFigmaGroup from './group/createFigmaGroup'

interface ISendMessageHandler {
  components: ComponentNode[]
  block: BlockList
}
export default function sendMessageHandler({ components, block }: ISendMessageHandler): GroupNode | null {
  const [selectComponent, selectImediateComponent, sendMessageComponent, macroComponent] = components

  if (block.actions.length > 0) {
    const components = block.actions
      .map((action: any): any => {
        if (action.content !== false) {
          switch (action.typeOfContent) {
            case 'chat-state':
              break
            case 'select': {
              return createSelect(selectComponent, block, action)
            }
            case 'select-immediate': {
              return createSelectImediate(selectImediateComponent, block, action)
            }
            case 'text':
            case 'SendMessage': {
              return createSendMessage(sendMessageComponent, block, action)
            }
            default:
              return createMacro(macroComponent, block)
          }
        }
        return false
      })
      .filter((item: any) => item !== false)
    if (components.length === 0) return null
    const group = createFigmaGroup({ components, groupName: 'Message', align: 'vertical' })
    return group
  } else {
    const component = createMacro(macroComponent, block)
    const group = createFigmaGroup({ components: [component], groupName: 'Logic Only' })
    return group
  }
}
