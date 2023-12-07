// import { useState } from 'react';
import './App.css';
import React, { useEffect } from 'react';
import Playground from "./Playground";
import Installation from './Installation';
import Docs from './Docs';
import Hero from './Hero';
import { FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import DownloadContext from './context/DownloadContext';
// import DownloadContextProvider from './context/DownloadContextProvider';


function SquigHomePage(){

  // const [operatingSystem , isOperatingSystem ] = useState('');

  // const {downloade , setDownloades , setDownloadUrl , download_url , isPending , setIsPending } = useContext()

  const { setDownloades , setDownloadUrl } = useContext(DownloadContext);

  useEffect(()=>{
    fetch("https://harishm2003.pythonanywhere.com/" , {
      headers : {
        'Content-Type' : 'application/json',
      }
    })
    .then(res => res.json())
    .then( data => {
      setDownloades(data.downloads)
      setDownloadUrl(data.url)
    })
    .catch(error => console.log(error))
  },[])

  // const handleDownloadForWindows = (e) => {
  //   e.preventDefault();
  //   setIsPending(true);
  //   fetch('https://harishm2003.pythonanywhere.com/download_count',{
  //     method : "POST",
  //     headers : {
  //       'Content-Type' : "application/json"
  //     },
  //     body: JSON.stringify(downloade),
  //   })
  //   .then(()=>{
  //     fetch('https://harishm2003.pythonanywhere.com/windows',{
  //       method : "GET",
  //       header : {
  //         'Content-Type' : "application/json",
  //       }
  //     })
  //     .then(res => res.json())
  //     .then(file => console.log('downloading for windows'))
  //     .catch(err => console.log(err));
  //     setIsPending(false);
  //   });
  // }

  // const handleDownloadForLinux = (e) => {
  //   e.preventDefault();
  //   setIsPending(true);
  //   fetch('https://harishm2003.pythonanywhere.com/download_count',{
  //     method : "POST",
  //     headers : {
  //       'Content-Type' : "application/json"
  //     },
  //     body: JSON.stringify(downloade),
  //   })
  //   .then(()=>{
  //     fetch('https://harishm2003.pythonanywhere.com/linux',{
  //       method : "GET",
  //       header : {
  //         'Content-Type' : "application/json",
  //       }
  //     })
  //     .then(res => res.json())
  //     .then(file => console.log('downloading for linux'))
  //     .catch(err => console.log(err));
  //     setIsPending(false);
  //   });
  // }

  // function findSystem(){

  //   let Windows = navigator.appVersion.indexOf("Win");
  //   let Linux = navigator.appVersion.indexOf("Linux");

  //   if (Windows !== -1){
  //     return "Windows";
  //   }

  //   else if (Linux !== -1){
  //     return "Linux";
  //   }
  // }


  
  

  return (
    <div className='bg-gradient-to-r from-black to-gray-900 overflow-hidden text-gray-400'>
      <nav className='flex justify-end absolute top-0 left-0 right-0 p-5'>
        <a href='https://github.com/Harish-M-2003/Squig' target='_blank'>
          <FaGithub className='md:text-4xl text-2xl'/>
        </a>
      </nav>
      <Hero />
      {/* <Playground/> */}
 
      {/* <Installation/> */}
      <Docs/>
      </div>
  );
}


export default function App() {

  return <SquigHomePage/>


}