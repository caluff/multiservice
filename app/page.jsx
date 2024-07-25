import Header from "@/components/hero/Header/Header"
import Cards from "@/components/hero/Cards";

export default function Home() {

  return (
    <main className="max-w-7xl mx-auto">
      <Header/>
      <div className={'pt-16'}>
        <div className={'relative mx-auto flex max-w-2xl flex-col items-center'}>
          <h1 className={'text-center text-3xl font-medium text-gray-900 dark:text-gray-50 sm:text-6xl'}>Welcome to
            multi-account</h1>
          <p className={'mt-6 text-center text-lg leading-6 text-gray-600 dark:text-gray-200'}>
            Select the service you want to go to
          </p>
        </div>
      </div>
      <Cards/>
    </main>
  )
}
