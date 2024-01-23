import { type EventHandler } from '@create-figma-plugin/utilities'

export interface CreateFigmaHandler extends EventHandler {
  name: 'CREATE_FIGMA'
  handler: (key: string) => void
}

export interface CloseHandler extends EventHandler {
  name: 'CLOSE'
  handler: () => void
}
