import React from 'react'
import './about.css'
import ME from '../../Assets/my image bg.png'
import {BiAward} from 'react-icons/bi'


const about = () => {
  return (
    <section id='about'> 
    <h5>
      Get To Know
    </h5>

    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Img" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
          <BiAward className='about__icon'/>
            <h3>Profession</h3>
            <small>FullStack Web Developer</small>
          </article>

          <article className='about__card'>
          <BiAward className='about__icon'/>
            <h3>Specialised in</h3>
            <small>MERN & MEAN stack</small>
          </article>

          <article className='about__card'>
          <BiAward className='about__icon'/>
            <h3>Hobbies</h3>
            <small>Gaming</small><br></br>
            <small>Blogging</small>
          </article>
        </div>

        <p>
        I am a Fullstack Developer specialized in MERN Stack. Applying responsive design principles on web pages and watching them shrink into mobile screens and still look amazing is oddly satisfying. I think in a way, I'm kind of like those web pages; I'm moldable, but I still keep my creative flair intact. Apart from work I love graphic designing, singing, blogging, and learning new skills. I am a highly grounded person that values culture and people. Want to know more?
        </p>

        <a href='#contact' className='btn btn-primary'> Let's Talk </a>
      </div>
    </div>
    </section>
  )
}

export default about