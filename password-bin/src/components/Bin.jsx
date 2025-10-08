import React, { useEffect } from 'react'
import { useState } from 'react';

const Bin = () => {

    const [form, setForm] = useState({site:"", username:"", password:"", notes:""})
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        
        if (passwords) {
            setpasswordArray(JSON.parse(passwords));
        }
    }, [])
    

    const showPassword = () => {
        alert("Show password");
    }

    const savePassword = async () => {
        // console.log(form);
        setpasswordArray([...passwordArray, form]);
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
        console.log([...passwordArray, form]);
    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    }

    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

            <div className="container mx-auto max-w-4xl">


                <label for="name" className="block text-sm font-medium text-gray-900 dark:text-black mb-1">Manage your Passwords</label>
                <div className="credentials">
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-y-4 gap-x-3'>

                        <input name='site' value={form.site} onChange={handleChange} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-300 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 md:col-span-4" placeholder="Site/App/Service" required />

                        <input name='username' value={form.username} onChange={handleChange} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-blue-300 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Name" required />

                        {/* password input replaced with a relative wrapper so the icon can be absolutely positioned */}
                        <div className="relative">
                          <input
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
                        

                        <input value={form.notes} name='notes' onChange={handleChange} type="notes" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-blue-300 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 md:col-span-2" placeholder="Notes (if any)" required />
                    </div>
                </div>

                <button className='flex mx-auto my-2 justify-center items-center  hover:bg-blue-200 rounded-full hover:px-5 transition-all duration-700 px-3 py-1 hover:cursor-pointer border border-blue-500' onClick={savePassword}>
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
        </>
    )
}

export default Bin
