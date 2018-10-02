<template>
  <div>
      <Header/>
      
        <div id="carouselExampleIndicators" class="carousel slide custom-slide" data-ride="carousel">
            <!-- <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol> -->
           
            <div class="heroTitle">
                <p class="">A research and communication platform<p>
                <p> for Latin American cities.</p>
                <input type="botton" value="JOIN THE CONVERSATION">
            </div>
            <div class="overlay"></div>
           
            <div class="carousel-inner">
                
                <div class="carousel-item active">
                    <img class="d-block  w-100" src="@/assets/img/slides/slide0.jpg" alt="First slide">
                    <!-- <div class="overlay"></div> -->
                    <div class="carousel-caption d-none d-md-block">
                        <!-- <div class="carousel-caption__slide-title">HABITAT</div> -->
                        <!-- <div class="carousel-caption__slide-heading">LATIN AMERICA</div> -->
                    </div>

                </div>
                <div class="carousel-item">
                <img class="d-block  w-100" src="@/assets/img/slides/slide1.jpg" alt="Second slide">
                    <!-- <div class="overlay"></div> -->
                    <div class="carousel-caption d-none d-md-block">
                        <!-- <div class="carousel-caption__slide-title">LIMA</div> -->
                        <!-- <div class="carousel-caption__slide-heading">PERU</div> -->
                    </div>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="@/assets/img/slides/slide2.jpg" alt="third slide">
                    <!-- <div class="overlay"></div> -->
                    <div class="carousel-caption d-none d-md-block">
                        <!-- <div class="carousel-caption__slide-title">MEDELLIN</div> -->
                        <!-- <div class="carousel-caption__slide-heading">COLOMBIA</div> -->
                    </div>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="@/assets/img/slides/slide3.jpg" alt="fourth slide">
                    <!-- <div class="overlay"></div> -->
                    <div class="carousel-caption d-none d-md-block">
                        <!-- <div class="carousel-caption__slide-title">MANAGUA</div> -->
                        <!-- <div class="carousel-caption__slide-heading">NICARAGUA</div> -->
                    </div>
                </div>
            </div>
              <a class="carousel-control-prev zPos" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next zPos" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
          
             <div class="media">
                <img src="@/assets/img/mediaPhone.png">
                <img src="@/assets/img/mediaFace.png">
                <img src="@/assets/img/mediaEmail.png">
            </div>
        </div>
        <section class="divider">
            <div class="divider_Title">
                <hr>
                <h1>about</h1>   
                <hr>    
            </div> 
        </section>

        
        <section class="about-text background-1 rowFlex spaceAround">
            <div class="vision">
                <h1>Vision</h1>
                <p>To reach out to citizens , businesses, students & faculty, city officials, and other organizations, to collaborate in accelerating innovation in Latin American cities. </p>
            </div>
            <div class="vl"></div>
            <div class="mission columnFlex">
                <h1>Mission</h1>
                <p>hab-la is a digital communication and research  platform to raise awareness on the challenges faces by Latin American cities.  It serves as an instrument to create a dynamic relationship between smart citizens and smart officials to build a community to develop smart cities.</p>
            </div>
            <div class="overlayTwo"></div>
        </section>
<!--    SECTION NEWS -->
        <section class="divider">
            <div class="divider_Title">
                <hr>
                <h1>news</h1>   
                <hr>   
                <p>latest discussions</p> 
            </div> 
        </section>   
        
        <section class="news-content rowCenter bR">
            <div class="w-row columnCenter flexWrapAround rowCenter">
                <div class="w-row-img ">
                    <img src="@/assets/img/slides/slide0.jpg">
                    <div class="overlayText"><p>INFRASTRUCTURE</p> </div>
                    <div class="overlayPic"></div>
                </div>
                <div class="h-row description">
                    <h2>Lima without a plan after 200 years</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt fugiat exercitationem nostrum, laboriosam amet, magni voluptas illo voluptates numquam, distinctio cumque quidem quas ea laudantium porro tenetur error quisquam soluta?</p>
                </div>
            </div>
            <div class="w-row flexWrapAround">
                <div class="h-row back-color-h-row gYtoO columnCenter ">
                     <div class="h-row-img rowCenter"> 
                        <img src="@/assets/img/newsPic.png" class="img-fluid">
                        <div class="overlayText-h-r"><p>INFRASTRUCTURE</p> </div>
                        <div class="overlay-h-r"></div> 
                    </div> 
                    <div class="description">
                        <h2>More than a thousand pounds of garbage collected after protests in Tegucigalpa</h2>
                        <p>A transportation strike in Tegucigalpa delayed trash collection in the city by three days. 
                        Although the right to protest has to be protected, it should not compromise the health of all citizens.</p>
                    </div>
                </div>
                
                <div class="h-row back-color-h-row gOtoR columnCenter ">
                    <div class="h-row-img rowCenter">
                             <img src="@/assets/img/newsPic.png" class="img-fluid">
                            <div class="overlayText-h-r"><p>INFRASTRUCTURE</p> </div>
                            <div class="overlay-h-r"></div>      
                    </div>
                    <div class="description">
                        <h2>Cleaning up the Bogota river</h2>
                        <p>The recuperation of the Bogota River is essential to preserve the urban ecosystem of the city. 
It not only helps to maintain the flora and fauna and reduce contamination, but also becomes 
a green corridor that includes public space for an increased social cohesion.
</p>
                    </div>
                </div>
                
            </div>
            <div class="w-row flexWrapAround">
                <div class="h-row back-color-h-row gOtoR columnCenter ">
                     <div class="h-row-img rowCenter"> 
                        <img src="@/assets/img/newsPic.png" class="img-fluid">
                        <div class="overlayText-h-r"><p>INFRASTRUCTURE</p> </div>
                        <div class="overlay-h-r"></div> 
                    </div> 
                    <div class="description">
                        <h2>More than a thousand pounds of garbage collected after protests in Tegucigalpa</h2>
                        <p>A transportation strike in Tegucigalpa delayed trash collection in the city by three days. 
                        Although the right to protest has to be protected, it should not compromise the health of all citizens.</p>
                    </div>
                </div>
                
                <div class="h-row back-color-h-row gYtoO columnCenter ">
                    <div class="h-row-img rowCenter">
                             <img src="@/assets/img/newsPic.png" class="img-fluid">
                            <div class="overlayText-h-r"><p>INFRASTRUCTURE</p> </div>
                            <div class="overlay-h-r"></div>      
                    </div>
                    <div class="description">
                        <h2>Cleaning up the Bogota river</h2>
                        <p>The recuperation of the Bogota River is essential to preserve the urban ecosystem of the city. 
It not only helps to maintain the flora and fauna and reduce contamination, but also becomes 
a green corridor that includes public space for an increased social cohesion.
</p>
                    </div>
                </div>
                
            </div>
            <div class="w-100 bottom-sec">
                <a href="" class="button">SEE MORE POSTS</a> 
           </div>
        </section>    

        <section class="divider">
            <div class="divider_Title">
                <hr>
                <h1>resources</h1>   
                <hr>   
                <p></p> 
            </div> 
        </section>

        <section class="about-text background-1 columnFlex rowCenter columnCenter">
            <div class="wrap-content columnFlex columnCenter">
                <div class="vision">
                    <p class="text-center">Download and upload information to share the knowledge</p>
                </div>
                <div class="mission rowFlex spaceAround">
                    <label>download</label>
                    <label>upload</label>
                </div>
            </div>
           <div class="overlayTwo"></div>
        </section>

        <section class="divider">
            <div class="divider_Title">
                <hr>
                <h1>events</h1>   
                <hr>   
                <p>Please follow us on facebook for additional news, articles
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
                <h1>join</h1>   
                <hr>   
                <p>register to know more about <strong> hab-la</strong>, upload and download information, and 
                    Participate in our blog
                </p> 
            </div> 
        </section>
        <section class="form-wrap background-3 rowCenter">
            <div class="form-innerWrap  ">
                <div class="form-title">
                    <h3>register</h3>
                </div>
                <div class="flexCenterCenter ">
                    <form class="formTag">
                        <div class="form-inputWrap">
                            <div class="inputW">
                                <div class="form-left">
                                    <label>NAME:</label>
                                    <input type="" >
                                    <label>EMAIL</label>
                                    <input type="">
                                    <label>WHICH CITY ARE YOU FROM?</label>
                                    <input type="">
                                </div>
                            </div>                            
                            <div class="form-right">
                                <label>COMMENTS</label>
                                <textarea name="" id="" rows="10" cols="50"></textarea>
                            </div>
                        </div>
                        <div class="form-btn">
                            <input type="button" value="SEND">
                        </div>
                    </form>
                </div>
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
