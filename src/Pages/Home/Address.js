import React from "react";

export default function Address(){
    return (
        <div className="col-md-6 d-flex flex-column gap-3 mb-5">
              <div className="d-flex">
                <i className="fa fa-home common-color fa-2x me-3 mt-2"></i>
                <span>
                  <h3>হেড অফিসঃ</h3>
                  <p>সাদপুর, কালীগঞ্জ, সাতক্ষিরা।</p>
                </span>
              </div>
              <div className="d-flex">
                <i className="fa fa-phone common-color fa-2x me-3 mt-2"></i>
                <span>
                  <h3>মোবাইল নাম্বারঃ</h3>
                  <p>০১৯৭৫-১৫৫০৯৯</p>
                </span>
              </div>
              <div className="d-flex">
                <i className="fa fa-envelope-open-text common-color fa-2x me-3 mt-2"></i>
                <span>
                  <h3>জিমেইলঃ</h3>
                  <p>alamin@gmail.com</p>
                </span>
              </div>
        </div>
    )
}