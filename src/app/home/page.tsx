import { cookies } from 'next/headers'

export default async function Home() {
  const { name } = await getData()
  return <main className="h-full w-full bg-primary-900">{name}</main>
}

async function getData() {
  const nextCookies = cookies().getAll()
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return { name: 'John Doe', cookies: nextCookies }
}
