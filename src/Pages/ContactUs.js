import React from 'react'
import headerImage from '../Assets/bannar-min.jpg'
import Card from '../Components/Card'
import ContactForm from '../Components/ContactForm'
import HeaderAll from '../Components/HeaderAll'
import Section from '../Components/Section'
import Footer from '../Layouts/Footer'
import Nav from '../Layouts/NavBar'

export default function ContactUs() {
  return (
    <>
    <Nav/>
    <HeaderAll imageUrl={headerImage}>
        যোগাযোগ করুন
    </HeaderAll>
    <Section>
        <div className='d-flex gap-3 flex-wrap justify-content-center'>
                
            <Card>
                <div className={`text-center`}>
                    <i className="fa-solid fa-handshake mb-3 text-warning fa-3x"></i>
                    <h2 className='mb-3 fw-bolder'>সাক্ষাত করুন</h2>
                    <p>সাতপুর, কালীগঞ্জ, সাতক্ষিরা, ঢাকা - বাংলাদেশ।</p>
                </div>
            </Card>
            <Card>
                <div className={`text-center`}>
                    <i className="fa-solid fa-phone-volume mb-3 text-warning fa-3x"></i>
                    <h2 className='mb-3 fw-bolder'>ফোন করুন</h2>
                    <p>০১৯৭৫-১৫৫০৯৯</p>
                </div>
            </Card>
            <Card>
                <div className={`text-center`}>
                    <i className="fa-brands fa-facebook-messenger mb-3 text-warning fa-3x"></i>
                    <h2 className='mb-3 fw-bolder'>ইনবক্সে নক করুন</h2>
                    <p>সাদপুর, কালীগঞ্জ, সাতক্ষিরা, ঢাকা - বাংলাদেশ।</p>
                </div>
            </Card>
            <Card>
                <div className={`text-center`}>
                    <i className="fa-brands fa-whatsapp mb-3 text-warning fa-3x"></i>
                    <h2 className='mb-3 fw-bolder'>ভিডিও কল করুন</h2>
                    <p>০১৯৭৫-১৫৫০৯৯</p>
                </div>
            </Card>
        </div>
    </Section>
    <Section container={'container'}>
        <div className='d-sm-flex gap-3'>
            <div className='flex-fill'>
            <iframe  title='hi' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7266.007226882312!2d89.02972162185664!3d22.472220960186537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a01e7e3e2057811%3A0x294c9b67287544b2!2z4Ka44Ka-4Kam4Kaq4KeB4KawIOCmpuCmvuCmluCmv-CmsiDgpq7gpr7gpqbgp43gprDgpr7gprjgpr4!5e0!3m2!1sbn!2sbd!4v1673678505666!5m2!1sbn!2sbd" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='flex-fill'>
                <ContactForm/>
            </div>
        </div>
    </Section>
    <Footer />
    </>
  )
}
