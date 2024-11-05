'use client'

import axios from "axios"
// import { useRouter } from "next/router";
// import { Button } from "./SubmitButton";

import { useState } from "react"

export function SignUp () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // const router = useRouter();
    
    return <div className="flex flex-col border p-8 gap-5 shadow-lg max-w-sm rounded">
        <input className="border p-2 rounded" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
        <input className="border p-2 rounded" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        <button onClick={() => {
            axios.post('http://localhost:3000/api/user', {
                name,
                email
            })
            // router.push ('/')
        }} className="p-2 bg-gradient-to-b from-sky-600 to-blue-400 text-lg font-bold text-slate-50 rounded-lg">
        SignUp
    </button>
    </div>
}