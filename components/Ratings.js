import React from 'react'
import ratingsStyles from '../styles/RightColumn.module.css'
import { gamesState } from './state'
import { useRecoilState } from 'recoil'

const Ratings = () => {
  const [gamesInfo, setGamesInfo] = useRecoilState(gamesState)

  if (gamesInfo.length !== 0) {
    return (
      <div className={ratingsStyles.ratings}>
          <div className="hidden">Ratings</div>
          <div className="text-[#c6d4df] text-[12px] block">
            <div className="flex">
              <div className="mr-[10px] block">
                <picture>
                  <img alt='' src={gamesInfo.rating}/>
                </picture>
              </div>
              <div></div>
            </div>
            <div className="mt-[8px] block">Rating for: ESRB</div>
          </div>
      </div>
    )
  }
}

export default Ratings