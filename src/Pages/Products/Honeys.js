import React from 'react'
import imageHeader from '../../assets/slider3-bg.webp'
import HeaderAll from '../../components/HeaderAll'
import ProductItem from '../../components/ProductItem'
import Section from '../../components/Section'
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
