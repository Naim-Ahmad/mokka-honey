import React from "react";
import Address from "../Address";
import ContactForm from "../ContactForm";
import Section from "./Section";

export default function ContactSection(){
    return(
        <Section classSec="sec-p" container='container'>
      
         <h1 className="text-center mb-4 common-color">আমাদের সাথে যোগাযোগ করুন</h1>

          <div className="row">
            <Address />
            <div className="col-md-6">
              <ContactForm />
            </div>
          </div>
     
    </Section>
    )
}