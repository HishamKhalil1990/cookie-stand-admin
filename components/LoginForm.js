import { useState } from 'react'

export default function Login({change}){

    const [userName,setUserName] = useState("") 
    const [password,setPassword] = useState("")

    function changeUser(event){
        setUserName(event.target.value)
    }

    function changePassword(event){
        setPassword(event.target.value)
    }

    function login(){
        change(userName,password)
    }

    return (
        <div className="w-full flex justify-center pt-3 ">
            <form className="px-8 pt-6 pb-8 mb-4 bg-green-200 rounded shadow-md " >
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" >
                        Username
                    </label>
                    <input name="username" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={changeUser}/>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-bold text-gray-700" >
                        Password
                    </label>
                    <input name="password" className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={changePassword}/>
                </div>
                <div className="flex items-center justify-center">
                    <button onClick={login}  className="px-4 py-2 font-bold text-white bg-green-700 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
}