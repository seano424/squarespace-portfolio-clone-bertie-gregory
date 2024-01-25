import Image from 'next/image'

type InstagramPostsData = {
  data: {
    id: string
    media_url: string
    permalink: string
    thumbnail_url: string
  }[]
}

async function getData(): Promise<InstagramPostsData> {
  const res = await fetch(
    'https://graph.instagram.com/7339384856125340/media?access_token=IGQWRQLVdiZAEJDUkxYNGx2cDA5UlB0TFNOVTNTQV9saTYwQXJMdWhkcVNHOFBNMENXOHF4dmc5TTBZAOXRzU0xkRk5IbV9iLXVldU4wY1hlbGlrbndLUlVwTzcyc3h0dVFGanpheWJfMGxVMk14ZADdtQld4dG5kbk0ZD&fields=media_url,permalink,thumbnail_url'
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function InstagramGrid() {
  const data = await getData()
  return (
    <section>
      <h4 className="mt-10 mb-8 uppercase tracking-widest text-center text-[13px]">
        Latest posts on @sea.oreilly instagram
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data &&
          data.data.slice(0, 8).map(({id, thumbnail_url, media_url}) => (
            <div
              className="bg-blue-100 relative h-[400px]"
              key={id}
            >
              <Image
                src={thumbnail_url ? thumbnail_url : media_url}
                alt="Sean O'Reilly"
                className="object-cover object-center w-full h-full"
                fill
              />
            </div>
          ))}
      </div>
    </section>
  )
}
