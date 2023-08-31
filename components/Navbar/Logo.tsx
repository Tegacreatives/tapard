'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const Logo = () => {
    const router = useRouter()
  return (
    <div className='hidden md:block cursor-pointer' onClick={() => router.push('/')}>Logo</div>
  )
}

export default Logo