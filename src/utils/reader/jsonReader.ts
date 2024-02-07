export interface BlockList {
  id: string
  nome: string
  destination: string
  saidaPadrao: string
  actions: []
  position: {
    left: string
    top: string
  }
  tags: string[]
  condicaoSaida: IValidationCondiction[]
  figmaId: string
  trackings: Array<{
    category?: string
    action?: string
  }>
  apiRequests: IIdentifyedApiRequest[]
}

interface IndetifyedContent {
  id: string
  typeOfContent: string
  content: string | boolean
  options?: string
}

export interface Action {
  type: string
  $id: string
  $typeOfContent: string
  content?: string
  options: any[]
  settings: {
    text?: any
    content: any
    rawContent?: string
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

export interface IValidationCondiction {
  blockDestinationId: string
  condiction: string
}

interface ICustomAction {
  method?: string
  body?: string
  uri?: string
  responseStatusVariable?: string
  requestBodyVariable?: string
  $id: string
  $typeOfContent?: string
  type: string
  $title: string
  $invalid: boolean
  settings: {
    function?: string
    source?: string
    inputVariables?: string[]
    outputVariable?: string
    LocalTimeZoneEnabled?: boolean
    extras?: any
    category?: string
    action?: string
  }
  conditions: Array<{
    source: string
    comparison: string
    values: string[]
    $$hashKey: string
  }>
}

export function jsonReader({ flow }: any): BlockList[] {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const keys = Object.keys(flow)
  const listBlocos = [] as BlockList[]
  keys.forEach((key) => {
    const actions = flow[key].$contentActions
      .map((action: { action: Action }) => identifyContent(action))
      .filter((validAction: any) => validAction)
    const nome: string = flow[key].$title

    const id = flow[key].id
    const destination = flow[key].$conditionOutputs?.map((condiction: { stateId: any }) => condiction.stateId)
    listBlocos.push({
      id,
      figmaId: identifyFigmaId(nome),
      nome,
      destination,
      saidaPadrao: flow[key].$defaultOutput.stateId,
      actions,
      position: flow[key].$position,
      tags: flow[key].$tags.map((tag: Tag) => tag.label),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      condicaoSaida: identifyOutpoutConditions(flow[key].$conditionOutputs),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      trackings: identifyTrackings(flow[key]),
      apiRequests: identifyApiRequests(flow[key])
    })
  })
  return listBlocos
}

function identifyFigmaId(blockName: string): string {
  const regex = /\b(\w(?:\.\d+)*)\s*-?\s*(.+)\b/
  const figmaId = blockName.match(regex)
  if (figmaId !== null && figmaId[1].length > 3) {
    return figmaId[1]
  } else {
    return blockName
  }
}

function validateCondition(condiction: IConditions): string {
  const values = condiction.values.join(' or ')
  if (condiction.source === 'input') {
    if (values.length > 0) {
      return `if ${condiction.source} ${condiction.comparison} to ${values}`
    }
    return `if ${condiction.source} ${condiction.comparison}`
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
      if (formattedObject.some((item) => item.blockDestinationId === stateId)) {
        const indexOfExistingBlock = formattedObject.findIndex((item) => item.blockDestinationId === stateId)
        formattedObject[indexOfExistingBlock].condiction =
          `${formattedObject[indexOfExistingBlock].condiction} and ${validateCondition(condiction)}`
      } else {
        formattedObject.push({
          blockDestinationId: stateId,
          condiction: validateCondition(condiction)
        })
      }
    })
  })
  return formattedObject
}

function identifyBlockMessage(action: Action): string | boolean {
  let content = ''

  if (action.settings !== undefined) {
    if (action.settings?.text !== undefined) {
      content = action.settings.text
    } else if (action.settings.content?.text !== undefined) {
      content = action.settings.content?.text
    } else if (typeof action.settings.content === 'string') {
      content = action.settings.content
    } else if (action.settings?.rawContent !== undefined) {
      content = action.settings?.rawContent
    } else {
      return false
    }
  } else {
    return false
  }

  return content
}

function identifyTypeOfContent(action: Action): string {
  if (action.$typeOfContent !== undefined && action.$typeOfContent !== '') {
    return action.$typeOfContent
  }
  if (action.type !== undefined) {
    return action.type
  }
  return ''
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

export interface ITracking {
  category?: string
  action?: string
}
function identifyTrackings({
  $enteringCustomActions,
  $leavingCustomActions
}: {
  $enteringCustomActions: ICustomAction[]
  $leavingCustomActions: ICustomAction[]
}): ITracking[] {
  const enteringTrackings = $enteringCustomActions
    .filter((action) => action.type === 'TrackEvent')
    .map((action) => {
      return {
        category: action.settings.category,
        action: action.settings.action
      }
    })
  const leavingTrackings = $leavingCustomActions
    .filter((action) => action.type === 'TrackEvent')
    .map((action) => {
      return {
        category: action.settings.category,
        action: action.settings.action
      }
    })
  const trackings = [...enteringTrackings, ...leavingTrackings]
  return trackings
}

interface IIdentifyedApiRequest {
  $id: string
  $title: string
  settings: {
    headers: { authorization?: string }
    method?: string
    body?: string
    uri?: string
    responseStatusVariable?: string
    responseBodyVariable?: string
  }
}
function identifyApiRequests({
  $enteringCustomActions,
  $leavingCustomActions
}: {
  $enteringCustomActions: ICustomAction[]
  $leavingCustomActions: ICustomAction[]
}): IIdentifyedApiRequest[] {
  const joinActions = [...$enteringCustomActions, ...$leavingCustomActions]
  const apiRequests = joinActions.filter((action) => action.type === 'ProcessHttp')
  const filteredApiRequests = apiRequests.map((request) => {
    return {
      $id: request.$id,
      $title: request.$title,
      settings: request.settings
    }
  }) as IIdentifyedApiRequest[]
  console.log(filteredApiRequests)
  return filteredApiRequests
}
