import styled from 'styled-components'

export const SavedContainer = styled.div`
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

/* Header section above video list */
export const SavedVideoTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 15px;

  @media screen and (min-width: 768px) {
    padding: 30px 40px;
  }
`

export const SavedTitleIconContainer = styled.div`
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

export const SavedText = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.color};
  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

/* List of saved videos */
export const SavedVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0 15px 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px 40px;
  }
`

/* Empty State View */
export const NoSavedVideosView = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  text-align: center;
  padding: 20px;
`

export const NoSavedVideosImage = styled.img`
  width: 200px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 450px;
    margin-bottom: 25px;
  }
`

export const NoSavedVideosHeading = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.headingColor};
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const NoSavedVideosNote = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: ${props => props.noteColor};
  max-width: 420px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
