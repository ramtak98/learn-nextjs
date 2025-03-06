import PostCard from '../../components/PostCard'
import getPostMetadata from '../../utils/getPostMetadata'

export default function Home() {
  const postMetadata = getPostMetadata('recipes')

  return (
    <main>
      <div className='postsContainer'>
        {postMetadata.map((post, index) => {
          return <PostCard key={index} post={post} />
        })}
      </div>
    </main>
  )
}
