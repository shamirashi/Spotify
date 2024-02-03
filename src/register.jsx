import React , { useState} from "react";
import { useNavigate , Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    const navigate = useNavigate();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
 

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post("http://localhost:3000/api/register", { name, password, email });
        console.log(response);
        if (response.status === 200) {
            toast.success("Registration Successful", { position: 'top-center' });
            setName('');
            setPassword('');
            setEmail('');
            navigate("/login");
        } else {
            const data = response.data;
            toast.error(`Error: ${data.error}`);
        }
    } catch (error) {
        console.error('Error:', error);
        toast.error('An error occurred while registering the user.');
    }
};
   
    return(
        <>
       <div className="container relative">
   
    <div className="flex flex-row">
    <div className="flex flex-col absolute top-6 left-7">
        <img src="../image/Spotify-logo.png" alt="Spotify" />
    </div>
    </div>
    
    <div className="flex flex-col mt-20 items-center justify-center">
        <form className="w-full max-w-md  shadow-md rounded px-8 pt-6 pb-8" onSubmit={handleRegister} encType="multipart/form-data">
            <h2 className="text-5xl mb-4 text-center font-10 font-bold tracking-tighter text-white ">Sign up to start listening</h2>
            
            <div className="mb-4">
            <label className="block text-white text-base font-semibold mb-2" htmlFor="name">
                Name
            </label>
            <input
                className="shadow text-white bg-transparent border-solid border inp rounded  py-4 px-3  leading-tight "
                id="name" name="username"
                type="text"
                placeholder="Your Name"
                onChange={e => setName(e.target.value)}
            />
            </div>
            <div className="mb-4">
            <label className="block text-white text-base font-semibold mb-2" htmlFor="email">
                Email address
            </label>
            <input
                className="shadow text-white bg-transparent border-solid border inp rounded  py-4 px-3  leading-tight "
                id="email" name="email"
                type="email"
                placeholder="name@domain.com"
                onChange={e => setEmail(e.target.value)}
            />
            </div>

            <div className="mb-4">
            <label className="block text-white text-base font-semibold mb-2" htmlFor="password">
                Password
            </label>
            <input
                className="shadow  bg-transparent text-white border-solid border inp rounded  py-4 px-3  leading-tight "
                id="password" name='password'
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
            />
            </div>

            <div className="mb-4">
                <button className="inp bg-green-500 border-none py-4 px-3 rounded-full text-lg font-bold ">Sign up</button>
            </div>

        </form>

        <div className="flex items-center w-96">
  <hr className="flex-grow border-t  border-gray-300" />
  <span className="mx-4 text-white">or</span>
  <hr className="flex-grow border-t border-gray-300" />
</div>

<div className="my-5 flex items-center mb-20">
    <div >
    <button  className="inp bg-transparent text-white border py-3 px-3 rounded-full text-lg font-bold flex items-center" >
    <span className="mr-2">
        <img src="/image/g.jpg" alt="Google"  />
    </span>
    Sign Up with Google
</button>
   </div>
</div>


       <div className="mb-20" >
        <p className="text-slate-300 text-lg">Already have an account? <Link to='/login'><span className="text-white hover:text-green-500 ">Log in here</span></Link> </p>
        </div>

    </div>

   
<ToastContainer />

</div>



        </>
    )
}
export default Register;