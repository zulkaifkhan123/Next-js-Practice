"use client"
import React from 'react'

function Page() {
console.log("page is rendered")

  async function handleClick(){
    let userData = {
      name : "ali Ahamd",
      RollNumber : 12 ,
      nickName : "Kaifi"
    }
    
    await fetch("/api/add" , {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(userData)
    })
  }
  return (
    <div id='home'>
      <h1>This is my home page</h1>
      <button onClick={handleClick}>Post a Request</button>
    </div>
  )
}

export default Page