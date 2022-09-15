import Header from "./Header"
import Footer from "./Footer"
import MainBody from './MainBody'
import ModalStyles from '../styles/Modal.module.css'
import { gamesState, carouselState, systemMinState, systemReqState, newsState } from "./state"
import { useRecoilState } from "recoil"
import React, {useEffect} from 'react'; 
import axios from 'axios'
import Link from 'next/link'

const Layout = ({children}) => {

  const [gamesInfo, setGamesInfo] = useRecoilState(gamesState)
  const [carouselInfo, setCarouselInfo] = useRecoilState(carouselState)
  const [systemMinInfo, setSystemMinInfo] = useRecoilState(systemMinState)
  const [newsInfo, setNewsInfo] = useRecoilState(newsState)
  const [systemReqInfo, setSystemReqInfo] = useRecoilState(systemReqState)


  useEffect(() => {
    axios.get('/api/carousel')
      .then(res => setCarouselInfo(res.data[0]));

    axios.get('/api/gameInfo')
      .then(res =>  setGamesInfo(res.data[0]));

    axios.get('/api/min')
      .then(res => setSystemMinInfo(res.data[0]));

    axios.get('/api/req')
      .then(res => setSystemReqInfo(res.data[0]));

    axios.get('/api/news')
      .then(res => setNewsInfo(res.data[0]));
  }, [])


  return (
    <>
      <div className="bg-[#1e2837]">
        <Header />
        {children}
        <Footer />
      </div>
      <div className="opacity-80 hidden z-[900] fixed bg-[#000000] top-0 left-0 bottom-0 right-0 p-0 m-0 font-sans text-[12px] text-[#c6d4df]"></div>
      <div className="fixed z-[1000] max-w-[998px] max-h-[762px] left-[50px] top-[134px] block font-sans text-[#c6d4df]">
        <div className={ModalStyles.modal_background}>
          <div className="h-[20px] hidden whitespace-nowrap text-ellipsis font-sans text-[12px]">
            <a
              className="decoration-0 text-[#fff] cursor-pointer whitespace-nowrap font-sans text-[12px]"
              href="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_725bf58485beb4aa37a3a69c1e2baa69bf3e4653.jpg?t=1661535551">
              <picture>
                <img alt='icon' src="https://store.cloudflare.steamstatic.com/public/images/v5/ico_external_link.gif"></img>
              </picture>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
