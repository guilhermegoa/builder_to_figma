async function loadFigmaComponents(): Promise<ComponentNode[]> {
  // const keys = {
  //   quickReply: 'b76be06bc442bd0358a1efa49386412727180cd2',
  //   api: '2f92ec94cabdaa45d3ecda06a751fcca4e89f916',
  //   observation: 'd91993ce226abaa7d566b1fe070f572cf7767e83',
  //   id: '22a9f9dea96bd581180f99b71d77da55df8b9043',
  //   logicOnly: '2df68ec6270ae4c1b5b0aac17a0bd7d4d1e14544',
  //   tracking: 'ecca091fcea8909ae7c1891f110c5889a5ada069',
  //   message: 'd6d3d3f22546ad4a10232226ef8ecf88eecea1cf',
  //   menu: '7617bb5f099d30b747d0f7b975548dba2e79ffe7',
  //   title: '287a60b23a049e97436812161eaca6c4a05c7f37'
  // }
  const keys = {
    quickReply: '4165197120546034430934bb0c367932d747ea28',
    api: 'a8a6bbf0dbf4c4c8a9f0bbc4bb0813cebb5887ca',
    observation: '467d5c428b3b2c1b82447d7da01aaa0c3209cba2',
    id: '6ca6d4651bef9bda556960d72a8427c0f44f25e0',
    logicOnly: '1af1e3e0d5fc69d496d3909c5143edb0f2ace6ea',
    tracking: '0dececd32f95c805215e31e5dedbdbc9bb589e93',
    message: '2f43d0db522f94bc1a84b8f6a531fcde255679c4',
    menu: '487efbf0f24c7f25ed162ea14e8389816388d0b1',
    title: 'be02148b769c5c47f79da2a4d77f696f578624b1'
  }
  const [
    idComponent,
    // dynamicContentComponent,
    macroComponent,
    observationComponent,
    selectComponent,
    selectImediateComponent,
    sendMessageComponent,
    trackingComponent,
    apiComponent,
    titleComponent
  ] = await Promise.all([
    figma.importComponentByKeyAsync(keys.id),
    figma.importComponentByKeyAsync(keys.logicOnly),
    figma.importComponentByKeyAsync(keys.observation),
    figma.importComponentByKeyAsync(keys.menu),
    figma.importComponentByKeyAsync(keys.quickReply),
    figma.importComponentByKeyAsync(keys.message),
    figma.importComponentByKeyAsync(keys.tracking),
    figma.importComponentByKeyAsync(keys.api),
    figma.importComponentByKeyAsync(keys.title)
  ])

  return [
    idComponent,
    macroComponent,
    observationComponent,
    selectComponent,
    selectImediateComponent,
    sendMessageComponent,
    trackingComponent,
    apiComponent,
    titleComponent
  ]
}

export default loadFigmaComponents()
