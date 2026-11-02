import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaSearch} from 'react-icons/fa'
import {IoClose} from 'react-icons/io5'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  HomeContainer,
  MainContainer,
  Banner,
  BannerContent,
  BannerLogo,
  BannerText,
  GetItButton,
  BannerCloseButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideosList,
  VideoLink,
  VideoCard,
  ThumbnailImage,
  VideoDetails,
  ChannelLogo,
  VideoTitle,
  VideoViewsAndDate,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    searchInput: '',
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    showBanner: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    try {
      const response = await fetch(url, options)

      if (response.ok) {
        const data = await response.json()

        const updatedVideos = data.videos.map(eachVideo => ({
          id: eachVideo.id,
          title: eachVideo.title,
          thumbnailUrl: eachVideo.thumbnail_url,
          channel: {
            name: eachVideo.channel.name,
            profileImageUrl: eachVideo.channel.profile_image_url,
          },
          viewCount: eachVideo.view_count,
          publishedAt: eachVideo.published_at,
        }))

        this.setState({
          videosList: updatedVideos,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch (error) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearch = () => {
    this.getVideos()
  }

  onCloseBanner = () => {
    this.setState({showBanner: false})
  }

  formatDate = dateString => {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ]
    const date = new Date(dateString)
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }

  renderBanner = () => {
    const {showBanner} = this.state
    if (!showBanner) return null

    return (
      <Banner data-testid="banner">
        <BannerContent>
          <BannerLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerText>Buy Nxt Watch Premium prepaid plans</BannerText>
          <GetItButton type="button">GET IT NOW</GetItButton>
        </BannerContent>
        <BannerCloseButton
          type="button"
          data-testid="close"
          onClick={this.onCloseBanner}
          aria-label="close"
        >
          <IoClose />
        </BannerCloseButton>
      </Banner>
    )
  }

  renderFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We are having some trouble to complete your request. Please try again.
      </FailureDescription>
      <RetryButton type="button" onClick={this.getVideos}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  renderLoadingView = () => (
    <FailureContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height={50} width={50} />
    </FailureContainer>
  )

  renderNoVideosView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <FailureHeading>No Search results found</FailureHeading>
      <FailureDescription>
        Try different key words or remove search filter
      </FailureDescription>
      <RetryButton type="button" onClick={this.getVideos}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  renderVideos = () => {
    const {videosList} = this.state
    if (videosList.length === 0) return this.renderNoVideosView()

    return (
      <VideosList>
        {videosList.map(video => (
          <VideoCard key={video.id}>
            <VideoLink to={`/videos/${video.id}`}>
              <ThumbnailImage src={video.thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ChannelLogo
                  src={video.channel.profileImageUrl}
                  alt="channel logo"
                />
                <div>
                  <VideoTitle>{video.title}</VideoTitle>
                  <VideoViewsAndDate>
                    {video.viewCount} views . {this.formatDate(video.publishedAt)}
                  </VideoViewsAndDate>
                </div>
              </VideoDetails>
            </VideoLink>
          </VideoCard>
        ))}
      </VideosList>
    )
  }

  renderContent = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {searchInput} = this.state

    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          return (
            <HomeContainer data-testid="home" bgColor={bgColor}>
              <Header />
              <MainContainer>
                <NavigationBar />
                <div>
                  {this.renderBanner()}
                  <SearchContainer>
                    <SearchInput
                      type="search"
                      value={searchInput}
                      onChange={this.onChangeSearchInput}
                      placeholder="Search"
                    />
                    <SearchButton
                      type="button"
                      data-testid="searchButton"
                      onClick={this.onSearch}
                      aria-label="search"
                    >
                      <FaSearch />
                    </SearchButton>
                  </SearchContainer>
                  {this.renderContent()}
                </div>
              </MainContainer>
            </HomeContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Home
