
import { FaLinkedin, FaGithub, FaGooglePlus } from 'react-icons/fa';
import Hi from '../../assets/image/Hi.gif' 
import Style from './heroBanner.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
// ..
AOS.init();

const Herobanner = () => {
    return (
        
        <section className='flex p-28 items-center justify-around'>
            {/* 1st div  */}
            <div className=''>
              <Link to={"https://www.linkedin.com/in/nifahad/"}>
                <FaLinkedin className='text-2xl cursor-pointer'></FaLinkedin>
              </Link>  
              <Link to={"https://github.com/Fahad41816"}>
                <FaGithub className='text-2xl mt-3 cursor-pointer'></FaGithub>
              </Link>
              <FaGooglePlus className='text-2xl mt-3 cursor-pointer'></FaGooglePlus>
            </div>

            {/* 2nd div  */}
            <div>

                <div className='flex items-center '>
                    <h1 className='text-6xl  font-bold '>NI FAHAD </h1>
                    <div className='w-20'><img src={Hi} alt="" /></div>
                </div>                 
                 <div className='flex h-10 items-center '>
                    <div className=' me-3 mt-1 w-28 h-0.5 bg-slate-300'></div>
                    <h3 className='text-lg font-semibold text-red-600'><Typewriter  words={['web degainer', 'full stack developer', 'web developer', 'MERN stack developer']} deleteSpeed={50} loop={Infinity}></Typewriter></h3>                    
                 </div>
                 <div style={{width:"420px"}} className='font-semibold text-sm text-slate-500 text-justify'>
                    <p>Hi, wellcome to my personal portfolio.  My name is Nahidul islam Fahad. I live in Bangladesh. I have been working as a full stack developer for 2 years. I'm very passionate and dedicated to my work</p>
                 </div>
                <button className='btn mt-10 bg-black text-white hover:bg-black'>Resume</button>
            </div>

            {/* 3rd div  */}
            <div data-aos="zoom-in">
            <div className={`${Style.profile} w-60 h-60 rounded-full `}>
               {/* img div  */}
            </div>
</div>

        </section>
    );
};

export default Herobanner;