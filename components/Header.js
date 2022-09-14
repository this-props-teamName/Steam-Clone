import React, { useState } from 'react'
import LangStyle from '../styles/header.module.css'
import Link from 'next/link'; 


const Header = () => {
  const [onHoverStore, setOnHoverStore] = useState(false); 
  const [onHoverComm, setOnHoverComm] = useState(false);
  const [onLangMenu, setOnLangMenu] = useState(false);

  function storeClass() {
    return `overflow-none ${onHoverStore  ? 'bg-[#171a21] max-w-[132px] pt-[5px] pb-[10px] pl-[15px] pr-[15px] text-left  ' : 'hidden'}`
  }
  function commClass() {
    return `overflow-none ${onHoverComm  ? ' absolute z-[1500] opacity-1 left-[59px] top-[64px] bg-[#171a21] max-w-[132px] p-[10px]  text-left' : 'hidden'}`
  }
  function langMenu() {
    return `${onLangMenu ? 'block top-[25px] -left-[72.3203px] opacity-100 align-top z-200 absolute shadow-[0_0_12px_#000000]' : 'hidden'}`
  }

  return (
    <header className="bg-[#171a21] bg-center-top min-w-[940px] font-sans font-normal text-[14px] px-[16px]">
      {/* this div hold all the the stuff in the header */}
      <div className="relative h-[104px] w-[940px] mx-auto my-0 z-[402] ">
        <div className="float-left pt-[30px] mr-[40px] ">
          <Link href="/" passHref>
            <a href="https://store.steampowered.com/">
              <img
                className="h-[44px] w-[176px]cursor-pointer"
                alt='header steam icon'
                src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
              />
            </a>
          </Link>
        </div>
        {/* The second div here is for the options layed out next to the logo */}
        <div className="absolute left-[200px]">
          <a
            className="block hover:text-[#FFFFFF] relative pt-[45px] pb-[7px] pl-[7px] pr-[7px] float-left text-[14px] leading-[16px] uppercase text-[#b8b6b4]"
            onMouseEnter={() => setOnHoverStore(true)}
            onMouseLeave={() => setOnHoverStore(false)}>
            Store
          </a>
          <a
            className="block hover:text-[#FFFFFF] relative pt-[45px] pb-[7px] pl-[7px] pr-[7px] float-left text-[14px] leading-[16px] uppercase text-[#b8b6b4] "
            href="https://steamcommunity.com/"
            onMouseEnter={() => setOnHoverComm(true)}
            onMouseLeave={() => setOnHoverComm(false)}>
            Community
          </a>
          <a
            className="block hover:text-[#FFFFFF] relative pt-[45px] pb-[7px] pl-[7px] pr-[7px] float-left text-[14px] leading-[16px] uppercase text-[#b8b6b4]"
            href="https://store.steampowered.com/about/">
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
          <a
            className="block hover:text-[#FFFFFF] relative pt-[45px] pb-[7px] pl-[7px] pr-[7px] float-left text-[14px] leading-[16px] uppercase text-[#b8b6b4]"
            href="https://help.steampowered.com/en/"
          >
            Support
          </a>
          {/* -----Hidden hover for Store */}
          {/* the followig is the style of hover when appearinng */}
          <div
            className={storeClass()}
            onMouseEnter={() => setOnHoverStore(true)}
            onMouseLeave={() => setOnHoverStore(false)}>
            <div>
              <a
                className="block uppercase text-[11px] text-[#b8b6b4] pr-[10px]  py-[4px] no-underline hover:text-[#fff] "
                href="https://store.steampowered.com/">
                Home
              </a>
              <a
                className="block uppercase text-[11px] text-[#b8b6b4] pr-[10px] py-[4px] no-underline hover:text-[#fff] whitespace-nowrap"
                href="https://store.steampowered.com/login/?redir=explore%2F%3Fsnr%3D1_4_4__global-header&redir_ssl=1&snr=1_4_4__global-header">
                Discovery Queue
              </a>
              <a
                className="block uppercase text-[11px] text-[#b8b6b4] pr-[10px] py-[4px] no-underline  hover:text-[#fff] "
                href="https://steamcommunity.com/login/home/?goto=%2Fmy%2Fwishlist%2F">
                WishList
              </a>
              <a
                className="block uppercase text-[11px] text-[#b8b6b4] pr-[10px] py-[4px] no-underline  hover:text-[#fff]"
                href="https://store.steampowered.com/points/shop/">
                Point Shop
              </a>
              <a
                className="block uppercase text-[11px] text-[#b8b6b4] pr-[10px] py-[4px] no-underline  hover:text-[#fff]"
                href="https://store.steampowered.com/news/">
                News
              </a>
              <a
                className="block uppercase text-[11px] text-[#b8b6b4] pr-[10px] py-[4px] no-underline hover:text-[#fff]"
                href="https://store.steampowered.com/stats/" >
                Stats
              </a>
            </div>
          </div>
          {/* --------Hidden hover for Community---- */}
          <div
            className={commClass()}
            onMouseEnter={() => setOnHoverComm(true)}
            onMouseLeave={() => setOnHoverComm(false)} >
            <a
              className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] py-[4px] hover:text-[#fff]"
              href="https://steamcommunity.com/" >
              Home
            </a>
            <a
              className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] py-[4px] hover:text-[#fff]"
              href="https://steamcommunity.com/discussions/" >
              Discussions
            </a>
            <a
              className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] py-[4px] hover:text-[#fff]"
              href="https://steamcommunity.com/workshop/" >
              Workshop
            </a>
            <a
              className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] py-[4px] hover:text-[#fff]"
              href="https://steamcommunity.com/market/" >
              Market
            </a>
            <a
              className="block no-underline uppercase text-[11px] text-[#b8b6b4] pr-[10px] py-[4px] hover:text-[#fff]"
              href="https://steamcommunity.com/?subsection=broadcasts" >
              Broadcast
            </a>
          </div>
          {/* --------Hidden hover for USERNAME ---- */}
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
              <a
                className="bg-[#5c7e10] text-[#b8b6b4] inline-block pl-[35px] pr-[9px] bg-[bottom_5px_left_10px] bg-[url('https://store.akamai.steamstatic.com/public/shared/images/header/btn_header_installsteam_download.png?v=1')] bg-no-repeat leading-[24px] text-[11px] h-[24px] text-[#e5e4dc] hover:text-[#FFFFFF]"
                href="https://store.steampowered.com/about/" >
                Install Steam
              </a>
            </div>
            <Link href="/login" passHref>
              <a className="py-[0px] px-[4px] no-underline cursor-pointer leading-[24px] hover:text-[#FFFFFF]">
                login
              </a>
            </Link>
            &nbsp; |&nbsp;
            <button
              className=" inline-block pl-[4px] leading-[25px] mr-[5px] pr-[18px] bg-[url('https://store.akamai.steamstatic.com/public/shared/images/popups/btn_arrow_down_padded.png')] bg-no-repeat bg-[center_right] text-[12px] hover:text-[#FFFFFF]"
              onClick={() => setOnLangMenu(!onLangMenu)} >
              language
            </button>
            <div className={langMenu()}>
              <div className="pt-1.5 pr-0 pb-1.5 pl-0 border-[#171a21] border-solid border-[0px] relative bg-[#171a21]">
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/_/?l=schinese" >
                  简体中文 (Simplified Chinese)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/_/?l=tchinese" >
                  繁體中文 (Traditional Chinese)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/_/?l=japanese" >
                  日本語 (Japanese)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/_/?l=koreana"  >
                  한국어 (Korean)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/Hogwarts_Legacy/?l=thai" >
                  ไทย (Thai)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/Hogwarts_Legacy/?l=bulgarian" >
                  Български (Bulgarian)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/Hogwarts_Legacy/?l=czech" >
                  Čeština (Czech)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/Hogwarts_Legacy/?l=danish" >
                  Dansk (Danish)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/Hogwarts_Legacy/?l=german" >
                  Deutsch (German)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/Hogwarts_Legacy/?l=spanish" >
                  Español - España (Spanish - Spain)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/Hogwarts_Legacy/?l=latam" >
                  Español - Latinoamérica (Spanish - Latin America)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/Hogwarts_Legacy/?l=greek"  >
                  Ελληνικά (Greek)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/Hogwarts_Legacy_LHritage_de_Poudlard/?l=french" >
                  Français (French)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/Hogwarts_Legacy/?l=italian" >
                  Italiano (Italian)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/Hogwarts_Legacy/?l=hungarian" >
                  Magyar (Hungarian)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/Hogwarts_Legacy/?l=dutch" >
                  Nederlands (Dutch)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/Hogwarts_Legacy/?l=norwegian" >
                  Norsk (Norwegian)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/Dziedzictwo_Hogwartu/?l=polish" >
                  Polski (Polish)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/Hogwarts_Legacy/?l=portuguese" >
                  Português (Portuguese - Portugal)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/Hogwarts_Legacy/?l=brazilian" >
                  Português - Brasil (Portuguese - Brazil)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/Hogwarts_Legacy/?l=romanian" >
                  Română (Romanian)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/_/?l=russian" >
                  Русский (Russian)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/Hogwarts_Legacy/?l=finnish" >
                  Suomi (Finnish)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/Hogwarts_Legacy/?l=swedish" >
                  Svenska (Swedish)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/Hogwarts_Legacy/?l=turkish" >
                  Türkçe (Turkish)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/Hogwarts_Legacy/?l=vietnamese" >
                  Tiếng Việt (Vietnamese)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://store.steampowered.com/app/990080/Hogwarts_Legacy/?l=ukrainian" >
                  Українська (Ukrainian)
                </a>
                <a
                  className={LangStyle.langWindow}
                  href="https://www.valvesoftware.com/en/contact?contact-person=Translation%20Team%20Feedback"  >
                  Report a translation problem
                </a>
              </div>
            </div>
            {/* --------this is the log in version ----------------- */}
            <div className="hidden inline-block relative leading-[24px] mr-[3px]">
              <a className=" hidden inline-block pl-[35px] pr-[9px] bg-[bottom_5px_left_10px] bg-[#616a72] bg-[url('https://store.akamai.steamstatic.com/public/shared/images/header/btn_header_installsteam_download.png?v=1')] bg-no-repeat leading-[24px] text-[11px] h-[24px] text-[#e5e4dc] hover:text-[#FFFFFF]">
                Install Steam
              </a>
            </div>
            <div className=" hidden inline-block align-top leading-[21px] ">
              <div className=" hidden inline-block leading-[24px] my-0 mr-[3px] ml-[8px] px-[8px] py-[0px] bg-[#262625] hover:bg-[#575451]">
                <picture>
                  <img
                    className=" hidden w-[12px] h-[10px] inline"
                    alt='mail icon'
                    src="https://store.akamai.steamstatic.com/public/shared/images/responsive/header_menu_notifications.png "
                  />
                </picture>  
              </div>
            </div>
            <span className=" hidden inline-block pl-[4px] leading-[25px] mr-[5px] pr-[18px] bg-[url('https://store.akamai.steamstatic.com/public/shared/images/popups/btn_arrow_down_padded.png')] bg-no-repeat bg-[center_right] text-[12px] hover:text-[#FFFFFF]">
              username here
            </span>
          </div>
          {/* this is the second div that deals with the just the image logo */}
          <div className=" hidden inline-block relative ml-[3px] bg-[#555555]  h-[34px] w-[34px] p-[1px]">
            <picture>
              <img
                className="p-[1px] leading-[21px]"
                alt='user profil icon'
                src="https://avatars.akamai.steamstatic.com/c34d6c555878a155a93565791de54510e36154bd.jpg"
              />
            </picture>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
