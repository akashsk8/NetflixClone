import React from 'react'
import styles from "../page.module.css";
import Image from 'next/image';
import logo from '../Assets/logo.svg'
import Link from 'next/link';
export default function Home(){
  return (
    <div>
      <div className={styles.HeadSgn}>
        <div className={styles.Navbar}>
        <div className={styles.Logo}>
          <Image
          src={logo}
          width={140}
          height={140}
          alt="lala"
          className={styles.LogoImg}
          />
        </div>
      </div>
      <div className={styles.SginBox}>
      <div className={styles.SginInTag}>Sign in</div>
      <div className={styles.InputFields}>
        <input type="email" name="email" placeholder='Email or Mobile number' className='inp'/>
        <input type="password" name="password" placeholder='Password' className={styles.inp}/>
        <button type='button' className={styles.SgBt}>Sign in</button>
        <p>or</p>
        <button className={styles.Sgcode}>Use a sign-in code</button>
        <Link href="#" className={styles.Forgot}>Forget Password?</Link>
      </div>
      <div className={styles.Remember}><input type="checkbox" name="Remember Password"/>Remember Password</div>
      <div className={styles.new}>New to Netflix?<Link href='#' style={{color:'white'}}>Sign up now</Link></div>
      <div className={styles.recap}>This page is protected by Google reCAPTCHA to ensure you're not a bot.<Link href="#">Learn more.</Link></div>
      </div>
    </div>
    </div>
  )
}