import { type IValidationCondiction, type BlockList } from '../utils/jsonReader'

async function createDirectionsComponent(
  block: BlockList,
  condiction: IValidationCondiction
): Promise<InstanceNode> {
  const component = await figma.importComponentByKeyAsync('50c714ec993b50c37d80f55402411616ad856dbe')
  const instance: InstanceNode = component.createInstance()
  instance.name = block.id
  // eslint-disable-next-line max-len
  instance.x = Number(block.position.left.replace('px', '')) * 2
  instance.y = Number(block.position.top.replace('px', '')) * 2

  return instance
}

export default createDirectionsComponent

// 50c714ec993b50c37d80f55402411616ad856dbe
