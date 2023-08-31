'use client'
import React from 'react'
import {BiSearch} from 'react-icons/bi'

const Search = () => {
  return (
    <div className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
        <div className='flex flex-row items-center justify-between'>
            <div className='text-sm font-semibold pl-6 pr-20'>Search anything...</div>
            <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center text-gray-500'>Add Rooms</div>
            <div className='text-sm pl-6 pr-2 text-gray-500 flex flex-row items-center gap-3'>
                <div className='hidden sm:block '>Add Guests</div>
                <div className='p-2 bg-red-500 rounded-full text-white'>
                    <BiSearch size={20} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search