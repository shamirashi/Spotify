import React, { useState,useEffect } from "react";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";

export default function Homes() {
    const [showAdditional1, setShowAdditional1] = useState(false);
    const [showAdditional2, setShowAdditional2] = useState(false);
    const [showAdditional3, setShowAdditional3] = useState(false);
    const [showAdditional5, setShowAdditional5] = useState(false);
    const [showAdditional6, setShowAdditional6] = useState(false);
    const [recentlyPlayed, setRecentlyPlayed] = useState([]);
    const toggleAdditionalRow1 = () => {
        setShowAdditional1(!showAdditional1);
    };
    const toggleAdditionalRow2 = () => {
        setShowAdditional2(!showAdditional2);
    };
    const toggleAdditionalRow3 = () => {
        setShowAdditional3(!showAdditional3);
    };
    const toggleAdditionalRow5 = () => {
        setShowAdditional5(!showAdditional5);
    };
    const toggleAdditionalRow6 = () => {
        setShowAdditional6(!showAdditional6);
    };


    const getRecentlyPlayed = () => {
        return JSON.parse(localStorage.getItem('recentlyPlayed')) || [];
      };
    
      
      useEffect(() => {
        const recentlyPlayedData = getRecentlyPlayed();
        setRecentlyPlayed(recentlyPlayedData);
      }, []);

    

    

    return (
        <>
            <div className="container mx-auto mt-3">
                <div className="flex flex-row flex-wrap">
                    <Sidebar />
                    <div className="flex flex-col sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 ms-80">
                        <div className="flex width m-1 ms-8 flex-shrink-0 bg-transparent box2 rounded-lg">
                            <div className="flex flex-col w-full ">

                                
                                <div  style={{ overflowY: 'auto', maxHeight: '500px', marginBlockEnd: "5px" }}>

                                    <div className="flex items-center justify-between p-4 bg-black bg-opacity-35 w-full">
                                        <div className="flex-1">
                                            <div className="text-lg text-slate-200">
                                                <span className="material-symbols-outlined">arrow_back_ios</span>  <span className="material-symbols-outlined">arrow_forward_ios</span>
                                            </div>
                                        </div>

                                        <div className="flex-1 ms-80">
                                            <div className="flex items-center text-white gap-9">
                                                <Link to='/log'>
                                                    <button className="bg-white text-xs font-bold py-2 border-none px-4 rounded-full cursor-pointer" title="Upgrade to Premium">Explore Premium</button>
                                                </Link>
                                                <span><i className="bi bi-bell bg-gray-800 bg-opacity-50 p-2 rounded-full cursor-pointer" title="What's New"></i></span>
                                                <Link to='/profile' style={{ textDecoration: 'none' }}>
                                                <span className="material-symbols-outlined text-white bg-gray-800 bg-opacity-50 p-2 rounded-full" >person</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {recentlyPlayed.length > 0 && (
  <div>
    <h3 className="text-2xl text-white font-bold font-2 tracking-tight m-3">Recently Played</h3>
    <div className="flex flex-wrap">
      {recentlyPlayed
        .filter((song, index, self) => self.findIndex(s => s.Title === song.Title) === index)
        .map((song, index) => (
          <div key={index} className="ms-2 mb-4 bg-zinc-900 rounded-lg items-center p-3 mr-4">
            <img src={song.img} alt="Lofi Beats" style={{ width: '120px', height: '120px', marginRight: '8px', borderRadius: '10px', objectFit: 'cover' }} />
            <p className="text-white font-semibold mt-2 text-sm tracking-wide text-center" >{song.Title}</p>
          </div>
        ))}
    </div>
  </div>
)}
                   



                                     
                                    {/* playist 1 */}
                                    <div className="flex items-center justify-between p-4">
                                        <h3 className="text-2xl text-white font-bold font-2 tracking-tight">Hot Hits</h3>
                                        <p className="text-gray-500 text-xs font-9 font-semibold  cursor-pointer" onClick={toggleAdditionalRow1}>{showAdditional1 ? 'Show Less' : 'Show All'}</p>
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="flex flex-row gap-4">
                                            <div className="ms-2 bg-zinc-900 rounded-lg p-3 ">
                                                <Link to='/hothitshindi'>
                                                <img src="../image/hot1.jpg" alt="Lofi Beats" className="ms-1 rounded-lg" />
                                                </Link>
                                                <p className="text-white font-semibold mt-2">Hot Hits Hindi</p>
                                                <p className="text-gray-400 mt-2">Hottest Hindi music<br />servrd here...</p>
                                            </div>
                                            <div className="bg-zinc-900 rounded-lg p-3">
                                                <Link to='/hothitstamil'>
                                                <img src="../image/hot2.jpg" alt="Todays Top Song" className=" rounded-lg" />
                                                </Link>
                                                <p className="text-white font-semibold mt-2">Hot Hits Tamil</p>
                                                <p className="text-gray-400 mt-2">Catch the hottest<br />Tamil tracks...</p>
                                            </div>
                                            <div className="ms-2 bg-zinc-900 rounded-lg p-3 ">
                                                <Link to='/hothitskorea'>
                                                <img src="../image/hot6.jpg" alt="Lofi Beats" className="ms-1 rounded-lg" />
                                                </Link>
                                                <p className="text-white font-semibold mt-2">Hot Hits Korea</p>
                                                <p className="text-gray-400 mt-2">Kick back to the best<br />K-pop track...</p>
                                            </div>
                                            <div className="bg-zinc-900 rounded-lg p-3">
                                                <Link to='/hothitspunjabi'>
                                                <img src="../image/hot4.jpg" alt="All Top Songs" className=" rounded-lg" />
                                                </Link>
                                                <p className="text-white font-semibold mt-2">Hot Hits Punjabi</p>
                                                <p className="text-gray-400 mt-2">Catch the hottest<br />Punjabi tracks here..</p>
                                            </div>
                                            <div className="bg-zinc-900 rounded-lg p-3">
                                                <Link to='/hothitsmala'>
                                                <img src="../image/hot5.jpg" alt="Jazz Music" className=" rounded-lg" />
                                                </Link>
                                                <p className="text-white font-semibold  mt-2">Hot Hits Malayalam</p>
                                                <p className="text-gray-400  mt-2">Soft instrumental music<br />of mollywood here...</p>
                                            </div>
                                        </div>
                                    </div>

                                    {showAdditional1 && (
                                        <div className="flex flex-row mt-10">
                                            
                                            <div className="bg-zinc-900 rounded-lg p-4 ms-2">
                                                <Link to='/hothitsusa'>
                                                <img src="../image/hot3.jpg" alt="Chill Beats" className=" rounded-lg" />
                                                </Link>
                                                <p className="text-white font-semibold mt-2">Hot Hits USA</p>
                                                <p className="text-gray-400 mt-2">Just lean back and<br />enjoy pop hits.</p>
                                            </div>
                                        </div>
                                    )}
                                          
                                          {/* playist 2 */}
                                        <div className="flex items-center justify-between p-4 mt-8">
                                        <h3 className="text-2xl text-white font-bold font-2 tracking-tight">Featured Cart</h3>
                                        <p className="text-gray-500 text-xs font-9 font-semibold  cursor-pointer" onClick={toggleAdditionalRow2}>{showAdditional2 ? 'Show Less' : 'Show All'}</p>
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="flex flex-row gap-4">
                                            <div className="ms-2 bg-zinc-900 rounded-lg p-3 ">
                                                <Link to='/global'>
                                                <img src="../image/top1.jpg" alt="Lofi Beats" className="ms-1 rounded-lg" />
                                                </Link>
                                                <p className="text-white font-semibold mt-2">Top Songs Global</p>
                                                <p className="text-gray-400 mt-2">Enjoy music from all<br />over here...</p>
                                            </div>
                                            <div className="bg-zinc-900 rounded-lg p-3">
                                                <Link to='/india'>
                                                <img src="../image/top2.jpg" alt="Todays Top Song" className=" rounded-lg" />
                                                </Link>
                                                <p className="text-white font-semibold mt-2">Top Songs India</p>
                                                <p className="text-gray-400 mt-2">Catch the music<br />from India...</p>
                                            </div>
                                            <div className="bg-zinc-900 rounded-lg p-3">
                                                <Link to='/50global'>
                                                <img src="../image/top3.jpg" alt="Chill Beats" className=" rounded-lg" />
                                                </Link>
                                                <p className="text-white font-semibold mt-2">Top 50 Global</p>
                                                <p className="text-gray-400 mt-2">Just lean back and<br />enjoy 50 global hits.</p>
                                            </div>
                                            <div className="bg-zinc-900 rounded-lg p-3">
                                                <Link to='/50india'>
                                                <img src="../image/top4.jpg" alt="All Top Songs" className=" rounded-lg" />
                                                </Link>
                                                <p className="text-white font-semibold mt-2">Top 50 India</p>
                                                <p className="text-gray-400 mt-2">Catch the hottest<br />top 50 tracks ..</p>
                                            </div>
                                            <div className="bg-zinc-900 rounded-lg p-3">
                                                <Link to='/v50global'>
                                                <img src="../image/top5.jpg" alt="Jazz Music" className=" rounded-lg" />
                                                </Link>
                                                <p className="text-white font-semibold  mt-2">Viral 50 Global</p>
                                                <p className="text-gray-400  mt-2">Enjoy and relax<br />with viral song globally..</p>
                                            </div>
                                        </div>
                                    </div>

                                    {showAdditional2 && (
                                        <div className="flex flex-row mt-10 gap-4">
                                            <div className="ms-2 bg-zinc-900 rounded-lg p-3 ">
                                                <Link to='/v50india'>
                                                <img src="../image/top6.jpg" alt="Lofi Beats" className="ms-1 rounded-lg" />
                                                </Link>
                                                <p className="text-white font-semibold mt-2">Viral 50 India</p>
                                                <p className="text-gray-400 mt-2">Kick back to the best<br />50 track from India...</p>
                                            </div>
                                            <div className="bg-zinc-900 rounded-lg p-3">
                                                <Link to='/v50korea'>
                                                <img src="../image/top7.jpg" alt="Todays Top Song" className=" rounded-lg" />
                                                </Link>
                                                <p className="text-white font-semibold mt-2">Viral 50 South Korea</p>
                                                <p className="text-gray-400 mt-2">Update of the most<br /> played 50 track.</p>
                                            </div>
                                        </div>
                                    )}
 
                                    {/* playist 3 */}
                                    <div className="flex items-center justify-between p-4 mt-8">
                                        <h3 className="text-2xl text-white font-bold font-2 tracking-tight">Throwback</h3>
                                        <p className="text-gray-500 text-xs font-9 font-semibold  cursor-pointer" onClick={toggleAdditionalRow3}>{showAdditional3 ? 'Show Less' : 'Show All'}</p>
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="flex flex-row gap-4">
                                            <div className="ms-2 bg-zinc-900 rounded-lg p-3 ">
                                            <Link to='/koreansound'>
                                                <img src="../image/tr1.jpg" alt="Lofi Beats" className="ms-1 rounded-lg" /></Link>
                                                <p className="text-white font-semibold mt-2">Best of Korean Soundtrack</p>
                                                <p className="text-gray-400 mt-2">Relieve your favourite<br />K-drama moments..</p>
                                            </div>
                                            <div className="bg-zinc-900 rounded-lg p-3">
                                            <Link to='/ost'>
                                                <img src="../image/tr2.jpg" alt="Todays Top Song" className=" rounded-lg" /></Link>
                                                <p className="text-white font-semibold mt-2">OST 명곡 베스트</p>
                                                <p className="text-gray-400 mt-2">그 시절 그 때의 감성이<br />담겨 있는 OST 명곡..</p>
                                            </div>
                                            <div className="bg-zinc-900 rounded-lg p-3">
                                            <Link to='/lovetelugu'>
                                                <img src="../image/tr4.jpg" alt="Chill Beats" className=" rounded-lg" /></Link>
                                                <p className="text-white font-semibold mt-2">00s Love Songs Telugu</p>
                                                <p className="text-gray-400 mt-2">What's a better<br />combination than...</p>
                                            </div>
                                            <div className="bg-zinc-900 rounded-lg p-3">
                                            <Link to='/odlvinyls'>
                                                <img src="../image/tr3.jpg" alt="All Top Songs" className=" rounded-lg" /></Link>
                                                <p className="text-white font-semibold mt-2">Korean Old Vinyls</p>
                                                <p className="text-gray-400 mt-2">Listen koreas classic<br />& old song from 70's.</p>
                                            </div>
                                            <div className="bg-zinc-900 rounded-lg p-3">
                                            <Link to='/bestkpop'>
                                                <img src="../image/tr5.jpg" alt="Jazz Music" className=" rounded-lg" /></Link>
                                                <p className="text-white font-semibold  mt-2">Best K-pop Song of 20</p>
                                                <p className="text-gray-400  mt-2">Find new tracks<br />of pop from 2020...</p>
                                            </div>
                                        </div>
                                    </div>

                                    {showAdditional3 && (
                                        <div className="flex flex-row mt-10 gap-4">
                                            <div className="ms-2 bg-zinc-900 rounded-lg p-3 ">
                                            <Link to='/millenium'>
                                                <img src="../image/tr6.jpg" alt="Lofi Beats" className="ms-1 rounded-lg" /></Link>
                                                <p className="text-white font-semibold mt-2">Millenium K-pop</p>
                                                <p className="text-gray-400 mt-2">Listen the 00s best<br />collection of k-pop..</p>
                                            </div>
                                            <div className="bg-zinc-900 rounded-lg p-3">
                                            <Link to='/all10'>
                                                <img src="../image/tr7.jpg" alt="Todays Top Song" className=" rounded-lg" /></Link>
                                                <p className="text-white font-semibold mt-2">All Out 0f 2010s</p>
                                                <p className="text-gray-400 mt-2">The biggest songs of <br />the 2010s.</p>
                                            </div>
                                            <div className="bg-zinc-900 rounded-lg p-3">
                                            <Link to='/all90s'>
                                                <img src="../image/tr8.jpg" alt="Chill Beats" className=" rounded-lg" /></Link>
                                                <p className="text-white font-semibold mt-2">All Out 0f 90s</p>
                                                <p className="text-gray-400 mt-2">Enjoy music with<br />90s vibe..</p>
                                            </div>
                                                          
                                        </div>
                                    )}

                                    {/* playist 4 */}
                                    <div className="flex items-center justify-between p-4 mt-8">
                                        <h3 className="text-2xl text-white font-bold font-2 tracking-tight">Sing-Along </h3>
                                        <p className="text-gray-500 text-xs font-9 font-semibold  cursor-pointer" onClick={toggleAdditionalRow5}>{showAdditional5 ? 'Show Less' : 'Show All'}</p>
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="flex flex-row gap-4">
                                            <div className="ms-2 bg-zinc-900 rounded-lg p-3 ">
                                            <Link to='/kclubparty'>
                                                <img src="../image/sa1.jpg" alt="Lofi Beats" className="ms-1 rounded-lg" /></Link>
                                                <p className="text-white font-semibold mt-2">K-Club Party</p>
                                                <p className="text-gray-400 mt-2">Lets party and clubbing<br />with your favourite k-pop..</p>
                                            </div>
                                            <div className="bg-zinc-900 rounded-lg p-3">
                                            <Link to='/girlkaroke'>
                                                <img src="../image/sa2.jpg" alt="Todays Top Song" className=" rounded-lg" /></Link>
                                                <p className="text-white font-semibold mt-2">Girl Power Karaoke</p>
                                                <p className="text-gray-400 mt-2">The girl empowernment<br />anthems that fuelled...</p>
                                            </div>
                                            <div className="bg-zinc-900 rounded-lg p-3">
                                            <Link to='/popfavourites'>
                                                <img src="../image/sa3.jpg" alt="Chill Beats" className=" rounded-lg" /></Link>
                                                <p className="text-white font-semibold mt-2">Pop Favourites</p>
                                                <p className="text-gray-400 mt-2">The hits you just can't<br />get enough of.</p>
                                            </div>
                                            <div className="bg-zinc-900 rounded-lg p-3">
                                            <Link to='/singindie'>
                                                <img src="../image/sa4.jpg" alt="All Top Songs" className=" rounded-lg" /></Link>
                                                <p className="text-white font-semibold mt-2">Sing Along Indie</p>
                                                <p className="text-gray-400 mt-2">Get those vocal chords<br />working with these..</p>
                                            </div>
                                            <div className="ms-2 bg-zinc-900 rounded-lg p-3 ">
                                            <Link to='/classicoldies'>
                                                <img src="../image/sa6.jpg" alt="Lofi Beats" className="ms-1 rounded-lg" /></Link>
                                                <p className="text-white font-semibold mt-2">Classic Oldies</p>
                                                <p className="text-gray-400 mt-2">Classic hits from <br />the 50s and 60s.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {showAdditional5 && (
                                        <div className="flex flex-row mt-10 gap-4">
                                            
                                            <div className="bg-zinc-900 rounded-lg p-3">
                                            <Link to='/karokeespanol'>
                                                <img src="../image/sa7.jpg" alt="Todays Top Song" className=" rounded-lg" /></Link>
                                                <p className="text-white font-semibold mt-2">Karaoke en Español</p>
                                                <p className="text-gray-400 mt-2">Saca la estrella <br />que Ilevas dentro,</p>
                                            </div>
                                            <div className="bg-zinc-900 rounded-lg p-3">
                                            <Link to='/partydeluxe'>
                                                <img src="../image/sa9.jpg" alt="All Top Songs" className=" rounded-lg" /></Link>
                                                <p className="text-white font-semibold mt-2">Party Deluxe</p>
                                                <p className="text-gray-400 mt-2">Hits zum Tanzen und<br /> Mitsingen - von...</p>
                                            </div>
                                                         
                                        </div>
                                    )}

                                    {/* playist 5 */}
                                    <div className="flex items-center justify-between p-4 mt-8">
                                        <h3 className="text-2xl text-white font-bold font-2 tracking-tight">Try Something Else</h3>
                                        <p className="text-gray-500 text-xs font-9 font-semibold  cursor-pointer" onClick={toggleAdditionalRow6}>{showAdditional6 ? 'Show Less' : 'Show All'}</p>
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="flex flex-row gap-4">
                                            <div className="ms-2 bg-zinc-900 rounded-lg p-3 ">
                                            <Link to='/bts'>
                                                <img src="../image/l1.jpg" alt="Lofi Beats" className="ms-1 rounded-lg" /></Link>
                                                <p className="text-white font-semibold mt-2">This Is BTS</p>
                                                <p className="text-gray-400 mt-2">Ten years of BTS<br />and beyond.</p>
                                            </div>
                                            <div className="bg-zinc-900 rounded-lg p-3">
                                            <Link to='/toptrack2023'>
                                                <img src="../image/l2.jpg" alt="Todays Top Song" className=" rounded-lg" /></Link>
                                                <p className="text-white font-semibold mt-2">TOP 트랙 2023</p>
                                                <p className="text-gray-400 mt-2">2023년 대한민국을 빛 <br />낸 트랙들을 만나보세...</p>
                                            </div>
                                            <div className="bg-zinc-900 rounded-lg p-3">
                                            <Link to='/kimbops'>
                                                <img src="../image/l3.jpg" alt="Chill Beats" className=" rounded-lg" /></Link>
                                                <p className="text-white font-semibold mt-2">KimBops!</p>
                                                <p className="text-gray-400 mt-2">rolling with the 'bops'<br />in your Kimbap.</p>
                                            </div>
                                            <div className="bg-zinc-900 rounded-lg p-3">
                                            <Link to='/kpopfresh'>
                                                <img src="../image/l6.jpg" alt="All Top Songs" className=" rounded-lg" /></Link>
                                                <p className="text-white font-semibold mt-2">K-pop Fresh</p>
                                                <p className="text-gray-400 mt-2">The freshest k-pop<br />of today!</p>
                                            </div>
                                            <div className="ms-2 bg-zinc-900 rounded-lg p-3 ">
                                            <Link to='/kpoppk'>
                                                <img src="../image/l8.jpg" alt="Lofi Beats" className="ms-1 rounded-lg" /></Link>
                                                <p className="text-white font-semibold mt-2">K-POP for PK</p>
                                                <p className="text-gray-400 mt-2">Pakistans favourite<br />K-pop track...</p>
                                            </div> 
                                        </div>
                                    </div>

                                    {showAdditional6 && (
                                        <div className="flex flex-row mt-10 gap-4">
                                            <div className="ms-2 bg-zinc-900 rounded-lg p-3 ">
                                            <Link to='/jk'>
                                                <img src="../image/l5.jpg" alt="Lofi Beats" className="ms-1 rounded-lg" /></Link>
                                                <p className="text-white font-semibold mt-2">This Is Jungkook</p>
                                                <p className="text-gray-400 mt-2">Are you ready to listen<br />JK'S songs for 7 days?</p>
                                            </div>
                                            <div className="bg-zinc-900 rounded-lg p-3">
                                            <Link to='/workout'>
                                                <img src="../image/l7.jpg" alt="Jazz Music" className=" rounded-lg" /></Link>
                                                <p className="text-white font-semibold  mt-2">WORK OUT</p>
                                                <p className="text-gray-400  mt-2">Work out to music?<br />Count me in.</p>
                                            </div>
                                        </div>
                                    )}

                                     

                                    <div className="flex flex-col lg:flex-row lg:mt-24 lg:ms-10 lg:gap-20">
                                        <div className="flex flex-col mb-10 lg:mb-0">
                                            <h4 className="text-lg text-gray-100">Company</h4>
                                            <div className="mt-5 text-base text-gray-400">
                                                <p>About</p>
                                                <p>Jobs</p>
                                                <p>For the Record</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col mb-10 lg:mb-0">
                                            <h4 className="text-lg text-gray-100">Communities</h4>
                                            <div className="mt-5 text-base text-gray-400">
                                                <p>For Artists</p>
                                                <p>Developers</p>
                                                <p>Advertising</p>
                                                <p>Investors</p>
                                                <p>Vendors</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col mb-10 lg:mb-0">
                                            <h4 className="text-lg text-gray-100">Use links</h4>
                                            <div className="mt-5 text-base text-gray-400">
                                                <p>Support</p>
                                                <p>Freeb Mobile App</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex flex-row gap-4">
                                                <div className="text-white bg-gray-800 bg-opacity-50 p-3 rounded-full"><i className="bi bi-instagram"></i></div>
                                                <div className="text-white bg-gray-800 bg-opacity-50 p-3 rounded-full"><i className="bi bi-twitter"></i></div>
                                                <div className="text-white bg-gray-800 bg-opacity-50 p-3 rounded-full"><i className="bi bi-facebook"></i></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
