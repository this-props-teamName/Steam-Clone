import { carouselState } from './state'
import  { useRecoilState } from 'recoil'

const Title = () => {
  const [carouselInfo, setCarouselInfo] = useRecoilState(carouselState);

  if(carouselInfo.tags){
    return (
      <div className="w-[940px] mx-auto my-0">
        {/* the breadcrumb list above the title */}
        <div className='font-sans pt-[10px]'>
          <div className='text-[#8f98a0]'>
            <a className="text-[12px] text-[#8f98a0] font-sans hover:text-[#c6d4df]" href='https://store.steampowered.com/search/?term=&snr=1_5_9__205'>All Games</a>
            {" > "}
            <a className="text-[12px] text-[#8f98a0] font-sans hover:text-[#c6d4df]" href='https://store.steampowered.com/genre/Adventure/?snr=1_5_9__205'>{carouselInfo.title[1]}</a>
            {" > "}
            <a className="text-[12px] text-[#8f98a0] font-sans hover:text-[#c6d4df]" href='https://store.steampowered.com/app/990080/?snr=1_5_9__205'>{carouselInfo.title[0]}</a>
          </div>
        </div>
        {/* title/community hub div */}
        <div className='pt-[0px] max-w-[948px] block mx-auto my-[0px]'>
          <div className='relative mx-auto my-[0px] text-left min-h-[46px]'>
            <div className='relative float-right block text-left'>
                <a href='https://steamcommunity.com/app/990080'>
                  <span className='bg-[#67c1f533] p-[1px] inline-block rounded-[2px] text-[15px] leading-[30px] pr-[15px] pl-[15px] text-[#67c1f5] hover:text-[#fff] hover:bg-[#67c1f5]'>
                    Community Hub
                  </span>
                </a>
              </div>
            <div className='text-[26px] text-ellipsis leading-[32px] font-normal pl-[0px] font-sans text-[#fff]'>
              {carouselInfo.title[0]}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Title