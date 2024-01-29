function calculateX(
  instance: InstanceNode,
  { x, width }: { x: number; width: number }
): { x: number; width: number } {
  if (x !== 0) {
    instance.x = x + width + 5
  }

  return {
    x: instance.x,
    width: instance.width
  }
}

export default calculateX
