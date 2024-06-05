import React from 'react'
import '../styles/Footer.scss'
import { LocationOn, LocalPhone, Email } from '@mui/icons-material'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_left'>
            <a href='/'><img src='/assets/logo.png' alt='logo'/></a>
        </div>

        <div className='footer_center'>
            <h3>Useful Links</h3>
            <ul>
                <li>About Us</li>
            </ul>
        </div>

        <div className='footer_right'>
            <h3>Contact</h3>
            {/* <div className='footer_right_info'>
                <LocalPhone />
                <p>+91 9999999999</p>
            </div> */}
            <div className='footer_right_info'>
                <Email />
                <p>dreamnest@support.com</p>
            </div>
            <img src='/assets/payment.png' alt='payment'></img>
        </div>
    </div>
  )
}

export default Footer