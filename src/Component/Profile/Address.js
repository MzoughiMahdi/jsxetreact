import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Address() {
  return (
    <MDBRow className='w-100'>
      <MDBCol lg='6' className='my-4'>
      <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              width="1600"
              height="600"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
      </MDBCol>
      <MDBCol lg='6' className='my-4 d-flex align-items-center'>
    
       
      </MDBCol>
    </MDBRow>
  );
}
