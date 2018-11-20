<template>
    <div>

         <section class="divider" id="join">
            <div class="divider_Title">
                <hr>
                <h1 data-aos="fade-left"><a>contact</a></h1>   
                <hr>   
                <!-- <p data-aos="fade-up">Register to know more about <strong class="color-orange"> hab-la</strong>, upload and download information, and 
                    participate in our blog
                </p>  -->
            </div> 
        </section> 
        <section class="form-wrap background-3 rowCenter">
            <div class="form-innerWrap  ">
                <div class="form-title">
                    <h3 data-aos="fade-left"><a id="">contact</a></h3>
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
                        <!-- <div data-aos="zoom-in-up" class="wrap-btn .w-wrap-btn-register">
                            <input class="btn" type="button" value="SEND">
                        </div> -->
                         <div data-aos="fade-up" data-aos-delay="600"  class="wrap-btn ">
                            <input class="btn w-wrap-register padding-6rem" type="button" value="SEND">
                        </div>
                    </form>
                </div>
            </div>
        </section>     
    </div>
</template>


<script>

export default {
    name: 'Contact',

    data(){
        return{
          loading: false,
          form: {},
          store: {}
        }
    },



    methods: {
      
    }



    
}
</script>
