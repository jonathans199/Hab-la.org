<template>
  <div>
      <Header/>
      
        <div id="carouselExampleIndicators" class="carousel slide custom-slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block h-100 w-100" src="@/assets/img/slides/slide0.jpg" alt="First slide">
                    <div class="overlay"></div>
                    <div class="carousel-caption d-none d-md-block">
                        <div class="carousel-caption__slide-title">HABITAT</div>
                        <div class="carousel-caption__slide-heading">LATIN AMERICA</div>
                    </div>
                </div>
                <div class="carousel-item">
                <img class="d-block h-100 w-100" src="@/assets/img/slides/slide1.jpg" alt="Second slide">
                    <div class="overlay"></div>
                    <div class="carousel-caption d-none d-md-block">
                        <div class="carousel-caption__slide-title">LIMA</div>
                        <div class="carousel-caption__slide-heading">PERU</div>
                    </div>
                </div>
                <div class="carousel-item">
                <img class="d-block h-100 w-100" src="@/assets/img/slides/slide2.jpg" alt="third slide">
                    <div class="overlay"></div>
                    <div class="carousel-caption d-none d-md-block">
                        <div class="carousel-caption__slide-title">MEDELLIN</div>
                        <div class="carousel-caption__slide-heading">COLOMBIA</div>
                    </div>
                </div>
                <div class="carousel-item">
                <img class="d-block h-100 w-100" src="@/assets/img/slides/slide3.jpg" alt="fourth slide">
                    <div class="overlay"></div>
                    <div class="carousel-caption d-none d-md-block">
                        <div class="carousel-caption__slide-title">MANAGUA</div>
                        <div class="carousel-caption__slide-heading">NICARAGUA</div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev arrows" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        <section class="container intro-section">
            <span class="intro-section__title">WHAT WE ARE</span>
            <div class="intro-section__text">
                <h1>A BETTER UNDERSTANDING OF</h1>
                <span>LOCAL PLANNING</span>
            </div>
        </section>
        <section class="divider2">
            <button class="btn outline-success divider2-btn">BUTTON</button>
        </section>

        <section class="shop container">
            <h1>SHOP NOW</h1>
            <h2>Subtext</h2>
            <div class="shop-shoes">
                <img src="@/assets/img/intro-shoe.jpg" alt="" class="shoe">
                <img src="@/assets/img/intro-shoe.jpg" alt="" class="shoe">
                <img src="@/assets/img/intro-shoe.jpg" alt="" class="shoe">
                <img src="@/assets/img/intro-shoe.jpg" alt="" class="shoe">
                <img src="@/assets/img/intro-shoe.jpg" alt="" class="shoe">
                <img src="@/assets/img/intro-shoe.jpg" alt="" class="shoe">
                <img src="@/assets/img/intro-shoe.jpg" alt="" class="shoe">
                <img src="@/assets/img/intro-shoe.jpg" alt="" class="shoe">
            </div>
            <button class="btn vv-button">SHOP MORE</button>
        </section>
        
        <section class="men-shoes">
            <div class="container men-shoes-content">
                <img class="" src="@/assets/img/your-logo.png" alt="">
                <h3>SUBTEXT</h3>
                <button class="btn vv-button">SHOP MORE</button>
            </div>
        </section>
        <Footer/>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  components: {
    Footer,
    Header
  }
}

</script>
