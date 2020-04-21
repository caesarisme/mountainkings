<template>
  <div id="profile">

    <div class="profile-main">
      <div
        class="avatar"
        :style="{ 'background-image': `url('${ user.avatar }')` }"
      ></div>
      <div class="info">
        <h3 class="name">{{ user.first_name }} {{ user.last_name }}</h3>

        <small>Баланс:</small>
        <div class="balance">{{ user.balance || 0 }} &#8376;</div>
      </div>
    </div>

    <div class="additional-info">
      <p><i class="fas fa-phone"></i> <span>Номер телефона:</span> {{ user.phone }}</p>
      <p><i class="fas fa-envelope"></i> <span>Email:</span> {{ user.email }}</p>
      <p><i class="fas fa-graduation-cap"></i> <span>ВУЗ:</span> {{ user.university.title }}</p>
    </div>

    <div class="actions">
      <router-link
        class="action"
        to="/profile/edit"
        tag="div"
      >
        <div class="title">Редактировать профиль</div>
        <div>&#8594;</div>
      </router-link>

      <router-link
        class="action"
        to="#"
        tag="div"
      >
        <div class="title">Мои покупки</div>
        <div>&#8594;</div>
      </router-link>
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "profile",

  data: () => ({
    user: {
      avatar: 'https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/280x178_2',
      first_name: 'Аватар',
      last_name: 'Петрович',
      balance: 3000,
      phone: '87780018835',
      email: 'example@gmail.com',
      university: {
        title: 'Suleyman Demirel University'
      }
    }
  }),

  methods: {
    ...mapActions(['changeHeader']),
  },

  mounted() {
    this.changeHeader({
      title: 'Профиль',
      hasReturn: false
    });
  }
}
</script>
