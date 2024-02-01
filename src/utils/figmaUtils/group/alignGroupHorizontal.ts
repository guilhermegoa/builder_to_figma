interface IAlignGroupHorizontal {
  group: GroupNode
  y?: string
}
export function alignGroupHorizontal({ group, y }: IAlignGroupHorizontal): void {
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
