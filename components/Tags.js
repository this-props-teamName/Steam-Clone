import tagStyles from "../styles/Tags.module.css"
import { carouselState } from './state'
import { useRecoilState } from 'recoil'
import React, { useState } from "react"


const Modal = () => {
   const [showTags, setTagsBox] = useState(false)

    return  (
            <div className= {tagStyles.newModal}>
                <div className= {tagStyles.top_bar}></div>
                <div>
                    <div className= {tagStyles.header}>
                        <div className= {tagStyles.close}></div>
                        <div className= {tagStyles.title_text}>View and edit tags for this product</div>
                    </div>
                </div>
                <div className= {tagStyles.newModal_content_border}>
                    <div className= {tagStyles.newModal_content}>
                        <div>
                            <div className= {tagStyles.app_tagging_modal}>
                                <div className= {tagStyles.app_tagging_modal_content}>
                                    <div className= {tagStyles.app_tagging_modal_seperator}></div>
                                    <div className= {tagStyles.app_tag_modal_left}>
                                    <h2 
                                        className= {tagStyles.header2}>
                                        Popular user-defined tags for this product:
                                        <span 
                                        className= {tagStyles.app_tag_modal_tooltip} 
                                        data-tooltip-text="These are tags applied to the product by the most users.  You can click a tag to find other products with that tag applied.  Or, you can hit the plus symbol for any existing tags to increase that tag's popularity on this product."
                                        >
                                        (?)
                                        </span>
                                    </h2>
                                        <div>
                                            <div className= {tagStyles.app_tag_control}>
                                                <div className= {tagStyles.app_tag_checkbox}></div>
                                                <a 
                                                    className={tagStyles.app_tag}
                                                    href= "https://store.steampowered.com/tags/en/Adventure/?snr=1_5_9__410"
                                                    > {carousel.tags[1]}
                                                    </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Modal