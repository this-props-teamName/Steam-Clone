import React from 'react'
import { gamesState } from './state'
import { useRecoilState } from 'recoil'

const GamePageAutoCollapseAbout = () => {
  const [gamesInfo, setGamesInfo] = useRecoilState(gamesState);

  if (gamesInfo.about) {
    return (
      <div className='relative' >
        <div className='overflow-hidden ' >
          <div className='leading-[1.5rem] text-[14px] mt-[30px] overflow-hidden font-sans font-normal ' ></div>
            <h2 className='font-sans text-[14-x] uppercase text-[#fff] mb-[10px] tracking-[0.03em] font-normal pt-[2px]' >
              About This Game
              <picture>
                <img alt='gradient line' className='leading-[26px] bg-no-repeat bg-left-bottom ' src='https://store.cloudflare.steamstatic.com/public/images/v6/maincol_gradient_rule.png'/>
              </picture>  
            </h2>
            {gamesInfo.about[0]} <br/> <br/>
            {gamesInfo.about[1]}
          </div>
      </div>
    )
  }
}

export default GamePageAutoCollapseAbout