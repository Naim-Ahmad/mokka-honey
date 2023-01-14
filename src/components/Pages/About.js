import React from 'react'
import headerImage from '../../assets/images/bannar-min.jpg'
import HeaderAll from '../HeaderAll'
import Footer from '../sections/Footer'
import Nav from '../sections/NavBar'
import Section from '../sections/Section'
// import Contact from '../ContactForm'
import AboutBody from '../AboutBody'
// import imageUrl from '../../assets/images/bennar'
export default function About() {
  return (
    <>
        <Nav/>
       <HeaderAll imageUrl={headerImage}>
          আমাদের পরিচয়
        </HeaderAll>

       <Section classSec={'aboutAll'} container={'container'}>
        <AboutBody image={headerImage}>
          <p>আমাদের কাছে সুন্দরবনের  প্রাকৃতিক চাকের খাঁটি মধু, গ্ৰামের প্রাকৃতিক চাকের মধু এবং খামারের মধু,একচ খলিশা ও গরাণ ফুলের মধু ,এ ছাড়াও কালোজিরা, লিচু,বর‌ই,
সরিষা,পাহাড়ী সহ বিভিন্ন ধরনের মধু নিজস্ব খামারী দ্বারা সংগ্ৰহ করা হয়</p>
        </AboutBody>

        <AboutBody image={headerImage}>
          <p>আমাদের কাছে সুন্দরবনের  প্রাকৃতিক চাকের খাঁটি মধু, গ্ৰামের প্রাকৃতিক চাকের মধু এবং খামারের মধু,একচ খলিশা ও গরাণ ফুলের মধু ,এ ছাড়াও কালোজিরা, লিচু,বর‌ই,
সরিষা,পাহাড়ী সহ বিভিন্ন ধরনের মধু নিজস্ব খামারী দ্বারা সংগ্ৰহ করা হয়</p>
        </AboutBody>

        <AboutBody image={headerImage}>
          <p>আমাদের কাছে সুন্দরবনের  প্রাকৃতিক চাকের খাঁটি মধু, গ্ৰামের প্রাকৃতিক চাকের মধু এবং খামারের মধু,একচ খলিশা ও গরাণ ফুলের মধু ,এ ছাড়াও কালোজিরা, লিচু,বর‌ই,
সরিষা,পাহাড়ী সহ বিভিন্ন ধরনের মধু নিজস্ব খামারী দ্বারা সংগ্ৰহ করা হয়</p>
        </AboutBody>

        <AboutBody image={headerImage}>
          <p>আমাদের কাছে সুন্দরবনের  প্রাকৃতিক চাকের খাঁটি মধু, গ্ৰামের প্রাকৃতিক চাকের মধু এবং খামারের মধু,একচ খলিশা ও গরাণ ফুলের মধু ,এ ছাড়াও কালোজিরা, লিচু,বর‌ই,
সরিষা,পাহাড়ী সহ বিভিন্ন ধরনের মধু নিজস্ব খামারী দ্বারা সংগ্ৰহ করা হয়</p>
        </AboutBody>
       </Section>
        <Footer/>
    </>
  )
}
