import React, { useState } from 'react';

function SignForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Input qiymatlarni saqlash
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleRememberMeChange = (event) => setRememberMe(event.target.checked);

  // Forma submit bo'lganda
  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('rememberMe', rememberMe ? 'true' : 'false');

    // Keyingi sahifaga o'tish
    window.location.href = '/';
  };

  return (
    <form className='w-[40%] rounded border-2 bg-white md:w-[80%] sm:w-[90%] lg:w-[90%] animate__animated animate__fadeIn' onSubmit={handleSubmit}>
      <h1 className='text-center capitalize text-5xl mt-2 mb-3 font-bold lg:text-4xl md:text-3xl sm:text-xl'>sign up</h1>
      <h4 className='text-center animate__animated animate__fadeIn'>Welcome back! Please log in to access your account.</h4>
      <div className='w-full flex flex-col justify-between pl-5 pr-5 animate__animated animate__fadeIn'>
        <p className='capitalize mb-3'>fullname</p>
        <input placeholder='enter your full name' className='w-[100%] h-14 pl-4 capitalize outline-none' />
      </div>
      <div className='w-full flex flex-col justify-between pl-5 pr-5 mt-10 animate__animated animate__fadeIn'>
        <p className='capitalize'>email</p>
        <input placeholder='enter your email' className='w-[100%] h-14 pl-4 capitalize outline-none' required />
      </div>
      <div className='w-full flex flex-col justify-between pl-5 pr-5 mt-10 animate__animated animate__fadeIn'>
        <p className='capitalize'>password</p>
        <input type="password" value={password} onChange={handlePasswordChange} placeholder='enter your password' className='w-[100%] h-14 pl-4 capitalize outline-none' required />
      </div>
      <div className='flex justify-between pl-5 pr-5 mt-3 sm:flex-col animate__animated animate__fadeIn'>
        <div className='capitalize'>
          <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} className='mr-3' />remember me
        </div>
        <p>forgot password</p>
      </div>
      <div className='w-full flex justify-center mt-10 flex-col gap-10 animate__animated animate__fadeIn'>
        <button type="submit" className='rounded border-2 bg-[#FF9500] w-[90%] h-14 capitalize text-3xl text-slate-100  m-auto lg:text-2xl  sm:text-xl'>login</button>
        <button className='rounded border-2 bg-[#F1F1F3] w-[90%] h-14 capitalize text-3xl text-black  m-auto lg:text-2xl  sm:text-xl'><i className="fa-brands fa-google mr-3"></i>login with google</button>
        <div className='text-center mb-3'>Don’t have an account? Sign Up<i className="fa-solid fa-arrow-right-long ml-3"></i></div>
      </div>
    </form>

  );
}

export default SignForm;
