import Head from './CookieStandHead'
import Header from './CookieStandHeader'
import Main from './CookieStandMain'
import Footer from './CookieStandFooter'
import { useState } from 'react'

export default function Admin({username,password}){

    const [title,setTitle] = useState('Cookie Stand Admin');
    const [branches,setBranches] = useState('0')
    const [path,setPath] = useState("/overview")
    const [page,setPage] = useState("overview")

    return (
        <div className="bg-green-100">
        <Head title={title}/>
        <Header header={title} path={path} page={page} username={username}/>
        <Main title={title} setBranches={setBranches} username={username} password={password}/>
        <Footer branches={branches} />
        </div>
    )

}