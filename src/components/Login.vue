<template>

    <div class="login-form-modal">
        <section class="modal">
        <div class="modalCont">
            <div class="close-modal" @click="closeModal()">x</div>
            <div class="wrap-form">
                <form class="modal-form">
                    <div class="user-password">
                        <div id="user-name">
                            User Name: <input type="text" required>
                        </div>
                        <div id="password">
                            Password:<input type="text" required>
                        </div>
                        <div id="submit">
                            <input type="button" value="SUBMIT">
                        </div>
                        
                        <div class="join">
                            <p><strong><a @click="joinForm()">Register</a></strong> if you do not have an account.</p>
                        </div>
                    </div>
                </form>
            </div>
            <div class="wrap-form-join">
                <form class="join-form">
                    Join Form
                </form>
            </div>
            <div class="logo-habla"></div>
        </div>
        </section>
    </div>
</template>
<script>
    import $ from 'jquery'
   
    export default {
    name: 'Header',
    methods: {
        goToByScroll(id) {
            $('html,body').animate(
                { scrollTop: $('#' + id).offset().top },
                'slow'
            )
        },
        openModal(){
            
            var ele= document.getElementsByClassName("modal");
            const elem = document.getElementsByClassName("modalCont");

            if (elem[0].classList.contains('modalOut')){
                elem[0].classList.remove('modalOut');
            }
            elem[0].classList.add('modalIn');
            ele[0].style.display = "block";
            var ele2= document.getElementsByClassName("login-form");
            ele2[0].style.display = "block";
        },
    
        closeModal(){
            const elem = document.getElementsByClassName("modalCont");
            if (elem[0].classList.contains('modalIn')){
                elem[0].classList.remove('modalIn');
            }
            elem[0].classList.add('modalOut'); 
            setTimeout(this.displayOut, 500);
        },
        setContact(){
            var ele = document.getElementsByClassName("login-form");
            ele[0].style.display = "block";
        },
         displayOut() {
            var ele2= document.getElementsByClassName("login-form-modal");
            ele2[0].style.display = "none";
            var ele= document.getElementsByClassName("modal");
            ele[0].style.display = "none";  
        },

        joinForm(){
            var el = document.getElementsByClassName('join-form');
            el.style.display = "block";
            //  setTimeout(this.displayFormOut, 500);
        },
        displayFormOut(){
            var ele= document.getElementsByClassName("wrap-form");
            ele[0].style.display = "none"; 
        }
    }
}
</script>
