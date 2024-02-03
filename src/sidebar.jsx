import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar(){
    return(
        <>
         <div className="flex flex-col w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 fixed">
      <div className="flex w-full h-40 p-4 m-1 flex-shrink-0 box2 rounded-lg">
        <div className="flex flex-col">
          <div className=""><img src="../image/Spotify-logo.png" className="w-full" alt="Spotify Logo" /></div>
          <div className="flex items-center text-white mt-3">
            <span className="material-symbols-outlined text-3xl">home</span>
            <Link to='/homes' style={{ textDecoration: 'none' }}>
            <div className="ml-5 text-base font-semibold font-5 text-white ">Home</div>
            </Link>
          </div>
          <div className="flex items-center text-white mt-3">
            <span className="material-symbols-outlined text-3xl">search</span>
            <Link to='/search' style={{ textDecoration: 'none' }}>
            <div className="ml-5 text-base font-semibold font-5 text-white">Search</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full h-80 p-4 m-1 flex-shrink-0 box2 rounded-lg">
         <div className="flex flex-col">
         <div className="flex items-center text-white mt-3">
            <span className="material-symbols-outlined text-3xl">library_music</span>
            <div className="ml-5 text-base font-semibold font-5">Your Library</div>
            <span className="material-symbols-outlined text-2xl ms-16">add</span>
          </div>
          <div className="bg-black mt-4 p-9 w-72 rounded-lg">
           <Link to='/createplay'>
           <button class="bg-white  text-black font-bold py-3 px-4 border-none rounded-2xl cursor-pointer">
             Create Your Playlist
            </button>
           </Link>
         </div>



          <div className="flex flex-row text-gray-500 tracking-wide mt-3 text-xs gap-3">
            <p>Legal</p>
            <p>Privacy Policy</p>
            <p>Privacy Centre</p> 
          </div>
          <div className="flex flex-row text-gray-500 tracking-wide mt-4 text-xs gap-3">
            <p>Cookies</p>
            <p>About Ads</p>
            <p>Accessibility</p> 
          </div>
          <div className="border-solid border border-slate-200 rounded-3xl p-1 mt-4">
            <div className="flex items-center text-slate-100">
              <span className="material-symbols-outlined font-thin text-xl">language</span>
              <div className="ml-2 text-sm">English</div>
            </div>
          </div>
         </div>
      </div>
    </div>
        </>
    )
}