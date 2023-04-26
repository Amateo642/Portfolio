import React from 'react';
import {AiOutlineInstagram, AiFillGithub} from 'react-icons/ai';
import {FaTelegramPlane} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.instagram.com/amateo.dk_official/?hl=ru" target="_blank"><AiOutlineInstagram/></a>
        <a href="https://github.com/Amateo642" target="_blank"><AiFillGithub/></a>
        <a href="https://t.me/Amateo642" target="_blank"><FaTelegramPlane/></a>
    </div>
  )
}

export default HeaderSocials