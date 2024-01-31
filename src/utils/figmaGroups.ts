export function createFigmaGroup(
  components: InstanceNode[],
  groupName: string,
  align?: 'horizontal' | 'vertical'
): GroupNode | null {
  if (components.length === 0) return null

  const group = figma.group([...components], figma.currentPage)
  group.name = groupName

  if (align === 'horizontal') {
    alignGroupHorizontal(group)
  }

  if (align === 'vertical') {
    alignGroupVertical(group)
  }

  return group
}

interface ICreateMainGroup {
  groups: GroupNode[]
  groupName: string
  components?: InstanceNode[]
  x?: string
  y?: string
}
export function createMainGroup({ groups, components, groupName, x, y }: ICreateMainGroup): GroupNode | null {
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

export function alignGroupVertical(group: GroupNode, x?: string): void {
  group.children.forEach((child, index) => {
    if (index !== 0) {
      if (x !== undefined) {
        child.x = Number(x.replace('px', ''))
      } else {
        child.x = group.children[0].x
      }
      child.y = group.children[index - 1].y + group.children[index - 1].height
    }
  })
}

export function alignGroupHorizontal(group: GroupNode, y?: string): void {
  group.children.forEach((child, index) => {
    if (index === 0) {
      if (y !== undefined) {
        child.y = Number(y.replace('px', ''))
      } else {
        child.y = group.children[0].y
      }
      child.x = group.children[index - 1].x + group.children[index - 1].width
    }
  })
}

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
