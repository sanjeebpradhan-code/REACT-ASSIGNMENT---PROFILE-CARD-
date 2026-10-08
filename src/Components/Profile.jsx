import React from 'react'

function Profile() {

   const yourName = "Hello iam Sanjeeb pradhan👋";
   const yourAim = "Aspiring Web Developer";
   const funFact = "i can write code in my mind🧠";


return (
  <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
   
    <div className="bg-white/80 backdrop-blur-md shadow-md rounded-3xl p-10 max-w-2xl w-full text-center shadow-cyan-800">
      
      <h1 className="text-4xl font-extrabold text-black  mb-4 ">
         {yourName}
      </h1>


      
      <h2 className="text-2xl font-bold text-black mb-4">
        {yourAim}
      </h2>

      <p className="text-gray-700 text-lg mb-4 font-normal">
        I’m currently learning how to build UIs with React!
      </p>

    
      <p className="text-cyan-900 text-base">
        <span className="font-bold">Fun Fact:</span> {funFact} 
      </p>

    </div>
  </div>
);
}

export default Profile