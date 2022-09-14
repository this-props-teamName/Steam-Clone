import { data } from 'autoprefixer'
import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import { useState, useEffect } from 'react'


const NavBar = () => {
  const [onHoverStore, setOnHoverStore] = useState(false);
  const [onHoverNews, setOnHoverNews] = useState(false);
  const [onHoverCategories, setOnHoverCategories] = useState(false);
  const [query, setQuery] = useState('')


  return (
    <div className="bg-transparent pl-0 pr-0 h-[66px] min-w-[940px] mb-[16px]"> 
      <div className="h-[66px] relative w-[940px] my-0 mx-auto z-[300]"> 

{/*WishList and Cart Button*/}
        <div className="top-[8px] absolute right-0 text-right z-[300] text-[11px]"> 
        <div className= "text-right text-[11px]">
          <div className="shadow-[0_0_3px_rgb(#000)] h-[20px] relative ml-[1px] rounded-[1px] float-left bg-wishlist invisible"> 
            <a className ="inline-block pt-[0px] pr-[25px] pb-[0px] pl-[25px] mt-[0px] mr-[1px] mb-[0px] ml-[1px] leading-[20px] text-center uppercase text-[11px]">
              Wishlist
            </a>
            </div>
          <div className="bg-[-34px, 30px] shadow-[0_0_3px_rgba(#000)] h-[20px] relative ml-[1px] rounded-[1px] float-left bg-cart invisible"> 
            <a className = "inline-block py-[0px] px-[25px] mt-[0px] mr-[1px] mb-[0px] ml-[1px] leading-[20px] text-center uppercase text-[11px]">
              Cart
            </a>
          </div>
        </div>
        </div>

{/*NavBar Start*/}
          <div className= {navStyles.store_area}> 
            <div className= {navStyles.store_bg}> 
              <div className= "h-[35px] flex">

{/*Your Store */}
                <div className= {navStyles.tab} onMouseEnter={() => setOnHoverStore(true)}  onMouseLeave={() => setOnHoverStore(false)} >
                  <span className= {navStyles.span}>
                    <a className= "inline text-[#e5e5e5">Your Store</a>
                    <span></span>
                  </span>
                </div>

{/*Store Dropdown*/}
                <div 
                  className = {onHoverStore ? 'z-[200] absolute shadow-[0_0_12px_rgb(0,0,0)] top-[42px] left-[0px] block opacity-100' : 'hidden'} 
                  onMouseEnter={() => setOnHoverStore(true)}  onMouseLeave={() => setOnHoverStore(false)} 
                  >
                  <div className = {navStyles.popup_block}>
                    <a className= {`${navStyles.popup_menu_item} ${navStyles.popup_menu}`} href="https://store.steampowered.com/?snr=1_5_9__12">Home</a>
                    <a className= {`${navStyles.popup_menu_item} ${navStyles.popup_menu}`} href="https://store.steampowered.com/communityrecommendations/?snr=1_5_9__12">Community Recommendations</a>
                    <a className= {`${navStyles.popup_menu_item} ${navStyles.popup_menu}`} href="https://store.steampowered.com/recommended/?snr=1_5_9__12">Recently Viewed</a>
                    <a className= {`${navStyles.popup_menu_item} ${navStyles.popup_menu}`} href="https://store.steampowered.com/curators/?snr=1_5_9__12">Steam Curators</a>
                  </div>
                </div>
              <div></div>

{/* News and Noteworthy */}
                <div className= {navStyles.tab} onMouseEnter={() => setOnHoverNews(true)}  onMouseLeave={() => setOnHoverNews(false)}>
                  <span className= {navStyles.span}>
                    <a className= "inline text-[#e5e5e5]">New & Noteworthy</a>
                    <span></span>
                  </span>
                </div>

{/* News and Noteworthy Dropdown */}
                <div 
                className= {onHoverNews ? ' top-[42px] left-[96.1125px] block opacity-100 z-[200] absolute shadow-[0_0_12px_rgb(0,0,0)]' : 'hidden'}
                onMouseEnter={() => setOnHoverNews(true)}  onMouseLeave={() => setOnHoverNews(false)}
                >
                  <div className={navStyles.popup_block}>
                    <a className= {`${navStyles.popup_menu_item} ${navStyles.popup_menu}`} href="https://store.steampowered.com/search/?filter=topsellers&snr=1_5_9__12">Top Sellers</a>
                    <a className= {`${navStyles.popup_menu_item} ${navStyles.popup_menu}`} href="https://store.steampowered.com/explore/new/?snr=1_5_9__12">New & Trending</a>
                    <a className= {`${navStyles.popup_menu_item} ${navStyles.popup_menu}`} href="https://store.steampowered.com/specials/?snr=1_5_9__12">Current Specials</a>
                    <a className= {`${navStyles.popup_menu_item} ${navStyles.popup_menu}`} href="https://store.steampowered.com/newshub/?snr=1_5_9__12">Recently Updated</a>
                    <a className= {`${navStyles.popup_menu_item} ${navStyles.popup_menu}`} href="https://store.steampowered.com/explore/upcoming/?snr=1_5_9__12">Popular Upcoming</a>
                  </div>
                </div>


{/* Categories */}
                <div className= {navStyles.tab} onMouseEnter={() => setOnHoverCategories(true) } onMouseLeave={() => setOnHoverCategories(false)}>
                  <span className= {navStyles.span}>
                    <a className= "inline text-[#e5e5e5]">Categories</a>
                    <span></span>
                  </span>
                </div>

{/* Categories Dropdown*/}
                <div className= {onHoverCategories ? ' top-[42px] left-[0px] opacity-100 z-[200] absolute shadow-[0_0_12px_rgb(0,0,0)] ' : 'hidden'}
                onMouseEnter={() => setOnHoverCategories(true) } onMouseLeave={() => setOnHoverCategories(false)}
                >
                  <div className= {`${navStyles.popup_body} ${navStyles.popup_block} ${navStyles.popup_menu_twocol_new}`}>
                    <div className= {navStyles.popup_menu_browse}>
                      <div className= {navStyles.popup_menu_mainheader}>Special Sections</div>
                        <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/genre/Free%20to%20Play/?snr=1_5_9__12">Free to Play</a>
                        <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/demos/?snr=1_5_9__12">
                          <span>Demos</span>
                        </a>
                        <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/genre/Early%20Access/?snr=1_5_9__12"> Early Acces</a>
                        <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/controller/?snr=1_5_9__12">Controller-Friendly</a>
                        <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/remoteplay_hub/?snr=1_5_9__12">Remote Play</a>
                        <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/software/?snr=1_5_9__12">Software</a>
                        <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/soundtracks?snr=1_5_9__12">Soundtracks</a>
                        <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/vr/?snr=1_5_9__12">VR Titles</a>
                        <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/vrhardware/?snr=1_5_9__12">VR Hardware</a>
                        <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/steamdeck/?snr=1_5_9__category-menu">Steam Deck</a>
                        <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/greatondeck/?snr=1_5_9__category-menu">Great on Deck</a>
                        <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/macos?snr=1_5_9__12">macOS</a>
                        <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/linux?snr=1_5_9__12">SteamOS + Linux</a>
                        <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/pccafe/?snr=1_5_9__12">For PC Cafés</a>
                    </div>

{/* Middle Left Categories */}
                    <div className= {`${navStyles.popup_menu_leftborder} ${navStyles.popup_menu_browse}`}>
                      <div className= {navStyles.reduced_vspace}> Genres </div>
                      <div className= {navStyles.popup_menu_subheader}>
                        <a className= {navStyles.popup_menu_item3} href= "https://store.steampowered.com/category/action/?snr=1_5_9__12"> Action </a>
                      </div>
                        <div className= {navStyles.popup_menu_browse}>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/action_rogue_like/?snr=1_5_9__12"> Action Rogue-Like </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/arcade_rhythm/?snr=1_5_9__12"> Arcade & Rhythm </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/fighting_martial_arts/?snr=1_5_9__12"> Fighting & Martial Arts </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/action_fps/?snr=1_5_9__12"> First-Person Shooter </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/hack_and_slash/?snr=1_5_9__12"> Hack & Slash</a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/action_run_jump/?snr=1_5_9__12"> Platformer & Runner </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/action_tps/?snr=1_5_9__12">Third-Person Shooter</a>
                    </div>
                    <div className= {navStyles.popup_menu_subheader}>
                        <a className= {navStyles.popup_menu_item3} href= "https://store.steampowered.com/category/adventure/?snr=1_5_9__12"> Adventure </a>
                      </div>
                      <div className= {navStyles.popup_menu_browse}>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/adventure_rpg/?snr=1_5_9__12"> Adventure RPG </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/casual/?snr=1_5_9__12"> Casual </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/hidden_object/?snr=1_5_9__12"> Hidden Object </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/metroidvania/?snr=1_5_9__12"> Metroidvania </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/puzzle_matching/?snr=1_5_9__12"> Puzzle </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/story_rich/?snr=1_5_9__12"> Story-Rich </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/visual_novel/?snr=1_5_9__12"> Visual Novel </a>
                    </div>
                   </div>

{/* Middle Categories */}
                    <div className= {navStyles.popup_menu_browse}>
                    <div className= {navStyles.reduced_vspace}>
                    <br/>
                    </div>
                    <div className= {navStyles.popup_menu_subheader}>
                        <a className= {navStyles.popup_menu_item3} href= "https://store.steampowered.com/category/rpg/?snr=1_5_9__12"> Role-Playing </a>
                      </div>
                      <div className= {navStyles.popup_menu_browse}>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/rpg_action/?snr=1_5_9__12"> Action RPG </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/adventure_rpg/?snr=1_5_9__12"> Adventure RPG </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/rpg_jrpg/?snr=1_5_9__12"> JRPG </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/rpg_party_based/?snr=1_5_9__12"> Party-Based </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/rogue_like_rogue_lite/?snr=1_5_9__12"> Rogue-Like </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/rpg_strategy_tactics/?snr=1_5_9__12"> Strategy RPG </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/rpg_turn_based/?snr=1_5_9__12"> Turn-Based </a>
                    </div>
                    <div className= {navStyles.popup_menu_subheader}>
                        <a className= {navStyles.popup_menu_item3} href= "https://store.steampowered.com/category/simulation/?snr=1_5_9__12"> Simulation </a>
                      </div>
                      <div className= {navStyles.popup_menu_browse}>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/sim_building_automation/?snr=1_5_9__12"> Building & Automation </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/sim_dating/?snr=1_5_9__12"> Dating </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/sim_farming_crafting/?snr=1_5_9__12"> Farming & Crafting </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/sim_hobby_sim/?snr=1_5_9__12"> Hobby & Job </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/sim_life/?snr=1_5_9__12"> Life & Immersive </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/sim_physics_sandbox/?snr=1_5_9__12"> Sandbox </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/sim_space_flight/?snr=1_5_9__12"> Space & Flight </a>
                    </div>
                    </div>

{/* Middle Right Categories */}
<div className= {navStyles.popup_menu_browse}>
                    <div className= {navStyles.reduced_vspace}>
                    <br/>
                    </div>
                    <div className= {navStyles.popup_menu_subheader}>
                        <a className= {navStyles.popup_menu_item3} href= "https://store.steampowered.com/category/strategy/?snr=1_5_9__12"> Strategy </a>
                      </div>
                      <div className= {navStyles.popup_menu_browse}>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/strategy_card_board/?snr=1_5_9__12"> Card & Board </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/strategy_cities_settlements/?snr=1_5_9__12"> City & Settlement </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/strategy_grand_4x/?snr=1_5_9__12"> Grand & 4X </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/strategy_military/?snr=1_5_9__12"> Military </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/strategy_real_time/?snr=1_5_9__12"> Real-Time </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/tower_defense/?snr=1_5_9__12"> Tower Defense </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/strategy_turn_based/?snr=1_5_9__12"> Turn-Based Strategy </a>
                    </div>
                    <div className= {navStyles.popup_menu_subheader}>
                        <a className= {navStyles.popup_menu_item3} href= "https://store.steampowered.com/category/sports_and_racing/?snr=1_5_9__12"> Sports & Racing </a>
                      </div>
                      <div className= {navStyles.popup_menu_browse}>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/sports/?snr=1_5_9__12"> All Sports </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/sports_fishing_hunting/?snr=1_5_9__12"> Fishing & Hunting </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/sports_individual/?snr=1_5_9__12"> Individual Sports </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/racing/?snr=1_5_9__12"> Racing </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/racing_sim/?snr=1_5_9__12"> Racing Sim </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/sports_sim/?snr=1_5_9__12"> Sports Sim </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/sports_team/?snr=1_5_9__12"> Team Sports </a>
                    </div>
                    </div>

{/* Right Categories */}
                    <div className= {`${navStyles.popup_menu_rightborder} ${navStyles.popup_menu_browse}`}>
                      <div className= {navStyles.popup_menu_mainheader}> Themes </div>
                        <div className= {navStyles.popup_menu_browse}>
                        <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/anime/?snr=1_5_9__12"> Anime </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/horror/?snr=1_5_9__12"> Horror </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/mystery_detective/?snr=1_5_9__12"> Mystery & Detective </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/exploration_open_world/?snr=1_5_9__12"> Open World </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/science_fiction/?snr=1_5_9__12"> Sci-Fi & Cyberpunk </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/space/?snr=1_5_9__12"> Space </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/survival/?snr=1_5_9__12"> Survival </a>
                          <div className= {navStyles.spacer}></div>
                        </div>
                      <div className= {navStyles.popup_menu_mainheader}> Player Support </div>
                      <div className= {navStyles.popup_menu_browse}>
                        <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/multiplayer_coop/?snr=1_5_9__12"> Co-Operative </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/multiplayer_lan/?snr=1_5_9__12"> LAN </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/multiplayer_local_party/?snr=1_5_9__12"> Local & Party </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/multiplayer_mmo/?snr=1_5_9__12"> MMO </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/multiplayer/?snr=1_5_9__12"> Multiplayer </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/multiplayer_online_competitive/?snr=1_5_9__12"> Online Competitive </a>
                          <a className= {navStyles.popup_menu_items} href= "https://store.steampowered.com/category/singleplayer/?snr=1_5_9__12"> Singleplayer </a>
                        </div>
                    </div>
                </div>
              </div>

{/* Points Shop */}
                <a className= {navStyles.tab} href= "https://store.steampowered.com/points/?snr=1_5_9__12">
                    <span className= {navStyles.span} >Points Shop</span>
                </a>

{/* News */}
                <a className= {navStyles.tab} href= "https://store.steampowered.com/news/?snr=1_5_9__12">
                    <span className= {navStyles.span}>News</span>
                </a>

{/* Labs */}    
                <div className= {navStyles.tab}>
                  <span className= {navStyles.span}>
                    <a className= "inline text-[#e5e5e5]" href= "https://store.steampowered.com/labs/?snr=1_5_9__12">Labs</a>
                    <span></span>
                  </span>
                </div>

{/*Search_Bar*/}
                <div className= "grow shrink basis-[0%] w-[20px]"></div>
                  <div className= "grow shrink-0 max-w-[210px]">
                    <div className= "float-none px-[4px] pt-[3px] pb-[2px] h-[30px]">
                      <form 
                        name="searchform"
                        method="get"
                        action= "https://store.steampowered.com/search/"
                        onSubmit = {() => "return this"}
                        >
                        <input 
                        type="hidden"
                        name="snr"
                        value="1_5_9_12"
                        />
                          <div className= {navStyles.searchbar}>
                            <input 
                            className= {navStyles.searchbox} 
                            name="term"
                            type="text"
                            placeholder= "search"
                            size="22"
                            autoComplete="off"
                            maxLength="64"
                            />
                              <a 
                              className= {navStyles.search_link} 
                              href= "https://store.steampowered.com/search/?term="
                              onClick = {() => "return this"}
                              >
                              <picture>
                                <img alt='images' className= "w-[25px] h-[25px] absoulte top-[1px] right-[-1px] bg-[url('https://store.akamai.steamstatic.com/public/images/v6/search_icon_btn.png')] hover:bg-[url('https://store.akamai.steamstatic.com/public/images/v6/search_icon_btn.png')]" src="https://store.akamai.steamstatic.com/public/images/blank.gif"/>
                              </picture>  
                              </a>
                          </div>
                      </form>
                    </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}


export default NavBar