import styled from "styled-components"
import { Media } from "../components/Media"

//#region ---- Styling ----
const AboutSectionWrapper = styled.section`
  
  text-align: left;
  flex-wrap: wrap;
  padding: 2rem;
  width: 75%;
  margin: 0 auto;

    h1, h2 {
    text-align: center;
    margin:35px 0;
  }

 /* desktop */
    @media ${Media.desktop}{   
    width: 50%;  

      h1, h2 {
    text-align: left;
  }

  }

   /* Widescreen */
    @media ${Media.widescreen}{   
     width: 50%;    
     margin: 0 auto;
        h1, h2 {
    text-align: left;
  }

    }
`

const AboutTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
//#endregion

export const About = () => {
  return (
    <AboutSectionWrapper>
      <h1>🎬 React Movie App</h1>
      <div>
        <p>As part of a collaborative project, we teamed up to create a multi-page
          React application that interacts with themoviedb.org's API.</p>
        <h2>🚀 What We Built:</h2>
        <ul>
          <li>A movie listing page that fetches and displays data from themoviedb.org</li>
          <li>Clickable movie items that navigate to a dedicated movie detail page</li>
          <li>A user-friendly interface styled to reflect and build upon the example
            design we were provided</li>
        </ul>
        <h2>🔍 Our Approach:</h2>
        <p>We chose to fetch and display popular movies, using one of the many available endpoints from the API.</p>
        <h3>We focused on:</h3>
        <ul>
          <li>Clean and responsive UI design</li>
          <li>Clear user navigation using React Router</li>
          <li>Robust asynchronous data fetching with async/await, along with proper error handling</li>
        </ul>
        <h2>🛠 Tech Stack:</h2>
        <ul>
          <li>React (with hooks and functional components)</li>
          <li>React Router for multi-page routing</li>
          <li>TheMovieDB API for real-world movie data</li>
          <li>Custom CSS / Styled components for layout and design</li>
        </ul>
        <p>This project was a great opportunity to explore API integration, manage
          application state, and build out multiple pages in a modern React workflow.</p>
        <p>Proudly created by Sofia & Simon 🎉</p>
      </div>
    </AboutSectionWrapper>
  )
}