import React from 'react'
import imageHeader from '../../Assets/slider3-bg.webp'
import HeaderAll from '../../Components/HeaderAll'
import ProductItem from '../../Components/ProductItem'
import Section from '../../Components/Section'
import NavBar from '../../Layouts/NavBar'

export default function Honeys() {
  return (
    <>
        <NavBar />
        <HeaderAll imageUrl={imageHeader}>
            মধু সমূহ
        </HeaderAll>
        <Section>
            <ProductItem/>
        </Section>
    </>
  )
}
