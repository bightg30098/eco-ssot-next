import Image from 'next/image'

export default function Logo() {
  return <Image src="/logo/logo-64x64.webp" alt="Logo" width={64} height={64} className="h-10 w-10" />
}
