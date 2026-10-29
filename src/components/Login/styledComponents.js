import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.dark ? '#181818' : '#f9f9f9')};
  transition: background-color 0.3s ease-in-out;
  padding: 20px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 25px;
  border-radius: 10px;
  background-color: ${props => (props.dark ? '#0f0f0f' : '#ffffff')};
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 340px;
  transition: background-color 0.3s ease-in-out;

  @media screen and (min-width: 768px) {
    max-width: 420px;
    padding: 40px 35px;
  }
`

export const LoginLogoImage = styled.img`
  height: 50px;
  width: 220px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    width: 260px;
  }
`

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`

export const LabelInput = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: ${props => (props.dark ? '#f1f5f9' : '#475569')};
  font-weight: 500;
`

export const UserInput = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  color: ${props => (props.dark ? '#f1f5f9' : '#475569')};
  background-color: ${props => (props.dark ? '#0f0f0f' : '#ffffff')};
  outline: none;
  padding: 10px;
  height: 42px;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.25);
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`

export const CheckboxInput = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  cursor: pointer;
`

export const ShowPasswordLabel = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  color: ${props => (props.dark ? '#f1f5f9' : '#1e293b')};
  cursor: pointer;
`

export const LoginButton = styled.button`
  width: 100%;
  background-color: #4f46e5;
  border: none;
  border-radius: 6px;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  height: 42px;
  color: #ffffff;
  margin-top: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, transform 0.15s ease-in-out;

  &:hover {
    background-color: #4338ca;
  }

  &:active {
    transform: translateY(1px);
  }
`

export const SubmitError = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  color: #ff0b37;
  margin-top: 10px;
`
