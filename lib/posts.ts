import fs from 'fs'
import path from 'path'
import remark from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export type PostData = {
  id: string
  date: string
  title: string
  category: string
  tags: string[]
  banner: string
  locale: string
  content: string
  description: string
}

export function getSortedPostsData({ locale }: { locale?: string }): PostData[] {
  const dirNames = fs.readdirSync(postsDirectory)

  const allPostsData = dirNames.map(
    (dir): PostData => {
      const fileName = locale && locale !== 'en' ? `index.${locale}.md` : 'index.md'
      const fullPath = path.join(postsDirectory, dir, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf-8')

      const matterResult = matter(fileContents)
      const { data } = matterResult

      return {
        id: data.id,
        date: data.date,
        title: data.title,
        tags: data.tags,
        banner: data.banner,
        locale: data.locale,
        category: data.category,
        description: data.description,
        content: matterResult.content,
      }
    },
  )

  return allPostsData.sort((a, b) => {
    if (a.date > b.date) return 1
    return -1
  })
}

export function getLatestPost({ locale }: { locale?: string }): PostData {
  const allPostsData = getSortedPostsData({ locale })
  const latestPost = allPostsData[0]
  return latestPost
}

export type PostPath = {
  params: {
    id: string
  }
  locale: string
}

export function getPostPaths(): PostPath[] {
  const dirNames = fs.readdirSync(postsDirectory)

  const postPaths = dirNames.reduce((paths: PostPath[], dir: string): PostPath[] => {
    const enPath = {
      params: {
        id: dir,
      },
      locale: 'en',
    }
    const esPath = {
      params: {
        id: dir,
      },
      locale: 'es',
    }

    return [...paths, enPath, esPath]
  }, [])

  return postPaths
}

export async function getPostData({
  id,
  locale,
}: {
  id: string
  locale?: string
}): Promise<PostData> {
  const fileName = locale && locale !== 'en' ? `index.${locale}.md` : 'index.md'
  const fullPath = path.join(postsDirectory, id, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .use(prism, {
      plugins: [
        'autolinker',
        'command-line',
        'data-uri-highlight',
        'diff-highlight',
        'inline-color',
        'keep-markup',
        'line-numbers',
        'show-invisibles',
        'treeview',
      ],
    })
    .process(matterResult.content)
  const content = processedContent.toString()

  // Combine the data with the id
  return {
    id,
    content,
    date: matterResult.data.date,
    title: matterResult.data.title,
    tags: matterResult.data.tags,
    banner: matterResult.data.banner,
    locale: matterResult.data.locale,
    category: matterResult.data.category,
    description: matterResult.data.description,
  }
}
