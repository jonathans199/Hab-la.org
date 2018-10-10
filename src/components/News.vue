<template>
    <div>
        <section class="divider sec-B">
            <div class="divider_Title">
                <hr>
                <h1 data-aos="fade-left"><a id="news">news</a></h1>   
                <hr>   
                <p data-aos="fade-right">latest discussions</p> 
            </div> 
        </section>   
        
         <section class="news-content rowCenter bW">
            <div class="w-row columnCenter flexWrapAround rowCenter bR padding-up-down">
                <div  class="w-row-img ">
                    <img src="@/assets/img/slides/slide0.jpg" class="img-fluid">
                    <div class="overlayText"><p>INFRASTRUCTURE</p> </div>
                    <div class="overlayPic"></div>
                </div>
                <div data-aos="fade-up" class="h-row description title-description">
                    <h2>Lima without a plan after 200 years</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt fugiat exercitationem nostrum, laboriosam amet, magni voluptas illo voluptates numquam, distinctio cumque quidem quas ea laudantium porro tenetur error quisquam soluta?</p>
                </div>
            </div>
            <div class="w-row flexWrapAround">
                <div class="h-row back-color-h-row bW columnCenter padding-around">
                     <div  class="h-row-img rowCenter"> 
                        <img src="@/assets/img/newsPic.png" class="img-fluid">
                        <div class="overlayText-h-r"><p>INFRASTRUCTURE</p> </div>
                        <div class="overlay-h-r"></div> 
                    </div> 
                    <div data-aos="fade-up" class="description padding-up-down">
                        <h2>More than a thousand pounds of garbage collected after protests in Tegucigalpa</h2>
                        <p>A transportation strike in Tegucigalpa delayed trash collection in the city by three days. 
                        Although the right to protest has to be protected, it should not compromise the health of all citizens.</p>
                    </div>
                </div>
                
                <div class="h-row back-color-h-row bW columnCenter padding-around ">
                    <div  class="h-row-img rowCenter">
                             <img src="@/assets/img/newsPic.png" class="img-fluid">
                            <div class="overlayText-h-r"><p>INFRASTRUCTURE</p> </div>
                            <div class="overlay-h-r"></div>      
                    </div>
                    <div data-aos="fade-up" class="description padding-up-down">
                        <h2>Cleaning up the Bogota river</h2>
                        <p>The recuperation of the Bogota River is essential to preserve the urban ecosystem of the city. 
                            It not only helps to maintain the flora and fauna and reduce contamination, but also becomes 
                            a green corridor that includes public space for an increased social cohesion.
                        </p>
                    </div>
                </div> 
            </div>
           <div class="w-row flexWrapAround">
                <div class="h-row back-color-h-row bW columnCenter padding-around  ">
                     <div class="h-row-img rowCenter"> 
                        <img src="@/assets/img/newsPic.png" class="img-fluid">
                        <div class="overlayText-h-r"><p>INFRASTRUCTURE</p> </div>
                        <div class="overlay-h-r"></div> 
                    </div> 
                    <div data-aos="fade-up" class="description padding-up-down">
                        <h2>More than a thousand pounds of garbage collected after protests in Tegucigalpa</h2>
                        <p>A transportation strike in Tegucigalpa delayed trash collection in the city by three days. 
                        Although the right to protest has to be protected, it should not compromise the health of all citizens.</p>
                    </div>
                </div>
                
                <div class="h-row back-color-h-row bW columnCenter padding-around ">
                    <div  class="h-row-img rowCenter">
                             <img src="@/assets/img/newsPic.png" class="img-fluid">
                            <div class="overlayText-h-r"><p>INFRASTRUCTURE</p> </div>
                            <div class="overlay-h-r"></div>      
                    </div>
                    <div data-aos="fade-up" class="description padding-up-down">
                        <h2>Cleaning up the Bogota river</h2>
                        <p>The recuperation of the Bogota River is essential to preserve the urban ecosystem of the city. 
                            It not only helps to maintain the flora and fauna and reduce contamination, but also becomes 
                            a green corridor that includes public space for an increased social cohesion.
                        </p>
                    </div>
                </div>
                
            </div>
            <div class="w-100 bottom-sec">
                <router-link tag="a" :to="{name:'news'}">
                    <a href="" class="button">SEE MORE POSTS</a> 
                </router-link>
           </div> 
        </section>  
    </div>
</template>