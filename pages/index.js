import Head from 'next/head'

//custom 


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The Anti-Oki Podcast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
        <img src="/images/banner.png" alt="Anti-Oki Podcast Banner"/>
         
        </h1>

        <p className="description">
      Website Under Construction...<br></br>
      In the meantime, check us out on the following platforms....
        </p>
<br></br>
<br></br>

<div className="row">

<a href="https://www.youtube.com/channel/UCuBxuIYqEJ3eWN3xw6_IAKg" className="card">

<img src="" alt="Listen On YouTube" width={144}/>
</a>

</div>

 <div className="row">
 

          <a href="https://open.spotify.com/show/7gXUantVR1aw9ynMoqiXFC?si=kYlhtzgBTACKUSRFLUftZg" className="card">
          <img src="/images/listenonspotify.png" alt="Listen On Spotify" width={144}/>
          </a>

          <a
            href="https://soundcloud.com/antiokipodcast"
            className="card" >
          <img src="/images/listenonsoundcloud.png" alt="Listen On SoundCloud" width={144}/>
          </a>
          </div>

          
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Assembled by{' '}
          <img src="/images/mrbehaviorlogo.png" alt="Mister Behavior" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
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

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 2rem;
          flex-basis: 45%;
          padding:  .5rem;
          text-align: left;
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

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 7em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
