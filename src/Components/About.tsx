import { useState } from "react"
import "../CSS/About.scss"

function About() {
  const [letsTalk, setLetsTalk] = useState(false)

  function handleClick() {
    setLetsTalk(true)
  }

  return (
    <div className="about-container">
      <div className="main-content">
        <h1 className="title">Oliver Case-Green</h1>
        <h2 className="subtitle">
          Software Engineer with two years of commercial experience.
        </h2>
        <div className="about-text">
          Welcome to my portfolio! This site is still a work-in-progress. I am a
          London-based Software Engineer with commercial experience using
          Vue.js, JavaScript, TypeScript and Python. I am ideally looking for
          Frontend and Full-stack Developer positions in my next position. I am
          also very confident working with React from my full-time coding
          bootcamp, Sigma Labs XYZ, and Django from my personal projects -
          please check out my projects in the navbar above!
        </div>
        <div className="about-text">
          In my spare time, I have been teaching myself Django for backend
          development, initially from online documentation and more recently
          from a book: <span className="django-text">Django 4 By Example</span>.
        </div>
        <h3 className="additional-info">Site info and additional features</h3>
        <div className="about-text">
          This website was built using React and TypeScript and is hosted on
          GitHub pages. To navigate between pages, I used React Router.
          Additional features which are not yet finished include:
          <ul>
            <li>
              The "Let's talk!" button which will open an email from the user to
              me.
            </li>
            <li>
              The Joke button at the bottom of the page will fetch a joke from a
              free joke api: https://icanhazdadjoke.com/api.
            </li>
            <li>
              There will be a light / dark mode option to change the theme of
              the site. I am planning to use React Context API to globally store
              whether dark mode is activated, and update the styling in each
              component accordingly.
            </li>
            <li>The site needs mobile and smaller screen size styling.</li>
            <li>
              The content in Projects and Contact will be updated and the
              styling improved.
            </li>
          </ul>
        </div>
        <div className="about-text">
          The source code can be seen in my GitHub repository:
          https://github.com/olliecase-green/olliecase-green.github.io
        </div>
        <button className="lets-talk-button" onClick={handleClick}>
          <div className="button-background"></div>
          <span>Let's talk!</span>
        </button>
        {letsTalk && (
          <div className="lets-talk-div">
            When finished, this button will open up an email to my email address
            from the user
          </div>
        )}
      </div>
    </div>
  )
}

export default About