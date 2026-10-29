import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
  height: 100%;
`

export const NavigationLgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 240px;
  height: calc(100vh - 60px);
  position: fixed;
  top: 60px;
  left: 0;
  background-color: ${props => props.bgColor};
  border-right: 1px solid ${props => (props.dark ? '#2e2e2e' : '#e5e7eb')};
  box-shadow: ${props => (props.dark ? 'none' : '2px 0 8px rgba(0,0,0,0.06)')};
  transition: background-color 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`

export const NavLinkContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 8px;
  margin: 4px 10px;
  background-color: ${props => props.bgColor};
  transition: all 0.25s ease;

  &:hover {
    background-color: ${props => (props.dark ? '#2c2c2c' : '#f3f4f6')};
    transform: translateX(4px);
  }

  &.active {
    background-color: ${props => (props.dark ? '#383838' : '#dbeafe')};
    font-weight: bold;
  }
`

export const NavText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  margin: 0;
  color: ${props => props.color};
  font-weight: 500;
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const ContactHeading = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: ${props => props.color};
  margin-bottom: 12px;
  text-transform: uppercase;
`

export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 12px;
`

export const ContactImage = styled.img`
  height: 28px;
  width: 28px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.25s ease;

  &:hover {
    transform: scale(1.12);
  }
`

export const ContactNote = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  line-height: 1.4;
  color: ${props => props.color};
  max-width: 200px;
`

export const NavigationSmallContainer = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.bgColor};
  border-top: 1px solid ${props => (props.dark ? '#2e2e2e' : '#e5e7eb')};
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  box-shadow: ${props => (props.dark ? 'none' : '0 -2px 6px rgba(0,0,0,0.06)')};
  transition: background-color 0.3s ease-in-out;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
