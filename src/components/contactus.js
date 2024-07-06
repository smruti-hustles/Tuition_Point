import React from 'react';
import { styles } from '../utils/style';
import contact from '../assets/logoo.png';

function Contact() {
  return (
    <div>
      <div className='flex-row items-center pl-5 justify-center pt-3' id='Contact'>
        <span className={styles.sectionHeadText}>
          Contact
        </span>
        <hr className='w-[35%]' />
      </div>

      <div className='mt-5'>
        <div className='flex flex-wrap flex-row justify-around'>
          <div className='lg:w-[40%]'>
            <form className='m-5 flex flex-col gap-3'>
              <label className='flex flex-col gap-3'>
                <span className='text-violet-700 font-medium mb-2'>Your Name</span>
                <input
                  type='text'
                  name='name'
                  placeholder="What's your name?"
                  className='bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium'
                />
              </label>

              <label className='flex flex-col gap-3'>
                <span className='text-violet-700 font-medium mb-2'>Your Email</span>
                <input
                  type='email'
                  name='email'
                  placeholder="What's your email?"
                  className='bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium'
                />
              </label>

              <label className='flex flex-col gap-3'>
                <span className='text-violet-700 font-medium mb-2'>Your Message</span>
                <textarea
                  name='text'
                  placeholder="What's your message?"
                  rows={5}
                  className='bg-orange-200 py-4 px-6 placeholder:text-secondary text-orange-500 rounded-lg outline-none border-none font-medium'
                />
              </label>

              <button
                type='submit'
                className='bg-violet-300 hover:shadow-orange-300 py-3 px-8 mb-4 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary'
                
              >
                Submit
              </button>
            </form>
          </div>
          <div className=' lg:w-[50%] flex justify-center items-center'>
            <img src={contact} alt='contact' className='max-w-full h-auto' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
