import { useContext } from 'react';
import Logo from './logo_2_bw.png';
import DownloadContext from './context/DownloadContext';

export default function Hero(){

    const {isPending , downloade } = useContext(DownloadContext);

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
        <div>
      
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
      
                          <button /*onClick={(e)=>{
                              setDownloades(downloade + 1)
                              handleDownloadForWindows(e)
                              }}*/ 
                              href='#'
                              disabled
                              className='hover:scale-110 active:scale-100 items-center cursor-pointer bg-gradient-to-tr from-blue-400 to-blue-700 text-white m-2 p-4 px-6 md:px-10 rounded-xl'>
                                {(!isPending)?"Download":"Downloading"}
                            </button>
                            
      
                          
                          <a className='active:text-blue-700 hover:text-blue-400 cursor-pointer text-white m-2 p-4' href="https://www.linkedin.com/in/harish-m-b96903266">Follow Me</a>
                </div>
            </div>
        </div>
            <div className='grid items-center h-screen md:mb-0'>
              <div>
                <div data-aos="fade-right" data-aos-duration = "700" className='flex justify-center'>
                  <p className='text-white text-3xl md:text-5xl m-5'>About</p>
                </div>
                <div data-aos="fade-left" data-aos-duration = "700" className='flex justify-center'>
                  <p className='p-5 md:text-2xl  tracking-wide'>
                    Squig is a dynamic and interpreted programming language created by a <a className='text-blue-500' href='https://www.linkedin.com/in/harish-m-b96903266'>#student</a> at <span className='text-blue-500'>#Chennai Institute of Technology.</span>Designed to be simple, versatile, and expressive, Squig offers a familiar syntax
                    inspired by Python.Although still in its  early stage of development, Squig aims to provide a semless coding experience for developers.With a focus on continuous improvement, the developer is actively working towards expanding Squig's
                    capabilities and incorporating feedback from the programming community.As Squig evolves, it has the potential to become a powerful and widelyused language, offering unique features and enhancing productivity for developers.
                  </p>
                </div>
                <div data-aos="fade-right" data-aos-duration = "700" className='flex justify-center'>
                  <p className='text-gray-400 p-5 md:text-2xl tracking-wide'>
                    For the past two years , we have been working diligently on squig , and we have finally launched it for public use.
                    As of now, Squig has been downloaded by <span className='text-blue-500'>#{downloadUnit(downloade)} users.</span><br/><br/>
                    <span className='block text-red-500'>Since we are in <span className='text-blue-500'>#ALPHA</span> stage things may change frequently and the programs that you write might crash sometimes.</span>
                  </p>
                </div>
              </div>
            </div>
    </div>      
    );
}