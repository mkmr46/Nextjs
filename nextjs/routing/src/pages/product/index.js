import Link from 'next/link'
import React from 'react'

export default function index({productId = 100}) {
  return (
    <>
    <Link href={'/'}><h1>HOME</h1></Link>
    <div>product's</div><br></br>
    <Link href={'/product/1'}><h5> Product 1</h5></Link><br></br>
    <Link href={'/product/2'}><h5> Product 2</h5></Link><br></br>
    <Link href={'/product/3'} replace><h5> Product 3</h5></Link><br></br>
    <Link href={`/product/${productId}`}><h5> Product {productId}</h5></Link><br></br>
    </>
  )
}
