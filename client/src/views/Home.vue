<template>
  <div id="home">
    <HomeCategories />

    <h3 class="title">Открытые <b>Мероприятия</b></h3>

    <HomeOpenEvents />

    <h3 class="title">Будущие <b>Мероприятия</b></h3>

    <HomeOtherEvents />

    <h3 class="title">Прошедшие <b>Мероприятия</b></h3>

    <HomeOtherEvents />

  </div>
</template>

<script>
import HomeCategories from '@/components/HomeCategories';
import HomeOpenEvents from '@/components/HomeOpenEvents';
import HomeOtherEvents from '@/components/HomeOtherEvents';
import {mapActions} from "vuex";

export default {
  name: 'home',

  components: {
    HomeCategories,
    HomeOpenEvents,
    HomeOtherEvents
  },

  methods: {
    ...mapActions(['changeHeader']),
  },

  mounted() {
    this.changeHeader({
      title: 'Мероприятия',
      hasReturn: false
    });
  }
}
</script>
