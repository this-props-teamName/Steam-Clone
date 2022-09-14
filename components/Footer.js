const Footer = () => {
  return (
    <>
      {/* footer spacer */}
      <div className="h-[107.5px]"></div>
      {/* footer */}
      <footer className="bg-[#171A21] h-[182px] w-full font-sans left-0 right-0 bottom-0 pt-[16px] pr-[0px] pb-[60px] pl-[0px]">
          {/* footer content */}
          <div className="w-[940px] m-auto pt-[16px]">
            {/* rule */}
            <div className="h-[8px] border-t-[1px] border-solid border-[#363c44]"></div>
            {/* steamLogo */}
            <div className="float-right pt-[2px]">
              <picture>
                <img className="border-0" src="https://store.akamai.steamstatic.com/public/images/v6/logo_steam_footer.png" alt="Valve Software"/>
              </picture>
            </div>
            {/* Valve Logo */}
            <div className="float-left pt-[2px]">
              <a href="http://www.valvesoftware.com" target="_blank" rel="noreferrer">
                <picture>
                  <img className="border-0 h-[25px] w-auto" src="https://store.akamai.steamstatic.com/public/images/footerLogo_valve_new.png" alt="Valve Software" />
                </picture>
              </a>
            </div>
            {/* Footer Text */}
            <div className="float-left ml-[12px] text-[#8F98A0] text-[12px] leading-[16px]">
              <div>
                © 2022 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
              </div>
              <div>
                VAT included in all prices where applicable.&nbsp;&nbsp;
                <a className="text-[#C6D4DF] hover:text-[#fff]" href="https://store.steampowered.com/privacy_agreement/?snr=1_44_44_" target="_blank" rel="noreferrer">Privacy Policy</a>
                &nbsp; | &nbsp;
                <a className="text-[#C6D4DF] hover:text-[#fff]" href="https://store.steampowered.com/legal/?snr=1_44_44_" target="blank" rel="noreferrer">Legal</a>
                &nbsp; | &nbsp;
                <a className="text-[#C6D4DF] hover:text-[#fff]" href="https://store.steampowered.com/subscriber_agreement/?snr=1_44_44_" target="blank" rel="noreferrer">Steam Subscriber Agreement</a>
                &nbsp; | &nbsp;
                <a className="text-[#C6D4DF] hover:text-[#fff]" href="https://store.steampowered.com/steam_refunds/?snr=1_44_44_" target="blank" rel="noreferrer">Refunds</a>
                &nbsp; | &nbsp;
                <a className="text-[#C6D4DF] hover:text-[#fff]" href="https://store.steampowered.com/cookiepreferences/?snr=1_44_44_" target="blank" rel="noreferrer">Cookies</a>
              </div>
            </div>
            {/*  */}
            <div className="clear-left"></div>
            <br/>
            {/* rule */}
            <div className="h-[8px] border-t-[1px] border-solid border-[#363c44]"></div>
            {/* valve links */}
            <div className="flex mt-[8px] float-left font-serif font-normal text-[13px] text-[#61686D]">
              <a className="text-[#C6D4DF] hover:text-[#fff]" href="http://www.valvesoftware.com/about" target="_blank" rel="noreferrer">About Valve</a>
              &nbsp; | &nbsp;
              <a className="text-[#C6D4DF] hover:text-[#fff]" href="http://www.valvesoftware.com" target="_blank" rel="noreferrer">Jobs</a>
              &nbsp; | &nbsp;
              <a className="text-[#C6D4DF] hover:text-[#fff]" href="http://www.steampowered.com/steamworks/" target="_blank" rel="noreferrer">Steamworks</a>
              &nbsp; | &nbsp;
              <a className="text-[#C6D4DF] hover:text-[#fff]" href="https://partner.steamgames.com/steamdirect" target="_blank" rel="noreferrer">Steam Distribution</a>
              &nbsp; | &nbsp;
              <a className="text-[#C6D4DF] hover:text-[#fff]" href="https://help.steampowered.com/en/?snr=1_44_44_">Support</a>
              &nbsp; | &nbsp;
              <a className="text-[#C6D4DF] hover:text-[#fff]" href="https://store.steampowered.com/digitalgiftcards/?snr=1_44_44_" target="_blank" rel="noreferrer">Gift Cards</a>
              &nbsp; | &nbsp;
                <a className="text-[#C6D4DF] flex flex-nowrap" href="https://steamcommunity.com/linkfilter/?url=http://www.facebook.com/Steam" target="_blank" rel="noreferrer">
                  <picture>
                    <img className="align-bottom border-none m-0 p-0 h-[16px] w-[16px]" alt='small social media icon' src="https://store.akamai.steamstatic.com/public/images/ico/ico_facebook.gif" />
                  </picture>
                   Steam
                </a>
                &nbsp; | &nbsp;
                <a className="text-[#C6D4DF] flex flex-nowrap" href="http://twitter.com/steam" target="_blank" rel="noreferrer">
                  <picture>
                    <img className="align-bottom border-none m-0 p-0 h-[16px] w-[16px]" alt='small social media icon' src="https://store.akamai.steamstatic.com/public/images/ico/ico_twitter.gif" />
                  </picture>
                  @steam
                </a>
            </div>
          </div>
      </footer>
    </>
  )
}

export default Footer