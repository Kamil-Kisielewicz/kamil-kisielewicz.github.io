import React from 'react';
import Navbar from '@theme-original/Navbar';
import './navbar-swizzle.css'
import {Twitter, Linkedin, Mail} from 'react-feather'

export default function NavbarWrapper(props) {
  return (
    <>
      <Navbar {...props} />
      <div className='navbar-swizzle-container'>
        <img src="https://i.imgur.com/DN1ld9J.jpg" alt="Italian Trulli" class="navbar-swizzle-image"/>
        <a href="/">
          <p className='author-title'>Kamil Kisielewicz</p>
        </a>
        <p className='author-subtitle'>
          Building <strong><a id="pmf-quest-link" href="https://pmf.quest/">something new</a></strong> for Web3
        </p>
        <ul class="navbar-swizzle-icons">
          <li class="navbar-swizzle-icons-li">
            <a href="https://www.linkedin.com/in/kamiljkisielewicz/">
              <Linkedin size="20" color="#0077B5"/>
            </a>
          </li>
          <li class="navbar-swizzle-icons-li">
            <a href="https://twitter.com/Kamil_SaaS">
              <Twitter size="20" color="#1DA1F2"/>
            </a>
          </li>
          <li class="navbar-swizzle-icons-li" id="email-icon">
            <a href="mailto:kamiljkisielewicz@gmail.com">
              <Mail size="20" color="black"/>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
