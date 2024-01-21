"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdAttachMoney, MdDashboard, MdShoppingBag, MdSupervisedUserCircle } from 'react-icons/md'

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard/>
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle/>
            },
            {
                title: "Events",
                path: "/dashboard/events",
                icon: <MdShoppingBag/>
            },
            {
                title: "Transactions",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney/>
            },
        ]
    }
]

const CardSidebar = () => {
  return (
    // style container
    <div className='sticky min-h-[100vh]'>
        <div className='flex items-center gap-5 mb-[20px]'>
            <Image className='rounded-full object-cover' src={"/noAvatar.png"} alt='' width="50" height="50"/>
            <div className='flex flex-col'>
                <span className='font-[500]'>John Joe</span>
                <span className='text-[12px] text-[#b7bac1]'>Administrator</span>
            </div>
        </div>
        <ul className='list-none'>
            {menuItems.map((category) => (
                <li key={category.title}>
                    {/* style cat */}
                    <span className='text-[#b7bac1] font-bold text-[13px] my-[10px] mx-0'>{category.title}</span>
                    {category.list.map(item => (
                        // style container
                        <Link href={item.path} key={item.title} className={`p-[20px] flex items-center gap-[10px] hover:bg-[#2e374a] my-[5px] mx-0`}>
                            {item.icon}
                            {item.title}
                        </Link>
                    ))}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default CardSidebar