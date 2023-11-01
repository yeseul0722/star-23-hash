import * as st from './storage.styled'

import { getDataTest } from '@/app/utils/getDataTest'

export default async function Test() {
  const test = await getDataTest()

  return (
    <>
      <div className="absolute z-10 grid h-screen w-screen items-center justify-center">
        <st.TestBoard className=" h-96  w-fit items-center justify-center overflow-y-scroll">
          <span>Axios Test</span>
          <hr />
          {test.map((it) => (
            <>
              <span key={it.id}>
                {it.id}. {it.title}
              </span>
              <hr />
            </>
          ))}
        </st.TestBoard>
      </div>
    </>
  )
}