import React from 'react';
import mypic from '../../img/mypic.png'

const AboutMe = () => {
    return (
        <div>
            <div>
                <div class="card mx-10 my-10 bg-slate-700 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img width={500} src={mypic} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center text-white">
                        <h2 class="card-title text-3xl">PRITOM DAS</h2>
                        <p>Hello, I am a Junior Web Developer. I have been working in this field for the last six months. I love being in this line of work because I am passionate about design, development, ReactJs, Javascript, and so on. I have completed many projects in the last six months.</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center text-white mb-10 '>
                <div class="card w-9/12 bg-slate-700 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-3xl">Education</h2>
                        <div className='my-5'>
                            <h3 className='text-xl'>Habibullah Bahar University College</h3>
                            <p>Computer Science and Engineering (2021-Runing)</p>
                        </div>
                        <div>
                            <h3 className='text-xl'>Dr. Mahbubur Rahman Mollah College</h3>
                            <p>Higher secondary school certificate, Science(2018-2020)</p>
                        </div>
                        <div className='my-5'>
                            <h3 className='text-xl'>Narinda Govt. High School</h3>
                            <p>Secondary school certificate, Science(2016-2018)</p>
                        </div>
                    </div>
                </div>
                <div class="card w-9/12 bg-slate-700  shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-3xl">Skills</h2>
                        <div>
                            <h2>HTML</h2>
                            <progress class="progress progress-primary bg-amber-300 w-56" value="90" max="100"></progress>
                        </div>
                        <div>
                            <h2>CSS</h2>
                            <progress class="progress progress-primary bg-amber-300 w-56" value="87" max="100"></progress>
                        </div>
                        <div>
                            <h2>Bootstrap</h2>
                            <progress class="progress progress-primary bg-amber-300 w-56" value="85" max="100"></progress>
                        </div>
                        <div>
                            <h2>Javascript</h2>
                            <progress class="progress progress-primary bg-amber-300 w-56" value="60" max="100"></progress>
                        </div>
                        <div>
                            <h2>ReactJs</h2>
                            <progress class="progress progress-primary bg-amber-300 w-56" value="80" max="100"></progress>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;