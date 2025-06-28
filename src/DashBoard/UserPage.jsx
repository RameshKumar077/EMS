import React from 'react'
import { useNavigate } from 'react-router-dom'
const UserPage = ({user}) => {
    const navigate=usenavigate();
  return <>
    {user=='admin'&&navigate('./admin')}
    {uer=='employee'&&Navigate('./employee')}
  </>
}

export default UserPage