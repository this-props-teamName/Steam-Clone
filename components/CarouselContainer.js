import CarouselGameInfo from './CarouselGameInfo'
import CarouselImages from './CarouselImages'
import carouselStyles from '../styles/Carousel.module.css'

const CarouselContainer = () => {
  return (
    // added a height so that the black gradient was below scroll bar this is different from the steam website. 
    //these are the divs that contain both columns of the carousel section
    <>
      <div className='bg-[url(https://store.cloudflare.steamstatic.com/public/images/v6/app/game_page_background_shadow.png?v=2)] bg-no-repeat h-[445px] block bg-bottom pb-[1px] mx-auto my-0'>
        <div className={carouselStyles.carousel_area}>
          <CarouselImages />
          <CarouselGameInfo />
        </div>
      </div>
      {/* this is the text below the scrollbar for the carousel */}
      <div className="text-[12px] p-0 m-0 block font-sans">
        <div className="w-[940px] mx-auto my-0 bg-[#00000033] mb-[16px]">
          <div className="text-[#c6d4df] text-[12px] font-sans p-[16px]">
            <p>
              <a className='text-[#fff] cursor-pointer font-sans hover:text-[#67c1f5]' href='https://store.steampowered.com/login/?redir=app%2F990080&snr=1_5_9_'>Sign in</a>
              &nbsp;to add this item to your wishlist, follow it, or mark it as ignored
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarouselContainer