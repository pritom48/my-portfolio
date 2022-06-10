import React from 'react';
import pic1 from '../../img/projects1/AI Tools. (1).png'
import pic2 from '../../img/projects1/AI Tools. (2).png'
import pic3 from '../../img/projects1/AI Tools. (3).png'
import pic4 from '../../img/projects1/AI Tools. (4).png'

const ProjectsDetOne = () => {
    return (
        <div>
            <h1 className='text-center text-white font-bold text-5xl py-10'>AI Tools</h1>
            <div className='px-10'>
                <div class="carousel w-full">
                    <div id="item1" class="carousel-item w-full">
                        <img src={pic1} class="w-full" alt='' />
                    </div>
                    <div id="item2" class="carousel-item w-full">
                        <img src={pic2} class="w-full" alt='' />
                    </div>
                    <div id="item3" class="carousel-item w-full">
                        <img src={pic3} class="w-full" alt='' />
                    </div>
                    <div id="item4" class="carousel-item w-full">
                        <img src={pic4} class="w-full" alt='' />
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
                            About AI Tools & Features
                        </h2>
                        <p>1. It is a tools manufacturer website. A user can buy any tool.</p>
                        <p>2.  Users can give a review that shows on the home page.</p>
                        <p>3. Only an admin can make an admin. Only Amin can add products, manage products and delete products.</p>
                        <p>4. User can’t make an admin. Firebase has been used to authenticate the user.</p>
                        <p>5.  Data will be loaded and saved in the MongoDB database. </p>
                        <p>6. JWT is used for security purposes.</p>
                        <h1 className='text-3xl text-white font-bold py-5'>Use Technology</h1>
                        <div class="card-actions justify-start">
                            <div class="badge badge-outline text-xl">HTML5</div>
                            <div class="badge badge-outline text-xl">CSS3</div>
                            <div class="badge badge-outline text-xl">ES6</div>
                            <div class="badge badge-outline text-xl">TAILWIND</div>
                            <div class="badge badge-outline text-xl">DAISYUI</div>
                            <div class="badge badge-outline text-xl">JAVASCRIPT</div>
                            <div class="badge badge-outline text-xl">REACT.JS</div>
                            <div class="badge badge-outline text-xl">REACT ROUTER</div>
                            <div class="badge badge-outline text-xl">REACT HOOK</div>
                            <div class="badge badge-outline text-xl">FIREBASE</div>
                            <div class="badge badge-outline text-xl">EXPRESS.JS</div>
                            <div class="badge badge-outline text-xl">NODEJS</div>
                            <div class="badge badge-outline text-xl">MONGODB</div>
                            <div class="badge badge-outline text-xl">JWT</div>
                        </div>
                        <div className='my-10'>
                            <a className='btn btn-primary text-white' href="https://computer-tools-502a0.web.app/">Live Site</a>
                            <a className='btn btn-primary text-white mx-3' href="https://github.com/pritom48/ass-12-computer-tools">Github Client</a>
                            <a className='btn btn-primary text-white mx-3' href="https://github.com/pritom48/ass-12-computer-tool-server">Github Server</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetOne;