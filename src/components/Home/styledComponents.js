import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
`

export const MainContainer = styled.div`
  display: flex;
`

export const Banner = styled.div`
  position: relative;
  min-height: 250px;
  padding: 30px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const BannerLogo = styled.img`
  width: 150px;
  margin-bottom: 20px;
`

export const BannerText = styled.p`
  font-size: 20px;
  color: #212121;
`

export const GetItButton = styled.button`
  background-color: transparent;
  border: 1px solid #212121;
  padding: 10px 20px;
  cursor: pointer;
`

export const BannerCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
`

export const SearchContainer = styled.div`
  width: 90%;
  max-width: 600px;
  height: 40px;
  display: flex;
  margin: 25px;
`

export const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #94a3b8;
  outline: none;
`

export const SearchButton = styled.button`
  width: 50px;
  border: 1px solid #94a3b8;
  background-color: #f1f5f9;
  cursor: pointer;
`

export const VideosList = styled.ul`
  list-style-type: none;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  img {
    width: 100%;
  }
`

export const FailureContainer = styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const FailureImage = styled.img`
  width: 300px;
`

export const FailureHeading = styled.h1`
  font-size: 24px;
`

export const FailureDescription = styled.p`
  color: #64748b;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`
