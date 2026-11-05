import {Component} from 'react'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

import SaveButton from '../SaveButton'

import {
  VideoDetailsContainer,
  Title,
  VideoActions,
  ActionButton,
  ChannelContainer,
  ChannelImage,
  ChannelDetails,
  ChannelName,
  ChannelSubscribers,
  Description,
  HorizontalLine,
} from './styledComponents'

class PlayVideoView extends Component {
  state = {
    isLiked: false,
    isDisLiked: false,
  }

  onClickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
  }

  render() {
    const {videoDetails} = this.props
    const {isLiked, isDisLiked} = this.state

    const { title, videoUrl, viewCount, publishedAt, description, channel} =
      videoDetails

    const {name, profileImageUrl, subscriberCount} = channel

    return (
      <VideoDetailsContainer data-testid="videoItemDetails">
        <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
        <Title>{title}</Title>
        <VideoActions>
          <p>{viewCount} views</p>
          <p>{publishedAt}</p>
        </VideoActions>
        <div className="action-buttons-container">
          <ActionButton
            type="button"
            style={{color: isLiked ? '#2563eb' : '#64748b'}}
            onClick={this.onClickLike}
          >
            <AiOutlineLike size={25} />
            Like
          </ActionButton>
          <ActionButton
            type="button"
            style={{color: isDisLiked ? '#2563eb' : '#64748b'}}
            onClick={this.onClickDislike}
          >
            <AiOutlineDislike size={25} />
            Dislike
          </ActionButton>
          <SaveButton videoDetails={videoDetails} />
        </div>
        <HorizontalLine />
        <ChannelContainer>
          <ChannelImage src={profileImageUrl} alt="channel logo" />
          <ChannelDetails>
            <ChannelName>{name}</ChannelName>
            <ChannelSubscribers>
              {subscriberCount} subscribers
            </ChannelSubscribers>
          </ChannelDetails>
        </ChannelContainer>
        <Description>{description}</Description>
      </VideoDetailsContainer>
    )
  }
}

export default PlayVideoView
