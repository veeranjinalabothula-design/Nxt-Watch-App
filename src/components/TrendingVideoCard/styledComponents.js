import {Link} from 'react-router-dom'
import styled from 'styled-components'

/* Clickable wrapper */
export const ItemLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`

/* Card Container */
export const TrendingListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 12px 40px;
    transition: box-shadow 0.2s ease-in-out;

    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }
  }
`

/* Thumbnail */
export const TrendingThumbNailImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 170px;
    flex-shrink: 0;
  }
`

/* Video Info Row (Profile + Content) */
export const TrendingVideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const TrendingProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 14px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

/* Video Meta Content */
export const TrendingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;

  @media screen and (min-width: 768px) {
    margin-left: 20px;
    padding: 0;
  }
`

/* Title & Text Elements */
export const TrendingTitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.color};
  margin: 0 0 6px 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const TrendingChannelName = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  color: ${props => props.color};
  margin: 0 0 4px 0;
`

export const TrendingViewsAndDate = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: ${props => props.color};
  margin: 0;
`

export const TrendingDot = styled.span`
  padding: 0 6px;
`
