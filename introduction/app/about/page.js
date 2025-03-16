import React from 'react'
import Script from 'next/script';

export const metadata = {
  title: "fb/about",
  description: "Connect By Facebook",
};

function page() {
  return (
    <div id='about'>
      <Script strategy='afterInteractive' dangerouslySetInnerHTML={{
        __html : `alert('Welcom to about page')`
      }} />
      <h1>
        this is about page
      </h1>
    </div>
  )
}

export default page