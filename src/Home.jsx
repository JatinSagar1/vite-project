import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = ({data}) => {
  return (
    <>
    <div className='container' >
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
        <h2>User Profiles</h2>
    </div>

    <div className='user-list' >
        {data.map((ele)=>{
            return (
                <span key={ele.id} >
                <Link to={`/user/profile/${ele.id}`} >
                  {ele.name} &nbsp;
                  </Link>
            </span>
        )
    })}
    </div>
        <Outlet />
    </>
  )
}

export default Home