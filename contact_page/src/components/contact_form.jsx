import React from 'react'
import { MdMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";



const Contact_form = () => {
  return (
    <>
        <div className='contact_content'>
            <div>
                <div >
                
                <button className='btn' ><MdMessage  fontSize="24px"    />VIA SUPPORT CHAT</button>

                </div>
                <div>
                
                <button className='btn'><IoCallOutline fontSize="24px"  />VIA CALL</button>
                </div>
            </div>
            <div>
                <button>  <MdMessage /> VIA EMAIL FORM</button>

            </div>
        </div>
    <div className='contact_image'>
        <img src="/images/contact.svg" alt="" srcset="" />
    </div>
    </>

  )
}

export default Contact_form