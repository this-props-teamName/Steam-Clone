import React from 'react'
import GameAreaPurchase from './GameAreaPurchase'
import GameEvents from './GameEvents'
import GamePageAutoCollapseDeluxe from './GamePageAutoCollapseDeluxe'
import GamePageAutoCollapseAbout from './GamePageAutoCollapseAbout'
import GameSystemRequirements from './GameSystemRequirements'
import RecommendedBlock from './RecommendedBlock'
import SteamCuratorsBlock from './SteamCuratorsBlock'

const LeftColumn = () => {
  return (
    <div className='w-[616px] float-left text-[14px] text-[#acb2b8] mt-[16px]'>
        <GameAreaPurchase/>
        {/* bannerCommunity */}
        {/* put the spacer div */}
        {/* script tag */}
        <div>&nbsp;</div>
        <GameEvents/>
        {/* GamePageAutoCollapse Contains deluxe edition details collapsed */}
        <GamePageAutoCollapseDeluxe/>
        <div id="contentForThisGame"></div>
        <GamePageAutoCollapseAbout/>
        <GameSystemRequirements/>
        {/* script tag */}
        {/* div below is for "hogwarts legacy software etc bs" */}
        <div></div>
        <RecommendedBlock/>
        {/* div below responsive apppage reviewblock bs */}
        <div></div>
        <SteamCuratorsBlock/>
        <div className="clear-both"></div>
    </div>
  )
}

export default LeftColumn;