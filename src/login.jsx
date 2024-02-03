import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (event) => {
        event.preventDefault();

        fetch("http://localhost:3000/api/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
                return res.text();
            })
            .then(data => {
                if (data.msg) {
                    localStorage.setItem("token", data.token);
                    toast.success(data.msg, { position: 'top-center' }); 
                    // window.location.href = "/homes"; 
                } else {
                    toast.error(data, { position: 'top-center' }); 
                }
            });
    } 


    return (
        <>
        <div className="container relative ">

        <div className="flex flex-row ">
    <div className="flex flex-col absolute top-7 left-7">
        <img src="../image/Spotify-logo.png" alt="Spotify" />
    </div>
    </div>


    <div className="flex flex-col mt-20 items-center justify-center ">
        <form className="w-full max-w-md  shadow-md rounded px-8 pt-6 pb-8" onSubmit={login}>
            <h2 className="text-5xl mb-4 text-center font-10 font-bold tracking-tighter text-white ">Log in to Spotify</h2>
            
            <div className="mb-4">
            <label className="block text-white text-base font-semibold mb-2" htmlFor="email">
                Email address
            </label>
            <input
                className="shadow text-white bg-transparent border-solid border inp rounded  py-4 px-3  leading-tight "
                id="email" name="email"
                type="email"
                placeholder="name@domain.com"
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>

            <div className="mb-4">
            <label className="block text-white text-base font-semibold mb-2" htmlFor="password">
                Password
            </label>
            <input
                className="shadow text-white bg-transparent border-solid border inp rounded  py-4 px-3  leading-tight "
                id="password" name='password'
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>

            <div className="mb-4">
                <button className="inp bg-green-500 border-none py-4 px-3 rounded-full text-lg font-bold ">Log In</button>
            </div>

        </form>

    <div >
        <p className="text-slate-300 text-lg">Don't have an account? <Link to='/register'><span className="text-white hover:text-green-500 ">Sign up for Spotify</span></Link> </p>
    </div>


    </div>


<ToastContainer />
        </div>
        </>
    )
}