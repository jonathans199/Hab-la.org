<template>
    <div>
        <Header/>
        <div class="half-page">
            <div class="carousel-news">
            
            </div>
            <div class="hero-content-news">
                <div data-aos="fade-up"  class="hero-title-news">
                    <p class="text-center">LATIN AMERICA</p>
                </div>  
            </div>
            <div class="overlay-news"></div>
     </div> 
        <News/>
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
