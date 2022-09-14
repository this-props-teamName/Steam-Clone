import React, {useState} from 'react'; 
import { gamesState, carouselState } from './state';
import { useRecoilState } from 'recoil'
import GameInfo from './GameInfo';


const GamePageAutoCollapseDeluxe = () => {
  const [gamesInfo, setGamesInfo] = useRecoilState(gamesState); 
  const [carouselInfo, setCarouselInfo] = useRecoilState(carouselState);

  const [readMoreClick, setReadMoreClick] = useState(false);

  const digiDeFullScreenClass = () => {
      return `${readMoreClick ? '' : 'max-h-[300px] overflow-hidden'}`
  }
  const readMoreClass = () => {
    return `${readMoreClick ? 'hidden' : 'block absolute left-0 right-0 bottom-0 h-[73px] z-[1]'}`
  }
 if(gamesInfo.recent_events_img){

   return (
     <div className="pb-[20px] relative">
       {/* If you take away the max-h-[300px] it will show the entire thing */}
       <div className={digiDeFullScreenClass()}>
         <div className="leading-[1.5rem] text-[14px] mt-[30px] overflow-hidden font-sans font-normal ">
           <h2 className="text-[14px] uppercase text-[#fff] mt-[0px] mx-[0px] mb-[10px] tracking-[0.03rem] font-normal pt-2px  ">
             Pre-Purchase Offer
             <picture>
              <img
                className="leading-[26px] bg-no-repeat bg-left-bottom"
                alt='gradient line'
                src="https://store.cloudflare.steamstatic.com/public/images/v6/maincol_gradient_rule.png"
              />
             </picture>
           </h2>
           <p className="mb-[8px] block ">
             {gamesInfo.prepur_included}
           </p>
         </div>
         <div className="leading-[1.5rem] text-[14px] mt-[30px] overflow-hidden font-sans font-normal  ">
           <h2 className='text-[14px] uppercase text-[#fff] mt-[0px] mx-[0px] mb-[10px] tracking-[0.03rem] font-normal pt-2px leading-[26px] bg-[url("https://store.cloudflare.steamstatic.com/public/images/v6/maincol_gradient_rule.png")] bg-no-repeat bg-left-bottom  '>
             Digital Deluxe Edition
           </h2>
           <p className="mb-[8px] ">
            <picture> 
              <img alt='deluxe title img' src={gamesInfo.dd_img} />
            </picture>
             <br />
             The {carouselInfo.dd_title} Include: <br />
             -{gamesInfo.recent_events_img[0] }<br />
             -{gamesInfo.recent_events_img[1]} <br />
             -{gamesInfo.recent_events_img[2]} <br />
             -{gamesInfo.recent_events_img[3]} <br />
             -{gamesInfo.recent_events_img[4]}
             <br />
           </p>
         </div>
         <div className={readMoreClass()}>
          <div className='relative h-[55px]' style={{background:'linear-gradient(0deg, #000000e8, transparent)'}}></div>
           <div className="absolute right-0 bottom-0 h-[20px] leading-[20px] cursor-pointer text-[#537ca6] text-[10px] pr-[12px] hover:text-[#fff] " onClick={()=> setReadMoreClick(true)}>
             READ MORE
           </div>
           {/* need to add a arrow down */}
         </div>
       </div>
     </div>
   )
 }
}

export default GamePageAutoCollapseDeluxe