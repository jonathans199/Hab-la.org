<template>
    <div id="wrapper">
        <footer>
            <div class="footer-wrap">
                <div class="logo">
                    <img src="@/assets/img/hab-la_logoH40.png">
                </div>
                <div class="menu custom-scroller">
                    <ul>
                        <li data-route="sec-A" id="sec-A"><a>HOME</a></li>
                        <span></span>
                        <li data-route="sec-B" id="sec-B"><a>ABOUT US</a></li>
                        <span></span>
                        <li data-route="sec-C" id="sec-C"><a>LOG IN</a></li>
                        <span></span>
                        <li data-route="sec-D" id="sec-D"><a>REGISTER</a></li>
                        <span></span>
                        <li data-route="sec-E" id="sec-E"><a>CONTAC US</a></li>
                    </ul>
                    
                </div>
                 <div class="media-footer">
                    <img src="@/assets/img/mediaEmail.png" alt="">
                    <img src="@/assets/img/mediaFace.png" alt="">
                    <img src="@/assets/img/mediaPhone.png" alt="">
                </div>
                <div @click="goToByScroll('home')" id="to-top-btn">
                    <img src="@/assets/img/toTopIcon.png">
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
    import $ from 'jquery'
    import jsFunctions from "@/jsFiles/jsFunctions.js"
    export default {
        name: 'Header',

        mounted(){
    
        },

        methods: {
            goToByScroll(id) {
                $('html,body').animate(
                    { scrollTop: $('#' + id).offset().top },
                    'slow'
                )
            }, 
        }
    }
</script>