import ky from 'ky'

export default ky.create({
  prefixUrl: process.env.BACKEND_API_URL,
})
