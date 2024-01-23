type FlowDataType =
  Array<{
    id: string
    nome: string
    destination: string[]
    saidaPadrao: string
    actions?: Array<{ id: string, typeOfContent: string | '' }>
    position: {
      top: string
      left: string
    }
  }>

export default FlowDataType
