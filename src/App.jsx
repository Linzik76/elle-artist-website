
import './App.css'

import guitar from './assets/elle-guitar.jpg'
import trees from './assets/elle-trees.jpg'
import wall from './assets/elle-wall.jpg'
import lyricCity from './assets/elle-lyric-city.jpg'

import liveSepia from './assets/elle-live-sepia.jpg'
import liveMic from './assets/elle-live-mic.jpg'
import bedroomGuitar from './assets/elle-bedroom-guitar.jpg'
import liveRedLights from './assets/elle-live-red-lights.jpg'
import liveStage from './assets/elle-live-stage.jpg'

const studioImage = 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=85'

function App() {
  return (
    <main>

      {/* NAVIGATION */}
      <nav className="navigation">
        <a href="#" className="wordmark">elle.</a>

        <div className="nav-links">
          <a href="#music">MUSIC</a>
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </div>

        <span className="nav-note">INDEPENDENT ARTIST</span>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">SINGER · SONGWRITER · COLLABORATOR</p>

          <h1>elle<span>.</span></h1>

          <p className="hero-description">
            Somewhere between the noise<br />
            and the quiet.
          </p>

          <a href="#music" className="main-button">
            EXPLORE THE MUSIC ↗
          </a>
        </div>

        <div className="hero-photo">
          <img src={liveStage} alt="Elle performing live on stage" />
          <span className="photo-note">A MOMENT IN MUSIC</span>
        </div>

        <span className="hero-decoration">01 — ELLE</span>
      </section>

      {/* INTRODUCTION */}
      <section className="intro" id="about">
        <p className="section-label">A LITTLE ABOUT THE MUSIC</p>

        <div className="intro-content">
          <h2>
            Not one sound.<br />
            Not one story.<br />
            <em>Just music.</em>
          </h2>

          <div className="intro-text">
            <p>
              Independent singer and songwriter, exploring different
              sounds, stories and creative collaborations.
            </p>

            <p>
              From quiet acoustic moments to louder alternative sounds.
              Always evolving.
            </p>

            <a href="#about-elle" className="text-link">
              GET TO KNOW ELLE ↗
            </a>
          </div>
        </div>
      </section>

      {/* VISUAL DIARY */}
      <section className="fragments-section" id="fragments">
        <div className="fragments-heading">
          <p className="section-label">A COLLECTION OF MOMENTS</p>
          <h2>Little <em>fragments.</em></h2>
        </div>

        <div className="fragments-layout">
          <div className="fragments-main-image">
            <img
              src={trees}
              alt="Trees photographed in black and white"
            />
            <span>01 — SOMEWHERE QUIET</span>
          </div>

          <div className="fragments-side">
            <div className="fragments-small-image">
              <img
                src={wall}
                alt="An urban wall photographed in black and white"
              />
            </div>

            <p className="fragments-handwriting">
              the things we notice.<br />
              the things we leave behind.
            </p>

            <p className="fragments-description">
              Photographs, passing thoughts, music and everything in between.
            </p>
          </div>
        </div>

        <div className="fragments-bottom">
          <span>COLLECTED ALONG THE WAY</span>
          <span>ELLE. — 2026</span>
        </div>
      </section>

      {/* ABOUT ELLE */}
      <section className="about-elle" id="about-elle">
        <div className="about-elle-image">
          <img src={studioImage} alt="An atmospheric recording studio" />
          <span>BEHIND THE MUSIC</span>
        </div>

        <div className="about-elle-copy">
          <p className="section-label">A LITTLE MORE ABOUT ME</p>

          <h2>
            More than<br />
            <em>the music.</em>
          </h2>

          <p className="about-intro">
            One artist. Different directions. Always creating.
          </p>

          <p className="about-placeholder">
            A little about the person behind the songs. The influences,
            the ideas, the things that make their way into the music.
          </p>

          <span className="about-signature">
            THIS IS JUST THE BEGINNING.
          </span>
        </div>
      </section>

      {/* MUSIC */}
      <section className="music-section" id="music">
        <div className="section-label">01 — THE SOUND</div>

        <div className="music-heading">
          <h2>The music<span>.</span></h2>
          <p>Different moods. Different moments.</p>
        </div>

        <div className="music-grid">

          <article className="music-card">
            <div className="card-art card-art-colour">
              <img src={liveMic} alt="Elle singing into a microphone" />
              <span className="image-number">01</span>
            </div>

            <p className="card-category">SOLO / LIVE</p>
            <h3>Solo music</h3>
            <p>Original songs and intimate performances.</p>
          </article>

          <article className="music-card">
            <div className="card-art card-art-colour">
              <img
                src={liveSepia}
                alt="Elle playing guitar during a live band performance"
              />
              <span className="image-number">02</span>
            </div>

            <p className="card-category">EMO / ALTERNATIVE</p>
            <h3>Band projects</h3>
            <p>Previous bands, live music and collaborations.</p>
          </article>

          <article className="music-card">
            <div className="card-art card-art-colour">
              <img
                src={bedroomGuitar}
                alt="Elle playing acoustic guitar at home"
              />
              <span className="image-number">03</span>
            </div>

            <p className="card-category">SONGWRITING</p>
            <h3>Behind the songs</h3>
            <p>Quiet moments, ideas and music in the making.</p>
          </article>

        </div>
      </section>

      {/* LYRIC FEATURE */}
      <section className="lyric-feature">
        <div className="lyric-image">
          <img
            src={lyricCity}
            alt="Elle's handwritten lyric over a black and white city photograph"
          />
        </div>

        <div className="lyric-copy">
          <p className="section-label">A LYRIC OF MINE</p>

          <h2>
            Words, thoughts<br />
            and little fragments.
          </h2>

          <p className="lyric-caption">
            SOMETIMES THE WORDS COME FIRST.
          </p>
        </div>
      </section>

      {/* CREATIVE PROJECTS */}
      <section className="creative-projects" id="projects">

        <div className="projects-intro">
          <p className="section-label">02 — OTHER CREATIVE PROJECTS</p>

          <h2>
            More than<br />
            <em>one thing.</em>
          </h2>

          <p className="projects-opening">
            Music is only part of the picture. A collection of
            projects, collaborations and creative things along the way.
          </p>
        </div>

        <div className="project-entry project-entry-one">
          <div className="project-entry-image">
            <img
              src={liveSepia}
              alt="Elle playing guitar during a live band performance"
            />
            <span>01 — MUSIC & PERFORMANCE</span>
          </div>

          <div className="project-entry-copy">
            <p className="section-label">THE MUSIC</p>

            <h3>
              Different sounds.<br />
              <em>Different chapters.</em>
            </h3>

            <p>
              Solo work, previous bands, live performances and
              the music that has shaped the journey so far.
            </p>
          </div>
        </div>

        <div className="project-entry project-entry-two">
          <div className="project-entry-image">
            <img
              src={liveRedLights}
              alt="Elle performing with a band under red stage lights"
            />
            <span>02 — LIVE & COLLABORATIONS</span>
          </div>

          <div className="project-entry-copy">
            <p className="section-label">WORKING TOGETHER</p>

            <h3>
              Better when<br />
              <em>we create together.</em>
            </h3>

            <p>
              Collaborations, shared ideas and making things
              happen with other creative people.
            </p>
          </div>
        </div>

        <div className="project-entry project-entry-three">
          <div className="project-entry-image">
            <img
              src={liveStage}
              alt="Elle singing during a live stage performance"
            />
            <span>03 — ON STAGE</span>
          </div>

          <div className="project-entry-copy">
            <p className="section-label">BEYOND THE SONGS</p>

            <h3>
              Every show<br />
              <em>has a story.</em>
            </h3>

            <p>
              The energy, the people and the moments that make
              playing live unforgettable.
            </p>
          </div>
        </div>

        <div className="projects-ending">
          <p>ALWAYS MAKING. ALWAYS EXPLORING.</p>

          <h3>
            And whatever<br />
            <em>comes next.</em>
          </h3>
        </div>

      </section>

      {/* CONTACT */}
      <footer id="contact">

        <div className="footer-main">

          <div className="footer-heading">
            <p className="section-label">03 — SAY HELLO</p>

            <h2>
              Let's make<br />
              <em>something.</em>
            </h2>
          </div>

          <div className="footer-contact">
            <p className="contact-note">
              For music, collaborations, live bookings
              and everything in between.
            </p>

            <a
              href="mailto:hello@example.com"
              className="main-button"
            >
              GET IN TOUCH ↗
            </a>

            <p className="social-placeholder">
              SOCIAL LINKS COMING SOON
            </p>
          </div>

        </div>

        <div className="footer-bottom">
          <a href="#" className="wordmark">elle.</a>
          <p>INDEPENDENTLY YOURS.</p>
          <p>© 2026 ELLE</p>
        </div>

      </footer>

    </main>
  )
}

export default App
