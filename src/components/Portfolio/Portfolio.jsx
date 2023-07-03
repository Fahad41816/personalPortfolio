import React from 'react';
import Style from './Portfolio.module.css'
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className='pt-16 text-center'>
        <div data-aos="fade-up">
             <h1 className='text-4xl font-bold  '>My portfolio</h1>
             <p className="text-slate-500  ">most recent work</p>
        </div>
            <div className='mt-10 p-10'>
                <div className='grid grid-cols-1 gap-10 lg:grid-cols-3 lg:px-10'>
                <div data-aos="fade-right">
                       <div>
                            <div className={`${Style.Fportfolio} rounded-xl  cursor-pointer`}>

                            </div>
                            <div className='mt-5 flex items-center '> 
                                <Link to={"https://assigment-10-project.web.app/"}><button className="btn btn-outline btn-primary ">preview ></button></Link>
                                <Link to={"https://github.com/Fahad41816/chef-web-client"}><button className="btn btn-outline btn-primary ms-10">Github ></button></Link>
                            </div> 
                       </div>
                </div>
                       <div data-aos="zoom-in-up">
                        <div>
                                <div className={`${Style.Sportfolio} rounded-xl cursor-pointer`}>

                                </div>
                                <div className='mt-5 flex items-center '> 
                                    <Link to={"https://dolls-sell-website-project.web.app/"}><button className="btn btn-outline btn-primary ">preview ></button></Link>
                                    <Link to={"https://github.com/Fahad41816/Dolls-web-client"}><button className="btn btn-outline btn-primary ms-10">Github ></button></Link>
                                </div> 
                        </div>
                       </div>
                       <div data-aos="fade-left">
                       <div>
                            <div className={`${Style.Tportfolio} rounded-xl cursor-pointer`}>

                            </div>
                            <div className='mt-5 flex items-center '> 
                                <Link to={"https://gblobel-speck-project.web.app/"}><button className="btn btn-outline btn-primary ">preview ></button></Link>
                                <Link to={"https://github.com/Fahad41816/GlobalSpeck-client"}><button className="btn btn-outline btn-primary ms-10">Github ></button></Link>
                            </div> 
                       </div>                        
                       </div>
                </div>
            </div> 
        </div>
    );
};

export default Portfolio;