import { useState } from 'react';
import './App.css';
import Logo from './logo_2_bw.png';
import React, { useEffect } from 'react';
import Playground from "./Playground";
import {builtin_function1 , builtin_function2} from "./data";


function SquigHomePage(){


  const [downloade , setDownloades] = useState(0);

  const [download_url , setDownloadUrl] = useState(undefined);

  const [isPending , setIsPending] = useState(false);

  // const [operatingSystem , isOperatingSystem ] = useState('');

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

  const handleDownloadForWindows = (e) => {
    e.preventDefault();
    setIsPending(true);
    fetch('https://harishm2003.pythonanywhere.com/download_count',{
      method : "POST",
      headers : {
        'Content-Type' : "application/json"
      },
      body: JSON.stringify(downloade),
    })
    .then(()=>{
      fetch('https://harishm2003.pythonanywhere.com/windows',{
        method : "GET",
        header : {
          'Content-Type' : "application/json",
        }
      })
      .then(res => res.json())
      .then(file => console.log('downloading for windows'))
      .catch(err => console.log(err));
      setIsPending(false);
    });
  }

  const handleDownloadForLinux = (e) => {
    e.preventDefault();
    setIsPending(true);
    fetch('https://harishm2003.pythonanywhere.com/download_count',{
      method : "POST",
      headers : {
        'Content-Type' : "application/json"
      },
      body: JSON.stringify(downloade),
    })
    .then(()=>{
      fetch('https://harishm2003.pythonanywhere.com/linux',{
        method : "GET",
        header : {
          'Content-Type' : "application/json",
        }
      })
      .then(res => res.json())
      .then(file => console.log('downloading for linux'))
      .catch(err => console.log(err));
      setIsPending(false);
    });
  }

  // const builtin_function1 = [
    
  // ];

  

  function findSystem(){

    let Windows = navigator.appVersion.indexOf("Win");
    let Linux = navigator.appVersion.indexOf("Linux");

    if (Windows !== -1){
      return "Windows";
    }

    else if (Linux !== -1){
      return "Linux";
    }
  }


  
  function downloadUnit(count){
    
    let number = String(count);
    if (count>100000){
      return `${number[0]} M+`
    }
    else{
      return `${number}`;
    }
  }

  return (
    <div  className='bg-gradient-to-r from-black to-gray-900 overflow-hidden text-gray-400'>
      
  <div className='grid justify-center items-center h-screen' >
    <div className='fade-up'>
          <div  data-aos = "fade-down" className='grid justify-center items-center'>
              <img className='object-scale-down h-60 w-60 md:h-80 md:w-80 opacity-60' src={Logo} alt=''/>
          </div>
          <div className='flex justify-center my-5'>
                <p data-aos = "fade-up" data-aos-duration = "700" className='text-white text-8xl md:text-9xl '>
                  <span>S</span><span>Q</span><span>U</span><span>I</span><span>G</span>
                </p>
          </div>
          <div data-aos = "fade-left" data-aos-duration = "1200" className='flex justify-center m-5'>
                <p>A python like programming language</p>
          </div>
          <div data-aos = "fade-right" data-aos-duration = "1500" className='flex justify-center mx-5 h-20'>

                    <a /*onClick={(e)=>{
                        setDownloades(downloade + 1)
                        handleDownloadForWindows(e)
                        }}*/ className='hover:scale-110 active:scale-100 items-center bg-gradient-to-tr from-blue-400 to-blue-700 text-white m-2 p-4 px-6 md:px-10 rounded-xl'>{(!isPending)?"Download":"Downloading"}</a>
                      

                    
                    <a className='active:text-blue-700 hover:text-blue-400 text-white m-2 p-4' href="https://www.linkedin.com/in/harish-m-b96903266">Follow Me</a>
          </div>
      </div>
  </div>
      <div className='grid items-center h-screen md:mb-0'>
        <div>
          <div data-aos="fade-right" data-aos-duration = "700" className='flex justify-center'>
            <p className='text-white text-3xl md:text-5xl m-5'>About</p>
          </div>
          <div data-aos="fade-left" data-aos-duration = "700" className='flex justify-center'>
            <p className='p-5 md:text-2xl'>
              Squig is a dynamic and interpreted programming language created by a <a className='text-blue-500' href='https://www.linkedin.com/in/harish-m-b96903266'>#student</a> at <span className='text-blue-500'>#Chennai Institute of Technology.</span>Designed to be simple, versatile, and expressive, Squig offers a familiar syntax
              inspired by Python.Although still in its  early stage of development, Squig aims to provide a semless coding experience for developers.With a focus on continuous improvement, the developer is actively working towards expanding Squig's
              capabilities and incorporating feedback from the programming community.As Squig evolves, it has the potential to become a powerful and widelyused language, offering unique features and enhancing productivity for developers.
            </p>
          </div>
          <div data-aos="fade-right" data-aos-duration = "700" className='flex justify-center'>
            <p className='text-gray-400 p-5 md:text-2xl'>
              For the past two years , we have been working diligently on squig , and we have finally launched it for public use.
              As of now, Squig has been downloaded by <span className='text-blue-500'>#{downloadUnit(downloade)} users.</span><br/><br/>
              <span className='block text-red-500'>Since we are in <span className='text-blue-500'>#ALPHA</span> stage things may change frequently and the programs that you write might crash sometimes.</span>
            </p>
          </div>
        </div>
      </div>

      <Playground/>

      <div data-aos = "fade-left" data-aos-duration = "700">
        <div className='text-white text-3xl p-10 px-5'>
          <p><span className='text-blue-500 text-4xl'>#</span>Documentation</p>
        </div>
        <div className='px-6 md:text-xl'>
          {/*this is the start of ducumentation*/ }
            <div data-aos = "fade-up" data-aos-duration = "700">
              <p className='text-white'><span className='text-blue-500'>1 ) </span>Print statement :</p>
              <p className='mx-5 my-4 text-lg'><span className='text-white'>* </span>The 'show' keyword is used to display the message on the screen.</p>
              <div data-aos = "fade-left" data-aos-duration = "2000" className='bg-gray-900 my-5 p-5 rounded-lg'>
                <p>
                  <span className='text-blue-400'>show</span><span className='text-green-500 mx-3'>"Hello techies"</span>
                </p>
              </div>
            </div>
            <div data-aos = "fade-left" data-aos-duration = "700">
              <p className='text-white'><span className='text-blue-500'>2 ) </span>Variables :</p>
              <p className='mx-5 my-4 text-lg'><span className='text-white'>* </span>Variables are buckets which can be used to store the values , it is declared by prefixing the variable name by 'let' keyword ( let keyword is optional).</p>
              <p className='mx-5 my-4 text-lg'><span className='text-white'>* </span>Squig is not “statically typed”.</p>
              <p className='text-lg px-5 text-white'>Rules for declearing a variable.</p><br/>
              <ol className='px-8 md:px-20'>
                <li>1. A Squig variable name must start with a letter or the underscore character.</li><br/>
                <li>2. A Squig variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ ).</li><br/>
                <li>3. After a variable begins with underscore or alphabet it can contain any number of digits.</li><br/>
                <li>4. Variable names in Squig are case-sensitive (name, Name, and NAME are three different variables).</li><br/>
                <li>5. The reserved words(keywords) in Squig cannot be used to name the variable.</li><br/>
              </ol>
              <div data-aos = "fade-left" data-aos-duration = "2000" className='bg-gray-900 my-5 p-5 rounded-lg'>
                <p>
                <span className='text-blue-300'>let</span> name : <span className='text-green-500 mx-1'>"Squig"</span><span className='text-gray-500 mx-5 md:inline hidden'>or</span><br className="md:hidden block"/><br className="md:hidden block"/>name : <span className='text-green-500 mx-1'>"Squig"</span>
                </p>
              </div>
            </div>
            <div data-aos = "fade-up" data-aos-duration = "700">
              <p className='text-white'><span className='text-blue-500'>3 ) </span>Input statement :</p>
              <p className='mx-5 my-4 text-lg'><span className='text-white'>* </span>Single quotes are used for getting inputs from users .This is how we will get inputs from users.</p>
              <p className='mx-5 text-white'>Note : When a user provides a number as an input, Squig immediately converts it to a number type. Normally, Squig treats input as a string.</p><br/>
              <p className='mx-5 text-red-400'>Note : Make sure to use the appropriate quotation marks; do not use double quotes for the input string.</p>
              <div data-aos = "fade-left" data-aos-duration = "2000" className='bg-gray-900 my-5 p-5 rounded-lg'>
                <p>
                  name : <span className='text-green-500 mx-3'>'Enter your name : '</span><span className='text-gray-500 mx-2'>//notice that we have used 'single' quotes.</span>
                </p>
              </div>
            </div>

            <div data-aos = "fade-right" data-aos-duration = "700">
            <p className='text-white'><span className='text-blue-500'>4 ) </span>Strings (Immutable types) :</p>
            <p className='mx-5 my-4 text-lg'><span className='text-white'>* </span>Strings are sequence of characters enclosed within double quotes . This is how we will declear a string.</p>
            <p className='mx-5 text-red-400'>Note : Make sure to use the appropriate quotation marks; do not use single quotes for the string.</p>
            <div data-aos = "fade-left" data-aos-duration = "2000" className='bg-gray-900 my-5 p-5 rounded-lg'>
              <p>
                 <span className='text-green-500 mx-3'>"Example for string."</span>
              </p>
            </div>
            </div>

            <div className='my-10' data-aos = "fade-up" data-aos-duration = "700">
              <p className='text-white'><span className='text-blue-500'>5 ) </span>Operators:</p>
              <p className='mx-5 my-4 text-lg'><span className='text-white'>* </span>The following are the operators supported by squig.</p>
              <ul className='p-5 px-8 text-white'>
                <li className='m-3'>1. Assignment Operators.</li>
                <li className='m-3'>2. Relational Operators.</li>
                <li className='m-3'>3. Arithmatic Operators.</li>
                <li className='m-3'>4. Logical Operators.</li>
              </ul>
              <section data-aos = "fade-right" data-aos-duration = "700">
                <p className='text-white'>Assignment Operators :</p>
                <p className='mx-5 my-4 text-lg'><span className='text-white'>* </span>It assigns values on the right handside to the variables on the left handside.</p>
                  <div className='bg-gray-900 p-5 rounded-lg text-white'>
                    <p><span className='text-blue-300'>let </span>variable : <span className='text-green-500'>"value"</span><span className='text-gray-500'>// ':' is the assignment operator</span></p>
                  </div>
                <p className='text-white my-3'>Shorthand operators</p>
                  <div className='bg-gray-900 p-5 rounded-lg text-white'>
                    <p>{"num :+  6 "}<span className='text-gray-500'> // same as 'num : num + 6'</span></p>
                    <p>{"num :-  6 "}<span className='text-gray-500'> // same as 'num : num - 6'</span></p>
                    <p>{"num :*  6 "}<span className='text-gray-500'> // same as 'num : num * 6'</span></p>
                    <p>{"num :** 6 "}<span className='text-gray-500'> // same as 'num : num ** 6'</span></p>
                    <p>{"num :/  6 "}<span className='text-gray-500'> // same as 'num : num / 6'</span></p>
                  </div>
                </section>
              <section data-aos = "fade-left" data-aos-duration = "700">
              <p className='text-white my-3'>Relational Operators</p>
              <p className='mx-5 my-4 text-lg'><span className='text-white'>* </span>It checks the relation between the operands.</p>
                  <div className='bg-gray-900 p-5 rounded-lg text-white'>
                    <p>{"6 > 6 "}<span className='text-gray-500'> // Greater</span></p>
                    <p>{"6 <  6 "}<span className='text-gray-500'> // Lesser</span></p>
                    <p>{"6 = 6 "}<span className='text-gray-500'> // Equal</span></p>
                    <p>{"6 >= 6 "}<span className='text-gray-500'> // Greater then equal</span></p>
                    <p>{"6 <= 6 "}<span className='text-gray-500'> // Less than equal</span></p>
                    <p>{"6 !=6 "}<span className='text-gray-500'> // Not equal</span></p>
                  </div>
              </section>
              <section data-aos = "fade-up" data-aos-duration = "700">
              <p className='text-white my-3'>Arithmatic Operators</p>
              <p className='mx-5 my-4 text-lg'><span className='text-white'>* </span>It performs basic mathematical operation between the operands.</p>

              <div className='bg-gray-900 p-5 rounded-lg text-white'>
                    <p>{"6 + 6 "}<span className='text-gray-500'> // Addition</span></p>
                    <p>{"6 - 6 "}<span className='text-gray-500'> // Subtraction</span></p>
                    <p>{"6 * 6 "}<span className='text-gray-500'> // Multiplication</span></p>
                    <p>{"6 / 6 "}<span className='text-gray-500'> // Divide</span></p>
                    <p>{"6 ** 6 "}<span className='text-gray-500'> // Power</span></p>
                  </div>
              </section>
              <section data-aos = "fade-up" data-aos-duration = "700">
              <p className='text-white my-3'>Logical Operators</p>
              <p className='mx-5 my-4 text-lg'><span className='text-white'>* </span>It performs Logical operation on the given relation.</p>

                  
              <div className='bg-gray-900 p-5 rounded-lg text-white'>
                    <p>{"6 > 5 & 4 > 4"}<span className='text-gray-500'> // '&' Logical AND</span></p>
                    <p>{"6 = 6 | 6 = 7 "}<span className='text-gray-500'> // '|' Logical OR</span></p>
              </div>
              </section>
            
            </div>

            <div data-aos = "fade-up" data-aos-duration = "700">
            <p className='text-white'><span className='text-blue-500'>6 ) </span>String operators :</p>
            <p className='mx-5 my-4 text-lg'><span className='text-white'>* </span>Squig Operators behaves differently than Python . The output is converted to the proper datatype using the implicit type conversion system.</p>
            <p className='mx-5 text-red-400'>Note : Make sure to use the appropriate quotation marks; do not use single quotes for the string.</p>
            <div data-aos = "fade-left" data-aos-duration = "900" className='bg-gray-900 my-5 p-5 rounded-lg'>
              <p className='text-white'>
                 <span className='text-green-500 mx-3'>"Hello"</span> + <span className='text-green-500'>" world"</span><span className='text-gray-500 m-2'>//output : Hello world</span><br/><br/>
                  <span className='mx-3'>6 +</span><span className='text-green-500'>"Star"</span><span className='text-gray-500 m-2'>//output : 6Star</span><br/><br/>
                  <span className='text-green-500 mx-3'>"6"</span> + <span className='text-green-500'>"6"</span><span className='text-gray-500 m-2'>//output : 12</span><br/><br/>
                  <span className='mx-3'>6 +</span><span className='text-green-500'>"6"</span><span className='text-gray-500 m-2'>//output : 12</span><br/><br/>
                  <span className='text-green-500 mx-3'>"Hello "</span>* 3 <span className='text-gray-500 m-2'>// output : Hello Hello Hello</span><br/><br/>
                  <span className='text-green-500 mx-3'>"Hello "</span>* <span className='text-green-500'>"3"</span><span className='text-gray-500 m-2'>// output : Hello Hello Hello</span><br/><br/>
                  <span className='text-green-500 mx-3'>"Hello"</span>[ -1 ]<span className='text-gray-500 m-2'>// output : "o"</span>
              </p>
            </div>
                  <p className='text-blue-300 mx-3 my-5'>Experiment the rest of the operators yourself.</p>
            </div>

            <div data-aos = "fade-left" data-aos-duration = "700">
            <p className='text-white'><span className='text-blue-500'>7 ) </span>Conditional statement :</p>
            <p className='mx-5 my-4 text-lg'><span className='text-white'>* </span>Conditional statements help us to take decisions programatically.We have <span className='text-white m-2'>if</span>,<span className='text-white m-2'>if else</span>,<span className='text-white m-2'>if elif else</span>conditional statements.</p>
            <div className='px-5'>
             <span className='text-white'>Note : Squig also supports the relational operators supported by Python(except '=').</span>
            </div>
            <div data-aos = "fade-left" data-aos-duration = "900" className='bg-gray-900 my-5 mx-2 py-2 md:p-5 rounded-lg'>     
                 <p className='text-white m-5'>1.) If statement :</p>
                 <div className='mx-5 md:mx-10 bg-gray-800 p-5 rounded-xl text-white'><span className='text-blue-300'>if</span>{" { 0 = 0 } : "}<span className='text-gray-500'>//if statement</span><br/><span className='text-green-500 mx-4'>"True block"</span></div>
                 <p className='text-white m-5 '>2.) If-else statement :</p>
                 <div className='mx-5 md:mx-10 bg-gray-800 p-5 rounded-xl text-white'><span className='text-blue-300'>if</span>{" { 0 = 0 } : "}<span className='text-gray-500'>//if else statement</span><br/><span className='text-green-500 mx-4'>"True block"</span><br/><span className='text-blue-300'>else</span>: <br/><span className='text-green-500 mx-4'>"False block"</span><br/><br/></div>
                 <p className='text-white m-5'>3.) If-elif-else statement :</p>
                 <div className='mx-5 md:mx-10 bg-gray-800 p-5 rounded-xl text-white'><span className='text-blue-300'>if</span>{" { 0 = 0 } : "}<span className='text-gray-500'>//if elif else statement<br/></span><span className='text-green-500 mx-4'>"True block"</span><br/><span className='text-blue-300'>elif</span>{" { 1 > 0 } :"}<br/><span className='text-green-500 mx-4'>"Elif block"</span><br/><span className='text-blue-300'>else</span>: <br/><span className='text-green-500 mx-4'>"False block"</span></div>
            </div>
            </div>
            
            <div className='text-white' data-aos = "fade-up" data-aos-duration = "700">
                <p><span className='text-blue-500'>8 ) </span>Loops (Iterative statement) :</p>
                <p className='text-gray-400 mx-5 my-4 text-lg'><span className='text-white'>* </span>Loops or iterative statements are statements that are used to perform a specific task repeatedly.we have only for loop in squig.</p>
                <div data-aos = "fade-left" data-aos-duration = "900" className='bg-gray-900 my-5 p-5 rounded-lg'>
                    <p className='text-gray-300'>
                        <span className='text-blue-300'>for</span> variable{" { 6 } :"}<span className='text-gray-500 mx-2'>//for with range 0 to (n-1)</span><br/><span className='text-green-500 mx-2'>"For loop"</span> + variable
                    </p>
                    <p className='my-5'>
                        <span className='text-blue-300'>for</span><span className='m-2'>variable{" { 0 , 6 } : "}<span className='text-gray-500 mx-2'>//for loop with range 0 to (n-1).</span></span><br/><span className='text-green-500 mx-2'>"For loop"</span>+ variable
                    </p>
                    <p className='my-5'>
                        <span className='text-blue-300'>for</span><span className='m-2'>variable{" { 0 , 6 , 2 } : "}<span className='text-gray-500 mx-2'>//for loop with range 0 to (n-1) with step value 2.</span></span><br/><span className='text-green-500 mx-2'>"For loop"</span>+ variable
                    </p>
                </div>
            </div>

            <div className='text-white' data-aos = "fade-up" data-aos-duration = "700">
              <p><span className='text-blue-500'>9 ) </span>Collections :</p>
              <p className='mx-5 my-4 text-lg text-gray-400'><span className='text-white'>* </span>Collections are datastructers which helps us to store multiple values in a single variable.</p>
              <p className='mx-5'>Note: Collections can behave as an array or a list based on the elements.</p>
              <div data-aos = "fade-left" data-aos-duration = "900" className='bg-gray-900 my-5 p-5 rounded-lg'>
                <p className='text-gray-300'>
                  <span>numbers :{" {"}</span><span className='text-green-500 mx-3'>{"1 , 2 , 3 ,4"}</span>{"}"}<span className='text-gray-500 mx-2'>//this is an array because it contains similar elements.</span>
                </p><br/>
                <p className='text-gray-300'>
                  <span>numbers :{" {"}</span><span className='text-green-500 mx-3'>{"\"squig\" , 2 , 3 ,4"}</span>{"}"}<span className='text-gray-500 mx-2'>//this is a list because it doesn't contains similar elements.</span>
                </p>
              </div>
            </div>
            <div className="text-white" data-aos = "fade-right" data-aos-duration = "700">
              <p><span className='text-blue-500'>10 ) </span>Nested Collections :</p>
              <p className='mx-5 my-4 text-lg text-gray-400'><span className='text-white'>* </span>This is how we'll create nested collections.</p>
              <div data-aos = "fade-left" data-aos-duration = "900" className='bg-gray-900 my-5 p-5 rounded-lg'>
                <p>
                  <span>numbers :</span>{"{ {"}<span className='text-green-500 mx-3'>{"1 , 2 , 3 ,4"}</span>{"} , {"}<span className='text-green-500'>{" 5 , 6 , 7 , 8 "}</span>{"} }"}<span className='text-gray-500 mx-2'>//this is a multi diamensional array.</span>
                </p><br/>
                <p>
                  <span>numbers :</span>{"{ {"}<span className='text-green-500 mx-3'>{"1 , \"Squig\" , 3 ,4"}</span>{"} , "}<span className='text-green-500'>{" 5 , 6 , 7 , 8 "}</span>{"}"}<span className='text-gray-500 mx-2'>//this is a multi diamensional list.</span>
                </p><br/>
              </div>
            </div>

            <div className="text-white" data-aos = "fade-left" data-aos-duration = "700">
              <p><span className='text-blue-500'>11 ) </span>Accessing Collections :</p>
              <p className='mx-5 my-4 text-lg text-gray-400'><span className='text-white'>* </span>We use the index of the elements to access it.</p>
              <p className='mx-5'>Note : Negative indexing is allowed. it is a zero based index system.</p>
              <div data-aos = "fade-left" data-aos-duration = "900" className='bg-gray-900 my-5 p-5 rounded-lg'>
                <p>
                  numbers[-1] <span className='text-gray-500 mx-2'>// output : {"{ 5, 6, 7, 8}"}</span>
                </p><br/>
                <p>
                  numbers[0][1] <span className='text-gray-500 mx-2'>// output : {"1"}</span>
                </p><br/>
              </div>
            </div>
            
            <div className='text-white' data-aos = "fade-up" data-aos-duration = "700">
              <p><span className='text-blue-500'>12 ) </span>Functions :</p>
              <p className='mx-5 my-4 text-lg text-gray-400'><span className='text-white'>* </span>Functions are set of codes which can be used repeatedly.It provides code reusability</p>
              <p className='mx-5 text-red-400'>Note : functions in squig cannot have default parameters.</p>
              <div data-aos = "fade-left" data-aos-duration = "900" className='bg-gray-900 my-5 p-5 rounded-lg '>
                <p>
                  function_name<span className='text-blue-300 m-2'>function</span>{" { } :"}<br/><span className='text-blue-300 mx-5'>show</span><span className='text-green-500 mx-3'>"Functions in squig."</span>
                </p><br/>
                <p className='text-gray-300'>
                  add2num<span className='text-blue-300 m-2'>function</span>{" { num1 , num2} :"}<br/><span className='text-blue-300 mx-5'>show</span> num1 + num2
                </p><br/>
                <p className='text-gray-300'>
                  add2num{" { 6 , 6 } "}<span className='text-gray-500 mx-2'>//this is function call.</span><br/>
                </p>
              </div>
              <p>*<span className='text-gray-400'>The above example is a user defined function.</span></p>
              <p className='my-5'><span className='text-lg'>Builtin Functions (Expermental):</span></p>
              <p className='mx-5 my-4 text-gray-400'><span className='text-white'>*</span>The following are the builtin functions available in squig.</p>
              <div className='flex bg-gray-900 my-5 p-5 rounded-lg'>
                <div>
                {
                  builtin_function1.map((bf , index) => (
                    <>
                        <p><span key={bf.id} className='text-blue-300'>{bf.name}</span>{" { " + bf.parameters +" }"}<span className='text-gray-500 mx-3'>{bf.comments}</span></p><br/>
                    </>
                  ))
                }
                </div>
                <div className='hidden md:block'>
                {
                  builtin_function2.map((bf , index) => (
                    <>
                        <p><span key={bf.id} className='text-blue-300'>{bf.name}</span>{" { " + bf.parameters +" }"}<span className='text-gray-500 mx-3'>{bf.comments}</span></p><br/>
                    </>
                  ))
                }
                </div>
              </div>
              <p className='md:hidden block text-red-500 my-3'>We'll update the documentation for mobile screens soon.for better experience view on a bigger screen.</p>
            </div>
            <div data-aos = "fade-up" data-aos-duration = "700">
              <p className='text-white'><span className='text-blue-500'>13 ) </span>Types keyword :</p>
              <p className='mx-5 my-4 text-lg'><span className='text-white'>* </span><span className='text-white'>'types'</span> keyword is used to know the type of the operand or variable or value.</p>
              <div data-aos = "fade-left" data-aos-duration = "900" className='bg-gray-900 my-5 p-5 rounded-lg'>
                <p className='text-gray-300'>
                  <span className='text-blue-300'>types</span><span className='text-green-500 mx-3'>"Squig"</span><span className='text-gray-500 m-2'>//output : Type : String</span><br/><br/>
                  <span className='text-blue-300'>types</span><span className='mx-3'>1000</span><span className='text-gray-500 m-2'>//output : Type : Number</span>
                </p>
              </div>
            </div>

            <div data-aos = "fade-up" data-aos-duration = "700">
              <p className='text-white'><span className='text-blue-500'>14 ) </span>Import statement :</p>
              <p className='mx-5 my-4 text-lg'><span className='text-white'>* </span><span className='text-white'>'use'</span> keyword is used to import modules and other squig files.</p>
              <div data-aos = "fade-left" data-aos-duration = "900" className='bg-gray-900 my-5 p-5 rounded-lg'>
                <p className='text-gray-300'>
                  <span className='text-blue-300'>use</span><span className='text-green-500 mx-3'>"module_name"</span><br/>
                </p>
              </div>
            </div>
          {/*this is the end of dcumentation*/}
          <div className='my-10'>
            <p className='text-transparent'>asdasd</p>
          </div>
        </div>
      </div>
      <footer className='flex justify-center text-white p-5'>
        <p><b>Made by <a className='text-blue-500 underline' href='https://www.linkedin.com/in/harish-m-b96903266'>Harish M</a></b></p>
      </footer>
    </div>
  );
  }


export default function App() {

  return <SquigHomePage/>
}