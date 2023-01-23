import React from 'react'
import kalojira from '../Assets/kalozira.jpg'

export default function Modal() {
  return (
    <div>

      {/* <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
        Launch
      </button> */}
      
    
      <div className="modal fade" id="modalId" tabIndex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
        <div className="modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modalTitleId">Honey</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-6">
                        <img src={kalojira} alt="" />
                        </div>
                        <div className="col-6">
                            
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
      </div>
      
      
      
      
      
      
      
      
    </div>
  )
}
