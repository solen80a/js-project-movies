import styled from "styled-components";

//#region ---- Styling ----
const LoadWrapperSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;  
  padding: 100px;
`

const LoadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;  
   

  .loader {
  color: #fff;
  display: inline-block;
  position: relative;
  font-size: 32px;  
  box-sizing: border-box;
  }

  .loader::after {
    content: '';  
    width: 5px;
    height: 5px;
    background: currentColor;
    position: absolute;
    bottom: 10px;
    right: -5px;
    box-sizing: border-box;
    animation: animloader 1s linear infinite;
  }
   
    

    @keyframes animloader {
      0% {
        box-shadow: 10px 0 rgba(255, 255, 255, 0), 20px 0 rgba(255, 255, 255, 0);
      }
      50% {
        box-shadow: 10px 0 white, 20px 0 rgba(255, 255, 255, 0);
      }
      100% {
        box-shadow: 10px 0 white, 20px 0 white;
      }
    }
`
//#endregion

export const Loader = () => {
  return (
    <LoadWrapperSection>
      <LoadWrapper>
        <div className="loader" role="status">Loading Movie</div>
      </LoadWrapper>
    </LoadWrapperSection>
  )
};