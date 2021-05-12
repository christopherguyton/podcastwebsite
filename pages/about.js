import NavBar from '../components/NavBar'
import Image from 'next/image'

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
    
    <div className="row" style={{justifyContent: 'center'}}>

<a href="https://www.youtube.com/channel/UCuBxuIYqEJ3eWN3xw6_IAKg" className="card">

<Image src="/images/listenonyoutube.png" width="130" height="144"/>
</a>

</div>

 <div className="row">
 

          <a href="https://open.spotify.com/show/7gXUantVR1aw9ynMoqiXFC?si=kYlhtzgBTACKUSRFLUftZg" className="card">
          <Image src="/images/listenonspotify.png" width="144" height="144"/>
          </a>

          <a
            href="https://soundcloud.com/antiokipodcast"
            className="card" >
            <Image src="/images/listenonsoundcloud.png" width="144" height="144"/>
          </a>
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
.card {
  margin: 2rem;
  flex-basis: 45%;
  padding:  .5rem;
  align-content: center;
  text-align: center;
  justify-content: center;
  color: inherit;
  text-decoration: none;
  border: 1px solid #304302;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.card:hover,
.card:focus,
.card:active {
  color: #0070f3;
  border-color: #0070f3;
}


 main {
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media (max-width: 600px) {
  .grid {
    width: 100%;
    flex-direction: column;
  }
`}
 </style>
  
    </div>

  }
  
  export default About;


