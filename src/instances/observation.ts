import { type BlockList } from '../utils/jsonReader'

async function createObservationComponent(block: BlockList, text: string): Promise<InstanceNode> {
  // if(component === undefined) component = 0
  const componentXX = await figma.importComponentByKeyAsync('467d5c428b3b2c1b82447d7da01aaa0c3209cba2')
  const instanceXX: any = componentXX.createInstance()
  // console.log(component)
  // instanceXX.name = block.id
  // eslint-disable-next-line max-len
  instanceXX.children[0].children[1].children[1].characters = text
  instanceXX.x = Number(block.position.left.replace('px', '')) * 2
  instanceXX.y = Number(block.position.top.replace('px', '')) * 2

  return instanceXX
}

export default createObservationComponent

// 50c714ec993b50c37d80f55402411616ad856dbe
