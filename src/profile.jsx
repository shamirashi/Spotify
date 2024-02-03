import React, { useState , useEffect} from "react";
import SidebarPlayist from "./sidebarplayist";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Profile(){
    const [selectedFile, setSelectedFile] = useState(null);
  

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  if (selectedFile) {
    var imageURL = URL.createObjectURL(selectedFile);
    localStorage.setItem('imageURL', imageURL);
    console.log('Image URL stored in localStorage:', imageURL);
  }

  

  const [userdetails, setUserdetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/api/get-private-data', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const fetchedProducts = response.data;
        setUserdetails(fetchedProducts);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchDetails();
  }, []);

  const userName = userdetails.name;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const SignOut = () => {  
    let token = localStorage.getItem("token");
    if(token){
      localStorage.removeItem("token");
    }
    Navigate('/');
  }
  
    return(
        <>
            <div className="container mx-auto mt-3">
                <div className="flex flex-row flex-wrap">
                <SidebarPlayist/>
                    <div className="flex flex-col sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 ms-80">
                        <div className="flex width m-1 ms-8 flex-shrink-0 bg-transparent box2 rounded-lg">
                            <div className="flex flex-col w-full ">

                                
                                <div  style={{ overflowY: 'auto', maxHeight: '495px', marginBlockEnd: "5px" }}>

                                    <div className="flex items-center justify-between p-4 bg-zinc-600 bg-opacity-70 w-full">
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
                                     
                                     <div className="flex flex-col bg-zinc-600 bg-opacity-70">
                                        <div className="flex flex-row">

                                        <div className="p-5">
  <div className="group relative">
    <label htmlFor="fileInput">
      {selectedFile ? (
        <img 
          src={URL.createObjectURL(selectedFile)}
          alt="Profile Picture"
          className="w-64 h-64 rounded-full object-cover bg-gray-500 transition-opacity duration-300 ease-in-out cursor-pointer"
        />
      ) : (
        <img
          src="/image/profile.png"
          alt="Profile Picture"
          className="w-64 h-64 rounded-full object-cover bg-gray-500 transition-opacity duration-300 ease-in-out cursor-pointer"
        />
      )}
    </label>
    <input
      type="file"
      id="fileInput"
      className="hidden"
      onChange={handleFileChange}
    />
    { !selectedFile && (
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <label htmlFor="fileInput" className="text-black text-3xl font-semibold cursor-pointer">
          <span><i className="bi bi-pencil-fill text-2xl"></i></span> Choose Photo
        </label>
      </div>
    )}
  </div>
</div>



                                          <div>
                                            <div className="flex flex-col mt-20">
                                                <div><p className="text-white text-xl font-medium">Profile</p></div>
                                                <div><p className="text-white text-7xl font-extrabold font-9">{userName}</p></div>
                                            </div>
                                          </div>
                                        </div>

                                     </div>
                                    
                                     <div className="flex flex-col bg-zinc-600 bg-opacity-40 p-10">
      <div className="text-2xl text-white" onClick={toggleDropdown}>
        <i className="bi bi-three-dots"></i>
      </div>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <Link to='/' style={{textDecoration : 'none'}}>
          <p className="bg-black bg-opacity-40 text-white p-2 w-20" onClick={SignOut}>Log Out</p>
          </Link>
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

                
            </div>
        </>
    );
}
