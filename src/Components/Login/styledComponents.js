import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #152850;
`
export const LoginContainer = styled.div`
  display: flex;
  width: 50%;
  height: 60%;
`
export const LoginImageContainer = styled.div`
  background-color: #e0eefe;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  width: 55%;
`

export const LoginImage = styled.img`
  height: 80%;
  width: 80%;
`
export const FormContainer = styled.form`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  width: 45%;
`
export const Heading = styled.h1`
  color: #183b56;
  font-family: 'Roboto';
  margin-bottom: 20px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 10px;
`
export const Label = styled.label`
  color: #5a7184;
  font-family: 'Roboto';
  margin-bottom: 5px;
`
export const InputEl = styled.input`
  padding: 10px;

  font-family: 'Roboto';
  border-radius: 10px;
  border: 1px solid #c3cad9;
  width: 90%;
`
export const LoginButton = styled.button`
  width: 90%;
  background-color: #1565d8;
  border: none;
  border-radius: 8px;
  padding: 10px;
  color: #ffffff;
  font-family: 'Roboto';
  margin-top: 20px;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  color: #ff0b37;
  margin: 0px;
  text-align: center;
  font-size: 14px;
`
