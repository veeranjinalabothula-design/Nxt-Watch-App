import styled from 'styled-components'

export const NoVideosView = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  text-align: center;
  padding: 20px;
`

export const NoVideosImage = styled.img`
  width: 200px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 420px;
    margin-bottom: 25px;
  }
`

export const NoVideosHeading = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.headingColor};
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const NoVideosNote = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: ${props => props.noteColor};
  margin-bottom: 20px;
  max-width: 420px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 6px;
  color: #ffffff;
  padding: 8px 16px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.15s ease-in-out;

  &:hover {
    background-color: #3730a3;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0px);
  }
`

export const VideoCardList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  justify-items: center;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
