import { useContext, useEffect } from 'react'
import { isEmpty } from 'lodash'
import { Outlet } from 'react-router-dom'



import Header from './Header'
import SideBar from './SideBar/SideBar'

const AppLayout = () => {


 

  return (
    <div className='app-layout'>
      <SideBar />

      <main>
        <Header />

        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout