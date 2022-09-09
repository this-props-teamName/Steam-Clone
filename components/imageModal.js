import imageStyles from "../styles/imageModal.module.css"
import React, { useState } from "react"
import { carouselState } from './state'
import { useRecoilState } from 'recoil'

const imageModal = () => {
    const [carouselInfo, setCarouselInfo] = useRecoilState(carouselState);
    const [counter, setCounter] = useState(0)


    return (
        <div className= {imageStyles.screenshot_popup_modal}>
            <div className= {imageStyles.screenshot_popup_modal_content}>
                <div className= {imageStyles.screenshot_popup_modal_title}>
                    <a 
                        className= {imageStyles.screenshot_a}
                        href= "#"
                        >
                        Download full-size version
                        <img src="https://store.cloudflare.steamstatic.com/public/images/v5/ico_external_link.gif"/> 
                    </a>
                </div>
                <div>
                    <img 
                    className={imageStyles.screenshot_img}
                    style ="opacity: 1; max-width: 1420px; max-height:520px"
                    src= {carouselInfo.huge_img_url[0]}>
                    </img>
                    <img 
                    className={imageStyles.screenshot_img}
                    style="display:none;"
                    src= {carouselInfo.huge_img_url[1]}
                    >
                    </img>
                </div>
                <div className= {imageStyles.screenshot_popup_modal_footer}>
                    <div>1 of 5 screenshots</div>
                    <div className= {imageStyles.btn_medium_previous} style= "display: none;">
                        <span className= {imageStyles.btn_medium_span}>Prev</span>
                    </div>
                    <div className= {imageStyles.btn_medium_previous} style= "display: none;">
                        <span className= {imageStyles.btn_medium_span}>Next</span>
                    </div>
                </div>
            </div>
         </div>
    )
}