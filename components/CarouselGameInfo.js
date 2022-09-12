import { carouselState } from './state'
import  { useRecoilState } from 'recoil'
import tagStyles from "../styles/Tags.module.css"
import React, { useState } from "react"



const CarouselGameInfo = () => {
  const [carouselInfo, setCarouselInfo] = useRecoilState(carouselState);
  const [tags, setTags] = useState(false);
  
  if(carouselInfo.tags){
    return (
      <div className='w-[324px] ml-[0px] float-right'>
        <div className='p-[0px] font-sans'>
          <div className='mb-[7px]'>
            {/* right column picture
                need to use database for the image below */}
            <img className='w-[324px] h-[151px]' src={carouselInfo.title_img_url} />
          </div>
          {/* right column description
              need to use database for game description text below */}
          <div className='max-h-[111px] text-[13px] leading-[18px] pr-[16px] text-[#c6d4df] font-sans'>
            {carouselInfo.carousel_game_info}							
          </div>
          {/* right column reviews/release date/developer/publisher */}
          <div className='text-[12px] text-[#556772] mt-[10px]'>
            <div className='flex leading-[16px] cursor-pointer font-sans'>
              <div className='text-[10px] pr-[10px] min-w-[94px] uppercase'>All Reviews:</div>
              <div className='truncate'>No user reviews </div>
            </div>
          </div>
          <div className='flex leading-[16px] pt-[9px] pb-[13px]'>
            <div className='uppercase text-[10px] text-[#556772] pr-[10px] min-w-[94px]'>Release Date:</div>
            <div className='max-h-[30px] truncate leading-[16px] text-[12px] text-[#8f98a0]'>{carouselInfo.release_date}</div>
          </div>
          <div className='flex leading-[16px] text-[#c6d4df] text-[12px]'>
            <div className='truncate text-[#556772] uppercase text-[10px] pr-[10px] min-w-[94px]'>Developer:</div>
            <div className='truncate leading-[16px]'>
            {/* get developer from the backend ... NEEDS CHANGE */}
              <a className='text-[#67c1f5] hover:text-[#fff]' href='https://store.steampowered.com/developer/WBGames?snr=1_5_9__2000'>{carouselInfo.developer}</a>
            </div>
          </div>
          <div className='flex leading-[16px]'>
            {/* get Publisher from the backend ... NEEDS CHANGE */}
            <div className='truncate text-[#556772] uppercase text-[10px] pr-[10px] min-w-[94px]'>Publisher:</div>
            <div className='truncate leading-[16px] '>
              <a className='text-[#67c1f5] text-[12px] leading-[16px] hover:text-[#fff]' href='https://store.steampowered.com/publisher/WBGames?snr=1_5_9__2000'>{carouselInfo.publisher}</a>
            </div>
          </div>
        </div>
        {/* right column tags */}
        <div>
          <div className='mt-[10px] text-[11px]'>
            <div className='leading-[19px] text-[12px] text-[#556772] font-sans'>Popular user-defined tags for this product:</div>
            <div className='truncate h-[22px] font-sans'>
              {/* get this info from the backend ... NEEDS CHANGE */}
              <a href='https://store.steampowered.com/tags/en/Adventure/?snr=1_5_9__409' className='leading-[19px] px-[7px] py-[0px] bg-[#67c1f533] max-w-[200px] mb-[3px] text-[#67c1f5] cursor-pointer rounded-[2px] mr-[2px] shadow-none truncate inline-block hover:bg-[#67c1f5] hover:text-[#fff]'> {carouselInfo.tags[0]} </a>
              <a href='https://store.steampowered.com/tags/en/Magic/?snr=1_5_9__409' className='leading-[19px] px-[7px] py-[0px] bg-[#67c1f533] max-w-[200px] mb-[3px] text-[#67c1f5] cursor-pointer rounded-[2px] mr-[2px] shadow-none truncate hover:bg-[#67c1f5] inline-block hover:text-[#fff]'> {carouselInfo.tags[1]} </a>
              <a href='https://store.steampowered.com/tags/en/Open%20World/?snr=1_5_9__409' className='leading-[19px] px-[7px] py-[0px] bg-[#67c1f533] max-w-[200px] mb-[3px] text-[#67c1f5] cursor-pointer rounded-[2px] mr-[2px] shadow-none truncate hover:bg-[#67c1f5] inline-block hover:text-[#fff]'> {carouselInfo.tags[2]} </a>
              <a href='https://store.steampowered.com/tags/en/Adventure/?snr=1_5_9__409' className='leading-[19px] px-[7px] py-[0px] bg-[#67c1f533] max-w-[200px] mb-[3px] text-[#67c1f5] cursor-pointer rounded-[2px] mr-[2px] shadow-none truncate hover:bg-[#67c1f5] inline-block hover:text-[#fff]'> {carouselInfo.tags[3]} </a>
              <a href='https://store.steampowered.com/tags/en/RPG/?snr=1_5_9__409' className='leading-[19px] px-[7px] py-[0px] bg-[#67c1f533] max-w-[200px] mb-[3px] text-[#67c1f5] cursor-pointer rounded-[2px] mr-[2px] shadow-none truncate hover:bg-[#67c1f5] inline-block hover:text-[#fff]'> {carouselInfo.tags[4]} </a>
              <a 
              a href='https://store.steampowered.com'
              className='leading-[19px] px-[7px] py-[0px] bg-[#67c1f533] max-w-[200px] mb-[3px] text-[#67c1f5] cursor-pointer rounded-[2px] mr-[2px] shadow-none truncate inline-block hover:bg-[#67c1f5] hover:text-[#fff]'> + </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CarouselGameInfo