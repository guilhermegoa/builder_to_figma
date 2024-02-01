interface IAlignGroupBottom {
  group: GroupNode
  subjectToChange: GroupNode | InstanceNode
}
export function alignGroupBottom({ group, subjectToChange }: IAlignGroupBottom): void {
  const centerBlock = group.children.find((item) => item.name === 'Message' || item.name === 'Logic Only')

  if (centerBlock === undefined) return
  const y = centerBlock.y
  const height = centerBlock?.height

  const groupPositionY = y + height + 10

  subjectToChange.y = groupPositionY
}
