<template>
    <div>
        <header class="padding-menu-3">
            <div class="wrap-bra-bur">
                <div class="nav-brand">
                  <router-link tag="a" :to="{name:'home'}" class="nav-link"> 
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
            <div class="wrap-links-search display-none" id="nav-links">
                <div class="nav-links">
                    <div class="wrap-ul">
                        <ul class="navbar-nav">
                            <li class="nav-item" data-route="sec-B" id="sec-A"><a onclick="closeMenu()" class="nav-link" href="#about">about</a></li>
                            <li class="nav-item" data-route="sec-B" id="sec-B"><a class="nav-link" href="#news">news</a></li>
                            <li class="nav-item" data-route="sec-C" id="sec-C"><a class="nav-link" href="#resources">resources</a></li>
                            <li class="nav-item" data-route="sec-D" id="sec-D"><a class="nav-link" href="#events">events</a></li>
                            <li class="nav-item" data-route="sec-E" id="sec-E"><a class="nav-link" href="#join">join</a></li>
                            <li class="nav-item" data-route="sec-F" id="sec-F"><a class="nav-link" href="#login">log in</a></li>
                        </ul>
                    </div>
                </div>
            
                <div class="nav-search">
                    <input type="text" class="input-search">
                    <img class="search-icon" alt="Vue logo" src="@/assets/img/search.png">
                </div>
            </div>
        </header>

            
    </div>
</template>




	
