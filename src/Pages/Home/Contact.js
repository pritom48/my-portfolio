import React from 'react';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import shortMsg from '../../img/shortMsg.jpg'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lptx48c', 'template_9ud2vtc', form.current, 'obQeI7HiojdykG-nQ')
            .then((result) => {
                console.log(result.text);
                toast.success('Your Message Send')
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <h1 className='text-center text-white font-bold text-5xl py-20'>Get in Touch</h1>
            <div>
                <div class="hero min-h-screen">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="text-center lg:text-left">
                            <img src={shortMsg} alt="" />
                        </div>
                        <div class="card bg-slate-700 flex-shrink-0 w-full max-w-sm shadow-2xl">
                            <div class="card-body">
                                <form ref={form} onSubmit={sendEmail}>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text text-white">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="Your Name" class="input input-bordered" />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text text-white">Email</span>
                                        </label>
                                        <input type="text" name='email' placeholder="email" class="input input-bordered" />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text text-white">Short Message</span>
                                        </label>
                                        <textarea type="text" name='message' placeholder="Short Message" class="input input-bordered" />
                                    </div>
                                    <div class="form-control mt-6">
                                        <button type='submit' value='send' class="btn btn-outline text-white">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;