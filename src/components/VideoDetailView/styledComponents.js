import styled from 'styled-components'

/* Page Container */
export const VideoDetailViewContainer = styled.div`
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

/* Loader for API fetch */
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`

/* Content Section after loader */
export const VideoPlayerSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  @media screen and (min-width: 768px) {
    padding: 24px 40px;
  }
`

export const VideoTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.color};
  margin: 16px 0;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

/* Info row: views, likes, dislikes, etc. */
export const VideoMetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: ${props => props.color};
  margin-bottom: 16px;
`

/* Channel details */
export const ChannelSection = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`

export const ChannelLogo = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 12px;
`

export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.color};
  margin-bottom: 4px;
`

export const ChannelSubscribers = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: ${props => props.color};
  opacity: 0.8;
`

export const VideoDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: ${props => props.color};
  margin-top: 12px;
`
