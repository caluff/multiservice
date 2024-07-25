'use client'
import React from 'react';
import {deleteCookie} from "cookies-next";
import {useRouter} from "next/navigation";

const Logout = () => {

  const router = useRouter()

  const handleLogout = async () => {
    deleteCookie('currentUser')
    await router.push('/')
  }

  return (
    <div className="pt-[18vh]">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 bg-transparent space-y-4">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
          Are you sure you want to sign out?
        </h2>
        <button
          className="button-effect"
          type="button"
          onClick={handleLogout}
        >
          Sign out
        </button>
        <div
          className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full"/>
      </div>
    </div>
  );
};

export default Logout;
