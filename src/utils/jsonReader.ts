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
  tags: string[]
  condicaoSaida: any[]
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

interface Tag {
  id: string
  label: string
  background: string
  canChangeBackground: boolean
}

interface IConditions {
  source: string
  comparison: string
  values: string[]
  variable: string
}
interface IConditionOutput {
  stateId: string
  typeOfStateId: string
  $connId: string
  $id: string
  conditions: IConditions[]
  $invalid: boolean
}

interface IValidationCondiction {
  blockDestinationId: string
  condiction: string
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
      position: flow[key].$position,
      tags: flow[key].$tags.map((tag: Tag) => tag.label),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      condicaoSaida: identifyOutpoutConditions(flow[key].$conditionOutputs)
    })
  })
  return listBlocos
}

function validateCondition(condiction: IConditions): string {
  const values = condiction.values.join(',')
  if (condiction.source === 'input') {
    return `if ${condiction.source} ${condiction.comparison} ${values}`
  }
  if (values.length > 0) {
    return `if variable ${condiction.variable} ${condiction.comparison} to ${values}`
  }
  return `if variable ${condiction.variable} ${condiction.comparison}`
}

function identifyOutpoutConditions($conditionOutputs: IConditionOutput[]): IValidationCondiction[] {
  const formattedObject: IValidationCondiction[] = []
  $conditionOutputs.forEach(({ conditions, stateId }) => {
    conditions.forEach((condiction) => {
      formattedObject.push({
        blockDestinationId: stateId,
        condiction: validateCondition(condiction)
      })
    })
  })
  return formattedObject
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
