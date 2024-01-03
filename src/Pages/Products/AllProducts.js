import React from 'react'
import imageHeader from '../../Assets/slider3-bg.webp'
import HeaderAll from '../../Components/HeaderAll'
import ProductItem from '../../Components/ProductItem'
import Section from '../../Components/Section'
import productList from '../../Data/productList'
  
export default function AllProducts() {
  return (
    <>
    <HeaderAll imageUrl={imageHeader}>
        সমস্ত পণ্য 
    </HeaderAll>

    <Section classSec={'sec-p'} container="container">
      <div className='d-flex flex-wrap gap-3 justify-content-between'>
        {productList.map(product=>{
          return <ProductItem key={product.id} {...product}/>
        })}
      </div>
    </Section>

  </>
  )

}
