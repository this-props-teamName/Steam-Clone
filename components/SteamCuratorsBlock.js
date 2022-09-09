import React from 'react'

const SteamCuratorsBlock = () => {
  return (
    <div className='mt-[50px] mr-0 mb-[30px] ml-0 text-[14px] text-[#acb2b8] font-sans'>
      <div className='p-0 m-0 block text-[14px] text-[#acb2b8] font-sans'>
        <div className=' mt-0 ml-0 mb-0 mr-[3px] block text-[14px] text-[#acb2b8] font-sans'>
          <a className='float-right bg-[#67c1f533] rounded-[1px] text-[#67c1f5] text-[11px] px-[4px] py-[2px] decoration-0 cursor-pointer font-sans hover:text-[#fff] hover:bg-[#67c1f5]' href='https://store.steampowered.com/curators/curatorsreviewing/?appid=990080&snr=1_5_9__top-curators'>View all</a>
        </div>
        <h2 className='font-serif text-[#14px] uppercase text-[#fff] mx-0 mt-0 mb-[10px] tracking-[0.03em] pt-[2px] leading-[26px] bg-[url("https://store.cloudflare.steamstatic.com/public/images/v6/maincol_gradient_rule.png")] bg-no-repeat bg-left-bottom'>What Curators Say</h2>
        <div className='p-[20px] bg-[#00000033] text-[14px] text-[#acb2b8] font-sans'>
           {' 55 Curators have reviewed this product. Click '} 
          <a className='decoration-0 text-[#fff] cursor-pointer text-[14px] font-sans hover:text-[#67c1f5]' href='https://store.steampowered.com/curators/curatorsreviewing/?appid=990080&snr=1_5_9__top-curators'>here</a>
          {' to see them. '}
        </div>
      </div>
    </div>
  )
}

export default SteamCuratorsBlock