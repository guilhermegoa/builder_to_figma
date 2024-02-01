interface ICreateMainGroup {
  groups: GroupNode[]
  groupName: string
  components?: InstanceNode[]
  x?: string
  y?: string
}
export default function createMainGroup({
  groups,
  components,
  groupName,
  x,
  y
}: ICreateMainGroup): GroupNode | null {
  groups = groups.filter((group) => group !== null && group !== undefined)
  components = components?.filter((component) => component !== null && component !== undefined)

  let groupAndComponents: Array<InstanceNode | GroupNode> = []
  if (groups.length !== 0) groupAndComponents = [...groups]
  if (components !== undefined && components?.length > 0) {
    groupAndComponents.push(...(components as Array<InstanceNode | GroupNode>))
  }
  const group = figma.group(groupAndComponents, figma.currentPage)

  group.name = groupName

  return group
}
