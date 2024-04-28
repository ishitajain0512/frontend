import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBRow>
      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional content.
            </MDBCardText>
            <MDBBtn href='#'>Go somewhere</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional content.
            </MDBCardText>
            <MDBBtn href='#'>Go somewhere</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}