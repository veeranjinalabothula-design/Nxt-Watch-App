import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'

import Header from '../Header'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideoItemDetailsContainer,
  VideoItemDetailsVideoContainer,
  VideoTitle,
  VideoViewsAndTimeContainer,
  VideoViews,
  VideoTime,
  ActionButtonsContainer,
  ChannelContainer,
  ChannelImage,
  ChannelName,
  ChannelSubscribers,
  VideoDescription,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    activeButton: '',
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getFormattedData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumbnail_url,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
  })

  getVideoItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')

    this.setState({apiStatus: apiStatusConstants.inProgress})

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = this.getFormattedData(data)

      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickLike = () => {
    this.setState(prevState => ({
      activeButton: prevState.activeButton === 'LIKE' ? '' : 'LIKE',
    }))
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      activeButton: prevState.activeButton === 'DISLIKE' ? '' : 'DISLIKE',
    }))
  }

  onClickSave = () => {
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
    }))
  }

  renderVideoItemDetails = () => {
    const {videoDetails, activeButton, isSaved} = this.state
    const {
      title,
      videoUrl,
      viewCount,
      publishedAt,
      description,
      name,
      profileImageUrl,
      subscriberCount,
    } = videoDetails

    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme, addVideo, savedVideos} = value

          const isVideoAlreadySaved = savedVideos.find(
            eachVideo => eachVideo.id === videoDetails.id,
          )

          const isSaveActive = isVideoAlreadySaved || isSaved

          const onClickSaveButton = () => {
            addVideo(videoDetails)
            this.onClickSave()
          }

          const textColor = isDarkTheme ? '#ffffff' : '#1e293b'

          return (
            <>
              <ReactPlayer url={videoUrl} controls width="100%" />

              <VideoTitle color={textColor}>{title}</VideoTitle>

              <VideoViewsAndTimeContainer>
                <VideoViews color={textColor}>{viewCount} views</VideoViews>
                <VideoTime color={textColor}>{publishedAt}</VideoTime>
              </VideoViewsAndTimeContainer>

              <ActionButtonsContainer>
                <button
                  type="button"
                  onClick={this.onClickLike}
                  style={{
                    color: activeButton === 'LIKE' ? '#2563eb' : '#64748b',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Like
                </button>

                <button
                  type="button"
                  onClick={this.onClickDislike}
                  style={{
                    color: activeButton === 'DISLIKE' ? '#2563eb' : '#64748b',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Dislike
                </button>

                <button
                  type="button"
                  onClick={onClickSaveButton}
                  style={{
                    color: isSaveActive ? '#2563eb' : '#64748b',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {isSaveActive ? 'Saved' : 'Save'}
                </button>
              </ActionButtonsContainer>

              <ChannelContainer>
                <ChannelImage src={profileImageUrl} alt="channel logo" />

                <div>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <ChannelSubscribers color={textColor}>
                    {subscriberCount} subscribers
                  </ChannelSubscribers>
                  <VideoDescription color={textColor}>
                    {description}
                  </VideoDescription>
                </div>
              </ChannelContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble to complete your request. Please try again.
      </p>
      <button type="button" onClick={this.getVideoItemDetails}>
        Retry
      </button>
    </div>
  )

  renderVideoItemDetailsView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoItemDetails()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <VideoItemDetailsContainer bgColor={bgColor}>
              <Header />

              <VideoItemDetailsVideoContainer
                bgColor={bgColor}
                data-testid="videoItemDetails"
              >
                {this.renderVideoItemDetailsView()}
              </VideoItemDetailsVideoContainer>
            </VideoItemDetailsContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default VideoItemDetails
