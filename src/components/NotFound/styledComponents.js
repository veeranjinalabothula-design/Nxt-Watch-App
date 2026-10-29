import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  min-height: 92vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  padding: 20px;
  text-align: center;
  animation: fadeIn 0.4s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const NotFoundVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NotFoundVideosImage = styled.img`
  width: 220px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 450px;
    margin-bottom: 25px;
  }
`

export const NotFoundVideosHeading = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.headingColor};
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const NotFoundVideosNote = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: ${props => props.noteColor};
  max-width: 500px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const GoHomeButton = styled.button`
  border: none;
  background-color: #3b82f6;
  color: #fff;
  padding: 8px 16px;
  border-radius: 6px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #2563eb;
  }
`
