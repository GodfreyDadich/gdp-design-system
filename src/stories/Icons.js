import React from 'react'
import { InstagramIcon, LinkedInIcon, CloseModal } from '../components/Icons'

const Icons = props =>
  <div>
    Instagram:&nbsp;
    <InstagramIcon color='green' hoverColor='red' /><br /> <br />
    LinkedIn:&nbsp;
    <LinkedInIcon color='green' /><br /> <br />
    Close Modal:&nbsp;
    <CloseModal color='green' />
  </div>

export default Icons
