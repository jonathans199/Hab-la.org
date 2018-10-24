<template>
    <div>
        <header class="padding-menu-3" id="toTop">
            <div class="wrap-bra-bur">
                <div class="nav-brand">
                  <router-link tag="a" :to="{name:'home'}" class="nav-link"  @click="goToByScroll('home')"> 
                      <img class="header__logo" alt="Vue logo" src="@/assets/img/hab-la_logoH40.png">
                    </router-link>
                </div>
                <div data-aos="fade-left" class="burger-menu">
                    <input id="input-burger" type="checkbox" @click="showMenu()">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="wrap-links-search display-none" id="nav-links">
                 <div class="wrap-nav">
                    <ul class="wrap-links" id="te1">
                        <li @click="goToByScroll('about'); showMenu()" class="nav-item" data-route="sec-B" id="sec-A" >
                            <router-link  class="nav-link" :to="{ name: 'home', query: { section: 'about' } }">about</router-link>
                        </li>
                        <li @click="goToByScroll('news')" class="nav-item" data-route="sec-B" id="sec-B" >
                            <router-link  class="nav-link" :to="{ name: 'home', query: { section: 'news' } }">articles</router-link>
                        </li>
                        <li @click="goToByScroll('resources'); showMenu()" class="nav-item" data-route="sec-C" id="sec-C" >
                            <router-link  class="nav-link" :to="{ name: 'home', query: { section: 'resources' } }">resources</router-link>
                        </li>
                        <li @click="goToByScroll('events'); showMenu()" class="nav-item" data-route="sec-D" id="sec-D" >
                            <router-link  class="nav-link" :to="{ name: 'home', query: { section: 'events' } }">events</router-link>
                        </li>
                        <li @click="goToByScroll('join'); showMenu()" class="nav-item" data-route="sec-E" id="sec-E" >
                            <router-link  class="nav-link" :to="{ name: 'home', query: { section: 'join' } }">join</router-link>
                        </li>
                        <li @click="openModal()" class="nav-item" data-route="sec-F" id="sec-F" >
                            <router-link class="nav-link" :to="{ name: 'home' }">log in</router-link>
                        </li>
                    </ul>
                </div>
               
                <div class="nav-search">
                    <input type="text" class="input-search" id="searchI" @keydown.enter="showClearInput()" @mouseover="elementFocus()">
                    <img class="search-icon" alt="Vue logo" src="@/assets/img/search.png">
                </div>
            </div>
        </header>
        <Login/>
    </div>
</template>

<script>

  
    import $ from 'jquery'
    import Login from '@/components/Login'
    
    export default {
    name: 'Header',
    components: {
        Login
    },

    mounted(){

        let section = this.$route.query.section
        if(!section) section = 'home'
        this.goToByScroll(section)   
    },

    methods: {
        goToByScroll(id) {
            $('html,body').animate(
                { scrollTop: $('#' + id).offset().top },
                'slow'
            )
        },
        showMenu(){
            var navLinks=document.getElementById('nav-links');
            var input = document.getElementById('input-burger');

            if(navLinks.classList.contains('display-none')){
                navLinks.classList.remove('display-none');
                navLinks.classList.add('nav-links-height');
                
                
            }else if(!navLinks.classList.contains('display-none') && navLinks.classList.contains('nav-links-height')){
                navLinks.classList.add('display-none');
                navLinks.classList.remove('nav-links-height');
                input.checked = false;  
                
            }else if(!navLinks.classList.contains('display-none') && !navLinks.classList.contains('nav-links-height')){
                navLinks.classList.add('nav-links-height'); 
                
            }
        },
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
            // alert('in');
            var ele= document.getElementsByClassName("modal");
            const elem = document.getElementsByClassName("modalCont");

            if (elem[0].classList.contains('modalOut')){
                elem[0].classList.remove('modalOut');
            }
            elem[0].classList.add('modalIn');
            ele[0].style.display = "block";
            this.setContact();
        },
        setContact(){
            var ele = document.getElementsByClassName("login-form-modal");
            ele[0].style.display = "block";
        },
        displayOut() {
            var ele2= document.getElementsByClassName("login-form");
            ele2[0].style.display = "none";
            var ele= document.getElementsByClassName("modal");
            ele[0].style.display = "none";  
        }
        // showMenu(){
        //     jsFunctions.showMenu()
        // },

        // elementFocus(){
        //     jsFunctions.elementFocus()
        // },

        // resetInput(){
        //     jsFunctions.resetInput()
        // },

        // showClearInput(){
        //     this.showMenu()
        //     this.resetInput()
        // },
        // inputFocus: function(){
        //     elementFocus()
        // }
    }
}
</script>
