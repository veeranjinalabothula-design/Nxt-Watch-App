import styled from 'styled-components'

export const FailedView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  min-height: 70vh;
  padding: 20px;
  text-align: center;
`

export const FailedImage = styled.img`
  width: 180px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 350px;
    margin-bottom: 25px;
  }
`

export const FailedHeading = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.headingColor};
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const FailedNote = styled.p`
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

export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 6px;
  color: #ffffff;
  padding: 8px 18px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #3730a3;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0px);
  }
`
