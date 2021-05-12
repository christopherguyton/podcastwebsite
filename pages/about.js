import NavBar from '../components/NavBar'

function About() {
    
    return <div>
    
    <NavBar/>
    <main>
    <div style={{}} className="container">
    <h2 style={{fontFamily: "Roboto", textAlign: 'center', marginTop: '2px', fontStyle: 'italic'}}>Introducing The Anti-Oki Podcast</h2><br></br>
    <p>The Anti-Oki Podcast began in 2021 as a show centered around a community that has been more or less overtaken by the now ubiquitious and persistent "woke" culture, which happened to be none other than the fighting Game Community.<br></br><br></br>

    Mister Behavior and Ceelows came together via the internet as they had found a mutual disdain for what much of the online discourse from people within the FGC had begun to shift the proverbial overton window so far in one direction, that it seemed as if it was time for some people to address it. Why not let those people be them?<br></br><br></br>
    
    The first season of the show ran from February 2021 - May 2021 and featured 12 episodes discussing the focus on gender and racial politics, the infestation of cancel culture and all of the things you'd expect from a few guys fed up with wokeness.<br></br><br></br>

    Moving into their second season, Mister Behavior and Ceelows are ready to branch out a bit more within the realm of video games, and venturing further into the source of this seemingly pervasive movement. Since what happens in the FGC is meerly a reflection of the larger work at hand within society, after all.
    </p>
    
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

  }
  
  export default About;


