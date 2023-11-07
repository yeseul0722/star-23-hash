'use client'
import Logincomponent from '../../../component/Three/login'
import LoginAstronaut from '../../../component/Three/loginAstronaut'
import { useState } from 'react'
import PhoneStore from '@/store/phone'
import { useRouter } from 'next/navigation'
import { passwordAxios } from '@/app/utils/passwordAxios'
import * as p from './loginpassword.styled'

export default function LoginPassword() {
  const router = useRouter()
  const { phone } = PhoneStore()
  const [inputValue, setInputValue] = useState('')

  // 암호확인 로직
  async function passwordClick() {
    if (inputValue === '') {
      alert('비밀번호를 입력해주세요')
    } else {
      console.log('번호 :' + phone + '비번 : ' + inputValue)
      const a = await passwordAxios(phone, inputValue)
      console.log(a.data.message)
      if (a.data.message == '로그인 성공') {
        router.push('/main')
      } else {
        alert('비밀번호가 틀렸습니다.')
      }
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center">
        <p.ContentBox>
          <div className="flex flex-col items-center justify-center">
            <div className="pb-5 text-4xl text-white">별이삼샵</div>
            <p.AstronauntDiv>
              <LoginAstronaut style={{ width: '100%', height: '100%' }} />
            </p.AstronauntDiv>
            <div className=" text-white">전화번호</div>
            <div className="text-4xl text-white">{phone}</div>
            <p.inputStyle
              placeholder="비밀번호를 입력해주세요"
              name="phone"
              type="password"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            ></p.inputStyle>
            <p.Button onClick={passwordClick}>확인</p.Button>
          </div>
        </p.ContentBox>
      </div>
      <Logincomponent
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
    </div>
  )
}