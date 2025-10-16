import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import Lottie from "lottie-react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Bin = () => {

    const passwordRef = useRef()

    const [form, setForm] = useState({ site: "", username: "", password: "", notes: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");

        if (passwords) {
            setpasswordArray(JSON.parse(passwords));
        }
    }, [])


    const showPassword = () => {
        if (passwordRef.current.type === "text") {
            passwordRef.current.type = "password"
        } else {
            passwordRef.current.type = "text"
        }
    }

    const savePassword = async () => {
        // console.log(form);
        setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]));
        console.log([...passwordArray, form]);
        setForm({ site: "", username: "", password: "", notes: "" })
    }
    
    const deletePassword = async (id) => {
        // console.log(form);
        let confirmed = confirm("Are you sure about that?")
        if (confirmed){

            setpasswordArray(passwordArray.filter(item=> item.id != id));
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=> item.id != id)));
        }
    }

    const editPassword = async (id) => {
        // console.log(form);
        // console.log("Editing password with id", id);
        // returns array
        setForm(passwordArray.filter(item => item.id === id)[0])
        setpasswordArray(passwordArray.filter(item=> item.id != id))
        
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const copyText = (text) => {
        // toast.info('Copied to Clipboard', {
        //     position: "bottom-right",
        //     autoClose: 1000,
        //     hideProgressBar: false,
        //     closeOnClick: false,
        //     pauseOnHover: false,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //     transition: "Bounce"
        // });
        navigator.clipboard.writeText(text);
    }

    return (
        <>
            {/* <ToastContainer
                position="bottom-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            /> */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

            <div className="container mx-auto max-w-4xl">


                <label className="block text-sm font-medium text-gray-900 dark:text-black mb-1">Manage your Passwords</label>
                <div className="credentials">
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-y-4 gap-x-3'>

                        <input name='site' value={form.site} onChange={handleChange} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-300 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 md:col-span-4" placeholder="Site/App/Service" required />

                        <input name='username' value={form.username} onChange={handleChange} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-blue-300 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Name" required />

                        {/* password input replaced with a relative wrapper so the icon can be absolutely positioned */}
                        <div className="relative">
                            <input
                                ref={passwordRef}
                                onChange={handleChange}
                                name='password'
                                value={form.password}
                                type="password"
                                id="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 pr-10 dark:bg-blue-300 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Password"
                                required
                            />
                            <lord-icon
                                src="https://cdn.lordicon.com/knitbwfa.json"
                                trigger="hover"
                                style={{ width: '28px', height: '28px' }}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={showPassword}
                            />
                        </div>


                        <input value={form.notes} name='notes' onChange={handleChange} type="notes" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-blue-300 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 md:col-span-2" placeholder="Notes (if any)" required />
                    </div>
                </div>

                <button className='flex mx-auto my-2 justify-center items-center  hover:bg-blue-200 rounded-full hover:px-5 transition-all duration-400 px-3 py-1 hover:cursor-pointer border border-blue-500' onClick={savePassword}>
                    <lord-icon
                        src="https://cdn.lordicon.com/vjgknpfx.json"
                        trigger="hover"
                        stroke="bold"
                        colors="primary:#121331,secondary:#16c72e"
                    >
                    </lord-icon>
                    Add Password
                </button>

            </div>

            <div className="relative overflow-x-auto max-w-4xl mx-auto shadow-2xl shadow-blue-300 sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-black dark:bg-blue-300">
                        Your Passwords
                        {/* <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p> */}
                    </caption>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Site name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                USERNAME
                            </th>
                            <th scope="col" className="px-6 py-3">
                                password
                            </th>
                            <th scope="col" className="px-6 py-3">
                                notes
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {passwordArray.map((item, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-blue-300 dark:border-gray-700 border-gray-200 transition-all duration-500">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                    <div className='flex items-center'>
                                        <a href={item.site} target="_blank" rel="noopener noreferrer">{item.site}</a>
                                        <div className='lordicon_copy px-3' onClick={() => { copyText(item.site) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/hmpomorl.json"
                                                trigger="click"
                                                style={{ width: '28px', height: '28px' }}
                                                className='hover:cursor-pointer'>
                                            </lord-icon>
                                        </div>
                                    </div>
                                </th>
                                <td className=" px-6 py-4 text-black">
                                    <div className='flex items-center'>

                                        {item.username}
                                        <div className='lordicon_copy px-3' onClick={() => { copyText(item.username) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/hmpomorl.json"
                                                trigger="click"
                                                style={{ width: '28px', height: '28px' }}
                                                className='hover:cursor-pointer'>
                                            </lord-icon>
                                        </div>
                                    </div>
                                </td>
                                <td className=" flex py-4 text-black justify-center items-center">
                                    <div className='flex items-center'>

                                        {item.password}
                                        <div className='lordicon_copy px-3' onClick={() => { copyText(item.password) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/hmpomorl.json"
                                                trigger="click"
                                                style={{ width: '28px', height: '28px' }}
                                                className='hover:cursor-pointer'>
                                            </lord-icon>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-black">
                                    {item.notes}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className='flex mx-auto'>
                                        <span onClick={()=>{editPassword(item.id)}}>
                                            <lord-icon
                                                className="hover:cursor-pointer"
                                                src="https://cdn.lordicon.com/fikcyfpp.json"
                                                trigger="hover"
                                                style={{ width: '30px', height: '30px' }}>
                                            </lord-icon>
                                        </span>
                                        <span onClick={()=>{deletePassword(item.id)}}>
                                            <lord-icon
                                                className="hover:cursor-pointer"
                                                src="https://cdn.lordicon.com/jzinekkv.json"
                                                trigger="hover"
                                                style={{ width: '28px', height: '28px' }}>
                                            </lord-icon>
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Bin
