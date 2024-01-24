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
  content: string | boolean
  options?: string
}

interface Action {
  type: string
  $id: string
  $typeOfContent: string
  settings: {
    text: any
    content: any
  }
}

export function jsonReader({ flow }: any): BlockList[] {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const keys = Object.keys(flow)
  const listBlocos = [] as BlockList[]
  keys.forEach((key) => {
    const actions = flow[key].$contentActions
      .map((action: { action: Action }) => identifyContent(action))
      .filter((validAction: any) => validAction)
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

function identifyBlockMessage(action: Action): string | boolean {
  let content = ''

  if (action.settings !== undefined) {
    if (action.settings.text !== undefined) {
      content = action.settings.text
    } else if (action.settings.content.text !== undefined) {
      content = action.settings.content.text
    } else if (typeof action.settings.content === 'string') {
      content = action.settings.content
    } else {
      return false
    }
  } else {
    return false
  }

  return content
}

function identifyTypeOfContent(action: Action): string {
  let typeOfContent = ''
  if (action.$typeOfContent !== undefined) {
    typeOfContent = action.$typeOfContent
  }
  if (action.type !== undefined) {
    typeOfContent = action.type
  }
  return typeOfContent
}

export function identifyContent({ action }: { action: Action }): IndetifyedContent | undefined {
  if (action !== undefined) {
    const objetao = {
      id: action.$id,
      typeOfContent: identifyTypeOfContent(action),
      content: identifyBlockMessage(action),
      options: action?.settings?.content?.options?.map((option: { text: any }) => option?.text)
    }
    if (objetao.content !== false || objetao.options !== false) {
      return objetao
    }
  }
}
