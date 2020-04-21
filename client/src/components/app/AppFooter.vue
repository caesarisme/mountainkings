<template>
  <footer>
    <router-link
      v-for="link in links"
      :key="link.url"
      :to="link.url"
      :exact="link.exact"
      tag="div"
      active-class="active"
      class="footer-item"
    ><i :class="link.iconClass"></i></router-link>
  </footer>
</template>


<script>
export default {
  name: 'app-footer',

  data: () => ({
    links: [
      { url: '/', iconClass: 'fas fa-home', exact: true },
      { url: '/shop', iconClass: 'fas fa-shopping-cart'},
      { url: '/gallery', iconClass: 'fas fa-photo-video'},
      { url: '/contacts', iconClass: 'fas fa-address-book'},
      { url: '/profile', iconClass: 'fas fa-user'}
    ]
  })
}
</script>
