import React from 'react'

const About = () => {
  return (

    <div className=' w-full md:screen py-16 flex items-center p-2 h-screen '>

        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-2 '>
            <div className='md:col-span-2 space-y-4' >
                <p> About Me</p>
                <h2 > Disruption From HR to Web developer </h2>
                <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. </p>      
            </div>

            <div className=' w-full h-auto m-auto shadow-xl shadow-gray-500 flex items-center justify-center  '>
                <img src=' https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt="" /> 
            </div>
        </div>

    </div>
  )
}

export default About