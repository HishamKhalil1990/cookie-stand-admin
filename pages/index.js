import Head from '../components/Head'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { useState } from 'react'


export default function Home() {

  const [title,setTitle] = useState('Cookie Stand Admin');
  const [location,setLocation] = useState();
  const [minCustPerHr,setMinCustPerHr] = useState();
  const [maxCustPerHr,setMaxCustPerHr] = useState();
  const [avgCookie,setAvgCookie] = useState();

  function createCookeisHandler(event){
    event.preventDefault();
    setLocation(event.target.location.value);
    setMinCustPerHr(event.target.minCustPerHr.value);
    setMaxCustPerHr(event.target.maxCustPerHr.value);
    setAvgCookie(event.target.avgCookie.value);
  }

  return (
    <div className="bg-green-100">
      <Head title={title}/>
      <Header header={title}/>
      <Main title={title} location={location} minCustPerHr={minCustPerHr} maxCustPerHr={maxCustPerHr} avgCookie={avgCookie} handler={createCookeisHandler}/>
      <Footer />
    </div>
  )
}
