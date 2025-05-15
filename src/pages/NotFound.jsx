import styled from "styled-components"
import { Link } from "react-router"

const Wrapper404 = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 40px;
height: 90dvh;

    h2 {
      font-size: 92px;
      margin: 0;
    }

    h3 {
      font-size: 34px;
      margin: 1rem 0;
    }

    a {
      display: inline-block;
      margin-top: 20px;
      padding: 4px 24px;
      background-color: #ff4757;
      border-radius: 8px;
      color: white;
      text-decoration: none;
      transition: ease .3s;
    }

    a:hover {
      background-color: #ef2424;
      transform: scale(1.03);
    }

    @media (max-width: 600px) {
      h1 {
        font-size: 72px;
      }
    }
`

export const NotFound = () => {
  return (
    <>
      <Wrapper404>
        <h2>404</h2>
        <h3>Page Not Found</h3>
        <p>Oops! The page you’re looking for doesn’t exist or has been moved.</p>
        <Link to={"/"}>
          <p>⬅ Back to Home</p>
        </Link>
      </Wrapper404 >
    </>
  )
}