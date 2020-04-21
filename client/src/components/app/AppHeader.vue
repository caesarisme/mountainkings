<template>
  <header :class="{ 'has-return': header.hasReturn }">
    <div
      v-if="header.hasReturn"
      @click="() => $router.go(-1)"
      class="header-return"
    >
      <i class="fas fa-arrow-left"></i>
    </div>

    <div class="title">
      <img 
        v-if="header.title === '[logo]'"
        class="logo"
        src="@/assets/img/logo.png" 
        alt="Mountain Kings"
      >
      <h3 v-else>{{ header.title }}</h3>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app-header',

  computed: {
    ...mapGetters(['header']),
  }
}
</script>
