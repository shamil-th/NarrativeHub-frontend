import React from 'react'
import PrimarySearchAppBar from '../common/NavbarUser'
import { Container } from '@mui/material'
import SubHeader from './SubHeader'

const Profile = () => {
  return (
    <>
    <PrimarySearchAppBar/>
    <Container>
        <SubHeader/>
    </Container>
    </>
  )
}

export default Profile