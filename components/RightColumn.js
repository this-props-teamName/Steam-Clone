import React from 'react'
import GameRelevance from './GameRelevance'
import GameFeatures from './GameFeatures'
import SupportedLanguages from './SupportedLanguages'
import Ratings from './Ratings'
import Details from './Details'
import rightColumnStyles from '../styles/RightColumn.module.css'
import EmbedRow from './EmbedRow'



export const RightColumn = () => {


  return (
    // Make sure to put gradients on all parent divs
    <div className="mt-[16px] overflow-hidden w-[308px] ml-[14px] float-right grid-flow-col">
      {/* responsive_apppage_details_left_ctn */}
      <div></div>
      <div className={rightColumnStyles.rightColumn}>Is this game relevant to you?</div>
      {/* following div is for if they are NOT logged in */}
      <GameRelevance/>
      <GameFeatures/>
      <SupportedLanguages/>
      <Ratings/>
      <Details/>
      <EmbedRow/>
    </div>
  )
}


export default RightColumn;
