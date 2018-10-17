<template>
<div  id="modal-id" class="modal-display-none modal-habla">
    <div @click="openCloseModal()" class="modal-close" >X</div>
    <div id="wrapper">
        <div class="wrap-mod">
            <div id="myNav" class="overlay-menu">  
              <!-- Overlay content -->
              <div class="overlay-content ">
                <div class="left-menu">
                    <div class="partners">
                        <h1 class="partners_h1">PARTNERS</h1>
                        <div >
                            <img class="partners__logos" src="@/assets/img/partners.png" alt="">
                            <img src="" alt="">
                            <img src="" alt="">
                            <img src="" alt="">
                            <img src="" alt="">
                            <img src="" alt="">
                        </div>
                    </div>
                    <div class="contact-menu">
                        <h1>CONTACT</h1>
                        <span>CAMILO ESPITIA / 305.123.1234 / CAMILO@HABLA.COM</span>
                    </div>
                </div>
                <div class="about">
                    <h1>ABOUT HAB-LA</h1>
                    <h2>Vision</h2>
                    <p>To reach out to citizens , businesses, students & faculty, city officials, and other organizations, to collaborate in accelerating innovation in Latin American cities.</p>
                    <h2>Mission</h2>
                    <p>hab-la is a digital communication and research platform to raise awareness on the challenges faces by Latin American cities. It serves as an instrument to create a dynamic relationship between smart citizens and smart officials to build a community to develop smart cities.</p>
                    <img src="@/assets/img/hab-la_logo.png" alt="">
                </div>
                <div class="">
                    <img>
                    <img>
                    <img>
                </div>
              </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
  
    methods: {
        openCloseModal(){
            var modalId = document.getElementById('modal-id');
            if(modalId.classList.contains('modal-display-none') ){
                modalId.classList.remove('modal-display-none');
                modalId.classList.add('modal-display-flex');
               
            }else if(modalId.classList.contains('modal-display-flex') ) {
                modalId.classList.remove('modal-display-flex');
                modalId.classList.add('modal-display-none');
                
            }
        }
    }
}
</script>