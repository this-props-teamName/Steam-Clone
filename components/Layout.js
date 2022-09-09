import Header from "./Header"
import Footer from "./Footer"
import MainBody from './MainBody'
import ModalStyles from '../styles/Modal.module.css'
import { gamesState, carouselState, systemMinState, systemReqState, commentsState } from "./state"
import { useRecoilState } from "recoil"
import React, {useEffect} from 'react'; 
import axios from 'axios'
import Link from 'next/link'

const Layout = ({children}) => {

const [gamesInfo, setGamesInfo] = useRecoilState(gamesState)
const [carouselInfo, setCarouselInfo] = useRecoilState(carouselState)
const [systemMinInfo, setSystemMinInfo] = useRecoilState(systemMinState)
const [commentsInfo, setCommentsInfo] = useRecoilState(commentsState)
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

  axios.get('/api/comments')
    .then(res => setCommentsInfo(res.data[0]));
}, [])


  return (
    <>
      <Header/>
      <div className="bg-[#1e2837]">
          <div className='min-w-[972px] bg-no-repeat bg-[top_center] bg-[url("https://cdn.cloudflare.steamstatic.com/steam/apps/990080/page_bg_generated_v6b.jpg?t=1661535551")]'>
            <MainBody /> {children}
          </div>
        </div>
      <Footer/>
      <div className="opacity-80 hidden z-[900] fixed bg-[#000000] top-0 left-0 bottom-0 right-0 p-0 m-0 font-sans text-[12px] text-[#c6d4df]"></div>
      <div className="fixed z-[1000] max-w-[998px] max-h-[762px] left-[50px] top-[134px] block font-sans text-[#c6d4df]">
        <div className={ModalStyles.modal_background}>
          <div className="h-[20px] hidden whitespace-nowrap text-ellipsis font-sans text-[12px]">
            <a className="decoration-0 text-[#fff] cursor-pointer whitespace-nowrap font-sans text-[12px]" href="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_725bf58485beb4aa37a3a69c1e2baa69bf3e4653.jpg?t=1661535551">
              <img src="https://store.cloudflare.steamstatic.com/public/images/v5/ico_external_link.gif"></img>
            </a>
          </div>
          <div>
            {/* these images are scaled based on screen size take original image size and try multiply it by 80% then make a ratio of screen size to image size */}
            <img className='opacity-100 max-w-[948px] hidden max-h-[688px] cursor-pointer border-0' src='https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_725bf58485beb4aa37a3a69c1e2baa69bf3e4653.1920x1080.jpg?t=1661535551' />
            <img className='cursor-pointer hidden' src="https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_df93b5e8a183f7232d68be94ae78920a90de1443.1920x1080.jpg?t=1661535551" />
          </div>
          <div className="relative h-[28px] leading-[28px] mt-[10px] text-center whitespace-nowrap hidden text-ellipsis font-sans text-[12px]">
            <div className="p-0 m-0 leading-[28px] text-center whitespace-nowrap font-sans text-[12px]">1 of 5 screenshots</div>
            <div className={ModalStyles.modal_btns}>
              <span className="leading-[26px] py-0 px-[15px] text-[15px] rounded-[2px] bg-transparent text-[#67c1f5] cursor-pointer text-center whitespace-nowrap">Prev</span>
            </div>
            <div className="absolute right-0 top-0 rounded-[2px] border-0 p-[1px] inline-block cursor-pointer decoration-0 text-[#67c1f5] bg-[#67c1f533] leading-[28px] text-center whitespace-nowrap font-sans text-[12px]">
              <span className="py-0 px-[15px] text-[15px] rounded-[2px] bg-transparent cursor-pointer text-[#67c1f5] text-center whitespace-nowrap font-sans">Next</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
