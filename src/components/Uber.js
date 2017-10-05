import React from 'react';
import UberNavbar from './uber/UberNavbar';
import UberBanner from './uber/UberBanner';
import UberSignup from './uber/UberSignup';
import ReasonsToRide from './uber/ReasonsToRide';


export default function Uber (props) {

  return (
    <div className="uber">
      <UberNavbar />
      <UberBanner />
      <UberSignup />
      <ReasonsToRide />
    </div>
  );
}
