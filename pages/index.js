import { useState } from 'react'
import Admin from '../components/CookieStandAdmin'
import Login from '../components/LoginForm'


export default function Home() {

  const [userName,setUserName] = useState('hisham')
  const [savedPassword,setsavedPassword] = useState('password')
  const [logged,setLogged] = useState(false)

  function change(username,password){
    if (userName == username && password == savedPassword){
      setLogged(true);
    }
  }

  return (
    <div className="bg-green-100">
      {logged ? <Admin username={userName} password={savedPassword}/> : <Login change={change}/>}
    </div>
  )
}



  