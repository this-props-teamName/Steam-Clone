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

  function hidePrev() {
    if(currentSlide === 0) {
      return `${currentSlide ? "{imageStyles.btn_medium_previous}" : 'hidden'}`
    } else {
      return imageStyles.btn_medium_previous
    }
  }

  function hideNext() {
    if(currentSlide === 4) {
      return `${currentSlide ? "{imageStyles.btn_medium_next}" : 'hidden'}`
    } else {
      return imageStyles.btn_medium_next
    }
  }

  if(carouselInfo.large_img_url){
  return (
      <div className="w-[616] float-left p-[0px] m-[0px] font-sans">
        <div className = "overflow-hidden relative mr-[16px]">
          <div className ="bg-black overflow-hidden relative" >
            <div>
              <picture>
                <img alt='spacer image' src='https://store.cloudflare.steamstatic.com/public/images/game/game_highlight_image_spacer.gif' />
              </picture>
            </div>
            {/* large images of the carousel */}
            <div className="absolute top-0 right-0 bottom-0 left-0 text-center p-0 m-0 focus-within:">
              <div className="flex h-[100%] flex-col justify-center">
                <a className="text-[#67c1f5]" onClick={() => {setImages(carouselInfo.huge_img_url[counter]);
                setCurrentSlide(counter)}}>
                  <picture>
                    <img alt='large carousel image' src={carouselInfo.large_img_url[counter]} />
                  </picture>
                </a>
              </div>
            </div>
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
                <picture>
                  <img alt='small carousel image' src={carouselInfo.small_img_url[0]}/>
                </picture>
              </div>
              <div className="h-[65px] w-[116px] cursor-pointer text-center m-[2px] bg-black relative float-left" onClick={()=> clicked(120, 1)}>
                <picture>
                  <img alt='small carousel image' src={carouselInfo.small_img_url[1]} />
                </picture>
              </div>
              <div className="h-[65px] w-[116px] cursor-pointer text-center m-[2px] bg-black relative float-left" onClick={()=> clicked(240, 2)}>
                <picture>
                  <img alt='small carousel image' src={carouselInfo.small_img_url[2]} />
                </picture>
              </div>
              <div className="h-[65px] w-[116px] cursor-pointer text-center m-[2px] bg-black relative float-left" onClick={()=> clicked(360, 3)}>
                <picture>
                  <img alt='small carousel image' src={carouselInfo.small_img_url[3]} />
                </picture>
              </div>
              <div className="h-[65px] w-[116px] cursor-pointer text-center m-[2px] bg-black relative float-left" onClick={()=> clicked(480, 4)}>
                <picture>
                  <img alt='small carousel image' src={carouselInfo.small_img_url[4]} />
                </picture>
              </div>
            </div>
          </div>
          <div className="relative h-[18px]">
            {/* leftbutton */}
            <div className="group absolute w-[38px] top-0 bottom-0 rounded-[3px] block cursor-pointer bg-[#233c5166] hover:bg-[#417a9b]" onClick={()=> decrementLoc(frame, counter)}>
              <span className="h-[7px] w-[9px] ml-[13px] mt-[5px] inline-block bg-no-repeat bg-right-top group-hover:bg-right bg-0 bg-[url('https://store.cloudflare.steamstatic.com/public/images//v6/icon_cluster_controls.png')]"></span>
            </div>
            {/* center bar with indicator  bar width = 522px bar-1/2indicator = 492px */}
            <input type='range' className={Styles.slider} min="1" max='100' defaultValue={1} onChange={moveScrollLoc} ></input>
            {/* rightbutton */}
            <div className="group absolute w-[38px] top-0 bottom-0 rounded-[3px] cursor-pointer right-0 bg-[#233c5166] hover:bg-[#417a9b]" onClick={()=> incrementLoc(frame, counter)}>
              <span className='h-[7px] w-[9px] ml-[15px] mt-[5px] inline-block bg-no-repeat bg-top group-hover:bg-center bg-[url("https://store.cloudflare.steamstatic.com/public/images//v6/icon_cluster_controls.png")]'></span>
            </div>
          </div>
        </div>

        {/*Modal*/}
        {images ? (
        <div>
          <div className= {imageStyles.newModal_background} onClick={() => setImages(false)}></div>
          <div className= {imageStyles.screenshot_popup_modal}>
            <div className= {imageStyles.screenshot_popup_modal_content}>
              <div className= {imageStyles.screenshot_popup_modal_title}>
                <a className= {imageStyles.screenshot_a} href= "#">
                  Download full-size version
                  <picture>
                    <img alt='small icon' className= {imageStyles.download} src="https://store.cloudflare.steamstatic.com/public/images/v5/ico_external_link.gif"/> 
                  </picture>
                </a>
              </div>
              <div>
                <picture>
                  <img className={imageStyles.screenshot_img} alt='huge carousel image on click' src= {carouselInfo.huge_img_url[currentSlide]}/>
                </picture>
                <picture>
                  <img className={imageStyles.screenshot_img2} alt='huge carousel image on click' src= {carouselInfo.huge_img_url[1]}/>
                </picture>
                <picture>
                  <img className={imageStyles.screenshot_img2} alt='huge carousel image on click' src= {carouselInfo.huge_img_url[2]}/>
                </picture>
              </div>
              <div className= {imageStyles.screenshot_popup_modal_footer}>
                <div className= {imageStyles.screenshot_words}> {currentSlide + 1} of 5 screenshots</div>
                <div className= {hidePrev()} onClick={() => setCurrentSlide((previousSlide) => previousSlide - 1)}>
                  <span className= {imageStyles.btn_medium_span}>Prev</span>
                </div>
                <div className= {hideNext()} onClick={() => setCurrentSlide(currentSlide + 1)}>
                  <span className= {imageStyles.btn_medium_span}>Next</span>
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