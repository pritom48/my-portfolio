import React from 'react';
import shortMsg from '../../img/shortMsg.jpg'

const Contact = () => {
    return (
        <div>
            <h1 className='text-center text-white font-bold text-5xl py-20'>Get in Touch</h1>
            <div>
                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="text-center lg:text-left">
                            <img src={shortMsg} alt="" />
                        </div>
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Short Message</span>
                                    </label>
                                    <textarea type="text" placeholder="Short Message" class="input input-bordered" />
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;