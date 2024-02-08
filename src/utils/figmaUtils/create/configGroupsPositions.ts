interface ILastBlockPosition {
  x: number
  y: number
  height: number
  width: number
}
export function configGroupsPositions(
  mainGroup: GroupNode | null,
  lastBlockPosition: ILastBlockPosition
): ILastBlockPosition {
  if (mainGroup !== null) {
    const absolutePositionX = lastBlockPosition.x + lastBlockPosition.width
    const absolutePositionY = lastBlockPosition.y + lastBlockPosition.height
    if (lastBlockPosition.x !== 0) {
      if (mainGroup.x > lastBlockPosition.x && mainGroup.x < absolutePositionX) {
        mainGroup.x = absolutePositionX + 10
      }
    }
    if (lastBlockPosition.y !== 0) {
      if (mainGroup.y > lastBlockPosition.y && mainGroup.y < absolutePositionY) {
        mainGroup.y = absolutePositionY + 10
      }
    }

    lastBlockPosition = {
      x: mainGroup.x,
      y: mainGroup.y,
      height: mainGroup.height,
      width: mainGroup.width
    }
  }
  return lastBlockPosition
}
