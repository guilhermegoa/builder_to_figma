export interface BlockList {
  id: string
  nome: string
  destination: string
  saidaPadrao: string
  actions: []
  position: {
    left: string
    right: string
  }
}

interface IndetifyedContent {
  id: string
  typeOfContent: string
  content: string
  options?: any[]
}

interface Action {
  $id: string
  $typeOfContent: string
  settings: {
    content: {
      text: string
      options?: Array<{ text: string }>
    }
  }
}

export function jsonReader ({ flow }: any): BlockList[] {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const keys = Object.keys(flow)
  const listBlocos = [] as BlockList[]
  keys.forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const actions = flow[key].$contentActions.map((action: { action: Action }) => identifyContent(action)).filter((validAction: any) => validAction)
    const nome = flow[key].$title
    const id = flow[key].id
    const destination = flow[key].$conditionOutputs?.map((condiction: { stateId: any }) => condiction.stateId)
    listBlocos.push({
      id,
      nome,
      destination,
      saidaPadrao: flow[key].$defaultOutput.stateId,
      actions,
      position: flow[key].$position
    })
  })
  return listBlocos
}

export function identifyContent ({ action }: { action: Action }): IndetifyedContent | undefined {
  if (action !== undefined) {
    const objetao = {
      id: action.$id,
      typeOfContent: action.$typeOfContent,
      content: action.settings.content.text,
      options: action.settings.content.options?.map((option) => option.text)
    }
    return objetao
  }
}
