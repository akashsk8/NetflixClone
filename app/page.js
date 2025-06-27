"use client"
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import logo from "./Assets/logo.svg"
import HomeImage from "./HomePhotos";
import { useState } from "react";
export default function Home() {
  const [Q1,setQ1] = useState(false);
  const [Q2,setQ2] = useState(false);
  const [Q3,setQ3] = useState(false);
  const [Q4,setQ4] = useState(false);
  const [Q5,setQ5] = useState(false);
  const [Q6,setQ6] = useState(false);
  return (
    <div className={styles.page}>
      <div className={styles.Head}>
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
        <div className={styles.Others}>
          <div className={styles.Language}>
            <select name="Lang" id="">
              <option value="0">English</option>
              <option value="1">Hindi</option>
              <option value="2">Urdu</option>
            </select>
          </div>
          <div className={styles.SingInBtn}>
            <Link href="./signin">
            <button type="button">Sign In</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.HeadContent}>
        <h1>Unlimited movies, TV shows and more</h1>
        <p>Starts at &#8377;149.Cancel any time.</p>
        <div>Ready to watch?Enter your email to create or restart your membership.</div>
        <div className={styles.EmailTab}>
          <input type="email" name="email" placeholder="Email address" className={styles.inp}/>
          <button>Get Started  &gt;</button>
        </div>
      </div>
      </div>
      <div className={styles.Maincont}>
        <div className={styles.ScroolBar}>
          <div className={styles.ScrollTag}>Trending now</div>
          <div className={styles.ScrollCont}>
            {
              HomeImage.map((img)=>{
                return(
                  <Image
                  className={styles.ScImg}
                  key={img.index}
                  src={img.image}
                  width={250}
                  height={300}
                  alt="Scimg1"
                  style={{marginLeft:'1rem',borderRadius:'0.4rem'}}
                  />
                );
              })
            }
          </div>
        </div>
        <div className={styles.ReasonToJoin}>
          <div className={styles.ReasonTag}>More reasons to join</div>
          <div className={styles.ReasonCont}>
            <div className={styles.ReasonCont1}>
              <div className={styles.ReasonCont1Tag}>Enjoy on your TV</div>
              <div className={styles.ReasonContent1}>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</div>
            </div>
            <div className={styles.ReasonCont2}>
              <div className={styles.ReasonCont2Tag}>Download your shows to watch offline</div>
              <div className={styles.ReasonContent2}>
                Save your favourites easily and always have something to watch.
              </div>
            </div>
            <div className={styles.ReasonCont3}>
              <div className={styles.ReasonCont3Tag}>Watch everywhere</div>
              <div className={styles.ReasonContent3}>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</div>
            </div>
            <div className={styles.ReasonCont4}>
              <div className={styles.ReasonCont4Tag}>Create profiles for kids</div>
              <div className={styles.ReasonContent4}>Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</div>
            </div>
          </div>
        </div>
        <div className={styles.Frequently}>
          <div className={styles.FrequentlyTag}>Frequently Asked Questions</div>
          <div className={styles.questionCont}>
            <div className={styles.Question1} onClick={()=>{setQ1(!Q1)}}><h2>What is Netflix?</h2><p>{Q1?'×':'+'}</p></div>
            <div className={Q1 ? styles.AnswerTab1Open:styles.AnswerTab1Close}>
              Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices.
              <br/>
              <br/>
              You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
            </div>
            <div className={styles.Question2} onClick={()=>{setQ2(!Q2)}}><h2>How much does Netflix cost?</h2><p>{Q2?'×':'+'}</p></div>
            <div className={Q2?styles.AnswerTab2Open:styles.AnswerTab2Close}>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month.<br/><br/> No extra costs, no contracts.
            </div>
            <div className={styles.Question3} onClick={()=>{setQ3(!Q3)}}><h2>Where can i watch?</h2><p>{Q3?'×':'+'}</p></div>
            <div className={Q3?styles.AnswerTab3Open:styles.AnswerTab3Close}>
              Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
              <br/>
              <br/>
              You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
            </div>
            <div className={styles.Question4} onClick={()=>{setQ4(!Q4)}}><h2>How do i cancel?</h2><p>{Q4?'×':'+'}</p></div>
            <div className={Q4?styles.AnswerTab4Open:styles.AnswerTab4Close}>
              Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.
            </div>
            <div className={styles.Question5} onClick={()=>{setQ5(!Q5)}}><h2>What can i watch on Netflix?</h2><p>{Q5?'×':'+'}</p></div>
            <div className={Q5?styles.AnswerTab5Open:styles.AnswerTab5Close}>
              Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
            </div>
            <div className={styles.Question6} onClick={()=>{setQ6(!Q6)}}><h2>is Netflix good for kids?</h2><p>{Q6?'×':'+'}</p></div>
            <div className={Q6?styles.AnswerTab6Open:styles.AnswerTab6Close}>
              The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
              <br/>
              <br/>
              Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
            </div>
          </div>
        </div>
        <div className={styles.EmailTab2}>
            <div className={styles.EmailTab2Tag}>Ready to watch? Enter your email to create or restart your membership.</div>
            <div className={styles.Email2Bar}>
              <input type="email" name="email" placeholder="Email address" className={styles.inp}/>
              <button>Get Started &gt;</button>
            </div>
          </div>
          <div className={styles.Foot}>
        <div className={styles.Qs}>Questions? Call 000-800-919-1743</div>
        <div className={styles.FootBar}>
          <div className={styles.FootBar1}>
            <Link href="#">FAQ</Link>
            <Link href="#">Investor Relations</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">Speed Test</Link>
          </div>
           <div className={styles.FootBar2}>
            <Link href="#">Help Center</Link>
            <Link href="#">Jobs</Link>
            <Link href="#">Cookie Preferences</Link>
            <Link href="#">Legal Notices</Link>
          </div>
           <div className={styles.FootBar3}>
            <Link href="#">Account</Link>
            <Link href="#">Ways to Watch</Link>
            <Link href="#">Corporate Information</Link>
            <Link href="#">Only on Netflix</Link>
          </div>
           <div className={styles.FootBar4}>
            <Link href="#">Media Center</Link>
            <Link href="#">Term of Use</Link>
            <Link href="#">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className={styles.Language2}>
        <select name="" id="">
          <option value="0">English</option>
          <option value="1">Hindi</option>
          <option value="2">Urdu</option>
        </select>
      </div>
      <div className={styles.NetIn}>Netflix India</div>
      <div className={styles.Recap}>This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link href="#">Learn more</Link></div>
      </div>
    </div>
  );
}
