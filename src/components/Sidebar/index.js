import {Link} from 'react-router-dom'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  SidebarContainer,
  ContactUsContainer,
  ContactUsHeading,
  SocialMediaContainer,
  SocialMediaImage,
  ContactUsDescription,
} from './styledComponents'

const navItemsList = [
  {
    id: 0,
    displayText: 'Home',
    path: '/',
  },
  {
    id: 1,
    displayText: 'Trending',
    path: '/trending',
  },
  {
    id: 2,
    displayText: 'Gaming',
    path: '/gaming',
  },
  {
    id: 3,
    displayText: 'Saved videos',
    path: '/saved-videos',
  },
]

const socialMediaList = [
  {
    id: 0,
    alt: 'facebook logo',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png',
  },
  {
    id: 1,
    alt: 'twitter logo',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png',
  },
  {
    id: 2,
    alt: 'linked in logo',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png',
  },
]

const Sidebar = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#181818' : '#ffffff'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

      return (
        <SidebarContainer bgColor={bgColor}>
          <ul className="nav-items-list">
            {navItemsList.map(eachNavItem => (
              <li key={eachNavItem.id} className="nav-item">
                <Link to={eachNavItem.path} className="nav-link">
                  {eachNavItem.displayText}
                </Link>
              </li>
            ))}
          </ul>

          <ContactUsContainer>
            <ContactUsHeading textColor={textColor}>
              CONTACT US
            </ContactUsHeading>

            <SocialMediaContainer>
              {socialMediaList.map(eachSocialMedia => (
                <SocialMediaImage
                  key={eachSocialMedia.id}
                  src={eachSocialMedia.imageUrl}
                  alt={eachSocialMedia.alt}
                />
              ))}
            </SocialMediaContainer>

            <ContactUsDescription textColor={textColor}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsDescription>
          </ContactUsContainer>
        </SidebarContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default Sidebar