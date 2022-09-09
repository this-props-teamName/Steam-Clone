import { systemMinState, systemReqState } from './state';
import { useRecoilState } from 'recoil'

const GameSystemRequirements = () => {

  const [systemMinInfo, setSystemMinInfo] = useRecoilState(systemMinState)
  const [systemReqInfo, setSystemReqInfo] = useRecoilState(systemReqState)

  

  if(systemMinInfo.copy_write) {
  return (
    <>
    <div className='relative text-[14px] text-[#acb2b8]'>
      <div className='mt-[30px] overflow-hidden max-h-max font-sans'>
        <h2 className='text-[14px] uppercase text-[#fff] pt-[2px] tracking-[0.03em] leading-[26px] bg-[url("https://store.cloudflare.steamstatic.com/public/images/v6/maincol_gradient_rule.png")] bg-no-repeat bg-left-bottom'>System Requirements</h2>
        <div className='mt-[10px] text-[14px] text-[#acb2b8] font-sans'>
          <div className='block text-[12px] font-serif text-[#acb2b8]'>
            {/* left column (minimum system Requirements) */}
            <div className='float-left w-[300px] font-serif text-[12px] text-[#acb2b8]'>
              <ul className='leading-[18px] ml-0 list-none list-inside'>
                <strong className='font-sans font-normal text-[10px] text-[#bcc6cd] uppercase inline-block mr-[4px] leading-[18px] list-none list-inside'>Minimum:</strong>
                <br />
                <ul className='list-none ml-0 leading-[18px] list-inside text-[12px] font-serif text-[#acb2b8]'>
                  <li className='my-[2px] mx-0 list-outside list-none leading-[18px] text-[12px] text-[#acb2b8] font-serif'>
                    {systemMinInfo.min_required_info}
                    <br />
                  </li>
                  <li className='my-[2px] mx-0 list-outside leading-[18px] list-none capitalize text-[12px] font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] uppercase font-sans inline-block list-none leading-[18px]'>OS:</strong>
                    {systemMinInfo.os}
                  </li>
                  <li className='my-[2px] mx-0 list-outside leading-[18px] list-none capitalize text-[12px] font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>Processor:</strong>
                  {systemMinInfo.processor}
                  </li>
                  <li className='my-[2px] mx-0 list-outside leading-[18px] list-none capitalize text-[12px] font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>Memory:</strong>
                    {systemMinInfo.memory}
                  </li>
                  <li className='my-[2px] mx-0 list-outside leading-[18px] list-none capitalize text-[12px] font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>Graphics:</strong>
                    {systemMinInfo.graphics}
                  </li>
                  <li className='my-[2px] mx-0 list-outside leading-[18px] list-none capitalize text-[12px] font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>DirectX:</strong>
                    {systemMinInfo.directX}
                  </li>
                  <li className='my-[2px] mx-0 list-outside leading-[18px] list-none capitalize text-[12px] font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>Storage:</strong>
                    {systemMinInfo.storage}
                  </li>
                  <li className='my-[2px] mx-0 list-outside leading-[18px] list-none capitalize text-[12px] font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>Additional Notes:</strong>
                    {systemMinInfo.additional_notes}
                  </li>
                </ul>
              </ul>
            </div>
            {/* right column (recommended system Requirements) */}
            <div className='ml-[8px] float-left w-[300px] text-[12px] font-serif text-[#acb2b8]'>
              <ul className='list-none ml-0 leading-[18px] list-inside text-[12px] font-serif text-[#acb2b8]'>
                <strong className='font-sans font-normal text-[10px] text-[#bcc6cd] uppercase inline-block mr-[4px] leading-[18px] list-none list-inside'>Recommended:</strong>
                <br />
                <ul className='list-none ml-0 leading-[18px] list-inside text-[12px] font-serif text-[#acb2b8]'>
                  <li className='my-[2px] mx-0 list-outside list-none leading-[18px] '>
                    {systemReqInfo.required_info}
                    <br />
                  </li>
                  <li className='my-[2px] mx-0 list-outside list-none leading-[18px] text-[12px] font-normal font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] uppercase font-sans inline-block list-none leading-[18px]'>OS:</strong>
                    {systemReqInfo.os}
                    <br />
                  </li>
                  <li className='my-[2px] mx-0 list-outside list-none leading-[18px] text-[12px] font-normal font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>Processor:</strong>
                    {systemReqInfo.processor}
                    <br />
                  </li>
                  <li className='my-[2px] mx-0 list-outside list-none leading-[18px] text-[12px] font-normal font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>Memory:</strong>
                    {systemReqInfo.memory}
                    <br />
                  </li>
                  <li className='my-[2px] mx-0 list-outside list-none leading-[18px] text-[12px] font-normal font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>Graphics:</strong>
                    {systemReqInfo.graphics}
                    <br />
                  </li>
                  <li className='my-[2px] mx-0 list-outside list-none leading-[18px] text-[12px] font-normal font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>DirectX:</strong>
                    {systemReqInfo.directX}
                    <br />
                  </li>
                  <li className='my-[2px] mx-0 list-outside list-none leading-[18px] text-[12px] font-normal font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>Storage:</strong>
                    {systemReqInfo.storage}
                    <br />
                  </li>
                  <li className='my-[2px] mx-0 list-outside list-none leading-[18px] text-[12px] font-normal font-serif text-[#acb2b8]'>
                    <strong className='text-[#61686D] text-[12px] mr-[4px] font-normal mb-[2px] capitalize font-sans inline-block list-none leading-[18px]'>Additional Notes:</strong>
                    {systemReqInfo.additional_notes}
                    <br />
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* div for autocollapse section */}
      <div className='hidden absolute left-0 right-0 bottom-0 h-[73px] z-[1] bg-top bg-repeat-x'>
        <div className='absolute right-0 bottom-0 h-[20px] leading-[20px] cursor-pointer text-[#537ca6] text-[10px] pr-[12px] bg-right-center bg-no-repeat'></div>
      </div>
    </div>
    <div className='relative text-[14px] text-[#acb2b8] font-sans'>
      <div className='max-h-max overflow-hidden text-[14px] text-[#acb2b8] font-sans'>
        <div className='text-[#566168] text-[11px] mb-[10px] mt-[20px] font-sans'>  
          <p className='text-[#566168] text-[11px] font-sans leading-none'>
          {systemMinInfo.copy_write[0]}
          <br />
          <br />
         {systemMinInfo.copy_write[1]}
          </p>
        </div>
      </div>
    </div>
    </>
  )
  }
}

export default GameSystemRequirements