import React, { useState } from 'react'


const Header = () => {
  const [onHoverStore, setOnHoverStore] = useState(false); 
  const [onHoverComm, setOnHoverComm] = useState(false); 


  function storeClass() {
 return `overflow-none ${onHoverStore  ? 'bg-[#171a21] max-w-[132px] pt-[5px] pb-[10px] pl-[15px] pr-[15px] text-left  ' : 'hidden'}`
  }
 function commClass() {
  return `overflow-none ${onHoverComm  ? ' absolute z-[1500] opacity-1 left-[59px] top-[64px] bg-[#171a21] max-w-[132px] p-[10px]  text-left' : 'hidden'}`
  }

  
  return (
    <header className="bg-[#171a21] bg-center-top min-w-[940px] font-sans font-normal text-[14px] px-[16px]">
      {/* this div hold all the the stuff in the header */}
      <div className="relative h-[104px] w-[940px] mx-auto my-0 z-[402]">
        <div className="float-left pt-[30px] mr-[40px]">
          <img
            className="h-[44px] w-[176px]"
            src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
          />
        </div>
        {/* The second div here is for the options layed out next to the logo */}
        <div className="absolute left-[200px]">
          <a className="block hover:text-[#FFFFFF] relative pt-[45px] pb-[7px] pl-[7px] pr-[7px] float-left text-[14px] leading-[16px] uppercase text-[#b8b6b4]" onMouseEnter={() => setOnHoverStore(true) } onMouseLeave={() => setOnHoverStore(false)}>
            Store
          </a>
          <a className="block hover:text-[#FFFFFF] relative pt-[45px] pb-[7px] pl-[7px] pr-[7px] float-left text-[14px] leading-[16px] uppercase text-[#b8b6b4] " onMouseEnter={() => setOnHoverComm(true) } onMouseLeave={() => setOnHoverComm(false)}>
            Community
          </a>
          <a className="block hover:text-[#FFFFFF] relative pt-[45px] pb-[7px] pl-[7px] pr-[7px] float-left text-[14px] leading-[16px] uppercase text-[#b8b6b4]">
            About
          </a>
          {/*-------this is the hidden becuase its for Log IN  */}
          <a className="hidden block hover:text-[#FFFFFF] relative pt-[45px] pb-[7px] pl-[7px] pr-[7px] float-left text-[14px] leading-[16px] uppercase text-[#b8b6b4]">
            UserName Here
          </a>
          <a className="hidden block hover:text-[#FFFFFF]  relative pt-[45px] pb-[7px] pl-[7px] pr-[7px] float-left text-[14px] leading-[16px] uppercase text-[#b8b6b4]">
            Chat
          </a>
          {/* just the two above are hidden */}
          <a className="block hover:text-[#FFFFFF] relative pt-[45px] pb-[7px] pl-[7px] pr-[7px] float-left text-[14px] leading-[16px] uppercase text-[#b8b6b4]">
            Support
          </a>
          {/* -----Hidden hover for Store */}
          {/* the followig is the style of hover when appearinng */}
          {/* <div className=" absolute z-[1500] opacity-1 left-[1px] top-[64px] bg-[#171a21] max-w-[132px]
                  p-[10px] shadow-[3px_3px_5px_-3px_#000] text-left " ></div> */}
          <div className={storeClass()} onMouseEnter={() => setOnHoverStore(true) } onMouseLeave={() => setOnHoverStore(false)}>
            <div>
              <a className="block uppercase text-[11px] text-[#b8b6b4] pr-[10px]  py-[4px] no-underline hover:text-[#fff] ">
                Home
              </a>
              <a className="block uppercase text-[11px] text-[#b8b6b4] pr-[10px] py-[4px] no-underline hover:text-[#fff]">
                Discovery Queue
              </a>
              <a className="block uppercase text-[11px] text-[#b8b6b4] pr-[10px] py-[4px] no-underline  hover:text-[#fff] ">
                WishList
              </a>
              <a className="block uppercase text-[11px] text-[#b8b6b4] pr-[10px] py-[4px] no-underline  hover:text-[#fff]">
                Point Shop
              </a>
              <a className="block uppercase text-[11px] text-[#b8b6b4] pr-[10px] py-[4px] no-underline  hover:text-[#fff]">
                News
              </a>
              <a className="block uppercase text-[11px] text-[#b8b6b4] pr-[10px] py-[4px] no-underline hover:text-[#fff]">
                Stats
              </a>
              <a className="block uppercase text-[11px] text-[#b8b6b4] pr-[10px] py-[4px] no-underline hover:text-[#fff]">
                ABOUT
              </a>
            </div>
          </div>
          {/* --------Hidden hover for Community---- */}
          {/* the followig is the style of hover when appearinng */}
          {/* <div className=" absolute z-[1500] opacity-1 left-[59px] top-[64px] bg-[#171a21] max-w-[132px]
                  p-[10px] shadow-[3px_3px_5px_-3px_#000] text-left " ></div> */}
          <div className={commClass()} onMouseEnter={() => setOnHoverComm(true) } onMouseLeave={() => setOnHoverComm(false) }>
            <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] py-[4px] hover:text-[#fff]">
              Home
            </a>
            <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] py-[4px] hover:text-[#fff]">
              Discussions
            </a>
            <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] py-[4px] hover:text-[#fff]">
              Workshop
            </a>
            <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] py-[4px] hover:text-[#fff]">
              Market
            </a>
            <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] py-[4px] hover:text-[#fff]">
              Broadcast
            </a>
          </div>
          {/* --------Hidden hover for USERNAME ---- */}
          {/* the followig is the style of hover when appearinng */}
          {/* <div className=" absolute z-[1500] opacity-1 left-[159px] top-[64px] bg-[#171a21] max-w-[132px]
                  p-[10px] shadow-[3px_3px_5px_-3px_#000] text-left " ></div> */}
          <div className="hidden ">
            <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] ">
              Activity
            </a>
            <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] ">
              Profile
            </a>
            <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] ">
              Freinds
            </a>
            <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] ">
              Groups
            </a>
            <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] ">
              Content
            </a>
            <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] ">
              Badges
            </a>
            <a className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] ">
              Inventory
            </a>
          </div>
        </div>

        {/* this is the third div that containes the top right corner  and this div container has two div for each section */}
        <div className="absolute right-0 top-[6px] h-[21px] leading-[21px] text-[#b8b6b4] text-[11px] z-[401]">
          {/* this is the first div inside the the top corner div and it deals with the install, mail and username */}
          <div className="leading-[24px] align-top inline-block">
            {/* ----this us the LOG OUT version ------------------ */}
            <div className=" inline-block relative leading-[24px] mr-[3px]">
              <a className="bg-[#5c7e10] text-[#b8b6b4] inline-block pl-[35px] pr-[9px] bg-[bottom_5px_left_10px] bg-[url('https://store.akamai.steamstatic.com/public/shared/images/header/btn_header_installsteam_download.png?v=1')] bg-no-repeat leading-[24px] text-[11px] h-[24px] text-[#e5e4dc] hover:text-[#FFFFFF]"
              href='https://store.steampowered.com/about/'>
                Install Steam
              </a>
            </div>
            <a className="py-[0px] px-[4px] no-underline cursor-pointer leading-[24px] hover:text-[#FFFFFF]">
              login
            </a>
            &nbsp; |&nbsp;
            <button className=" inline-block pl-[4px] leading-[25px] mr-[5px] pr-[18px] bg-[url('https://store.akamai.steamstatic.com/public/shared/images/popups/btn_arrow_down_padded.png')] bg-no-repeat bg-[center_right] text-[12px] hover:text-[#FFFFFF]">
              language
            </button>
            {/* --------this is the log in version ----------------- */}
            <div className="hidden inline-block relative leading-[24px] mr-[3px]">
              <a className=" hidden inline-block pl-[35px] pr-[9px] bg-[bottom_5px_left_10px] bg-[#616a72] bg-[url('https://store.akamai.steamstatic.com/public/shared/images/header/btn_header_installsteam_download.png?v=1')] bg-no-repeat leading-[24px] text-[11px] h-[24px] text-[#e5e4dc] hover:text-[#FFFFFF]">
                Install Steam
              </a>
            </div>
            <div className=" hidden inline-block align-top leading-[21px] ">
              <div className=" hidden inline-block leading-[24px] my-0 mr-[3px] ml-[8px] px-[8px] py-[0px] bg-[#262625] hover:bg-[#575451]">
                <img
                  className=" hidden w-[12px] h-[10px] inline "
                  src="https://store.akamai.steamstatic.com/public/shared/images/responsive/header_menu_notifications.png "
                />
              </div>
            </div>
            <span className=" hidden inline-block pl-[4px] leading-[25px] mr-[5px] pr-[18px] bg-[url('https://store.akamai.steamstatic.com/public/shared/images/popups/btn_arrow_down_padded.png')] bg-no-repeat bg-[center_right] text-[12px] hover:text-[#FFFFFF]">
              username here
            </span>
          </div>
          {/* this is the second div that deals with the just the image logo */}
          <div className=" hidden inline-block relative ml-[3px] bg-[#555555]  h-[34px] w-[34px] p-[1px]">
            <img
              className="p-[1px] leading-[21px]"
              src="https://avatars.akamai.steamstatic.com/c34d6c555878a155a93565791de54510e36154bd.jpg"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
