import React from 'react'
import Link from "next/link";
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href='https://www.linkedin.com/company/ariverse-studio/' className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link href='https://www.x.com/ariversestudio' className="cs-center">
        <Icon icon="fa6-brands:twitter" />               
      </Link>
      <Link href='https://www.instagram.com/ariversestudio/' className="cs-center">
        <Icon icon="fa6-brands:instagram" />
      </Link>
      <Link href='https://www.youtube.com/@ariversestudio' className="cs-center">
        <Icon icon="fa6-brands:youtube" />
      </Link>
    </Div>
  )
}
