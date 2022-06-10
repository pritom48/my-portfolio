import React from 'react';
import address from '../../img/icon/address.png'
import email from '../../img/icon/email.png'


const ContactMe = () => {
    return (
        <div>
            <h1 className='text-center text-white font-bold text-5xl py-10'>Contact Details</h1>
            <div className='mb-10 text-white'>
                <div class="card lg:mx-28 mx-5 bg-slate-700 shadow-xl">
                    <div class="card-body lg:px-28">
                        <h2 class="card-title"> <img width={70} src={address} alt="" /> 43/10D, Swamibag, Dhaka</h2>
                        <h2 class="card-title"> <img width={50} className='ml-2' src={email} alt="" /> pritamdas41148@gmail.com</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;