import { carouselState } from './state'
import  { useRecoilState } from 'recoil'
import tagStyles from "../styles/Tags.module.css"
import React, { useState } from "react"
import Link from 'next/link'
import Image from 'next/image'



const CarouselGameInfo = () => {
  const [carouselInfo, setCarouselInfo] = useRecoilState(carouselState);
  const [tags, setTags] = useState(false);
  
    const externalImageLoader =() =>
        `${carouselInfo.title_img_url}`

  if(carouselInfo.tags){
    return (
      <div className='w-[324px] ml-[0px] float-right'>
        <div className='p-[0px] font-sans'>
          <div className='mb-[7px]'>
            {/* right column picture */}
            <Image loader={externalImageLoader} width={'324px'} height={'151px'} alt='title image' src={carouselInfo.title_img_url} />
          </div>
          {/* right column description */}
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
            {/* developer */}
              <a className='text-[#67c1f5] hover:text-[#fff]' href='https://store.steampowered.com/developer/WBGames?snr=1_5_9__2000'>{carouselInfo.developer}</a>
            </div>
          </div>
          <div className='flex leading-[16px]'>
            {/* Publisher */}
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
              <a href='https://store.steampowered.com/tags/en/Adventure/?snr=1_5_9__409' className='leading-[19px] px-[7px] py-[0px] bg-[#67c1f533] max-w-[200px] mb-[3px] text-[#67c1f5] cursor-pointer rounded-[2px] mr-[2px] shadow-none truncate inline-block hover:bg-[#67c1f5] hover:text-[#fff]'> {carouselInfo.tags[0]} </a>
              <a href='https://store.steampowered.com/tags/en/Magic/?snr=1_5_9__409' className='leading-[19px] px-[7px] py-[0px] bg-[#67c1f533] max-w-[200px] mb-[3px] text-[#67c1f5] cursor-pointer rounded-[2px] mr-[2px] shadow-none truncate hover:bg-[#67c1f5] inline-block hover:text-[#fff]'> {carouselInfo.tags[1]} </a>
              <a href='https://store.steampowered.com/tags/en/Open%20World/?snr=1_5_9__409' className='leading-[19px] px-[7px] py-[0px] bg-[#67c1f533] max-w-[200px] mb-[3px] text-[#67c1f5] cursor-pointer rounded-[2px] mr-[2px] shadow-none truncate hover:bg-[#67c1f5] inline-block hover:text-[#fff]'> {carouselInfo.tags[2]} </a>
              <a href='https://store.steampowered.com/tags/en/Adventure/?snr=1_5_9__409' className='leading-[19px] px-[7px] py-[0px] bg-[#67c1f533] max-w-[200px] mb-[3px] text-[#67c1f5] cursor-pointer rounded-[2px] mr-[2px] shadow-none truncate hover:bg-[#67c1f5] inline-block hover:text-[#fff]'> {carouselInfo.tags[3]} </a>
              <a href='https://store.steampowered.com/tags/en/RPG/?snr=1_5_9__409' className='leading-[19px] px-[7px] py-[0px] bg-[#67c1f533] max-w-[200px] mb-[3px] text-[#67c1f5] cursor-pointer rounded-[2px] mr-[2px] shadow-none truncate hover:bg-[#67c1f5] inline-block hover:text-[#fff]'> {carouselInfo.tags[4]} </a>
              <a 
              onClick={() => setTags(true)}
              className='leading-[19px] px-[7px] py-[0px] bg-[#67c1f533] max-w-[200px] mb-[3px] text-[#67c1f5] cursor-pointer rounded-[2px] mr-[2px] shadow-none truncate inline-block hover:bg-[#67c1f5] hover:text-[#fff]'> + </a>
            </div>
          </div>
        </div>

{/*Modal*/}
      {tags ? (
      <div className= {tagStyles.newModal_background} onClick={() => setTags(false)}>
        <div className= {tagStyles.newModal}>
                <div className= {tagStyles.top_bar}></div>
                <div>
                    <div className= {tagStyles.newmodal_heade}>
                        <div className= {tagStyles.close} onClick={() => setTags(false)}></div>
                        <div className= {tagStyles.title_text}>View and edit tags for this product</div>
                    </div>
                </div>
                <div className= {tagStyles.newModal_content_border}>
                    <div className= {tagStyles.newModal_content}>
                        <div>
                            <div className= {tagStyles.app_tag_modal}>
                                <div className= {tagStyles.app_content}>
                                    <div className= {tagStyles.seperator}></div>
                                    <div className= {tagStyles.app_tag_left}>
                                    <h2 className= {tagStyles.header2}> Popular user-defined tags for this product:
                                        <span className= {tagStyles.app_tag_modal_tooltip} 
                                        data-tooltip-text="These are tags applied to the product by the most users.  You can click a tag to find other products with that tag applied.  Or, you can hit the plus symbol for any existing tags to increase that tag's popularity on this product."
                                        >(?)
                                        </span>
                                    </h2>
                                        <div>
                                            <div className= {tagStyles.app_tag_control} data-tagid="21">
                                                <div className= {tagStyles.app_tag_checkbox}></div>
                                                <a 
                                                    className={tagStyles.app_tag}
                                                    href= "https://store.steampowered.com/tags/en/Adventure/?snr=1_5_9__410"
                                                    > {carouselInfo.tags[0]}
                                                </a>
                                            </div>
                                            <div className= {tagStyles.app_tag_control}>
                                                <div className= {tagStyles.app_tag_checkbox}></div>
                                                <a 
                                                    className={tagStyles.app_tag}
                                                    href= "https://store.steampowered.com/tags/en/Magic/?snr=1_5_9__410"
                                                    > {carouselInfo.tags[1]}
                                                </a>
                                            </div>
                                            <div className= {tagStyles.app_tag_control}>
                                                <div className= {tagStyles.app_tag_checkbox}></div>
                                                <a 
                                                    className={tagStyles.app_tag}
                                                    href= "https://store.steampowered.com/tags/en/Open%20World/?snr=1_5_9__410"
                                                    > {carouselInfo.tags[2]}
                                                </a>
                                            </div>
                                            <div className= {tagStyles.app_tag_control}>
                                                <div className= {tagStyles.app_tag_checkbox}></div>
                                                <a 
                                                    className={tagStyles.app_tag}
                                                    href= "https://store.steampowered.com/tags/en/Fantasy/?snr=1_5_9__410"
                                                    > {carouselInfo.tags[3]}
                                                </a>
                                            </div>
                                            <div className= {tagStyles.app_tag_control}>
                                                <div className= {tagStyles.app_tag_checkbox}></div>
                                                <a 
                                                    className={tagStyles.app_tag}
                                                    href= "https://store.steampowered.com/tags/en/RPG/?snr=1_5_9__410"
                                                    > {carouselInfo.tags[4]}
                                                </a>
                                            </div>
                                            <div className= {tagStyles.app_tag_control}>
                                                <div className= {tagStyles.app_tag_checkbox}></div>
                                                <a 
                                                    className={tagStyles.app_tag}
                                                    href= "https://store.steampowered.com/tags/en/Singleplayer/?snr=1_5_9__410"
                                                    > {carouselInfo.tags[6]}
                                                </a>
                                            </div>
                                            <div className= {tagStyles.app_tag_control}>
                                                <div className= {tagStyles.app_tag_checkbox}></div>
                                                <a 
                                                    className={tagStyles.app_tag}
                                                    href= "https://store.steampowered.com/tags/en/Action-Adventure/?snr=1_5_9__410"
                                                    > {carouselInfo.tags[7]}
                                                </a>
                                            </div>
                                            <div className= {tagStyles.app_tag_control}>
                                                <div className= {tagStyles.app_tag_checkbox}></div>
                                                <a 
                                                    className={tagStyles.app_tag}
                                                    href= "https://store.steampowered.com/tags/en/Action%20RPG/?snr=1_5_9__410"
                                                    > {carouselInfo.tags[8]}
                                                </a>
                                            </div>
                                            <div className= {tagStyles.app_tag_control}>
                                                <div className= {tagStyles.app_tag_checkbox}></div>
                                                <a 
                                                    className={tagStyles.app_tag}
                                                    href= "https://store.steampowered.com/tags/en/Action/?snr=1_5_9__410"
                                                    > {carouselInfo.tags[5]}
                                                </a>
                                            </div>
                                            <div className= {tagStyles.app_tag_control}>
                                                <div className= {tagStyles.app_tag_checkbox}></div>
                                                <a 
                                                    className={tagStyles.app_tag}
                                                    href= "https://store.steampowered.com/tags/en/Character%20Customization/?snr=1_5_9__410"
                                                    > {carouselInfo.tags[9]}
                                                </a>
                                            </div>
                                            <div className= {tagStyles.app_tag_control}>
                                                <div className= {tagStyles.app_tag_checkbox}></div>
                                                <a 
                                                    className={tagStyles.app_tag}
                                                    href= "https://store.steampowered.com/tags/en/Third%20Person/?snr=1_5_9__410"
                                                    > {carouselInfo.tags[10]}
                                                </a>
                                            </div>
                                            <div className= {tagStyles.app_tag_control}>
                                                <div className= {tagStyles.app_tag_checkbox}></div>
                                                <a 
                                                    className={tagStyles.app_tag} 
                                                    href= "https://store.steampowered.com/tags/en/Exploration/?snr=1_5_9__410"
                                                    > {carouselInfo.tags[12]}
                                                </a>
                                            </div>
                                            <div className= {tagStyles.app_tag_control}>
                                                <div className= {tagStyles.app_tag_checkbox}></div>
                                                <a 
                                                    className={tagStyles.app_tag} 
                                                    href= "https://store.steampowered.com/tags/en/Story%20Rich/?snr=1_5_9__410"
                                                    > {carouselInfo.tags[11]}
                                                </a>
                                            </div>
                                            <div className= {tagStyles.app_tag_control}>
                                                <div className= {tagStyles.app_tag_checkbox}></div>
                                                <a 
                                                    className={tagStyles.app_tag}
                                                    href= "https://store.steampowered.com/tags/en/Atmospheric/?snr=1_5_9__410"
                                                    > {carouselInfo.tags[13]}
                                                </a>
                                            </div>
                                            <div className= {tagStyles.app_tag_control}>
                                                <div className= {tagStyles.app_tag_checkbox}></div>
                                                <a 
                                                    className={tagStyles.app_tag}
                                                    href= "https://store.steampowered.com/tags/en/Villain%20Protagonist/?snr=1_5_9__410"
                                                    > {carouselInfo.tags[14]}
                                                </a>
                                            </div>
                                            <div className= {tagStyles.app_tag_control}>
                                                <div className= {tagStyles.app_tag_checkbox}></div>
                                                <a 
                                                    className={tagStyles.app_tag}
                                                    href= "https://store.steampowered.com/tags/en/Puzzle/?snr=1_5_9__410"
                                                    > {carouselInfo.tags[15]}
                                                </a>
                                            </div>
                                            <div className= {tagStyles.app_tag_control}>
                                                <div className= {tagStyles.app_tag_checkbox}></div>
                                                <a 
                                                    className={tagStyles.app_tag}
                                                    href= "https://store.steampowered.com/tags/en/Combat/?snr=1_5_9__410"
                                                    > {carouselInfo.tags[16]}
                                                </a>
                                            </div>
                                            <div className= {tagStyles.app_tag_control}>
                                                <div className= {tagStyles.app_tag_checkbox}></div>
                                                <a 
                                                    className={tagStyles.app_tag}
                                                    href= "https://store.steampowered.com/tags/en/Choices%20Matter/?snr=1_5_9__410"
                                                    > {carouselInfo.tags[17]}
                                                </a>
                                            </div>
                                            <div className= {tagStyles.app_tag_control}>
                                                <div className= {tagStyles.app_tag_checkbox}></div>
                                                <a 
                                                    className={tagStyles.app_tag}
                                                    href= "https://store.steampowered.com/tags/en/Souls-like"
                                                    > {carouselInfo.tags[19]}
                                                </a>
                                            </div>
                                            <div className= {tagStyles.app_tag_control}>
                                                <div className= {tagStyles.app_tag_checkbox}></div>
                                                <a 
                                                    className={tagStyles.app_tag}
                                                    href= "https://store.steampowered.com/tags/en/Psychological%20Horror/?snr=1_5_9__410"
                                                    > {carouselInfo.tags[18]}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className= {tagStyles.app_tag_right}>
                                        <h2 className= {tagStyles.header3}>Sign In</h2>
                                        <p className= {tagStyles.paragraph}>Sign in to add your own tags to this product.</p>
                                        <p className= {tagStyles.paragraph}>
                                          <Link href= "/login">
                                            <a className= {tagStyles.blue_btn}>
                                              <span className= {tagStyles.blue_btn_span}>Sign In</span>
                                            </a>
                                          </Link>
                                        </p>
                                    </div>
                                    <div className= {tagStyles.clear}></div>
                                </div>
                            </div>
                        </div>
                        <div className= {tagStyles.newModal_btn}>
                            <div className= {tagStyles.btn_grey_steamui} onClick={() => setTags(false)}>
                                <span className= {tagStyles.btn_medium_span}>
                                    Close
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        ): null}
      </div>
    )
  }
}

export default CarouselGameInfo