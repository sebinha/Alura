import Link from 'next/link'

export default function Sobre() {
  return (
    <>
      <h1>Sobre</h1>
      <img src='/images/avatar.png' />
      <Link href="/">
        Home
      </Link>
    </>
  )
}