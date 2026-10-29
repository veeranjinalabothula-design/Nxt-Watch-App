import styled from 'styled-components'

export const TrendingContainer = styled.div`
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

/* Title row (icon + heading) */
export const TrendingVideoTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 15px;

  @media screen and (min-width: 768px) {
    padding: 30px 40px;
  }
`

/* Circle behind the icon */
export const TitleIconContainer = styled.div`
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

/* Heading text */
export const TrendingText = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: ${props => props.color};
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`

/* Video list container */
export const TrendingVideoList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 20px; /* uniform spacing between TrendingVideoCards */

  @media screen and (min-width: 768px) {
    gap: 28px;
  }
`

/* Loader container */
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
