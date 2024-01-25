import Link from 'next/link'
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
  const accessToken = process.env.instagramAccessToken
  const userId = process.env.instagramUserId

  const res = await fetch(
    `https://graph.instagram.com/${userId}/media?access_token=${accessToken}&fields=media_url,permalink,thumbnail_url`
  )

  if (!res.ok) {
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
          data.data
            .slice(0, 8)
            .map(({id, thumbnail_url, media_url, permalink}) => (
              <Link
                target="_blank"
                href={permalink}
                key={id}
                className="bg-blue-100 relative h-[300px]"
              >
                <Image
                  fill
                  alt="Sean O'Reilly"
                  src={thumbnail_url ? thumbnail_url : media_url}
                  className="object-cover object-center w-full h-full"
                />
                {thumbnail_url && (
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        stroke="none"
                        d="M0 0h24v24H0z"
                        fill="none"
                      />
                      <path
                        d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                        strokeWidth="0"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                )}
              </Link>
            ))}
      </div>
    </section>
  )
}
