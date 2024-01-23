// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unused-vars
function getListMessage () {
  // Necessario selecionar o grupo com os componentes
  const datas = figma.currentPage.selection[0].children.map(f => ({ key: f.key, name: f.name }))

  // console.log(datas)

  const processedDatas = datas.map(d => {
    const [buttom, quantity, description, category] = d.name.replace(/((buttom)?\s*(quantity)?(description)?(category)?)?=/gmi, '').split(',')

    // console.log(quantity)
    // console.log(description)

    return {
      key: d.key,
      name: d.name,
      buttom: buttom.trim() === 'Y',
      quantity: quantity.trim(),
      description: description.trim() === 'Y',
      category: category.trim() === 'Y'
    }
  })

  console.log(processedDatas)
}
