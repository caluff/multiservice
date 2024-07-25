'use client'
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {getCookie} from "cookies-next";

const ButtonAuth = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    setUser(getCookie('currentUser'))
  }, [])
  return (
    <div className={'flex space-x-6'}>
      {user
        ? <Link href={'/auth/logout'} className={'link-button'}>Sign out</Link>
        : <Link href={'/auth/login'} className={'link-button'}>Login</Link>
      }
    </div>
  )
}

export default ButtonAuth;
