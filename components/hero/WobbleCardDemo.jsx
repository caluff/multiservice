"use client";
import Image from "next/image";
import React from "react";
import {WobbleCard} from "../ui/wobble-card";
import {services} from "@/constants"

const styleColumn = [
  'col-span-1 min-h-[300px]',
  'bg-pink-800 col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px]',
  'bg-blue-900 col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]'
]

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
      {services.map((s, index) =>
        <WobbleCard containerClassName={styleColumn[s.column - 1]} key={index}>
          <div className="max-w-xs">
            <h2
              className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              {s.title}
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">{s.description}</p>
          </div>
          {s.img &&
            <Image
              src={s.img}
              width={500}
              height={500}
              alt="linear demo image"
              className={`${s.column - 1 === 2
                ? 'absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl'
                : 'absolute -right-4 lg:-right-[40%] filter -bottom-10 object-contain rounded-2xl'}`}
            />
          }
        </WobbleCard>
      )}
    </div>
  );
}
