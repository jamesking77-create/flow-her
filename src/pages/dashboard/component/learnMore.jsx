import React from "react";
import video from '../../../asset/video/y2mate.com - How menstruation works  Emma Bryce_1080p.mp4' 
import '../styles/learnMore.css';

function LearnMore(){
    return ( 
    
    <div className ="first-c">

        <div className="t-nav">
        <div className='fh'>FLow-her</div>

            <li className="home" onClick={() => {window.location.href ='/'}} >
                Home
            </li>
            

            <li>
                <p>FAQ</p>
            </li>

            <li>
                <p>TIps & Advice</p>
            </li>

            <li>
                <p>Contact Us</p>
            </li>

        </div>

        <div className="vid-box">
        <video src={video} className='fh-video' type='video/mp4' controls  loop autoPlay></video>
        <div className="article">
            <p className="atc">
                <span className="mensc">Menstrual Cycle</span> <br />
            
A menstrual cycle begins when you get your period or menstruate. This is when you shed the lining of your uterus. This cycle is part of your reproductive system and prepares your body for a possible pregnancy. A typical cycle lasts between 24 and 38 days.
Female Reproductive Organs
Female Reproductive Organs
What is menstruation?
Menstruation is the monthly shedding of the lining of your uterus. Menstruation is also known by the terms menses, menstrual period, menstrual cycle or period. Menstrual blood — which is partly blood and partly tissue from the inside of your uterus — flows from your uterus through your cervix and out of your body through your vagina.

Menstruation is driven by hormones. Hormones are chemical messengers in your body. Your pituitary gland (in your brain) and your ovaries (part of your reproductive system) make and release certain hormones at certain times during your menstrual cycle.

These hormones cause the lining of your uterus to thicken. This happens so that if a pregnancy would occur, an egg can implant into your uterine lining. Hormones also cause your ovaries to release an egg (ovulation). The egg moves down your fallopian tubes, where it waits for sperm. If a sperm doesn’t fertilize that egg, pregnancy doesn’t occur. The lining of your uterus breaks down and sheds. This is your period.

What is a menstrual cycle?
The menstrual cycle is a term to describe the sequence of events that occur in your body as it prepares for the possibility of pregnancy each month. Your menstrual cycle is the time from the first day of your menstrual period until the first day of your next menstrual period. Every person’s cycle is slightly different, but the process is the same.
            </p>
        </div>
        </div>

        </div>

    )
};

export default LearnMore;