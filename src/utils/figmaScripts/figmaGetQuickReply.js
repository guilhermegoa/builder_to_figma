// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unused-vars
function getQuickReply () {
  // Necessario selecionar o grupo com os componentes
  const datas = figma.currentPage.selection[0].children.map(f => ({ key: f.key, name: f.name }))

  // console.log(datas)

  const processedDatas = datas.map(d => {
    const [header, footer, buttons] = d.name.replace(/((header)?(footer)?(#\s*buttons)?)?\s*(\(optional\))?=/gmi, '').split(',')

    // console.log(footer)

    return {
      key: d.key,
      name: d.name,
      header: header === 'None' ? null : header,
      footer: footer.trim() === 'True',
      buttons
    }
  })

  console.log(processedDatas)
}
