import { AxiosResponse } from 'axios'
import AuthAxios from '../storage/AuthAxios'

const DOMAIN = process.env.NEXT_PUBLIC_API_URL
type Contact = {
  name: string
  phone: string
}
export const pullContacts = async (
  contacts: Contact[],
): Promise<AxiosResponse> => {
  try {
    const res: AxiosResponse = await AuthAxios({
      method: 'post',
      url: `${DOMAIN}/api/letters/contact`,
      data: { contacts: contacts },
    })

    return res.data
  } catch (error) {
    throw new Error('네트워크 오류')
  }
}
