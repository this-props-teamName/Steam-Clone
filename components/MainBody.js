import NavBar from './NavBar'
import PageContent from './PageContent'

const MainBody = () => {
  return (
    <div className='min-w-[972px] bg-no-repeat bg-[top_center] bg-[url("https://cdn.cloudflare.steamstatic.com/steam/apps/990080/page_bg_generated_v6b.jpg?t=1661535551")]'>
        <NavBar />
        <PageContent />
    </div>
  )
}

export default MainBody