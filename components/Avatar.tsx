'use client'
import React from 'react'
import Image from 'next/image'

interface AvatarProps{
  src?: string | null | undefined
}
const Avatar: React.FC<AvatarProps> = ({src}) => {
  return (
    <Image
    className='rounded-full'
    src={ src || "/images/icons/placeholder.png"}
    width="38"
    height="38"
    alt="placeholder"
     />
  )
}

export default Avatar