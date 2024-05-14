import "../CSS/About.scss"

function About() {
  function handleClick() {
    const emailAddress = "olivercase-green@hotmail.co.uk"
    const subject = encodeURIComponent("Let's talk!")
    const body = encodeURIComponent(
      "Hi Ollie,\n\nI just saw your portfolio online..."
    )
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`
  }

  return (
    <div className="about-container">
      <div className="main-content">
        <h1 className="title">Oliver Case-Green</h1>
        <h2 className="subtitle">
          Software Engineer with two years of commercial experience.
        </h2>
        <div className="about-text">
          Welcome to my portfolio! I am a London-based Software Engineer with
          commercial experience using{" "}
          <span className="emphasis-text">
            Vue.js, JavaScript, TypeScript and Python.
          </span>
        </div>
        <div className="about-text">
          I am ideally looking for Frontend and Full-stack Developer positions
          in my next position. I am also very confident working with React from
          my full-time coding bootcamp, Sigma Labs XYZ, and Django from my
          personal projects - please check out my projects in the navbar above!
        </div>
        <div className="about-text">
          In my spare time, I have been teaching myself Django for backend
          development, initially from online documentation and more recently
          from a book:{" "}
          <span className="emphasis-text">Django 4 By Example</span>.
        </div>
        <h3 className="additional-info">Site info</h3>
        <div className="about-text">
          This website was built using React and TypeScript and is hosted on
          GitHub pages. To navigate between pages, I used React Router.
        </div>
        <div className="about-text">
          The source code can be seen in my GitHub repository available{" "}
          <a href="https://github.com/olliecase-green/olliecase-green.github.io">
            here.
          </a>
        </div>
        <button className="lets-talk-button" onClick={handleClick}>
          <div className="button-background"></div>
          <span>Let's talk!</span>
        </button>
      </div>
    </div>
  )
}

export default About
