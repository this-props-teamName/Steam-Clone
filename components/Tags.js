import tagStyles from "../styles/Tags.module.css"
import { carouselState } from './state'
import { useRecoilState } from 'recoil'
import React, { useState } from "react"


const Tags = () => {
    const [carouselInfo, setCarouselInfo] = useRecoilState(carouselState);
    const [tags, setTags] = useState(false)

    console.log(carouselInfo)

    return  (
            <div className= {tagStyles.newModal}>
                <div className= {tagStyles.top_bar}></div>
                <div>
                    <div className= {tagStyles.header}>
                        <div 
                        className= {tagStyles.close}
                        onClick={() => setTags(false)}
                        ></div>
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
                                        <h2 className= {tagStyles.header2}>Sign In</h2>
                                        <p className= {tagStyles.paragraph}>Sign in to add your own tags to this product.</p>
                                        <p className= {tagStyles.paragraph}>
                                            <a 
                                            className= {tagStyles.blue_btn}
                                            href= "#"
                                            >
                                            <span className= {tagStyles.blue_btn_span}>Sign In</span>
                                            </a>
                                        </p>
                                    </div>
                                    <div style= "clear: both"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Tags