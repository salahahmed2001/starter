import React from 'react'

const Blog = ({params}:{params:{slug:string[];}}) => {
    if(params.slug?.length === 2){
        return <h1> Blog for category {params.slug[0]} for title{params.slug[1]}</h1>
    }else if(params.slug?.length === 1){
        return <h1>Blog for category {params.slug[0]} </h1>
    }
  return (
    <div>
      Blog Home Page 
    </div>
  )
}

export default Blog

