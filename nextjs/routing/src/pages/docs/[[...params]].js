import { useRouter } from 'next/router'
import React from 'react'

export default function Index() {
    const q = useRouter().query
    console.log(q)
  return (
    <div>Index</div>
  )
}
