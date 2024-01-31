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

export function createMainGroup(
  groups: GroupNode[],
  groupName: string,
  x: string,
  y: string
): GroupNode | null {
  if (groups.length === 0) return null

  const group = figma.group([...groups], figma.currentPage)

  group.name = groupName
  group.y = Number(y)
  group.x = Number(x)

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
