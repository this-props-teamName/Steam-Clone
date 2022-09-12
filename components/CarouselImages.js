import { carouselState } from './state'
import { useRecoilState } from 'recoil'
import { arrow } from '../styles/Carousel.module.css'
import { useState, useEffect } from 'react'
import Styles from '../styles/Carousel.module.css'
import imageStyles from "../styles/imageModal.module.css"


const CarouselImages = () => {
  const [carouselInfo, setCarouselInfo] = useRecoilState(carouselState);
  const [frame, setFrame] = useState(0)
  const [counter, setCounter] = useState(0)
  const [timer, setTimer] = useState(0)
  const [val, setVal] =useState(0)
  const [images, setImages] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(()=>{
    interval(frame, counter)
  },[])

  function interval(x, y){
    setTimer(setInterval(() => {
      if(x < 480){
        setFrame(x += 120)
        setCounter(y += 1)
      }else{
        setFrame(x -= 480)
        setCounter(y -= 4)
      }
    },5000))
  }
  
  let clicked = (x, y) => {
    clearInterval(timer)
    setFrame(x)
    setCounter(y)
    interval(x,y)
  }

  let scrollTop = () => {
    return `w-[602px] left-[${val}px] absolute`
  }
  
  // indicator is based off the scrollbar
  function moveScrollLoc(event){
    setVal(event.target.value * 0.02)
  }

  function incrementLoc(x, y){
    if(x<480){
      clearInterval(timer)
      setFrame(x += 120);
      setCounter(y += 1);
      interval(x, y);
    }else{
      clearInterval(timer)
      setFrame(x -=480);
      setCounter(y -= 4);
      interval(0, 0);
    }
  }

  function decrementLoc(x, y){
    if(x>0){
      clearInterval(timer)
      setFrame(x -= 120);
      setCounter(y -= 1);
      interval((x-120), (y-1));
    }else{
      clearInterval(timer)
      setFrame(x +=480);
      setCounter(y += 4);
      interval(480, 4);
    }
  }

  
  if(carouselInfo.large_img_url){
  return (
      <div className="w-[616] float-left p-[0px] m-[0px] font-sans">
        <div className = "overflow-hidden relative mr-[16px]">
          <div className ="bg-black overflow-hidden relative" >
            <div>
              <img src='https://store.cloudflare.steamstatic.com/public/images/game/game_highlight_image_spacer.gif' />
            </div>
            {/* large images of the carousel */}
            <div className="absolute top-0 right-0 bottom-0 left-0 text-center p-0 m-0 focus-within:">
              <div className="flex h-[100%] flex-col justify-center">
                <a className="text-[#67c1f5]" onClick={() => setImages(carouselInfo.huge_img_url[counter])}>
                  <img src={carouselInfo.large_img_url[counter]} />
                </a>
              </div>
            </div>
            {/* <div className="absolute top-0 right-0 bottom-0 left-0 text-center p-0 m-0 focus-within:">
              <div className="flex h-[100%] flex-col justify-center">
                <a className="text-[#67c1f5]" href="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_df93b5e8a183f7232d68be94ae78920a90de1443.1920x1080.jpg?t=1661535551">
                  <img src={carouselInfo.large_img_url[counter]} />
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 bottom-0 left-0 text-center p-0 m-0 focus-within:">
              <div className="flex h-[100%] flex-col justify-center">
                <a className="text-[#67c1f5]" href="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_94058497bf0f8fabdde17ee8d59bece609a60663.1920x1080.jpg?t=1661535551">
                  <img src={carouselInfo.large_img_url[counter]} />
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 bottom-0 left-0 text-center p-0 m-0 focus-within:">
              <div className="flex h-[100%] flex-col justify-center">
                <a className="text-[#67c1f5]" href="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_8e08976236d29b1897769257ac3c64e9264792a5.1920x1080.jpg?t=1661535551">
                  <img src={carouselInfo.large_img_url[counter]} />
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 bottom-0 left-0 text-center p-0 m-0 focus-within:">
              <div className="flex h-[100%] flex-col justify-center">
                <a className="text-[#67c1f5]" href="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_d4930d675af053dc1e61a876a34fc003e85e261f.1920x1080.jpg?t=1661535551">
                  <img src={carouselInfo.large_img_url[counter]} />
                </a>
              </div>
            </div>
            <script></script> */}
          </div>
          <div className="mt-[4px] relative h-[69px] mb-[4px] z-40">
            {/* this is what we want to move left changes make left negative */}
            <div className={scrollTop()}>
              {/* frame of mini picutres */}
              <div className='absolute w-[116px] h-[72px] z-50 top-[-3px] border-[3px] cursor-pointer border-[#fff]' style={{left:`${frame}px`}}>
                <div className={arrow}></div>
              </div>
              {/* small images below the main viewer of the carousel */}
              <div className="h-[65px] w-[116px] cursor-pointer text-center m-[2px] bg-black relative float-left" onClick={()=> clicked(0, 0)} >
                <img src={carouselInfo.small_img_url[0]}/>
              </div>
              <div className="h-[65px] w-[116px] cursor-pointer text-center m-[2px] bg-black relative float-left" onClick={()=> clicked(120, 1)}>
                <img src={carouselInfo.small_img_url[1]} />
              </div>
              <div className="h-[65px] w-[116px] cursor-pointer text-center m-[2px] bg-black relative float-left" onClick={()=> clicked(240, 2)}>
                <img src={carouselInfo.small_img_url[2]} />
              </div>
              <div className="h-[65px] w-[116px] cursor-pointer text-center m-[2px] bg-black relative float-left" onClick={()=> clicked(360, 3)}>
                <img src={carouselInfo.small_img_url[3]} />
              </div>
              <div className="h-[65px] w-[116px] cursor-pointer text-center m-[2px] bg-black relative float-left" onClick={()=> clicked(480, 4)}>
                <img src={carouselInfo.small_img_url[4]} />
              </div>
            </div>
          </div>
          <div className="relative h-[18px]">

            {/* Scroll bar under the carousel
                fix the hover effects */}
            
            {/* leftbutton */}
            <div className="group absolute w-[38px] top-0 bottom-0 rounded-[3px] block cursor-pointer bg-[#233c5166] hover:bg-[#417a9b]" onClick={()=> decrementLoc(frame, counter)}>
              <span className="h-[7px] w-[9px] ml-[13px] mt-[5px] inline-block bg-no-repeat bg-right-top group-hover:bg-right bg-0 bg-[url('https://store.cloudflare.steamstatic.com/public/images//v6/icon_cluster_controls.png')]"></span>
            </div>
            {/* center bar with indicator  bar width = 522px bar-1/2indicator = 492px */}
            <input type='range' className={Styles.slider} min="1" max='100' defaultValue={1} onChange={moveScrollLoc} ></input>
            {/* <div className="absolute left-[39px] right-[39px] top-0 bottom-0 bg-[#00000033] rounded-[3px]" onClick={(e) => moveScrollLoc(e)}> */}
              {/* indicator */}
              {/* <div className="absolute left-0 bg-[#233c5166] h-[18px] w-[60px] rounded-[3px] hover:bg-[#417a9b] cursor-pointer"></div> */}
            {/* </div> */}

            {/* rightbutton */}
            <div className="group absolute w-[38px] top-0 bottom-0 rounded-[3px] cursor-pointer right-0 bg-[#233c5166] hover:bg-[#417a9b]" onClick={()=> incrementLoc(frame, counter)}>
              <span className='h-[7px] w-[9px] ml-[15px] mt-[5px] inline-block bg-no-repeat bg-top group-hover:bg-center bg-[url("https://store.cloudflare.steamstatic.com/public/images//v6/icon_cluster_controls.png")]'></span>
            </div>
          </div>
        </div>

{/*Modal*/}
{images ? (
    <div className= {imageStyles.newModal_background}>
      <div className= {imageStyles.screenshot_popup_modal}>
                  <div className= {imageStyles.screenshot_popup_modal_content}>
                      <div className= {imageStyles.screenshot_popup_modal_title}>
                          <a 
                              className= {imageStyles.screenshot_a}
                              href= "#"
                              >
                              Download full-size version
                              <img className= {imageStyles.download} src="https://store.cloudflare.steamstatic.com/public/images/v5/ico_external_link.gif"/> 
                          </a>
                      </div>
                      <div>
                          <img 
                          className={imageStyles.screenshot_img}
                        //   style ="opacity: 1; max-width: 1420px; max-height:520px"
                          src= {carouselInfo.huge_img_url[currentSlide]}/>
                          
                          <img 
                          className={imageStyles.screenshot_img2}
                        //   style="display:none;"
                          src= {carouselInfo.huge_img_url[1]}
                          />

                            <img 
                          className={imageStyles.screenshot_img2}
                        //   style="display:none;"
                          src= {carouselInfo.huge_img_url[2]}
                          />

                      </div>
                      <div className= {imageStyles.screenshot_popup_modal_footer}>
                          <div>1 of 5 screenshots</div>
                          <div className= {imageStyles.btn_medium_previous}
                          onClick={() => setCurrentSlide((previousSlide) => previousSlide - 1)}
                          >
                              <span className= {imageStyles.btn_medium_span}>Prev</span>
                          </div>
                          <div className= {imageStyles.btn_medium_next}
                          onClick={() => setCurrentSlide(currentSlide + 1)}
                          >
                              <span className= {imageStyles.btn_medium_span}
                              >Next</span>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
      ) : null}

      </div>
    )
  }
}

export default CarouselImages