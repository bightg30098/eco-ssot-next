import ky from 'ky'

export default ky.create({
  prefixUrl: process.env.BACKEND_API_URL,
  throwHttpErrors: true,
  hooks: {
    ...(process.env.NODE_ENV === 'development' && {
      afterResponse: [
        (_request, _options, response) => {
          // clone response to avoid consuming it
          const cloneResponse = response.clone()
          cloneResponse.json().then((json) => {
            console.log([response.status], response.url)
            console.log(JSON.stringify(json))
            console.log('----------------------------------------\n')
          })
          return response
        },
      ],
    }),
  },
})
