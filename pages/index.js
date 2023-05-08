import { Inter } from 'next/font/google'
import Button from './components/Button'
import Header from './components/Header'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

function get(){
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() =>{
    setLoading(true)
    fetch('http://127.0.0.1:5137/prisma/sheetz')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setData(data)
      setLoading(false)
    })
  }, [])

  if(isLoading) return <p>Loading...</p>
  if(!data) return <p>No profile data</p>

  return buttonGen(data);
}

function buttonGen(oData){
  for(let i = 0; i < oData.data.length; i++){
    console.log('button')
  }
}

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col ${inter.className}`}
    >
      <Header/>
      <Link href="/customer/3">Dynamic</Link>
    {get()}
    </main>

  )
}
