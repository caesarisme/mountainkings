<template>
  <div id="no-content">
    <p>Упс... тут пока ничего нет!</p>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'no-content',

  methods: {
    ...mapActions(['changeHeader'])
  },

  mounted() {
    this.changeHeader({
      title: 'Ничего нет!',
      hasReturn: false
    })
  }
}
</script>

<style scoped>
#no-content {
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
