import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";
import NowPlaying from "./nowplaying";

export default function Throw2() {
  const songs = [
    { id: 1, Title: 'Say Yes', Artist: 'Loco , Punch ', Album: 'Moonlovers ', Duration: "3:38 ", Day: ' 1 day ago', img: 'https://i.scdn.co/image/ab67616d0000b273cb95963709806e12d93128d4', music: '/music/throwback/[달의 연인 - 보보경심 려 OST Part 2] 로꼬, 펀치 (Loco, Punch) - Say Yes MV.mp3' },
    { id: 2, Title: 'Sweet Night', Artist: 'V ', Album: ' ITAEWON CLASS', Duration: " 3:34", Day: ' 1 days ago', img: ' https://upload.wikimedia.org/wikipedia/en/9/99/V_%E2%80%93_Sweet_Night.jpg', music: ' /music/throwback/[MV] V (BTS) - Sweet Night [이태원 클라쓰 OST Part.12 (ITAEWON CLASS OST Part.12)].mp3' },
    { id: 3, Title: 'Once Again', Artist: 'Mad Clown, Kim Na Young ', Album: ' Descendants Of the Sun', Duration: "3:55 ", Day: '1 days ago ', img: 'https://i1.sndcdn.com/artworks-000152673600-tk34ke-t500x500.jpg', music: '/music/throwback/Mad Clown & Kim Na Young  - _Once Again (다시 너를) [DOTS OST Pt.5]_ (Color Coded Lyrics Eng-Rom-Han-가사).mp3' },
    { id: 4, Title: 'Stay With Me', Artist: 'CHANYEOL, Punch ', Album: 'Guardian ', Duration: " 3:12", Day: ' 1 days ago', img: ' https://upload.wikimedia.org/wikipedia/en/5/52/Chanyeol-Punch-Goblin-OST-Part-1.jpg', music: ' /music/throwback/[도깨비 OST Part 1] 찬열, 펀치 (CHANYEOL, PUNCH) - Stay With Me MV.mp3' },
    { id: 5, Title: 'Beautiful', Artist: 'Crush ', Album: 'Guardian ', Duration: " 3:47", Day: '1 days ago ', img: 'https://i.scdn.co/image/ab67616d0000b273bc051de00f5d0631b8df4bcd', music: '/music/throwback/[도깨비 OST Part 4] 크러쉬 (Crush) - Beautiful MV (ENG Sub).mp3' },

  ];
  const [hoveredId, setHoveredId] = useState(null);
  const [playingId, setPlayingId] = useState(null);
  const [audioElements, setAudioElements] = useState({});

  const handlePlayPauseClick = (songId) => {
    const audio = new Audio(songs.find((song) => song.id === songId).music);

    if (playingId === songId) {
      setPlayingId(null);
      audio.pause();
    } else {
      if (playingId !== null) {
        const currentlyPlayingAudio = audioElements[playingId];
        currentlyPlayingAudio.pause();
      }

      setPlayingId(songId);
      audio.play();

      const song = songs.find((song) => song.id === songId);
      addToRecentlyPlayed(song);

    }

    setAudioElements((prevElements) => ({ ...prevElements, [songId]: audio }));
  };

  useEffect(() => {
    return () => {
      if (playingId !== null) {
        const audio = audioElements[playingId];
        if (audio) {
          audio.pause();
        }
      }
    };
  }, [playingId, audioElements]);

  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

 
  const addToRecentlyPlayed = (song) => {
    if (!song || !song.Title) return;

    let storedRecentlyPlayed = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];

    if (storedRecentlyPlayed.length >= 10) {
      storedRecentlyPlayed = [...storedRecentlyPlayed.slice(1), song];
    } else {
      storedRecentlyPlayed = [...storedRecentlyPlayed, song];
    }

    localStorage.setItem('recentlyPlayed', JSON.stringify(storedRecentlyPlayed));
    setRecentlyPlayed(storedRecentlyPlayed);
  };
  


  return (
    <>
      <div className="container mx-auto mt-3">
        <div className="flex flex-row flex-wrap">
          <Sidebar />
          <div className="flex flex-col sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 ms-80">
            <div className="flex width m-1 ms-8 flex-shrink-0 bg-transparent box2 rounded-lg">
              <div className="flex flex-col w-full ">


                <div style={{ overflowY: 'auto', maxHeight: '495px', marginBlockEnd: "5px" }}>

                  <div className="flex items-center justify-between p-4 bg-purple-400 bg-opacity-70 w-full">
                    <div className="flex-1">
                      <div className="text-lg text-slate-200">
                        <span className="material-symbols-outlined">arrow_back_ios</span>  <span className="material-symbols-outlined">arrow_forward_ios</span>
                      </div>
                    </div>
                    <div className="flex-1"></div>

                    <div className="flex-1 ms-80">
                      <div className="flex items-center text-white gap-9">
                        <Link to='/log'>
                          <button className="bg-white text-xs font-bold py-2 border-none px-4 rounded-full cursor-pointer" title="Upgrade to Premium">Explore Premium</button>
                        </Link>
                        <span><i className="bi bi-bell bg-gray-800 bg-opacity-50 p-2 rounded-full cursor-pointer" title="What's New"></i></span>
                        <span className="material-symbols-outlined  bg-gray-800 bg-opacity-50 p-2 rounded-full">person</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col bg-purple-400 bg-opacity-70">
                    <div className="flex flex-row">
                      <div className="p-5"> <img src="/image/tr2.jpg" alt="lofi beats" className="rounded-lg" /></div>

                      <div>
                        <div className="flex flex-col ">
                          <div><p className="text-white text-sm font-medium">Playlist</p></div>
                          <div><p className="text-white text-7xl font-extrabold font-9">OST 명곡 베스트</p></div>
                          <div><p className="text-white font-medium">그 시절 그 때의 감성이 담겨 있는 OST 명곡..</p></div>
                          <div className="mt-4 flex flex-row">
                            <div className="mr-2"><img src="/image/spo-gree.png" alt="Spotify Logo" /></div>
                            <div className="mr-2 mt-2"><p className="text-white  font-bold">Spotify</p></div>
                            <div><p className="text-white font-semibold mt-2">. 5,191,102 likes . 5 songs, 6 min 27 sec</p></div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="flex flex-col bg-purple-400 bg-opacity-40 p-10">
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
                              style={{ width: '40px', height: '40px', marginRight: '8px', borderRadius: '10px', objectFit: 'cover' }}
                            />
                            <div className="text-xs tracking-wide font-9">
                              <p >{song.Title}</p>
                              <p>{song.Artist}</p>
                            </div>
                          </td>
                          <td className="px-20 font-9 text-sm">{song.Album}</td>
                          <td className="px-16 font-9 text-sm">{song.Day}</td>
                          <td className="px-20 font-9 text-sm">{song.Duration}</td>

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

        <div>
          <NowPlaying song={songs.find((song) => song.id === playingId)} handlePlayPauseClick={handlePlayPauseClick} />
        </div>
      </div>
    </>
  );
}
