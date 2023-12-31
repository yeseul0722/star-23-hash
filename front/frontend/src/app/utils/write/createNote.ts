import { AxiosResponse } from 'axios'
import AuthAxios from '../storage/AuthAxios'

const DOMAIN = process.env.NEXT_PUBLIC_API_URL

export const createNote = async (content: string): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse = await AuthAxios({
      method: 'post',
      url: `${DOMAIN}/api/notes`,
      data: { content: content },
    })

    return res.data
  } catch (error) {
    throw new Error('네트워크 오류')
  }
}

export const createNotereset = async (): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse = await AuthAxios({
      method: 'get',
      url: `${DOMAIN}/api/members/reset`,
    })

    return res.data
  } catch (error) {
    throw new Error('네트워크 오류')
  }
}
