<template>
    <div>
        <header class="padding-menu-3">
            <div class="wrap-bra-bur">
                <div class="nav-brand">
                  <router-link tag="a" :to="{name:'home'}" class="nav-link" onclick="topFunction()"> 
                      <img class="header__logo" alt="Vue logo" src="@/assets/img/hab-la_logoH40.png">
                    </router-link>
                </div>
                <div data-aos="fade-left" class="burger-menu">
                    <input id="input-burger" type="checkbox" onclick="showMenu()">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="wrap-links-search" id="nav-links">
                 <div class="wrap-nav">
                        <ul class="wrap-links" id="te1">
                            <li class="nav-item" data-route="sec-B" id="sec-A"><a onclick="showMenu()" class="nav-link" href="#about">about</a></li>
                            <li class="nav-item" data-route="sec-B" id="sec-B"><a onclick="showMenu()" class="nav-link" href="#news">news</a></li>
                            <li class="nav-item" data-route="sec-C" id="sec-C"><a onclick="showMenu()" class="nav-link" href="#resources">resources</a></li>
                            <li class="nav-item" data-route="sec-D" id="sec-D"><a onclick="showMenu()" class="nav-link" href="#events">events</a></li>
                            <li class="nav-item" data-route="sec-E" id="sec-E"><a onclick="showMenu()" class="nav-link" href="#join">join</a></li>
                            <li class="nav-item" data-route="sec-F" id="sec-F"><a onclick="showMenu()" class="nav-link" href="#login">log in</a></li>
                        </ul>
                </div>
               
                <div class="nav-search">
                    <input type="text" class="input-search">
                    <img class="search-icon" alt="Vue logo" src="@/assets/img/search.png">
                </div>
            </div>
        </header>

            
    </div>
</template>




	
