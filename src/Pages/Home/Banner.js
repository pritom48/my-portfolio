import React from 'react';
import mypic from '../../img/mypic.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-slate-700">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img width={500} src={mypic} alt='' />
                <div>
                    <h1 class="text-5xl font-bold text-white">HI, I AM PRITOM</h1>
                    <h1 className='text-3xl py-3'>MREN Stack developer</h1>
                    <p class="py-3 text-white">Hello, I am a Junior Web Developer. I have been working in this field for the last six months. I love being in this line of work because I am passionate about design, development, ReactJs, Javascript, and so on. I have completed many projects in the last six months.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;