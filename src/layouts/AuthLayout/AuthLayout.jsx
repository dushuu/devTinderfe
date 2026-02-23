import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  useEffect( () => {
    // if someone directly goes to /login don't allow to be on a sub-domain
    // const baseURL = new URL( import.meta.env.VITE_REDIRECT_BASE_URL )

    // if ( window.location.hostname !== baseURL.hostname ) {
    //   window.location.href = baseURL.origin + window.location.pathname
    // }
  }, [] )

  return (
    <div className='auth-layout min-h-screen bg-gradient-to-br from-red-500 via-pink-500 to-rose-500'>
      <div className='auth-content'>
        <div className='flex min-h-screen items-center justify-center p-4'>
          <div className='w-full max-w-md'>
            <div className='mb-8 text-center'>
              <h1 className='mb-2 text-5xl font-bold text-white'>tinder</h1>
              <p className='text-lg text-white'>Start something epic</p>
            </div>

            <div className='auth-card'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
