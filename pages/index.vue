<template>
  <section class="section">
    <div class="hero is-info">
      <div class="hero-body">
        
          <h1 class="title is-1">나를 소개합니다</h1>
          
      </div>
    </div>

    <nuxt-link to ="/stat" class = "navbar-item">통계</nuxt-link>
    
    <aside class="menu is-active">
      <p class="menu-label">
        메뉴
      </p>
      <ul class="menu-list">
        <li> <nuxt-link to ="/stat" class = "navbar-item">통계</nuxt-link></li>
      </ul>
    </aside>
  </section>
</template>
