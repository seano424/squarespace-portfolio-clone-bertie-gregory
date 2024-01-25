import InstagramGrid from '@/components/InstagramGrid'
import Image from 'next/image'

export default async function Home() {
  return (
    <>
      <section className="relative w-full h-[450px] xl:h-[650px]">
        <Image
          src="/images/parrot.jpg"
          alt="Sean O'Reilly"
          fill
          priority
          className="object-cover object-center w-full h-full"
        />
      </section>

      <InstagramGrid />
    </>
  )
}
