import { type BlockList } from '../../reader/jsonReader'

interface ITextObservation {
  block: BlockList
  json: BlockList[]
}
export function createTextObservations({ block, json }: ITextObservation): string[] {
  const directionsObservation = block.condicaoSaida.map((item) => {
    const figmaId = json.find((block) => block.id === item.blockDestinationId)?.figmaId
    return `${item.condiction} --> go to ${figmaId}`
  })

  directionsObservation.push(`default --> go to ${block.saidaPadrao}`)
  return directionsObservation
}
