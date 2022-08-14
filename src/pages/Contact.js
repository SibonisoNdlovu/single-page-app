import React from 'react';
import {Layout} from '../layout';

const Contact = () => 
<>
    <Layout>
      <form>
        <div className='flex flex-col text-justify'>
          <h1 className='text-2xl text-justify'>
            This is the contact page
          </h1>
          <div className='flex flex-col items-center justify-center'>
            <label htmlFor='name' className='text-xl'>
              Name
            </label>
            <input type='text' id='name' className='border border-gray-400 p-2 w-full' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <label htmlFor='email' className='text-xl'>
              Email
            </label>
            <input type='text' id='email' className='border border-gray-400 p-2 w-full' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <label htmlFor='message' className='text-xl'>
              Message
            </label>
            <textarea id='message' className='border border-gray-400 p-2 w-full' rows='10'></textarea>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <button className='bg-purple-600 text-purple-200 p-2 w-full'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </Layout>
</>


export default Contact;