import React from "react";

export default function ContactForm(){
    return (
        <div className="col-md-6">
              <form action="index.php" method="post" className="form">
                <div className="mb-3">
                <input type="text" name="name" className="form-control" placeholder="আপনার নাম?" required />
                </div>
                <div className="mb-3">
                  <input
                  type="email"
                  name="email"
                  placeholder="আপনার ইমেইল এড্রেস?"
                  required
                  className="form-control"
                />
                </div>
               
                <div className="mb3">
                  <textarea
                  rows="5"
                  name="message"
                  placeholder="আপনার মেসেজ লিখুন..."
                  required
                  className="form-control"
                ></textarea>
                </div>
                <a href="" className="my-btn">মেসেজ প্রেরণ করুন</a>
              </form>
            </div>
    )
}