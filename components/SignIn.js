import styles from '../styles/SignIn.module.css'

const SignIn = () => {
  return (
    <div className="p-0 m-0 block text-[#E9E9E9] font-normal text-[12px] font-serif">
        <div className="pt-[80px] pb-[150px] flex flex-col items-center text-[#E9E9E9] font-serif font-normal text-[12px]">
            <div className="relative block text-[#E9E9E9] font-normal text-[12px]">
                <div className="gap-[32px] w-[100%] flex flex-col font-normal text-[12px]">
                    <div className="flex flex-col gap-[8px] my-[8px] mx-[16px] font-normal font-serif text-[#E9E9E9] text-[12px]">
                        <div className="text-[#fff] text-[32px] uppercase tracking-[0.055em] font-[200] block font-serif">
                            Sign in
                        </div>
                    </div>
                    <div className="bg-[#181a21] rounded-[4px] py-[24px] px-[32px] min-w-[636px] flex-1 block text-[12px] font-normal">
                        <div className="flex flex-row flex-1 text-[12px] font-normal font-serif text-[#E9E9E9]">
                            <form className="flex-1 grid gap-[12px] grid-cols-1 text-[#E9E9E9] font-serif font-normal text-[12px]">
                                <div className={styles.accountName}>
                                    <div className='text-[#1999ff] font-[500] text-[12px] font-serif uppercase tracking-[0.02em] select-none block'>
                                        Sign in with account name
                                    </div>
                                    <input type='text' className={styles.signInInput}></input>
                                </div>
                                <div className={styles.passwordField}>
                                    <div className='text-[12px] text-[#afafaf] uppercase tracking-[0.02em] select-none block'>
                                        Password
                                    </div>
                                    <input type='password' className={styles.signInInput}></input>
                                </div>
                                <div className='flex flex-row items-center cursor-pointer text-[#E9E9E9] font-serif font-normal text-[12px]'>
                                    <input type='checkbox' className='pt-[80px] pb-[150px] flex flex-col items-center text-[#E9E9E9] font-normal font-serif text-[12px] cursor-pointer'></input>
                                    <div className='text-[#afafaf] text-[12px] select-none pl-[6px] block cursor-pointer font-normal font-serif'>
                                        Remember me
                                    </div>
                                </div>
                                <div className='flex flex-col items-center p-0 m-0 text-[#E9E9E9] font-serif font-normal text-[12px]'>
                                    <button type='submit' className={styles.signInBtn}>Sign in</button>
                                </div>
                                <div className='text-[#c15755] text-[12px] font-[500] text-center'>&nbsp;</div>
                                <a className='text-center text-[#afafaf] text-[12px] underline cursor-pointer font-serif font-normal' href='https://help.steampowered.com/wizard/HelpWithLogin?redir=https%3A%2F%2Fstore.steampowered.com%2Flogin%2F%3Fredir%3Dapp%252F990080%252FHogwarts_Legacy%252F%26redir_ssl%3D1%26snr%3D1_5_9__global-header'>
                                    {"Help, I can't sign in"}
                                </a>
                            </form>
                            <div className='ml-[24px] gap-[4px] grid shrink-1 grow-0 basis-[0%] font-normal font-serif text-[#E9E9E9] text-[12px]'>
                                <div className='flex flex-col items-start w-[200px] text-[#E9E9E9] font-serif font-normal text-[12px]'>
                                    <div className='text-[#1999ff] font-[500] text-[12px] leading-[16px] my-[6px] mx-0 uppercase tracking-[0.02em] p-0 block font-serif'>
                                        New Beta Feature
                                    </div>
                                    <div className='flex flex-row items-center py-[8px] px-0 m-0 text-[#E9E9E9] font-serif font-normal text-[12px]'>
                                        <svg className='w-[120px] fill-[#afafaf] h-[52px] p-0 m-0 overflow-hidden font-serif font-normal text-[12px]'>
                                            <path fillRule='evenodd' clipRule='evenodd' d="M0.993001 3.2C0.993001 2.0799 0.993001 1.51984 1.21099 1.09202C1.40273 0.715695 1.7087 0.409734 2.08502 0.217987C2.51284 0 3.0729 0 4.193 0H29.793C30.9131 0 31.4732 0 31.901 0.217987C32.2773 0.409734 32.5833 0.715695 32.775 1.09202C32.993 1.51984 32.993 
                                                2.0799 32.993 3.2V48.8C32.993 49.9201 32.993 50.4802 32.775 50.908C32.5833 51.2843 32.2773 51.5903 31.901 51.782C31.4732 52 30.9131 52 29.793 52H4.193C3.0729 52 2.51284 52 2.08502 51.782C1.7087 51.5903 1.40273 51.2843 1.21099 50.908C0.993001 50.4802 0.993001 49.9201 0.993001 48.8V3.2ZM33 
                                                19.2967C33 19.1328 33.1328 19 33.2967 19C33.4606 19 33.5934 19.1328 33.5934 19.2967V25.8924C33.5934 26.0563 33.4606 26.1891 33.2967 26.1891C33.1328 26.1891 33 26.0563 33 25.8924V19.2967ZM0.690255 12.8531C0.854118 12.8531 0.986956 12.986 0.986956 13.1498V14.735C0.986956 14.8988 0.854118 15.0317 
                                                0.690255 15.0317C0.526392 15.0317 0.393555 14.8988 0.393555 14.735V13.1498C0.393555 12.986 0.526392 12.8531 0.690255 12.8531ZM0.986956 23.8975C0.986956 23.7337 0.854118 23.6008 0.690255 23.6008C0.526392 23.6008 0.393555 23.7337 0.393555 23.8975V27.8064C0.393555 27.9703 0.526392 28.1031 0.690255 
                                                28.1031C0.854118 28.1031 0.986956 27.9703 0.986956 27.8064V23.8975ZM0.690255 17.3557C0.854118 17.3557 0.986956 17.4886 0.986956 17.6524V21.5613C0.986956 21.7252 0.854118 21.858 0.690255 21.858C0.526392 21.858 0.393555 21.7252 0.393555 21.5613V17.6524C0.393555 17.4886 0.526392 17.3557 0.690255 17.3557Z">
                                            </path>
                                            <path className='fill-[#32353c]' fillRule='evenodd' clipRule='evenodd' d="M3.10899 2.54601C3 2.75992 3 3.03995 3 3.6V48.4C3 48.9601 3 49.2401 3.10899 49.454C3.20487 49.6422 3.35785 49.7951 3.54601 49.891C3.75992 50 4.03995 50 4.6 50H29.4C29.9601 50 30.2401 50 30.454 49.891C30.6422 49.7951 30.7951 49.6422 30.891 49.454C31 49.2401 31 
                                                48.9601 31 48.4V3.6C31 3.03995 31 2.75992 30.891 2.54601C30.7951 2.35785 30.6422 2.20487 30.454 2.10899C30.2401 2 29.9601 2 29.4 2H23C22.9469 2 22.8965 2.0232 22.8562 2.06277C22.7957 2.12213 22.7857 2.22585 22.7855 2.32129C22.7839 3.09871 22.7694 3.51909 22.6437 3.85908C22.4867 4.28385 22.2109 4.63059 
                                                21.8671 4.82458C21.5561 5 21.1565 5 20.3571 5H13.6429C12.8435 5 12.4439 5 12.1329 4.82458C11.7891 4.63059 11.5133 4.28385 11.3563 3.85908C11.2306 3.51909 11.2161 3.09871 11.2145 2.32129C11.2143 2.22585 11.2043 2.12213 11.1438 2.06277C11.1035 2.0232 11.0531 2 11 2H4.6C4.03995 2 3.75992 2 3.54601 
                                                2.10899C3.35785 2.20487 3.20487 2.35785 3.10899 2.54601Z">
                                            </path>
                                            <g clipPath='url(#clip0_1079_5430) fill-[#afafaf] text-[#E9E9E9] font-serif font-normal text-[12px]'>
                                            <path className='fill-[#AFAFAF]' fillRule='evenodd' clipRule='evenodd'
                                                    d="">
                                                </path>
                                            </g>
                                            <defs>
                                                <clipPath id='clip0_1079_5430'>
                                                    <rect width='22' height='22' fill='currentColor' transform="translate(6 14)">
                                                    </rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <div className='font-[400] text-[12px] leading-[16px] text-[#afafaf] m-[8px] p-0 block font-serif'>
                                            Steam Mobile App beta testers can sign in by scanning a QR code.
                                        </div>
                                    </div>
                                    <a href='https://steamcommunity.com/groups/SteamMobileApp' className='bg-[#ffffff1a] rounded-[2px] font-[700] text-[12px] leading-[20px] text-center text-[#fff] py-[8px] px-[16px] m-0 cursor-pointer font-serif'>
                                        Learn more
                                    </a>
                                    <div className='text-center underline font-[400] text-[12px] leading-[24px] text-[#afafaf] py-[12px] px-0 cursor-pointer m-0 block font-serif'>
                                        {"I'm in the beta, show me a QR code"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn