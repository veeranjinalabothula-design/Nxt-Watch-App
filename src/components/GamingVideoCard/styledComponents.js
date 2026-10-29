import {Link} from 'react-router-dom'
import styled from 'styled-components'

/* Link Wrapper */
export const ItemLink = styled(Link)`
  text-decoration: none;
  display: block;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`

/* Card Container */
export const GamingListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  }

  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`

/* Video Thumbnail */
export const GamingThumbNailImage = styled.img`
  width: 100%;
  height: 250px; /* Big but not overly tall */
  object-fit: cover;
  border-radius: 6px;
  align-self: center;

  @media screen and (min-width: 768px) {
    width: 320px; /* Slightly wider on desktop */
    height: 400px; /* Matches wider size, keeps proportion */
  }
`

/* Content Section */
export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px 12px;
  background-color: transparent;
`

/* Title Text */
export const GamingTitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.color};
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

/* Views Text */
export const GamingViewsAndDate = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: ${props => props.color};
  opacity: 0.8;
`
