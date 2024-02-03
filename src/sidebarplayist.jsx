import React from "react";
import { Link } from "react-router-dom";


export default function SidebarPlayist(){

    return(
        <>
         <div className="flex flex-col w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 fixed">
      <div className="flex w-full h-32 p-4 m-1 flex-shrink-0 box2 rounded-lg">
        <div className="flex flex-col">
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
            </Link>          </div>
        </div>
      </div>
      <div className="flex w-full h-96 p-4 m-1 flex-shrink-0 box2 rounded-lg">
         <div className="flex flex-col">
         <div className="flex items-center text-white mt-3">
            <span className="material-symbols-outlined text-3xl">library_music</span>
            <div className="ml-5 text-base font-semibold font-5">Your Library</div>
            <span className="material-symbols-outlined text-2xl ms-16">add</span>
          </div>
         <div className="mt-4 bg-zinc-800 p-2 ps-4 w-20 rounded-3xl text-white">Playlist</div>
        <div className="mt-4 p-2 bg-zinc-800 w-72 rounded-lg">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/image/mus.jpg"
            style={{ width: '46px', height: '46px', marginRight: '8px', borderRadius: '10px', objectFit:'cover', backgroundColor : 'gray' }}
          />
          <div className="tracking-wide">
            <p className="text-white text-sm font-9">My Playlist #1</p>
            <p className="text-gray-500 text-xs font-9">Playlist</p>
          </div>
        </div> 
        </div>

        
         </div>
      </div>
    </div>
        </>
    )
}