
import React , {useState} from "react";
// import "./App.css";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another


// export default function Playground() {

//     const [code, setCode] = useState('show  "Hello techies"');
//     const [output , setOutput] = useState([{
//       output : null ,
//       error : "" ,
//       color : "white" ,
//       tone : 500
//     }]);
    
//     const [showOutput , setShowOutput] = useState(false);
  
//     const handleCodeChange = (e) => {
//       setCode(e.target.value);
//     };
  
//     const handleRunCode = (e) => {
//       // Implement your logic here to run the code
//       e.preventDefault();
//       fetch('https://harishm2003.pythonanywhere.com/playground' , {
//         method : "POST",
//         headers : {
//           'Content-Type' : "application/json"
//         },
//         body : JSON.stringify(code)
//       })
//       .then(res => res.json())
//       .then(data => {
//         setShowOutput((showOutput === false)? !showOutput : showOutput);
//         setOutput([{error : data.error , output : data.output , color : data.color , tone : data.tone}])}
//         )
//       .catch(err => console.log(err));
//     };
  
//     const codeLines = code.split('\n');
//     const lineNumbers = codeLines.map((_, index) => index + 1);
  
//     return (
//       <div data-aos = "fade-right" data-aos-duration = "1500">
//         <h2 className='text-white mx-5 text-2xl pb-10'><span className='text-blue-500'>#</span>Playground:</h2>
//         <div className="flex mx-5 justify-center">
//           <div className="text-gray-600 text-lg p-5 bg-gray-900 border-2 border-l-0 border-y-0 border-gray-800">
//             {lineNumbers.map((lineNumber) => (
//               <div key={lineNumber}>{lineNumber}</div>
//             ))}
//           </div>
//           <textarea
//             className="p-5 text-lg w-full outline-none bg-gray-900 resize-none text-white"
//             value={code}
//             autoCapitalize = {false}
//             onChange={handleCodeChange}
//             rows={10}
//             placeholder="Write your code here"
//           />
//         </div>
//         <div className='flex justify-end my-3 mx-10'>
//               <button className='hover:scale-110 active:scale-100 bg-gradient-to-tl from-blue-300 to-blue-700 p-2 px-7 text-white text-lg rounded' onClick={handleRunCode}>Run</button>
//         </div>
//         <div>
//           {(showOutput)?
//           <>
//           <h2 className='text-white text-xl mx-5 m-5 my-10'>Output:</h2>
//           <div className='bg-gray-900 mx-5 p-5 my-5'>
//             {
//                         (output[0].error == "0")?
//                           <p className={`text-${output[0].color}-${output[0].tone} p-0`}>
//                             {output[0].output}
//                           </p>
//                         :
//                           <p className={`text-${output[0].color}-${output[0].tone} p-0`}>
//                             {output[0].error.substring(0, output[0].error.indexOf(",") + 1)}<br/>{output[0].error.substring(output[0].error.indexOf(",") + 1 , output[0].error.length)}
//                           </p>
//             }
//           </div>
//           </>
//           :
//           <></>
//           }
//         </div>
//       </div>
//     );
//   };

export default function Playground(){

  // const [code, setCode] = useState(
  //   `function add(a, b) {\n  return a + b;\n}`
  // );

  const [code, setCode] = useState('show "Hello techies"');
    const [output , setOutput] = useState([{
      output : null ,
      error : "" ,
      color : "white" ,
      tone : 500
    }]);
    
    const [showOutput , setShowOutput] = useState(false);
  
    const handleCodeChange = (e) => {
      setCode(e.target.value);
    };
  
    const handleRunCode = (e) => {
      // Implement your logic here to run the code
      
      e.preventDefault();
      fetch('https://harishm2003.pythonanywhere.com/playground' , {
        method : "POST",
        headers : {
          'Content-Type' : "application/json"
        },
        body : JSON.stringify(code)
      })
      .then(res => res.json())
      .then(data => {
        setShowOutput((showOutput === false)? !showOutput : showOutput);
        setOutput([{error : data.error , output : data.output , color : data.color , tone : data.tone}])}
        )
      .catch(err => console.log(err));
    };
  
    const codeLines = code.split('\n');
    const lineNumbers = codeLines.map((_, index) => index + 1);


  return (
    // <Editor
    //   value={code}
    //   onValueChange={code => setCode(code)}
    //   highlight={code => highlight(code, languages.js)}
    //   padding={10}

    //   style={{
    //     fontFamily: '"Fira code", "Fira Mono", monospace',
    //     fontSize: 12,
    //   }}
    // />
    <div data-aos = "fade-right" data-aos-duration = "1500">
         <h2 className='text-white mx-5 text-2xl pb-10'><span className='text-blue-500'>#</span>Playground:</h2>
        <div className="flex mx-5 justify-center">
          <div className="text-gray-600 text-lg px-5 py-2 bg-gray-900 border-2 border-l-0 border-y-0 border-gray-800">
            {lineNumbers.map((lineNumber) => (
              <div key={lineNumber}>{lineNumber}</div>
            ))}
          </div>
          {/* <textarea
            className="p-5 text-lg w-full outline-none bg-gray-900 resize-none text-white"
            value={code}
            autoCapitalize = {false}
            onChange={handleCodeChange}
            rows={10}
            placeholder="Write your code here"
          /> */}
            <Editor
                
                className="text-lg w-full outline-0 bg-gray-900 resize-none text-white"
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => highlight(code, languages.js)}
                padding={8}
                onClick={() => {window.document.querySelector("textarea").style.outline = 0}}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  borderWidth : 0,
                  // outline : 0,
                  // fontSize: 12,
                }}
              />
        </div>
        <div className='flex justify-end my-3 mx-10'>
              <button className='hover:scale-110 active:scale-100 bg-gradient-to-tl from-blue-300 to-blue-700 p-2 px-7 text-white text-lg rounded' onClick={handleRunCode}>Run</button>
        </div>
        <div>
          {(showOutput)?
          <>
          <h2 className='text-white text-xl mx-5 m-5 my-10'>Output:</h2>
          <div className='bg-gray-900 mx-5 p-5 my-5'>
            {
                        (output[0].error == "0")?
                          <p className={`text-${output[0].color}-${output[0].tone} p-0`}>
                            {output[0].output}
                          </p>
                        :
                          <p className={`text-${output[0].color}-${output[0].tone} p-0`}>
                            {output[0].error.substring(0, output[0].error.indexOf(",") + 1)}<br/>{output[0].error.substring(output[0].error.indexOf(",") + 1 , output[0].error.length)}
                          </p>
            }
          </div>
          </>
          :
          <></>
          }
        </div>
      </div>
  );

}