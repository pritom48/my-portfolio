import React from 'react';
import { Link } from 'react-router-dom';
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
                    <div class="card-body text-white">
                        <h2 class="card-title text-3xl text-white">AI Tools</h2>
                        <p>It is a tools manufacturer website. A user can buy any tool. Users can give a review that shows on the home page. Only an admin can make an admin.</p>
                        <Link className='btn btn-outline text-white' to='/projectsDetOne'>Details</Link>
                    </div>
                </div>
                <div class="card w-96 bg-slate-700 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={bicycle} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body text-white">
                        <h2 class="card-title text-3xl text-white">Bicycle House</h2>
                        <p>It’s a bicycle inventory management website. Where any valid user can update an inventory of bicycles.</p>
                        <Link className='btn btn-outline text-white' to='/projectsDetTwo'>Details</Link>
                    </div>
                </div>
                <div class="card w-96 bg-slate-700 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={photohunt} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body text-white">
                        <h2 class="card-title text-3xl text-white">Picture Hunt</h2>
                        <p>It is an individual photographer's website. The photographer has him some service.  Firebase has been used to authenticate the user.</p>
                        <Link className='btn btn-outline text-white' to='/projectsDetThree'>Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;