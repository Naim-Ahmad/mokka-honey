import React from 'react'
import imageHeader from '../../../assets/images/slider3-bg.webp'
import HeaderAll from '../../HeaderAll'
import ProductItem from '../../ProductItem'
import NavBar from '../../sections/NavBar'
import Section from '../../sections/Section'

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
