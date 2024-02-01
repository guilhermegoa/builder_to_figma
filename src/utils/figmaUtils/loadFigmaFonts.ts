async function loadFigmaFonts(): Promise<void> {
  await Promise.all([
    figma.loadFontAsync({ family: 'Roboto', style: 'Regular' }),
    figma.loadFontAsync({ family: 'Roboto', style: 'Bold' }),
    figma.loadFontAsync({ family: 'Roboto', style: 'Medium' }),
    figma.loadFontAsync({ family: 'Arial', style: 'Regular' })
  ])
}

export default loadFigmaFonts
