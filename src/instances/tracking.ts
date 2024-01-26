import { type ITracking } from '../utils/jsonReader'

interface ICreateTracking {
  tracking: ITracking
  position: {
    left: string
    top: string
  }
  index: number
}
async function createTracking({ tracking, position, index }: ICreateTracking): Promise<any> {
  const idComponent = await figma.importComponentByKeyAsync('0dececd32f95c805215e31e5dedbdbc9bb589e93')
  const instance: InstanceNode = idComponent.createInstance()
  instance.x = Number(position.left.replace('px', '')) * 2 - 230
  instance.y = Number(position.top.replace('px', '')) * 2 + index * 60
  // TODO: futuramente usar o instance.height para fazer calculos dinamicos da posição y
  const title = instance.children[0] as TextNode
  const content = instance.children[1] as TextNode

  title.characters = tracking.category as any
  content.characters = tracking.action as any

  return instance
}

export default createTracking
