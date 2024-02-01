import flow from '../../mocks/portalParceiroJson'
import { jsonReader } from './jsonReader'

describe('JsonReader', () => {
  const mockFlow = flow
  const result = jsonReader(mockFlow)
  it('Should return an array with 16 itens', () => {
    expect(result).toHaveLength(16)
  })
  it('Every block must have id filled', () => {
    const ids = result.map((block) => block.id).filter(id => id)
    expect(ids).toHaveLength(16)
  })
  it('Every block must have figmaId filled', () => {
    const figmaIds = result.map((block) => block.figmaId).filter(figmaId => figmaId)
    expect(figmaIds).toHaveLength(16)
  })
  it('Every block must have nome filled', () => {
    const nomes = result.map((block) => block.nome).filter(nome => nome)
    expect(nomes).toHaveLength(16)
  })
  it('Every block must have default destination filled', () => {
    const defaultDestination = result.map((block) => block.saidaPadrao).filter(defaultDestination => defaultDestination.length > 0)
    expect(defaultDestination).toHaveLength(16)
  })
})
