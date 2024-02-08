import createApi from '../../../instances/api'
import createId from '../../../instances/id'
import createObservationComponent from '../../../instances/observation'
import createTracking from '../../../instances/tracking'
import { type BlockList } from '../../reader/jsonReader'
import { alignGroupBottom } from '../group/alignGroupBottom'
import createMainGroup from '../group/createMainGroup'
import sendMessageHandler from './sendMessageHandler'
import { configGroupsPositions } from './configGroupsPositions'
import { createTextObservations } from './createTextObservations'

let lastBlockPosition = { x: 0, y: 0, height: 0, width: 0 }

export default function createElements(
  block: BlockList,
  frame: FrameNode,
  json: BlockList[],
  [
    selectComponent,
    selectImediateComponent,
    sendMessageComponent,
    macroComponent,
    trackingComponent,
    idComponent,
    apiComponent,
    observationComponent
  ]: ComponentNode[]
): void {
  const messagesGroup = sendMessageHandler({
    components: [selectComponent, selectImediateComponent, sendMessageComponent, macroComponent],
    block
  })

  const trackingsGroup = createTracking(trackingComponent, block)

  const id = createId({ component: idComponent, block })

  const directionsObservation = createTextObservations({ block, json })

  createApi({ component: apiComponent, block })
  const destinyBlock = createObservationComponent(
    observationComponent,
    block,
    directionsObservation.join('\n\n'),
    'Directions'
  )
  const mainGroup = createMainGroup({
    groups: [messagesGroup!, trackingsGroup!],
    groupName: block.figmaId,
    components: [id, destinyBlock]
  })

  alignGroupBottom({ group: mainGroup!, subjectToChange: destinyBlock })

  lastBlockPosition = configGroupsPositions(mainGroup, lastBlockPosition)

  frame.appendChild(mainGroup!)
}
