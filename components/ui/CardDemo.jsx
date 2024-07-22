"use client";
import Image from "next/image";
import Link from "next/link";
import {IconPencil, IconTrash} from '@tabler/icons-react';

export function CardDemo({cardInfo, user}) {
  return (
    <div className="w-full group/card relative hover:group">
      {user &&
        <div
          className={'absolute z-10 right-[-10px] top-[-10px] flex space-x-2 opacity-0 group-hover/card:opacity-100 pointer-events-none group-hover/card:pointer-events-auto'}>
          <button className={'text-white  rounded-full bg-red-900  w-10 h-10 flex items-center justify-center'}>
            <IconTrash/>
          </button>
          <button className={'text-white  rounded-full bg-blue-900  w-10 h-10 flex items-center justify-center'}>
            <IconPencil/>
          </button>
        </div>
      }
      <div
        className={"overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4"}
      >
        <div className="absolute inset-0 bg-black opacity-50">
          <Image
            alt="image"
            className={"h-full w-full object-cover scale-[1.15] absolute"}
            width="500"
            height="500"
            src={cardInfo.img}
          />
        </div>
        <div
          className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src={cardInfo.logo}
            className="h-10 w-10 rounded-full object-cover bg-white"
          />
          <div className="flex flex-col">
            <h2 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
              {cardInfo.name}
            </h2>
            {/*<p className="text-sm text-gray-400">2 min read</p>*/}
          </div>
        </div>
        <div className="text content z-20">
          {/*<h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">*/}
          {/*  Author Card*/}
          {/*</h1>*/}
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {cardInfo.description}
          </p>
          <div className={'flex justify-end'}>
            <Link
              href={''}
              target="_blank"
              className="px-4 py-3 text-sm rounded-full font-bold bg-blue-500 text-white"
            >
              Visit
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
