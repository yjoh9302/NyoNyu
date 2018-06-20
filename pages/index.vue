<template>
  <section class="section">
    <div class="hero is-info is-bold">
      <div class="hero-body">
        
          <h1 class="title is-1">Hello</h1>
          <h1 class="title is-1">Please select menu</h1>
          
      </div>
    </div>
    <br>
    <br>
    <div class="columns">
      <div class="column">
    <aside class="menu is-active">
      <p class="menu-label">
        메뉴
      </p>
      <ul class="menu-list">
        <ul>
          <li> <nuxt-link to ="/who" class = "navbar-item">당신은 누구인가요?</nuxt-link></li>
          <li> <nuxt-link to ="/carrer" class = "navbar-item">학력</nuxt-link></li>
          <li> <nuxt-link to ="/study" class = "navbar-item">배운 것</nuxt-link></li>
          <li> <nuxt-link to ="/dream" class = "navbar-item">나의 꿈</nuxt-link></li>
          <li> <nuxt-link to ="/hobby" class = "navbar-item">취미</nuxt-link></li>
          
        </ul>
      </ul>
    </aside>
    </div>
    <div class="column">
      <figure class="image is-128x128 ">
        <img class="image" src="~assets/mypic.jpg" alt="" >
      </figure>
    </div>
    </div>
  </section>
</template>
