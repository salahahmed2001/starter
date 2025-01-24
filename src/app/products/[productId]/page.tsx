import React from 'react'
import { Metadata } from 'next';
type Props ={params:{productId:string}}
export const generateMetadata = async ({params}:Props) : Promise<Metadata>=>{
  const productName = await new Promise(resolve=>{
    setTimeout(()=>{
      resolve(`iphone${params.productId}`)
    },1000)
  })
  return{
    title:`product ${productName}`
  }
}

const ProductDetails = ({params}:Props) => {
  return (
    <div>
      Product Details {params.productId}
    </div>
  )
}

export default ProductDetails
