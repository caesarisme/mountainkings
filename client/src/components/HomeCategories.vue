<template>
  <ul class="home-categories-list">
    <router-link 
      to="/"
      tag="li"
      active-class="active"
      exact
    >Все</router-link>

    <router-link 
      v-for="category in categories" 
      :key="category.url"
      :to="category.url"
      active-class="active"
      tag="li"
      exact
    >{{ category.title }}</router-link>
  </ul>
</template>

<script>
export default {
  name: 'home-categories',

  data: () => ({
    categories: [
      { title: '☀️ Летние', url: '/?category=1' },
      { title: '❄️ Зимние', url: '/?category=2' },
      { title: '🗻 Походы', url: '/?category=3' },
      { title: '🎉 Развлечения', url: '/?category=4' },
    ]
  }),

  methods: {
  }
}
</script>
