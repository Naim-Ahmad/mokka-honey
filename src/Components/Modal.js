import React, { useState } from "react";
const checkPackedItems = JSON.parse(localStorage.getItem('packed'));
const packedItems = checkPackedItems ? checkPackedItems : [];

export default function Modal() {
  const [quantity, setQuantity] = useState({})
  const handleClick = () => {
    localStorage.clear()
    window.location.reload()
  }

  // const handleChange = (event) => {
  //   setQuantity(event.target.value)
  //   console.log(event.target.value)
  //   console.log(quantity)
  // }

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button onClick={handleClick} className="btn text-primary" id="exampleModalLabel">
                Clear All
              </button>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul className="list-group">{packedItems.map((item) => {
                return (
                  <li className="list-group-item" key={item.id}>
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        style={{ width: '100px', height: '100px' }}
                        src={item.image}
                        alt={item.alt}
                      />
                      <div className="text-center">
                        <h3 className="m-0">পণ্য</h3>
                        <p>{item.title}</p>
                      </div>
                      <div className="text-center">
                        <h3 className="m-0">মূল্য</h3>
                        <p>{item.curAmount}</p>
                      </div>
                      {/* <div className="text-center">
                        <h3 className="m-0">পরিমাণ</h3>
                        <div>
                          <button>-</button>
                          <input type="number" name={item.title} value={ quantity } onChange={handleChange} />
                          <button>+</button>
                        </div>
                      </div> */}
                    </div>
                  </li>
                );
              })}</ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
