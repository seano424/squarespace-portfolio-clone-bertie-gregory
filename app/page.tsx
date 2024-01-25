import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="relative w-full h-[450px] xl:h-[650px]">
        <Image
          src="/images/parrot.jpg"
          alt="Sean O'Reilly"
          fill
          className='object-cover object-center w-full h-full'
        />
      </div>
    </main>
  )
}
