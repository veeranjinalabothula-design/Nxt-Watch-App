import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  @media screen and (min-width: 768px) {
    width: 320px; /* slightly bigger on desktop */
    margin-right: 10px;
  }
`

export const ThumbNailImage = styled.img`
  width: 100%;
  height: 200px; /* fix height for consistency */
  object-fit: cover; /* prevents stretching */
  background-color: #000; /* placeholder bg */
`

export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 10px 0;
`

export const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin: 0 14px 0 0;
  flex-shrink: 0;
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: calc(100% - 50px);
`

export const Title = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.color};
  margin: 0 0 4px 0;

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const ChannelName = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  color: ${props => props.color};
  margin: 0;
`

export const ViewsAndDate = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: ${props => props.color};
  margin-top: 3px;
`

export const Dot = styled.span`
  padding: 0 6px;
  font-weight: bold;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
