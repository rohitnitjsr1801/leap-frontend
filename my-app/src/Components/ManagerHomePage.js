import React from 'react'

function managerHomePage() {
  return (
    <>
    <br/>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <h2>MY PRODUCTS</h2>
    </div>
      <div className="card" style={{width: "18rem",marginLeft:"2rem"}}>
       <img class="card-img-top" src="https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN_823x.jpg?v=1694605258" alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">Iphone</h5>
          <p class="card-text">Details of the product</p>
          {/* dropdowns will come here gender , agegroup, purchaseFrequency */}
          <p>
            dropdowns will come here
          </p>
          <button class="btn btn-primary">Apply Promotion</button>
        </div>
      </div>
      

       <div style={{ display: 'flex', justifyContent: 'center' }}>
       <h2>MY SERVICES</h2> 
       </div>
       
    </>
  )
}

export default managerHomePage