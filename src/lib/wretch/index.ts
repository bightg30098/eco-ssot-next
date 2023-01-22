import _wretch from 'wretch'
import FormDataAddon from 'wretch/addons/formData'
import QueryStringAddon from 'wretch/addons/queryString'
import { dedupe } from 'wretch/middlewares'

import type { WretchOptions, WretchResponse } from 'wretch'

type FetchLike = (url: string, opts: WretchOptions) => Promise<WretchResponse>

const logger = () => (next: FetchLike) => async (url: string, opts: WretchOptions) => {
  const res = await next(url, opts)
  res
    .clone()
    .json()
    .then((json) => {
      console.log([res.status], res.url)
      console.log(JSON.stringify(json))
      console.log('----------------------------------------\n')
    })

  return res
}

const wretch = _wretch(process.env.BACKEND_API_URL)
  .middlewares([logger(), dedupe()])
  .addon(QueryStringAddon)
  .addon(FormDataAddon)

export default wretch
