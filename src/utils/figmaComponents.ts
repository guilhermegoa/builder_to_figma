async function loadFigmaComponents(): Promise<ComponentNode[]> {
  const [
    idComponent,
    // dynamicContentComponent,
    macroComponent,
    observationComponent,
    selectComponent,
    selectImediateComponent,
    sendMessageComponent,
    trackingComponent
  ] = await Promise.all([
    figma.importComponentByKeyAsync('6ca6d4651bef9bda556960d72a8427c0f44f25e0'),
    // figma.importComponentByKeyAsync('2f43d0db522f94bc1a84b8f6a531fcde255679c4'),
    figma.importComponentByKeyAsync('1af1e3e0d5fc69d496d3909c5143edb0f2ace6ea'),
    figma.importComponentByKeyAsync('467d5c428b3b2c1b82447d7da01aaa0c3209cba2'),
    figma.importComponentByKeyAsync('487efbf0f24c7f25ed162ea14e8389816388d0b1'),
    figma.importComponentByKeyAsync('38a80132b23e2c09bfdaba75f9e837e2a3d73642'),
    figma.importComponentByKeyAsync('2f43d0db522f94bc1a84b8f6a531fcde255679c4'),
    figma.importComponentByKeyAsync('0dececd32f95c805215e31e5dedbdbc9bb589e93')
  ])
  return [
    idComponent,
    macroComponent,
    observationComponent,
    selectComponent,
    selectImediateComponent,
    sendMessageComponent,
    trackingComponent
  ]
}

export default loadFigmaComponents()
