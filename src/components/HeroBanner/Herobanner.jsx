
import { FaLinkedin, FaGithub, FaGooglePlus } from 'react-icons/fa';
import Hi from '../../assets/image/Hi.gif' 
import Style from './heroBanner.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
import Resume from '../../assets/image/Resume - Google Docs.pdf'
// ..
AOS.init();

const Herobanner = () => {
    return (
        
      <div data-aos="fade-down">
        <section className='flex lg:p-20  justify-center'>
            {/* 1st div  */}
            <div className=' lg:ms-10 mt-20 me-5 lg:mt-20'>
              <Link to={"https://www.linkedin.com/in/nifahad/"}>
                <FaLinkedin className='text-2xl cursor-pointer'></FaLinkedin>
              </Link>  
              <Link to={"https://github.com/Fahad41816"}>
                <FaGithub className='text-2xl mt-3 cursor-pointer'></FaGithub>
              </Link>
              <FaGooglePlus className='text-2xl mt-3 cursor-pointer'></FaGooglePlus>
            </div>

           <div className='flex w-40  lg:w-full flex-col-reverse items-center p-5 justify-center lg:flex lg:flex-row  lg:ms-16'>
              {/* 2nd div  */}
              <div className='text-center lg:text-start '>

              <div className='flex items-center '>
                  <h1 className='lg:text-6xl  font-bold  '>NI FAHAD </h1>
                  <div className='w-20'><img src={Hi} alt="" /></div>
              </div>                 
              <div className='flex h-10 items-center '>
                  <div className=' me-3 mt-1 w-28 h-0.5 bg-slate-300'></div>
                  <h3 className='text-lg font-semibold text-red-600'><Typewriter  words={['web degainer', 'full stack developer', 'web developer', 'MERN stack developer']} deleteSpeed={50} loop={Infinity}></Typewriter></h3>                    
              </div>
              <div style={{width:"320px"}} className=' font-semibold text-sm text-slate-500 text-justify'>
                  <p>Hi, wellcome to my personal portfolio.  My name is Nahidul islam Fahad. I live in Bangladesh. I have been working as a full stack developer for 2 years. I'm very passionate and dedicated to my work</p>
              </div>
              <a href={Resume} download={true}>
              <button className='btn mt-10 bg-black text-white hover:bg-black'>Resume</button>
              </a>
              </div>

              {/* 3rd div  */}
              <div data-aos="zoom-in">
              <div className={`${Style.profile} w-60 h-60 rounded-full ms-20 `}>
              {/* img div  */}
              </div>
              </div>
           </div>

        </section>
        </div>  
    );
};

export default Herobanner;