import React from 'react';
import AiTools from '../../img/AI Tools. (1).png'
import bicycle from '../../img/bicycleHouse.png'
import photohunt from '../../img/Pictuer Hunt.png'

const Projects = () => {
    return (
        <div>
            <h1 className='text-center text-white font-bold text-5xl py-20'>My Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div class="card w-96 bg-slate-700 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={AiTools} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body ">
                        <h2 class="card-title text-3xl text-white">AI Tools</h2>
                        <p>It is a tools manufacturer website. A user can buy any tool. Users can give a review that shows on the home page. Only an admin can make an admin. Only Amin can add products, manage products and delete products. User can’t make an admin. Firebase has been used to authenticate the user. Data will be loaded and saved in the MongoDB database. JWT is used for security purposes</p>
                        <button class="btn btn-outline"><a href="https://computer-tools-502a0.web.app/">Live Site</a></button>
                        <button class="btn btn-outline"><a href="https://github.com/pritom48/ass-12-computer-tools">Github</a></button>
                    </div>
                </div>
                <div class="card w-96 bg-slate-700 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={bicycle} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title text-3xl text-white">Bicycle House</h2>
                        <p>It’s a bicycle inventory management website. Where any valid user can update an inventory of bicycles. If he/she adds any new bicycle it can be viewed from home. Users can manage bicycles and delete bicycles. Firebase has been used to authenticate the user. Data will be loaded and saved in the MongoDB database.</p>
                        <button class="btn btn-outline"><a href="https://bicycle-house-cda08.web.app/">Live Site</a></button>
                        <button class="btn btn-outline"><a href="https://github.com/pritom48/ass-11-bicycle-house-client">Github</a></button>
                    </div>
                </div>
                <div class="card w-96 bg-slate-700 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={photohunt} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title text-3xl text-white">Picture Hunt</h2>
                        <p>It is an individual photographer's website. The photographer has him some service.  Firebase has been used to authenticate the user. The user can create his account and by this account, they can log in. Users can also log in by Google. If the user forgets his or her password then he/she can recover it by reset.</p>
                        <button class="btn btn-outline"><a href="https://photo-hunter-cb937.web.app/">Live Site</a></button>
                        <button class="btn btn-outline"><a href="https://github.com/pritom48/picture-hunt">Github</a></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;