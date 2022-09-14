import React from 'react'
import gameFeaturesStyles from '../styles/RightColumn.module.css'

const GameFeatures = () => {
  return (
    <div className={gameFeaturesStyles.gameFeatures}>
        <div>
            <a className="mb-[2px] bg-black-rgba flex items-center" href="https://store.steampowered.com/search/?category2=2&snr=1_5_9__423">
                <div className="pt-0 pb-0 pr-[6px] pl-[6px] flex">
                    <picture>
                        <img alt='right column icon' className="max-w-[26px] align-unset" src="https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_singlePlayer.png" />
                    </picture>    
                </div>
                <div className="text-[#66c0f4] pt-[6px] pb-[6px] pr-[8px] pl-[8px] h-full w-full bg-blue-rgba rounded-[1px] hover:bg-[#67c1f5] hover:text-[#fff]">Single-player</div>
            </a>
            <a className="mb-[2px] bg-black-rgba flex items-center" href="https://store.steampowered.com/search/?category2=22&snr=1_5_9__423">
                <div className="pt-0 pb-0 pr-[6px] pl-[6px] flex">
                    <picture>    
                        <img alt='right column icon' className="max-w-[26px] align-unset" src="https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_achievements.png" />
                    </picture>    
                </div>
                <div className="text-[#66c0f4] pt-[6px] pb-[6px] pr-[8px] pl-[8px] h-full w-full bg-blue-rgba rounded-[1px] hover:bg-[#67c1f5] hover:text-[#fff]">Steam Achievements</div>
            </a>
            <a className="mb-[2px] bg-black-rgba flex items-center" href="https://store.steampowered.com/search/?category2=28&snr=1_5_9__423">
                <div className="pt-0 pb-0 pr-[6px] pl-[6px] flex">
                    <picture>
                        <img alt='right column icon' className="max-w-[26px] align-unset" src="https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_controller.png" />
                    </picture>
                </div>
                <div className="text-[#66c0f4] pt-[6px] pb-[6px] pr-[8px] pl-[8px] h-full w-full bg-blue-rgba rounded-[1px] hover:bg-[#67c1f5] hover:text-[#fff]">Full controller support</div>
            </a>
            <a className="mb-[2px] bg-black-rgba flex items-center" href="https://store.steampowered.com/search/?category2=35&snr=1_5_9__423">
                <div className="pt-0 pb-0 pr-[6px] pl-[6px] flex">
                    <picture>
                        <img alt='right column icon' className="max-w-[26px] align-unset" src="https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_cart.png" />
                    </picture>
                </div>
                <div className="text-[#66c0f4] pt-[6px] pb-[6px] pr-[8px] pl-[8px] h-full w-full bg-blue-rgba rounded-[1px] hover:bg-[#67c1f5] hover:text-[#fff]">In-App Purchases</div>
            </a>
            <a className="mb-[2px] bg-black-rgba flex items-center" href="https://store.steampowered.com/search/?category2=23&snr=1_5_9__423">
                <div className="pt-0 pb-0 pr-[6px] pl-[6px] flex">
                    <picture>
                        <img alt='right column icon' className="max-w-[26px] align-unset" src="https://store.cloudflare.steamstatic.com/public/images/v6/ico/ico_cloud.png" />
                    </picture>
                </div>
                <div className="text-[#66c0f4] pt-[6px] pb-[6px] pr-[8px] pl-[8px] h-full w-full bg-blue-rgba rounded-[1px] hover:bg-[#67c1f5] hover:text-[#fff]">Steam Cloud</div>
            </a>
        </div>
    </div>
  )
}

export default GameFeatures