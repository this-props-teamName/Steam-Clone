import styles from '../styles/Signup.module.css'
const SignUp = () => {
  return (
    <div className={styles.background}>
      <div className="relative">
        <div className="w-[940px] my-0 mx-auto">
          <div className="p-[50px] min-h-[600px] max-w-[700px] ">
            <div>
              <form>
                <div>
                  <div className="px-[20px] py-[16px] relative ">
                    <div className="uppercase text-[34px] text-[#ffffff] mb-[30px] font-[200] tracking-[2px]  ">
                      Create Your Account
                    </div>
                    <div className="flex items-center flex-wrap mx-0 my-[25px] ">
                      <div className="w-[292px] float-none ">
                        <label className="text-[14px] text-[#b8b6b4] align-top ">
                          Email Adress
                        </label>
                        <input
                          type="text"
                          maxLength="255"
                          name="email"
                          className="bg-[#32353C] rounded-[3px] text-[#E9E9E9] px-[6px] py-[8px] block border-none w-full font-sans font-normal "
                        />
                      </div>
                    </div>
                    <div className="flex items-center flex-wrap mx-0 my-[25px]">
                      <div className="w-[292px] float-none ">
                        <label className="text-[14px] text-[#b8b6b4] align-top ">
                          Confirn your Address
                        </label>
                        <input
                          type="text"
                          maxLength="255"
                          name="email"
                          className="bg-[#32353C] rounded-[3px] text-[#E9E9E9] px-[6px] py-[8px] block border-none w-full font-sans font-normal "
                        />
                      </div>
                    </div>
                    <div className="flex items-center flex-wrap mx-0 my-[25px]">
                      <div className="w-[292px] float-none ">
                        <label className="text-[14px] text-[#b8b6b4] align-top inline-block mt-[10px] ">
                          Country of Residence
                        </label>
                        <select
                          name="country"
                          className="w-[291px] mt-[3px] bg-[#32353C] rounded-[3px] text-[#E9E9E9] px-[6px] py-[8px] block border-none w-full font-sans font-normal"
                        >
                          <option value="AF">Afghanistan</option>
                          <option value="AX">Aland Island</option>
                          <option value="AL">Albania</option>
                          <option value="DZ">Algeria</option>
                          <option value="AS">American Samoa</option>
                          <option value="AD">Andorra</option>
                          <option value="AO">Angola</option>
                          <option value="AI">Anguilla</option>
                          <option value="AQ">Antarctica</option>
                          <option value="AG">Antigua and Barbuda</option>
                          <option value="AR">Argentina</option>
                          <option value="AM">Armenia</option>
                          <option value="AW">Aruba</option>
                          <option value="AU">Australia</option>
                          <option value="AT">Austria</option>
                          <option value="AZ">Azerbaijan</option>
                          <option value="BL">BL</option>
                          <option value="BQ">BQ</option>
                          <option value="BS">Bahamas</option>
                          <option value="BD">Bangladesh</option>
                          <option value="BB">Barbados</option>
                          <option value="BY">Balarus</option>
                          <option value="BE">Belgium</option>
                          <option value="BZ">Belize</option>
                          <option value="BJ">Benin</option>
                          <option value="BM">Bermuda</option>
                          <option value="BT">Bhutan</option>
                          <option value="BR">Brazil</option>
                          <option value="BG">Bulgaria</option>
                          <option value="CM">Cameroon</option>
                          <option value="CA">Canada</option>
                          <option value="CF">Central Africa Republic</option>
                          <option value="CL">Chile</option>
                          <option value="CN">China</option>
                          <option value="CO">Colombia</option>
                          <option value="KM">Comoros</option>
                          <option value="CG">Congo</option>
                          <option value="CR">Costa Rica</option>
                          <option value="CY">Cyprus</option>
                          <option value="DK">Denmark</option>
                          <option value="DO">Dominican Republic</option>
                          <option value="EC">Ecuador</option>
                          <option value="EG">Egypt</option>
                          <option value="SV">El Slavador</option>
                          <option value="ET">Ethiopia</option>
                          <option value="FJ">Figi</option>
                          <option value="FI">Finland</option>
                          <option value="FR">France</option>
                          <option value="GA">Gabon</option>
                          <option value="DE">Germany</option>
                          <option value="GH">Ghana</option>
                          <option value="GR">Greece</option>
                          <option value="GL">Greenland</option>
                          <option value="GU">Guam</option>
                          <option value="GT">Guatemala</option>
                          <option value="GG">Guernsey</option>
                          <option value="HT">Haiti</option>
                          <option value="HN">Honduras</option>
                          <option value="HK">Hong Kong</option>
                          <option value="HU">Hungray</option>
                          <option value="IS">Iceland</option>
                          <option value="IN">India</option>
                          <option value="ID">Indonesia</option>
                          <option value="IR">Iran</option>
                          <option value="IQ">Iraq</option>
                          <option value="IE">Ireland</option>
                          <option value="IL">Israel</option>
                          <option value="IT">Italy</option>
                          <option value="JM">Jamaica</option>
                          <option value="JP">Japan</option>
                          <option value="JO">Jordan</option>
                          <option value="KE">Kenya</option>
                          <option value="KR">Korea</option>
                          <option value="KW">Kuwait</option>
                          <option value="LB">Lebanon</option>
                          <option value="LR">Liberia</option>
                          <option value="MY">Malaysia</option>
                          <option value="MX">Mexico</option>
                          <option value="MD">Moldova</option>
                          <option value="MA">Morocco</option>
                          <option value="NP">Nepal</option>
                          <option value="NZ">New Zealand</option>
                          <option value="NG">Nigeria</option>
                          <option value="NO">Norway</option>
                          <option value="PK">Pakistan</option>
                          <option value="PA">Panama</option>
                          <option value="PY">Paraguay</option>
                          <option value="PE">Peru</option>
                          <option value="PH">Philippines</option>
                          <option value="PL">Poland</option>
                          <option value="PR">Puerto Rico</option>
                          <option value="QA">Qatar</option>
                          <option value="RO">Romania</option>
                          <option value="RU">Russian</option>
                          <option value="WS">Samoa</option>
                          <option value="SA">Saudi Arabia</option>
                          <option value="SN">Senegal</option>
                          <option value="RS">Serbia</option>
                          <option value="SG">Singapora</option>
                          <option value="SK">Slovakia</option>
                          <option value="ZA">South Africa</option>
                          <option value="ES">Spain</option>
                          <option value="SE">Sweden</option>
                          <option value="CH">Switzerland</option>
                          <option value="SY">Syria</option>
                          <option value="TW">Taiwan</option>
                          <option value="TH">Thailand</option>
                          <option value="TG">Tonga</option>
                          <option value="TN">Tunisia</option>
                          <option value="TR">Turkey</option>
                          <option value="UG">Uganda</option>
                          <option value="UA">Ukraine</option>
                          <option value="GB">United Kingdom</option>
                          <option value="US" selected>
                            United States
                          </option>
                          <option value="UY">Uruguay</option>
                          <option value="VE">Venezuela</option>
                          <option value="VN">Viet Nam</option>
                          <option value="VI">Virgin Islands</option>
                          <option value="YE">Yemen</option>
                          <option value="ZM">Zambia</option>
                          <option value="ZW">Zimbabwe</option>
                        </select>
                      </div>
                    </div>
                    <div className="mx-0 my-25px">
                      <div className="w-[304px] h-[78px]  ">
                        <div>
                          <div className="border-solid border-[1px] border-[#525252]  bg-[#222] text-[#fff] h-[74px] w-[300px] rounded-[3px] ">
                            <div className="h-[74px] w-[206px] inline-block relative ">
                              <div className="inline-block h-full">
                                <div className="table h-full">
                                  <div className="table-cell align-middle ">
                                    <span className="mt-0 mb-[2px] mx-[12px] text-[1px] h-[28px] w-[28px] overflow-visible align-text-bottom relative inline-block">
                                      <div className="rounded-[2px] bg-[#fff] border-solid border-[2px] border-[#c1c1c1] text-[1px] h-[24px] absolute w-[24px] z-[1] "></div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="inline-block h-full ">
                                <div className="table h-full">
                                  <label className="w-[152px] text-[14px] font-[400] leading-[17px] table-cell align-middle  ">
                                    {"I'm not a robot"}
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className=' absolute inline-table'>
                                <div className="inline-block h-[74px] align-top w-[70px] ">
                                <div className="mr-0 mb-0 ml-[26px] mt-[10px] w-[58px] ">
                                    <div className="bg-[length:32px] h-[32px] mx-[13px] my-0 w-[32px] bg-[url('https://www.gstatic.com/recaptcha/api2/logo_48.png')] no-repeat ">
                                    </div>
                                    <div className="text-[#f5f5f5] cursor-default text-[10px] font-[400] leading-[10px] mt-[5px] text-center  ">
                                    reCAPTCHA
                                    </div>
                                </div>
                                <div className="mt-[2px] mr-[11px] mb-0 ml-0 pr-[2px] ml-[27px]  right-0  w-[75px] text-[8px] font-[400] ">
                                    <a className="text-[#f5f5f5] inline pl-[1px] pr-[1px] pt-[2px] pb-[2px]  ">Privacy</a>
                                    <span>-</span>
                                    <a className="text-[#f5f5f5] inline pl-[1px] pr-[1px] pt-[2px] pb-[2px]">Terms</a>
                                </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='mt-[25px] my-0 '>
                      <div className=''>
                        <label className='ml-[4px] text-[14px] text-[#b8b6b4] align-top '>
                            <input type='checkbox' name='i_agree_check' className='inline w-[18px] h-[18px] bg-[#32353C] '></input>
                            &nbsp;I am 13 years of age or older and agree to the terms of the &nbsp;
                        <a className='text-[#ffffff] hover:text-[#67C1F5] ' href='https://store.steampowered.com/subscriber_agreement/'>Steam Subscriber Agreement</a>
                        &nbsp; and the &nbsp;
                        <a className='text-[#ffffff] hover:text-[#67C1F5]' href='https://store.steampowered.com/privacy_agreement/'>Valve Privacy</a>.
                        </label>
                      </div>
                      <div className='mt-[35px]'>
                        <button className={styles.btnBg}>
                            <span>Continue</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
