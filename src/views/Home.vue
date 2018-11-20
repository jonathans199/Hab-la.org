<template>
  <div>
     <Header> </Header>

     <div class="full-page" id="home">
        <div class="carouselIR">
            <span></span>
            <span></span>
            <span></span> 
        </div>
        <div class="hero-content">
            <div data-aos="fade-up" data-aos-dalay="300" data-aos-anchor-placement="top-center" class="heroTitle">
                <p class="text-center">A research and communication platform for Latin American cities.</p>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="600"  class="wrap-btn w-wrap-hero">
                <input class="btn padding-2rem" type="button" value="JOIN THE CONVERSATION">
               
            </div>
            <div data-aos="fade-up" data-aos-offset="70" class="media">
                <a href="mailto:info@hab-la.com" target="_blank"><img src="@/assets/img/mediaEmail.png" alt=""></a>
                <a href="https://www.facebook.com/habitatlatinamerica/" target="_blank"><img src="@/assets/img/mediaFace.png" alt=""></a>
                <a href="https://www.instagram.com/hab-la" target="_blank"><img src="@/assets/img/mediaPhone.png" alt=""></a>
            </div>
        </div>
        <div class="overlay"></div>
     </div> 
    <div>
        <section class="divider sec-A" id="about">
            <div data-aos="fade-right" class="divider_Title" >
                <hr>
                <h1><a>about</a></h1>
                <hr>    
            </div> 
        </section>

        <section class="about-text background-1 rowFlex spaceAround">
        <div class="wrap-abou">
            <div class="flex-column-about">
                <div data-aos="fade-left" class="vision">
                    <h1>Vision</h1>
                    <p>To reach out to citizens , businesses, students &amp; faculty, city officials, and other organizations, to collaborate in accelerating innovation in Latin American cities. </p>
                </div>
                <div data-aos="fade-up" class="vl"></div>
                <div data-aos="fade-right"  class="mission">
                    <h1>Mission</h1>
                    <p>hab-la is a digital communication and research  platform to raise awareness on the challenges faces by Latin American cities.  It serves as an instrument to create a dynamic relationship between smart citizens and smart officials to build a community to develop smart cities.</p>
                </div>
            </div>
            <!-- <div class="wrap-partners-btn">
                <input @click="openCloseModal()" data-aos="fade-up" type="button" class="partners-btn" value="Partners" v-b-modal.modal-center>
            </div> -->
            <modal/>
        </div>
            <div class="overlayTwo overlay-about"></div>
        </section>

        <section class="divider sec-B" id="news">
            <div class="divider_Title">
                <hr>
                <h1 data-aos="fade-left"><a>articles</a></h1>   
                <hr>   
                <p data-aos="fade-right">latest discussions</p> 
            </div> 
        </section> 
        
        <News/>

        <section class="divider" id="resources">
            <div data-aos="fade-up" class="divider_Title">
                <hr>
                <h1><a>resources</a></h1>   
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
                    <input class="first-child" type="button" value="download">
                    <input class="second-child" type="button" value="upload">
                </div>
            </div>
           <div class="overlayTwo"></div>
        </section>

        <section class="divider" id="events">
            <div class="divider_Title">
                <hr>
                <h1 data-aos="fade-left" ><a>events</a></h1>   
                <hr>   
                <p data-aos="fade-right">Please follow us on social media for additional news, articles and events on Latin American cities.</p> 
            </div> 
        </section>
        <section class="about-text background-2 rowFlex spaceAround">
            
         <div class="wrap-content spaceAround">
        
            <div class="events-item" >
                <p>Nov 07-Nov 10</p>
                <p>NLC National League of Cities</p>
                <p>Los Angeles, CA.</p>
                <a href="https://www.nlc.org/event/city-summit">www.nlc.org/event/city-summit </a>     
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

        <Contact/>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import News from '@/components/News'
import modal from '@/components/modal'
import Login from '@/components/Login'

export default {
  name: 'Home',
  components: {
    Header,
    Contact,
    Footer,
    News,
    modal,
    Login
  },
  
    methods: {
        openCloseModal(){
            var modalId = document.getElementById('modal-id');
            if(modalId.classList.contains('modal-display-none') ){
                // $('#modal-id').show();
                modalId.classList.remove('modal-display-none');
                modalId.classList.add('modal-display-flex');
            }else if(modalId.classList.contains('modal-display-flex') ) {
                modalId.classList.remove('modal-display-flex');
                modalId.classList.add('modal-display-none');
                //  setTimeout(function() {
                //      $('#modal-id').hide();
                // }, 300);
            }
        },
        openModal(){
            var ele= document.getElementsByClassName("modal");
            const elem = document.getElementsByClassName("modalCont");

            if (elem[0].classList.contains('modalOut')){
                elem[0].classList.remove('modalOut');
            }
            elem[0].classList.add('modalIn');
            ele[0].style.display = "block";
            setContact();
        }
    
        // closeModal(){
        //     const elem = document.getElementsByClassName("modalCont");
        //     if (elem[0].classList.contains('modalIn')){
        //         elem[0].classList.remove('modalIn');
        //     }
        //     elem[0].classList.add('modalOut'); 
        //     setTimeout(displayOut, 500);
        // }
    }
}

</script>
