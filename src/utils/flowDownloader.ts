import { type BlockList, jsonReader } from './jsonReader'

/* eslint-disable @typescript-eslint/explicit-function-return-type */
async function getDeployHistory (key: string) {
  const myHeaders = new Headers()
  myHeaders.append('Authorization', key)
  myHeaders.append('Content-Type', 'application/json')

  const raw = JSON.stringify({
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    method: 'get',
    uri: '/buckets/blip_portal:builder_latestpublications'
  })

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  }

  const arrayDeploys = await fetch('https://msging.net/commands', requestOptions as RequestInit)
    .then(async response => await response.text())
    .then(parse => JSON.parse(parse).resource.publications.sort((a: { publishedAt: number }, b: { publishedAt: number }) => a.publishedAt - b.publishedAt))
    .catch(error => { console.log('error', error) })

  return `/buckets/blip_portal:builder_latestpublications:${arrayDeploys[0].index}`
}

export async function getBotJson (key: string): Promise<BlockList[]> {
  const latestPublication = await getDeployHistory(key)
  const myHeaders = new Headers()
  myHeaders.append('Authorization', key)
  myHeaders.append('Content-Type', 'application/json')

  const raw = JSON.stringify({
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    method: 'get',
    uri: latestPublication
  })

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  }

  const flow = JSON.parse(await fetch('https://msging.net/commands', requestOptions as RequestInit)
    .then(async response => await response.text())
    .catch(error => {
      console.log('error', error)
      return `Erro: ${error.message}`
    })).resource

  return jsonReader(flow)
}
