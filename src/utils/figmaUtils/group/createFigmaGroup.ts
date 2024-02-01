import { alignGroupHorizontal } from './alignGroupHorizontal'
import { alignGroupVertical } from './alignGroupVertical'

interface ICreateFigmaGroup {
  components: InstanceNode[]
  groupName: string
  align?: 'horizontal' | 'vertical'
}
export default function createFigmaGroup({
  components,
  groupName,
  align
}: ICreateFigmaGroup): GroupNode | null {
  if (components.length === 0) return null

  const group = figma.group([...components], figma.currentPage)
  group.name = groupName

  if (align === 'horizontal') {
    alignGroupHorizontal({ group })
  }

  if (align === 'vertical') {
    alignGroupVertical({ group })
  }

  return group
}
