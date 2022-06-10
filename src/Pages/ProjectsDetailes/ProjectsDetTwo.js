import React from 'react';
import bicy1 from '../../img/projects2/bicycle1.png'
import bicy2 from '../../img/projects2/bicycle2.png'
import bicy3 from '../../img/projects2/bicycle3.png'
import bicy4 from '../../img/projects2/bicycle4.png'

const ProjectsDetTwo = () => {
    return (
        <div>
            <h1 className='text-center text-white font-bold text-5xl py-10'>Bicycle House</h1>
            <div className='px-10'>
                <div class="carousel w-full">
                    <div id="item1" class="carousel-item w-full">
                        <img src={bicy1} class="w-full" alt='' />
                    </div>
                    <div id="item2" class="carousel-item w-full">
                        <img src={bicy2} class="w-full" alt='' />
                    </div>
                    <div id="item3" class="carousel-item w-full">
                        <img src={bicy3} class="w-full" alt='' />
                    </div>
                    <div id="item4" class="carousel-item w-full">
                        <img src={bicy4} class="w-full" alt='' />
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
                            About Bicycle House & Features
                        </h2>
                        <p>1. It’s a bicycle inventory management website.</p>
                        <p>2.  Where any valid user can update an inventory of bicycles.</p>
                        <p>3. If he/she adds any new bicycle it can be viewed from home. </p>
                        <p>4. Users can manage bicycles and Add bicycles.</p>
                        <p>5. Users can manage bicycles and delete bicycles. </p>
                        <p>6. Firebase has been used to authenticate the user.</p>
                        <p>7. Data will be loaded and saved in the MongoDB database.</p>
                        <p>8. Users can also log in by Google. If the user forgets his or her password then he/she can recover it by reset.</p>
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
                            <div class="badge badge-outline text-xl">EXPRESS.JS</div>
                            <div class="badge badge-outline text-xl">NODEJS</div>
                            <div class="badge badge-outline text-xl">MONGODB</div>

                        </div>
                        <div className='my-10'>
                            <a className='btn btn-primary text-white' target="_blank" href="https://bicycle-house-cda08.web.app/">Live Site</a>
                            <a className='btn btn-primary text-white mx-3' target="_blank" href="https://github.com/pritom48/ass-11-bicycle-house-client">Github Client</a>
                            <a className='btn btn-primary text-white mx-3' target="_blank" href="https://github.com/pritom48/ass-11-bicycle-house-server">Github Server</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetTwo;