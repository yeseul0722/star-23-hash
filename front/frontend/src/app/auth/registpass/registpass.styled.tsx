import styled from 'styled-components'

interface InputProps {
  isValid?: boolean
  isMatch?: boolean
}
export const InputStyle = styled.input<InputProps>`
  width: 240px;
  height: 45px;
  margin-bottom: 15px;
  border-radius: 10px;
  opacity: 0.7;
  text-align: center;
  background-color: rgb(203 213 225);
  font-size: 15pt;
`

export const Button = styled.div`
  background-color: #ffe189;
  border-radius: 10px;
  color: black;
  width: 120px;
  height: 45px;
  text-align: center;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17pt;
`

export const ContentBox = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 20;
`

export const AstronauntDiv = styled.div`
  width: 300px;
  height: 300px;
`
