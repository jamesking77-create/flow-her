import React from 'react';
 import '../styles/menstrualApp.css'
// import { Link } from 'react-router-dom';
import video from '../../../asset/video/y2mate.com - How menstruation works  Emma Bryce_1080p.mp4'




function MenstrualApp(){



    
    
    
        return(

            
            <div>
            <div className='topnav1'>
            
            <p className='flo'>FLow-her</p>
            

            <div className='fq'>
                <p>FAQ</p>
            </div>

            <li>
                <p>TIps & Advice</p>
            </li>

            <li>
                <p>Contact Us</p>
            </li>


        </div>

           
            

            <div className='main-c'>


            <div className='box-1'>

                        <div className="center" onClick={() => {window.location.href ='page4'}}>
                                 <a><span data-attr="Learn">Learn</span><span data-attr="More"></span></a>
                        </div>
                    

                        <div className='pregbox' >
                         <video src={video} className='video' type='video/mp4' controls muted loop autoPlay></video>
                        </div>
                    </div>

                 
               
               
                    <div className='inner-Container' id='holder'>
                        <div className='first-Box'>

                            <h2 className='tracktext'>TRACK <br />  
                               
                                fertility & period
                               
                           
                            </h2>
                        </div>

                        
                            <div className='but-ton'  onClick={() => {window.location.href ='page2'}}>
                                <p className='btn-Text'>
                                    TRACK <br />
                                    my period
                                </p>

                                <div className='btn-Two'>
                                    <p className='btn-Text2'>&#127801;</p>
                                </div>
                            </div>
                     
                       

                        < div className='lady1'> </div>

                       

                       

                        <div className='but-tons'>

                            <p className='btn-Texts'>
                                TRACK <br />
                                my pregnancy 
                            </p>

                            <div className='btn-Twos'>
                                <p className='btn-Text2s'>&#127804;</p>
                            </div>
                            </div>

                    </div>


                    <div className='box2'>
                    <div className='but-ton'>

                            <p className='btn-Text'>
                                TRACK <br />
                                my safe periods
                            </p>
                            <div className='btn-Two'>
                                <p className='btn-Text2'>?</p>
                            </div>
                            
                        </div>

                        <div className='but-ton' onClick={() => {window.location.href ='page3'}}>

                            <p className='btn-Text'>
                            TRACK <br />
                            my ovulation
                            </p>
                            <div className='btn-Two'>
                            <p className='btn-Text2'>?</p>
                            </div>

                        </div>


                        <div className='but-ton'>

                            <p className='btn-Text'>
                            Find <br />
                            a gynecologists.
                            </p>
                            <div className='btn-Two'>
                            <p className='btn-Text2'>?</p>
                            </div>

                        </div>

                        <div className='but-ton'>

                        <p className='btn-Text'>
                        Buy <br />
                        menstrual products
                        </p>
                        <div className='btn-Two'>
                        <p className='btn-Text2'>?</p>
                        </div>

                        </div>


                        
                      
                    </div>
            </div>
        </div>

            
        )
    
}

export default MenstrualApp; 