import Link from 'next/link'

const JoinSteam = () => {
  return (
    <div className="flex flex-row pt-[48px] items-center mr-auto ml-auto w-[100%] justify-center bg-[#181A21] text-[#E9E9E9] font-serif text-[12px] mb-[-107.5px] font-normal">
        <div className="flex-1 flex flex-col justify-center items-center text-center max-w-[200px] p-0 m-0 text-[#E9E9E9] font-serif font-normal text-[12px]">
            <div className="text-[14px] text-[#b8b6b4] p-0 m-0 block text-center font-serif font-normal">
                Join Steam and discover thousands of games to play.
            </div>
            <a className="max-w-[60%] text-center text-[14px] mt-[10px] text-[#fff] cursor-pointer font-normal font-serif" href="https://store.steampowered.com/about">
                Learn More
            </a>
        </div>
        <img alt='computer icon image' className="flex-1 flex flex-col justify-center items-center max-w-[200px] w-[320px]" src="https://store.cloudflare.steamstatic.com/public/shared/images/login/join_pc.png?v=1"></img>
        <div className="flex-1 flex flex-col justify-center items-center text-center max-w-[200px] mt-[20px] text-[#E9E9E9] font-serif font-normal text-[12px]">
            <Link href='/signup'>
            <a className="mt-[20px] mr-0 mb-[10px] ml-0 block text-center rounded-[2px] p-[1px] cursor-pointer text-[#fff] bg-transparent font-normal font-serif text-[12px]">
                <span className="py-0 px-[15px] text-[15px] leading-[30px] block bg-transparent border-[1px] border-solid border-[#ffffff66] rounded-[2px] cursor-pointer">Join Steam</span>
            </a>
            </Link>
            <div className="text-[14px] text-[#b8b6b4] block text-center font-normal font-serif">
                {"It's free and easy to use."}
            </div>
        </div>
    </div>
  )
}

export default JoinSteam