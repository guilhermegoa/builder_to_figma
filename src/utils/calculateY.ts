function calculateY(
  instance: InstanceNode,
  { y, height }: { y: number; height: number }
): { y: number; height: number } {
  if (y !== 0) {
    instance.y = y + height + 5
  }

  return {
    y: instance.y,
    height: instance.height
  }
}

export default calculateY
