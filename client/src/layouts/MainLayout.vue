<template>
  <div id="wrapper">
    <AppHeader />

    <main>
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/app/AppHeader';
import AppFooter from '@/components/app/AppFooter';

export default {
  name: 'main-layout',

  components: {
    AppHeader,
    AppFooter
  }
}
</script>
