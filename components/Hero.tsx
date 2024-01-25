import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full h-[450px] xl:h-[650px]">
      <Image
        src="/images/parrot.jpg"
        alt="Sean O'Reilly"
        fill
        priority
        className="object-cover object-center w-full h-full"
      />
    </section>
  )
}
