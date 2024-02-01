interface IAlignGroupVertical {
  group: GroupNode
  x?: string
}
export function alignGroupVertical({ group, x }: IAlignGroupVertical): void {
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
