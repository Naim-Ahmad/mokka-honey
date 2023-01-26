import React from 'react'
import imageHeader from '../../Assets/slider3-bg.webp'
import HeaderAll from '../../Components/HeaderAll'
import ProductItem from '../../Components/ProductItem'
import Section from '../../Components/Section'
import productList from '../../Data/productList'

export default function Honeys() {
  return (
    <>
        <HeaderAll imageUrl={imageHeader}>
            মধু সমূহ
        </HeaderAll>
        <Section classSec={'sec-p'} container="container">
            <div className="d-flex gap-3 justify-content-center">
            {productList.map(product=>{
              if(product.type == 'Honey'){
                return <ProductItem key={product.id} {...product}/>
              }
            })}
            </div>
        </Section>
    </>
  )
}
