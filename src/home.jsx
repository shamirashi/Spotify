import React, {useState} from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";

export default function Home() {
  const [showAdditional, setShowAdditional] = useState(false);

  const toggleAdditionalRow = () => {
    setShowAdditional(!showAdditional);
  };
  
  return (
    <>
      <div className="container mx-auto mt-3">
  <div className="flex flex-row flex-wrap">
   <Sidebar/>
    <div className="flex flex-col sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 ms-80">
     <div className="flex wid m-1 ms-8 flex-shrink-0 bg-transparent box2 rounded-lg">
    <div className="flex flex-col w-full">
      
    <div className="flex items-center justify-between p-4 bg-black bg-opacity-35 w-full">
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
    <button className="bg-white text-sm font-semibold py-3 px-6 rounded-full">Log in</button>
    </Link>
  </div>
</div>
  
<div className="flex items-center justify-between p-4">
    <h3 className="text-2xl text-white font-bold font-2 tracking-tight">Spotify Playlists</h3>
    <p className="text-gray-500 text-xs font-9 font-semibold  cursor-pointer" onClick={toggleAdditionalRow}>{showAdditional ? 'Show Less' : 'Show All'}</p> 
</div>

<div className="flex flex-col">

  <div className="flex flex-row gap-6">
    <div className="ms-2 bg-zinc-900 rounded-lg p-3 ">
      <Link to='/lofi'>
      <img src="../image/lofi.jpg" alt="Lofi Beats" className="ms-1 rounded-lg" />
      </Link>
      <p className="text-white mt-2">Lofi Beats</p>
      <p className="text-gray-400 mt-1">chill beats, lofi vibes,<br/>new tracks every...</p>
    </div>
    <div className="bg-zinc-900 rounded-lg p-3">
    <img src="../image/topsong.jpg" alt="Todays Top Song" className=" rounded-lg" />
    <p className="text-white mt-2">Today's Top Hits</p>
      <p className="text-gray-400 mt-1">Ariana Grande is on top<br/>of the Hottest 50!...</p>
    </div>
    <div className="bg-zinc-900 rounded-lg p-3">
    <img src="../image/chill.jpg" alt="Chill Beats" className=" rounded-lg" />
    <p className="text-white mt-2">Chill out Lounge</p>
      <p className="text-gray-400 mt-1">Just lean back and<br/>enjoy relaxed beats.</p>
    </div>
    <div className="bg-zinc-900 rounded-lg p-3">
    <img src="../image/all.jpg" alt="All Top Songs" className=" rounded-lg" />
    <p className="text-white mt-2">All out of 2020s</p>
      <p className="text-gray-400 mt-1">The biggest songs of<br/>the 2020s.</p>
    </div>
    <div className="bg-zinc-900 rounded-lg p-3">
    <img src="../image/jazz.jpg" alt="Jazz Music" className=" rounded-lg" />
    <p className="text-white mt-2">Jazz in the background</p>
      <p className="text-gray-400  mt-1">Soft instrumental jazz<br/>for all your activities</p>
    </div>
  </div>


  {showAdditional && (
  <div className="flex flex-row mt-10 gap-3">
    <div className="ms-2 bg-zinc-900 rounded-lg p-3 ">
      <img src="../image/hits6.jpg" alt="Lofi Beats" className="ms-1 rounded-lg" />
      <p className="text-white mt-2">Chill Hits</p>
      <p className="text-gray-400 mt-1">Kick back to the best<br/>new and recent chill...</p>
    </div>
    <div className="bg-zinc-900 rounded-lg p-3">
    <img src="../image/piano7.jpg" alt="Todays Top Song" className=" rounded-lg" />
    <p className="text-white mt-2">Peaceful Piano</p>
      <p className="text-gray-400 mt-1">Peaceful Piano to help<br/>you slow down...</p>
    </div>
    <div className="bg-zinc-900 rounded-lg p-3">
    <img src="../image/rock8.jpg" alt="Chill Beats" className=" rounded-lg" />
    <p className="text-white mt-2">Rock Classics</p>
      <p className="text-gray-400 mt-1">Rocl legend & epic<br/>songs that continue...</p>
    </div>
    <div className="bg-zinc-900 rounded-lg p-3">
    <img src="../image/stress9.jpg" alt="All Top Songs" className=" rounded-lg" />
    <p className="text-white mt-2">Stress Relief</p>
      <p className="text-gray-400 mt-1">Calm your mind from<br/>anxiety with gently...</p>
    </div>
    <div className="bg-zinc-900 rounded-lg p-3">
    <img src="../image/allof10.jpg" alt="Jazz Music" className=" rounded-lg" />
    <p className="text-white mt-2">All of 80's</p>
      <p className="text-gray-400  mt-1">The biggest songs of <br/>the 1980s.Cover...</p>
    </div>
  </div>
 )}
</div>

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


    </>
  );
}

