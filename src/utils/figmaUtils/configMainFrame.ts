import createFigmaGroup from './group/createFigmaGroup'

interface iConfigMainFrame {
  frame: FrameNode
  titleComponent: ComponentNode
}

function configMainFrame({ frame, titleComponent }: iConfigMainFrame): void {
  let minX = Number.MAX_SAFE_INTEGER
  let minY = Number.MAX_SAFE_INTEGER
  let maxX = 0
  let maxY = 0

  frame.children.forEach((child) => {
    if (child.type === 'GROUP') {
      minX = Math.min(minX, child.x)
      minY = Math.min(minY, child.y)
      maxX = Math.max(maxX, child.x + child.width)
      maxY = Math.max(maxY, child.y + child.height)
    }
  })

  const frameWidth = maxX + 1000
  const titleComponentWidth = titleComponent.width
  const isFrameBiggerThanTitle = frameWidth > titleComponentWidth

  const frameTitle = titleComponent.createInstance()

  if (isFrameBiggerThanTitle) {
    frameTitle.resize(frameWidth, frameTitle.height)
  }

  frameTitle.x = minX
  frameTitle.y = minY - frameTitle.height

  figma.currentPage.appendChild(frameTitle)

  frame.x = minX
  frame.y = minY
  frame.resize(isFrameBiggerThanTitle ? frameWidth : titleComponentWidth, maxY + 100)

  frame.name = 'Builder to Figma'
  frame.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }]

  figma.currentPage.appendChild(frame)

  createFigmaGroup({ components: [frame, frameTitle], groupName: 'Builder to Figma' })
}

export default configMainFrame
