import {CardDemo} from "@/components/ui/CardDemo";
import {cardInfo} from "@/constants";
import {Fragment} from "react";
import Header from "@/components/hero/Header"
import {cookies} from "next/headers";

export default function Home() {
  const cookieStore = cookies()
  const cookie = cookieStore.get('currentUser')
  const user = cookie ? JSON.parse(cookie.value) : null
  return (
    <main className="max-w-7xl mx-auto">
      <Header user={user}/>
      <div className={'pt-16'}>
        <div className={'relative mx-auto flex max-w-2xl flex-col items-center'}>
          <h1 className={'text-center text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-6xl'}>Welcome to
            multi-account</h1>
          <p className={'mt-6 text-center text-lg leading-6 text-gray-600 dark:text-gray-200'}>
            Select the service you want to go to
          </p>
        </div>
      </div>
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
    </main>
  )
}
