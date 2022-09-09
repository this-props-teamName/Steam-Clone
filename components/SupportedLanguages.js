import React, { useState, useEffect } from 'react'
import languageStyles from '../styles/SupportedLanguages.module.css'
import languageGradient from '../styles/RightColumn.module.css'

const SupportedLanguages = () => {
    const [display, setDisplay] = useState(false);

    const displayLanguages = () => {
        setDisplay(true);
    }

  return (
    <div className={languageGradient.supportedLanguages}>
        <div className="text-[12px] text-[#8f98a0] mb-[2px]">
          Languages:
        </div>
        {/* Language Table */}
        <div className="block">
          <table className="border-collapse table box-border indent-0 border-gray">
            <tbody>
              <tr className="border-b-[1px] border-solid border-[#626366]">
                <th className="w-[94px] text-[12px] text-[#b0aeac] font-normal"></th>
                <th className="w-[62px] text-[12px] text-[#b0aeac] font-normal">Interface</th>
                <th className="w-[62px] text-[12px] text-[#b0aeac] font-normal">Full Audio</th>
                <th className="w-[62px] text-[12px] text-[#b0aeac] font-normal">Subtitles</th>
              </tr>
              <tr className="border-b-[1px] border-solid border-[#626366]">
                <td className="w-[94px] text-left text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0 truncate">English</td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
              </tr>
              <tr className="border-b-[1px] border-solid border-[#626366]">
                <td className="w-[94px] text-left text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0 truncate">French</td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
              </tr>
              <tr className="border-b-[1px] border-solid border-[#626366]">
                <td className="w-[94px] text-left text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0 truncate">Italian</td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
              </tr>
              <tr className="border-b-[1px] border-solid border-[#626366]">
                <td className="w-[94px] text-left text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0 truncate">German</td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
              </tr>
              <tr className="border-b-[1px] border-solid border-[#626366]">
                <td className="w-[94px] text-left text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0 truncate">Spanish - Spain</td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
              </tr>
              {/* Starts "display all languages" */}
              <tr className={languageStyles.hiddenLanguages} style={
                display ? (
                    {display: 'table-row'}
                ) : (
                    {display: 'none'}
                )
              }>
                <td className="w-[94px] text-left text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0 truncate">Arabic</td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]"></span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
              </tr>
              <tr className={languageStyles.hiddenLanguages} style={
                display ? (
                    {display: 'table-row'}
                ) : (
                    {display: 'none'}
                )
              }>
                <td className="w-[94px] text-left text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0 truncate">Japanese</td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
              </tr>
              <tr className={languageStyles.hiddenLanguages} style={
                display ? (
                    {display: 'table-row'}
                ) : (
                    {display: 'none'}
                )
              }>
                <td className="w-[94px] text-left text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0 truncate">Korean</td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]"></span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
              </tr>
              <tr className={languageStyles.hiddenLanguages} style={
                display ? (
                    {display: 'table-row'}
                ) : (
                    {display: 'none'}
                )
              }>
                <td className="w-[94px] text-left text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0 truncate">Polish</td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]"></span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
              </tr>
              <tr className={languageStyles.hiddenLanguages} style={
                display ? (
                    {display: 'table-row'}
                ) : (
                    {display: 'none'}
                )
              }>
                <td className="w-[94px] text-left text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0 truncate">Portuguese - Brazil</td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
              </tr>
              <tr className={languageStyles.hiddenLanguages} style={
                display ? (
                    {display: 'table-row'}
                ) : (
                    {display: 'none'}
                )
              }>
                <td className="w-[94px] text-left text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0 truncate">Russian</td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]"></span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
              </tr>
              <tr className={languageStyles.hiddenLanguages} style={
                display ? (
                    {display: 'table-row'}
                ) : (
                    {display: 'none'}
                )
              }>
                <td className="w-[94px] text-left text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0 truncate">Simplified Chinese</td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]"></span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
              </tr>
              <tr className={languageStyles.hiddenLanguages} style={
                display ? (
                    {display: 'table-row'}
                ) : (
                    {display: 'none'}
                )
              }>
                <td className="w-[94px] text-left text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0 truncate">Spanish - Latin America</td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
              </tr>
              <tr className={languageStyles.hiddenLanguages} style={
                display ? (
                    {display: 'table-row'}
                ) : (
                    {display: 'none'}
                )
              }>
                <td className="w-[94px] text-left text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0 truncate">Traditional Chinese</td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]"></span>
                </td>
                <td className="w-[62px] text-center text-[#8f98a0] text-[12px] pt-[3px] pb-[3px] pr-0 pl-0">
                  <span className="font-bold text-[#67c1f5]">✔</span>
                </td>
              </tr>
            </tbody>
          </table>
          <a className="no-underline text-[#67c1f5] text-[12px] cursor-pointer mt-[5px] inline-block" onClick={displayLanguages} style={
            display ? (
                {display: 'none'}
            ) : (
                {display: 'inline-block'}
            )
          }>See all 14 supported languages</a>
        </div>
    </div>
  )
}

export default SupportedLanguages