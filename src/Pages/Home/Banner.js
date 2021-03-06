import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import mypic from '../../img/mypic.png'
import facebook from '../../img/icon/facebook.png'
import linkedin from '../../img/icon/linkedin1.png'
import github from '../../img/icon/github-orange.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-slate-700">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img width={500} src={mypic} alt='' />
                <div>
                    <h1 class="text-5xl font-bold text-white pb-3">HI, I AM PRITOM</h1>
                    <TypeWriterEffect
                        textStyle={{
                            fontFamily: 'Red Hat Display',
                            color: 'orange',
                            fontWeight: 500,
                            fontSize: '2em',
                        }}
                        startDelay={''}
                        cursorColor="#ffff"
                        multiText={[
                            'MREN Stack developer',
                            'React Developer',
                            'Front-end Developer'
                        ]}
                        multiTextDelay={2000}
                        typeSpeed={100}
                        multiTextLoop
                    />
                    <p class="py-3 text-white">Hello, I am a Junior Web Developer. I have been working in this field for the last six months. I love being in this line of work because I am passionate about design, development, ReactJs, Javascript, and so on. I have completed many projects in the last six months.</p>
                    <div className='flex mt-5'>
                        <a className='ml-2' target="_blank" href="https://www.linkedin.com/in/pritom-das/"> <img width={50} src={linkedin} alt="" /></a>
                        <a className='ml-2' target="_blank" href="https://www.facebook.com/profile.php?id=100023125147767"> <img width={50} src={facebook} alt="" /></a>
                        <a className='ml-2' target="_blank" href="https://github.com/pritom48"> <img width={50} src={github} alt="" /></a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;