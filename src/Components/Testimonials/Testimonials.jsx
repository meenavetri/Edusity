import React, { useRef } from 'react'
import './Testimonial.css'
import next_btn from '../../assets/next-icon.png'
import back_btn from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonials = () => {
    const slider= useRef();
        let tx = 0;

    const slideForward = ()=>{
        if(tx >-50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = ()=>{
        if(tx <0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }



  return (
    <div className='tesimonials'> 
      <img src={next_btn} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_btn} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Emily Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my dregree at Edusity was one of the best decision
                            I've ever made. The supportive community, state-of-art facilities, and commitment to 
                            acadamic excellence have truely exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>William Brad</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my dregree at Edusity was one of the best decision
                            I've ever made. The supportive community, state-of-art facilities, and commitment to 
                            acadamic excellence have truely exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Gabi</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my dregree at Edusity was one of the best decision
                            I've ever made. The supportive community, state-of-art facilities, and commitment to 
                            acadamic excellence have truely exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>John Tommy</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my dregree at Edusity was one of the best decision
                            I've ever made. The supportive community, state-of-art facilities, and commitment to 
                            acadamic excellence have truely exceeded my expectations.
                        </p>
                    </div>
                </li>
            </ul>
      </div>
    </div>
  )
}

export default Testimonials
