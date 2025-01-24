

import React from 'react'
import { notFound } from 'next/navigation'



export const simulateApiCall=()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const status = Math.random() < 0.5 ? 200 : 400 ;
      if(status===200){
        resolve(status)
      }else{
        reject(status)
      }

    },1000)
  })
}


const ReviewDetails = async ({
  params,
}:{
  params:{
        productId:string
        reviewsId:string
      }
}) => {
  const status = await simulateApiCall();
  if(status!==200){
    throw new Error("something want wrong from inside review")
  }

  if(parseInt(params.reviewsId)>500){
    notFound()
  }
  return (
    <div>
      Review {params.reviewsId} for product{params.productId}
    </div>
  )
}

export default ReviewDetails
