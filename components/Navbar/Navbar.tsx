'use client'
import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'
import { User } from '@prisma/client'


interface NavbarProps{
  currentUser?: User | null
}

const Navbar: React.FC<NavbarProps> = ({currentUser}) => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
        <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row items-center justify-between'>
            <Logo />
            <div className='flex items-center gap-3 md:gap-0 md:space-x-14'>
            <Search />
            <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
        </div>
    </div>
  )
}

export default Navbar