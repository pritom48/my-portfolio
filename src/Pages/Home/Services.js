import React from 'react';
import uiux from '../../img/uiux.jpg'
import webdev from '../../img/webdev.jpg'
import illas from '../../img/ill.jpg'

const Services = () => {
    return (
        <div className=''>
            <h3 className='text-center text-white font-bold text-5xl py-20'>Services</h3>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div>
                    <div class="card w-96 bg-slate-700 shadow-xl">
                        <figure><img src={uiux} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title text-2xl text-white">
                                UI/UX Design
                            </h2>
                            <p><span className='font-bold text-3xl'>**</span> Landing Pages</p>
                            <p><span className='font-bold text-3xl'>**</span> User Flow</p>
                            <p><span className='font-bold text-3xl'>**</span> Wireframin</p>
                            <p><span className='font-bold text-3xl'>**</span> Mobile App Design</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card w-96 bg-slate-700 shadow-xl">
                        <figure><img src={webdev} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title text-2xl text-white">
                                Web Development
                            </h2>
                            <p><span className='font-bold text-3xl'>**</span> Landing Pages</p>
                            <p><span className='font-bold text-3xl'>**</span> User Flow</p>
                            <p><span className='font-bold text-3xl'>**</span> Wireframin</p>
                            <p><span className='font-bold text-3xl'>**</span> Mobile App Design</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card w-96 bg-slate-700 shadow-xl">
                        <figure><img src={illas} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title text-2xl text-white">
                                Illustration
                            </h2>
                            <p><span className='font-bold text-3xl'>**</span> Landing Pages</p>
                            <p><span className='font-bold text-3xl'>**</span> User Flow</p>
                            <p><span className='font-bold text-3xl'>**</span> Wireframin</p>
                            <p><span className='font-bold text-3xl'>**</span> Mobile App Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;