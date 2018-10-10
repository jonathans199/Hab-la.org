<template>
  <div>
     <Header> </Header>

     <div class="full-page">
        <div class="carouselIR">
            <span></span>
            <span></span>
            <span></span> 
        </div>
        <div class="hero-content">
            <div data-aos="fade-up" data-aos-dalay="300" data-aos-anchor-placement="top-center" class="heroTitle">
                <p class="text-center">A research and communication platform for Latin American cities.</p>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="600"  class="btn">
                <input type="button" value="JOIN THE CONVERSATION">
            </div>
            <div data-aos="fade-up" data-aos-offset="70" class="media">
                <img src="@/assets/img/mediaEmail.png" alt="">
                <img src="@/assets/img/mediaFace.png" alt="">
                <img src="@/assets/img/mediaPhone.png" alt="">
            </div>
        </div>
        <div class="overlay"></div>
    
     </div> 
    <div>
        <section class="divider sec-A">
            <div data-aos="fade-right" class="divider_Title" >
                <hr>
                <h1><a id="about">about</a></h1>   
                <hr>    
            </div> 
        </section>

        
        <section class="about-text background-1 rowFlex spaceAround">
        <div class="wrap-abou">
            <div data-aos="fade-left" class="vision">
                <h1>Vision</h1>
                <p>To reach out to citizens , businesses, students & faculty, city officials, and other organizations, to collaborate in accelerating innovation in Latin American cities. </p>
            </div>
            <div data-aos="fade-up" class="vl"></div>
            <div data-aos="fade-right"  class="mission">
                <h1>Mission</h1>
                <p>hab-la is a digital communication and research  platform to raise awareness on the challenges faces by Latin American cities.  It serves as an instrument to create a dynamic relationship between smart citizens and smart officials to build a community to develop smart cities.</p>
            </div>
        </div>
            <div class="overlayTwo overlay-about"></div>
        </section>
        <News/>
        <section class="divider">
            <div data-aos="fade-up" class="divider_Title">
                <hr>
                <h1><a id="resources">resources</a></h1>   
                <hr>   
                <p></p> 
            </div> 
        </section>

        <section class="about-text background-1 columnFlex rowCenter columnCenter">
            <div class="wrap-content columnFlex columnCenter">
                <div data-aos="fade-down" class="resource-title">
                    <p class="text-center">Download and upload information to share the knowledge</p>
                </div>
                <div data-aos="fade-up" class="resources-btn">
                    <label>download</label>
                    <label>upload</label>
                </div>
            </div>
           <div class="overlayTwo"></div>
        </section>

        <section class="divider">
            <div class="divider_Title">
                <hr>
                <h1 data-aos="fade-left" ><a id="events">events</a></h1>   
                <hr>   
                <p data-aos="fade-right">Please follow us on facebook for additional news, articles
and events on Latin American cities</p> 
            </div> 
        </section>
        <section class="about-text background-2 rowFlex spaceAround">
         <div class="wrap-content spaceAround">
            <div class="events-item" >
                <p>Sep 18 2008</p>
                <p>Smart Cities Conference</p>
                <p>Denver, Co.</p>
                <p>Website</p>     
            </div>
             <div class="events-item">
                <p>Sep 18 2008</p>
                <p>Smart Cities Conference</p>
                <p>Denver, Co.</p>
                <p>Website</p>     
            </div>
             <div class="events-item">
                <p>Sep 18 2008</p>
                <p>Smart Cities Conference</p>
                <p>Denver, Co.</p>
                <p>Website</p>     
            </div>
             <div class="events-item">
                <p>Sep 18 2008</p>
                <p>Smart Cities Conference</p>
                <p>Denver, Co.</p>
                <p>Website</p>     
            </div>
         </div>
            <div class="overlayTwo"></div>
        </section>

         <section class="divider">
            <div class="divider_Title">
                <hr>
                <h1 data-aos="fade-left"><a id="join">join</a></h1>   
                <hr>   
                <p data-aos="fade-up">Register to know more about <strong> hab-la</strong>, upload and download information, and 
                    Participate in our blog
                </p> 
            </div> 
        </section> 
        <section class="form-wrap background-3 rowCenter">
            <div class="form-innerWrap  ">
                <div class="form-title">
                    <h3 data-aos="fade-left"><a id="">register</a></h3>
                </div>
                <div class="flexCenterCenter ">
                    <form class="formTag">
                        <div class="form-inputWrap"> 
                            <div class="inputW">
                                <div data-aos="fade-left" class="form-left">
                                    <label>NAME:</label>
                                    <input type="" >
                                    <label>EMAIL</label>
                                    <input type="">
                                    <label>WHICH CITY ARE YOU FROM?</label>
                                    <input type="">
                                </div>
                            </div>                            
                            <div data-aos="fade-right" class="form-right">
                                <label>COMMENTS</label>
                                <textarea name="" id="" rows="8" cols="40"></textarea>
                            </div>
                        </div>
                        <div data-aos="zoom-in-up" class="form-btn">
                            <input type="button" value="SEND">
                        </div>
                    </form>
                </div>
            </div>
        </section> 
</div>
        <Footer/>
</div>
</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import News from '@/components/News'

export default {
  name: 'Home',
  components: {
    Footer,
    Header,
    News
  }
}

</script>
