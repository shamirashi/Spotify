import React, { useState } from "react";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";

export default function Lofi(){
    const songs = [
        { id: 1, Title: 'After Hours', Artist: 'Gooee' , Album : 'After Hours ', Duration : "2:03 " , Day : ' 5 days ago' , img : 'https://i.scdn.co/image/ab67616d00001e027fcead687e99583072cc217b ' , music : ' /music/lofi/After Hours.mp3'},
        { id: 2, Title: 'balcony', Artist: 'fnonose, morningtime' , Album : 'balcony ', Duration : " 2:27" , Day : ' 5 days ago' , img : 'https://i.scdn.co/image/ab67616d00001e023d1478451c8369474b68af21 ' , music : '/music/lofi/balcony.mp3 '},
        { id: 3, Title: 'fantasize', Artist: 'bdazzled.' , Album : 'fantasize ', Duration : "2:26 " , Day : '5 days ago ' , img : ' https://i.scdn.co/image/ab67616d0000b273e09051d7436fd60035440355' , music : ' /music/lofi/fantasize.mp3'},
        { id: 4, Title: 'Lazy Sunday', Artist: 'Cielomoto' , Album : 'Lazy Sunday ', Duration : " 2:54" , Day : '5 days ago ' , img : ' https://i.scdn.co/image/ab67706f00000002cdb64d049ec11c2b11052ee4' , music : '/music/lofi/Lazy Sunday.mp3 '},
        { id: 5, Title: ' Sunday Funday', Artist: 'Vida' , Album : 'Sunday Funday ', Duration : " 1:58" , Day : '5 days ago ' , img : ' https://i.scdn.co/image/ab67616d0000b273842f46b073bb3c37f5f06cf6' , music : '/music/lofi/Sunday Funday.mp3 '},
        { id: 6, Title: 'little fat fella', Artist: 'Wun Two' , Album : 'Snow , Vol.8 ', Duration : "1:04 " , Day : ' 5 days ago' , img : ' https://i.scdn.co/image/ab67616d00001e02b7f6b241d21281ee308d3c34' , music : ' /music/lofi/little fat fella.mp3'},
        { id: 7, Title: 'cold breeze', Artist: 'Wush' , Album : 'cold breeze ', Duration : " 1:48" , Day : '5 days ago ' , img : 'https://i.scdn.co/image/ab67616d0000b27301967cb2b75da3c003f81b89 ' , music : '/music/lofi/cold breeze.mp3 '},
        { id: 8, Title: 'Beauty', Artist: 'W8lss' , Album : ' Beauty', Duration : "1:51 " , Day : '5 days ago ' , img : ' https://i.pinimg.com/custom_covers/222x/645140784059963430_1548169126.jpg' , music : '/music/lofi/Beauty.mp3 '},
        { id: 9, Title: 'Projection', Artist: 'love_eight' , Album : 'Projection ', Duration : " 2:38" , Day : '5 days ago ' , img : 'https://i.scdn.co/image/ab67706c0000da84c8a44e00b238c606d5f98177 ' , music : '/music/lofi/projection.mp3 '},
        { id: 10, Title: 'Pretty Angel', Artist: 'Presh Milk' , Album : 'pretty angel ', Duration : "2:18 " , Day : '5 days ago ' , img : 'https://i.pinimg.com/originals/6c/ed/ae/6cedaea7cc23b27cf0f65f19c46d96c3.jpg ' , music : '/music/lofi/prettu angel.mp3 '},
      
      ];

      const [hoveredId, setHoveredId] = useState(null);
      const [playingId, setPlayingId] = useState(null);

      const handlePlayPauseClick = (songId) => {
        if (playingId === songId) {
        
          setPlayingId(null);
          const audio = new Audio(songs.find((song) => song.id === songId).music);
            audio.pause();
          
        } else {
          
          setPlayingId(songId);
          const audio = new Audio(songs.find((song) => song.id === songId).music);
          audio.play();
        }
      };

    return(
        <>
            <div className="container mx-auto mt-3">
                <div className="flex flex-row flex-wrap">
                    <Sidebar />
                    <div className="flex flex-col sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 ms-80">
                        <div className="flex width m-1 ms-8 flex-shrink-0 bg-transparent box2 rounded-lg">
                            <div className="flex flex-col w-full ">

                                
                                <div  style={{ overflowY: 'auto', maxHeight: '500px', marginBlockEnd: "5px" }}>

                                    <div className="flex items-center justify-between p-4 bg-rose-400 bg-opacity-70 w-full">
                                        <div className="flex-1">
                                            <div className="text-lg text-slate-200">
                                                <span className="material-symbols-outlined">arrow_back_ios</span>  <span className="material-symbols-outlined">arrow_forward_ios</span>
                                            </div>
                                        </div>
                                        <div className="flex-1"></div>

                                        <div className="flex-1 ms-80">
                                           <Link to='/register'>
                                           <button className="border-none bg-transparent border text-gray-500 font-semibold text-sm font-7 hover:text-white">Sign up</button>
                                           </Link>
                                           <Link to='/login'>
                                           <button className="bg-white text-sm font-semibold py-3 px-6 rounded-full border-none">Log in</button>
                                           </Link>
                                        </div>   
                                    </div>
                                     
                                     <div className="flex flex-col bg-rose-400 bg-opacity-70">
                                        <div className="flex flex-row">
                                          <div className="p-5"> <img src="/image/lofi.jpg" alt="lofi beats" className="rounded-lg" /></div>

                                          <div>
                                            <div className="flex flex-col ">
                                                <div><p className="text-white text-sm font-medium">Playlist</p></div>
                                                <div><p className="text-white text-7xl font-extrabold font-9">lofi beats</p></div>
                                                <div><p className="text-white font-medium">chill beats, lofi vibes, new tracks every week...</p></div>
                                                <div className="mt-4 flex flex-row">
                                                  <div className="mr-2"><img src="/image/spo-gree.png" alt="Spotify Logo" /></div>
                                                  <div className="mr-2 mt-2"><p className="text-white  font-bold">Spotify</p></div>
                                                  <div><p className="text-white font-semibold mt-2">. 5,191,102 likes . 20 songs, 19 min 27 sec</p></div>
                                                  </div>
                                            </div>
                                          </div>
                                        </div>

                                     </div>
                                    
                                     <div className="flex flex-col bg-rose-400 bg-opacity-40 p-10">
                                        <div className="flex flex-row gap-6">
                                          <div><i className="bi bi-play-fill text-3xl bg-green-500 p-3 rounded-full cursor-pointer"></i></div>
                                          <div><i className="bi bi-heart text-4xl text-white cursor-pointer" title="Save to your Library"></i></div>
                                        </div>
                                     </div>

                                    <table className="border-spacing-y-10">
      <thead className="py-5">
        <tr className="text-gray-500 font-thin text-sm ">
          <th>#</th>
          <th>Title</th>
          <th className="border-spacing-8">Album</th>
          <th>Day</th>
          <th>Duration</th>   
        </tr>
      </thead>
      <tbody>
      {songs.map((song) => (
        <tr
          key={song.id}
          className={`text-white song-row ${hoveredId === song.id ? 'hovered' : ''}`}
          style={{ cursor: 'pointer' }}
          onMouseEnter={() => setHoveredId(song.id)}
          onMouseLeave={() => setHoveredId(null)}
         
        >
          <td className="px-10" onClick={() => handlePlayPauseClick(song.id)}>
                      {hoveredId === song.id ? (
                        playingId === song.id ? (
                          
                          <i className="bi bi-pause-fill"></i>
                        ) : (
                          
                          <i className="bi bi-play-fill"></i>
                        )
                      ) : (
                        song.id
                      )}
                    </td>
          <td className="py-2" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={song.img}
              alt={`Album cover for ${song.Title}`}
              style={{ width: '40px', height: '40px', marginRight: '8px', borderRadius: '10px' }}
            />
            <div className="text-sm tracking-wide">
              <p >{song.Title}</p>
              <p>{song.Artist}</p>
            </div>
          </td>
          <td className="px-20">{song.Album}</td>
          <td className="px-20">{song.Duration}</td>
          <td className="px-16">{song.Day}</td>
          <td>
            {playingId === song.id && (
              <audio
                id={`audio-${song.id}`}
                controls={false}
                src={song.music}
                autoPlay
              ></audio>
            )}
          </td>
        </tr>
      ))}
    </tbody>
    </table>

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
