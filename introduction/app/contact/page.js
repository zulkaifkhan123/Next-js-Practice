import React from 'react'
import Image from 'next/image';


export const metadata = {
  title: "fb/contact",
  description: "Connect By Facebook",
};

function page() {
  return (
    <div id='contact'>
      <h1>this is contact page</h1>
      <div className="container">
      <Image
        src="/Image (5).jpg"
        alt="Description of the image"
        width={500}  
        priority={false}
        height={300} 
      />
      </div>
    </div>
  )
}

export default page