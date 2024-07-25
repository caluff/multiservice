'use client'
import React, {Fragment, useEffect, useState} from 'react';
import {cardInfo} from "@/constants";
import {CardDemo} from "@/components/ui/CardDemo";
import {getCookie} from "cookies-next";

const Cards = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    setUser(getCookie('currentUser'))
  }, [])
  return (
    <div className={'overflow-hidden px-4 pb-20 pt-44 md:px-10'}>
      <div className={'relative grid sm:grid-cols-[repeat(auto-fill,minmax(240px,1fr))] grid-cols-1 gap-8'}>
        {cardInfo.map((c, index) =>
          <Fragment key={index}>
            <CardDemo cardInfo={c} user={user}/>
            <CardDemo cardInfo={c} user={user}/>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Cards;
