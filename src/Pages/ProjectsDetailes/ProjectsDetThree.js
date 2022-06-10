import React from 'react';
import picHunt1 from '../../img/projects3/Pictuer Hunt1.png'
import picHunt2 from '../../img/projects3/Pictuer Hunt2.png'
import picHunt3 from '../../img/projects3/Pictuer Hunt3.png'
import picHunt4 from '../../img/projects3/Pictuer Hunt4.png'

const ProjectsDetThree = () => {
    return (
        <div>
            <h1 className='text-center text-white font-bold text-5xl py-10'>Picture Hunt</h1>
            <div className='px-10'>
                <div class="carousel w-full">
                    <div id="item1" class="carousel-item w-full">
                        <img src={picHunt1} class="w-full" alt='' />
                    </div>
                    <div id="item2" class="carousel-item w-full">
                        <img src={picHunt2} class="w-full" alt='' />
                    </div>
                    <div id="item3" class="carousel-item w-full">
                        <img src={picHunt3} class="w-full" alt='' />
                    </div>
                    <div id="item4" class="carousel-item w-full">
                        <img src={picHunt4} class="w-full" alt='' />
                    </div>
                </div>
                <div class="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" class="btn btn-xs">1</a>
                    <a href="#item2" class="btn btn-xs">2</a>
                    <a href="#item3" class="btn btn-xs">3</a>
                    <a href="#item4" class="btn btn-xs">4</a>
                </div>
            </div>
            <div>
                <div class="card text-white bg-slate-700 my-10 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-3xl">
                            About Picture Hunt & Features
                        </h2>
                        <p>1. It is an individual photographer's website. </p>
                        <p>2.  The photographer has him some service.</p>
                        <p>3.  Firebase has been used to authenticate the user.</p>
                        <p>4. The user can create his account and by this account, they can log in.</p>
                        <p>5. Users can also log in by Google. </p>
                        <p>6. If the user forgets his or her password then he/she can recover it by reset.</p>
                        <h1 className='text-3xl text-white font-bold py-5'>Use Technology</h1>
                        <div class="card-actions justify-start">
                            <div class="badge badge-outline text-xl">HTML5</div>
                            <div class="badge badge-outline text-xl">CSS3</div>
                            <div class="badge badge-outline text-xl">ES6</div>
                            <div class="badge badge-outline text-xl">BOOTSTRAP</div>

                            <div class="badge badge-outline text-xl">JAVASCRIPT</div>
                            <div class="badge badge-outline text-xl">REACT.JS</div>
                            <div class="badge badge-outline text-xl">REACT ROUTER</div>
                            <div class="badge badge-outline text-xl">REACT HOOK</div>
                            <div class="badge badge-outline text-xl">FIREBASE</div>

                        </div>
                        <div className='my-10'>
                            <a className='btn btn-primary text-white' target="_blank" href="https://photo-hunter-cb937.web.app/">Live Site</a>
                            <a className='btn btn-primary text-white mx-3' target="_blank" href="https://github.com/pritom48/picture-hunt">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetThree;