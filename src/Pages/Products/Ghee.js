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
            ঘি 
        </HeaderAll>
        <Section classSec={'sec-p'} container="container">
            <div className='mb-5'>
              <h1 className='fw-bold text-center text-warning mb-3'>ঘি এর উপকারিতা </h1>
              <p className='fs-4 text-center'>একটি অত্যন্ত পুষ্টিকর খাবার ঘি। এতে রয়েছে বিভিন্ন ভিটামিন ও নান পুষ্টি উপাদান। ওজন বাড়াতে সাহায্য করে। ক্ষতিকর কোলেস্টেরল কমায়। এছাড়া আরো উপকারিতা আছে ঘি এর মধ্যে। </p>
            </div>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              {productList.map(product=>{
                if(product.type == 'Ghee'){
                  return <ProductItem key={product.id} {...product}/>
                }
              })}
            </div>
        </Section>
    </>
  )
}
