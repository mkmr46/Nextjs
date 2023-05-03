import { useRouter } from 'next/router'
import React from 'react'

export default function index() {
    const {product,review} = useRouter().query
    
  return (
    <div>Review for {product} and which is {review}</div>
  )
}
