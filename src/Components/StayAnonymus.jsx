import React from 'react';
import colorScheme from '../Styling.js'
import hackerBoy from '../Images/undrawhacker.svg';

const StayAnonymus = () => {
  return (
    <>
      <section  id="doctors" className="doctors">
        <div className="container">

        <div className="stayAnon-box">
        <div className="row">
        <div className="d-flex justify-content-start">
        <div className="col-lg-5 p-5">
        <img className="img-fluid mt-5"src={hackerBoy} alt=""  />
        </div>
        {/* end-col */}

        <div className="col-lg-7">
        <h2 className="text-start mt-5">
        <span style={{color:colorScheme.mainColor,fontSize:"36px", fontWeight:"700"}}>STAY ANONYMOUS</span>
        <br />
        <span style={{color:colorScheme.black, fontWeight:"700"}}>With Our Essay Writing Service</span>
        </h2>

        <p className="text-start AnonyPara pb-5 me-4" style={{color:colorScheme.black,fontWeight:"500",zIndex:"2"}}>
            The aim of our service is to provide you with top-class essay help when you ask us to write my paper; we do not collect or share any of your personal data. We use the email you provide us to send you drafts, final papers, and the occasional promotion and discount code, but that’s it! No payment data is stored in our database after you pay for essay tasks. Entrust your assignments to our essay writers today, and save time for other important things.
            <br/>

         <button className="mt-5 btn btn-outline-light paper-writing-card p-3 writer-button w-50" type="button" style={{backgroundColor:colorScheme.mainColor,color:colorScheme.white}}>Sign Up</button>
        </p>
       
        </div>
        {/* end-col */}
        </div>
        </div>
        {/* end-inner-row */}
      </div>

    </div>
    </section>
    </>
  )
}

export default StayAnonymus