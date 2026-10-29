import styled from 'styled-components'

export const GamingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  transition: background-color 0.3s ease-in-out;

  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

/* Title row above videos */
export const GamingVideoTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 15px;

  @media screen and (min-width: 768px) {
    padding: 30px 40px;
  }
`

/* Icon circle container */
export const GamingTitleIconContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.dark ? '#000000' : '#e2e8f0')};
  flex-shrink: 0;

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`

/* Section title */
export const GamingText = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.color};
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

/* Video list container */
export const GamingVideoList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* spacing between video cards */
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin-left: 40px;
    justify-content: flex-start;
  }
`

/* Loader styling */
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
