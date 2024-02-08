import createApi from '../../instances/api'
import createId from '../../instances/id'
import createObservationComponent from '../../instances/observation'
import createTracking from '../../instances/tracking'
import { type BlockList } from '../reader/jsonReader'
import { alignGroupBottom } from './group/alignGroupBottom'
import createMainGroup from './group/createMainGroup'
import sendMessageHandler from './sendMessageHandler'

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

interface ITextObservation {
  block: BlockList
  json: BlockList[]
}

function createTextObservations({ block, json }: ITextObservation): string[] {
  const directionsObservation = block.condicaoSaida.map((item) => {
    const figmaId = json.find((block) => block.id === item.blockDestinationId)?.figmaId
    return `${item.condiction} --> go to ${figmaId}`
  })

  directionsObservation.push(`default --> go to ${block.saidaPadrao}`)
  return directionsObservation
}

interface ILastBlockPosition {
  x: number
  y: number
  height: number
  width: number
}

function configGroupsPositions(
  mainGroup: GroupNode | null,
  lastBlockPosition: ILastBlockPosition
): ILastBlockPosition {
  if (mainGroup !== null) {
    const absolutePositionX = lastBlockPosition.x + lastBlockPosition.width
    const absolutePositionY = lastBlockPosition.y + lastBlockPosition.height
    if (lastBlockPosition.x !== 0) {
      if (mainGroup.x > lastBlockPosition.x && mainGroup.x < absolutePositionX) {
        mainGroup.x = absolutePositionX + 10
      }
    }
    if (lastBlockPosition.y !== 0) {
      if (mainGroup.y > lastBlockPosition.y && mainGroup.y < absolutePositionY) {
        mainGroup.y = absolutePositionY + 10
      }
    }

    lastBlockPosition = {
      x: mainGroup.x,
      y: mainGroup.y,
      height: mainGroup.height,
      width: mainGroup.width
    }
  }
  return lastBlockPosition
}
