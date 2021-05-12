

import React, { useState } from 'react';
import Image from 'next/image'

import NavBar from '../components/NavBar'

export default function Ceelows() {
    
   return( 
       <div>
    
      <NavBar/>
      <main>
      <div className="row">
      <div className="col">
      <div style={{textAlign: 'left'}} className="container">
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br></br><br></br>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="row" style={{paddingTop: '30px'}}>
      <div className="col">
      <a href="https://www.youtube.com/user/TheCeelows">
      <Image
      src='/images/Youtube.png'
      alt="youtubethumbnail"
      width={100}
      height={100}
      >
      </Image>
      </a>
      </div>
      <div className="col">
      <a href="https://www.twitch.tv/ceelows">
      <Image
      src='/images/twitch.png'
      alt="twitchthumbnail"
      width={100}
      height={100}
      >
      </Image>
      </a>
      </div>
      <div className="col">
      <a href="https://www.minds.com/ceelows/">
      <Image
      src='/images/MindsLogo.png'
      alt="mindsthumbnail"
      width={100}
      height={100}
      >
      </Image>
      </a>
      </div>
      </div>
      </div>
      </div>
      
      <div className="col" style={{marginBottom: '10px'}}>
      <Image
      src='/images/ceelowslogo.png'
      alt="CeelowsImage"
      width={400}
      height={400}
      >
      </Image>
      </div>
      </div>
      </main>
      <footer>
      <a style={{color: 'black'}}
        href="https://www.minds.com/mrbehavior"
        target="_blank"
        rel="noopener noreferrer"
      >
        Website Assembled by{' '}
        <img src="/images/mrbehaviorlogo.png" alt="Mister Behavior" className="logo" />
      </a>
    </footer>
    <style jsx>{`
    footer {
      width: 100%;
      height: 300px;
      border-top: 1px solid #eaeaea;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    footer img {
      margin-left: 0.5rem;
     
    }
  
    footer a {
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .logo {
    height: 7em;
  }
   main {
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
   </style>
    
      </div>
   )
}