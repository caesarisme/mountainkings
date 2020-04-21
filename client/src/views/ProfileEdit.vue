<template>
  <div id="profile-edit">

    <form>
      <div class="avatar-field">
        <div
          class="avatar"
          :style="{ 'background-image': `url('${ user.avatar }')` }"
        ></div>
        <button class="upload-btn" disabled>
          Загрузить фото
        </button>
      </div>

      <div class="field">
        <label for="input-first-name">* Имя:</label>
        <input id="input-first-name" type="text" placeholder="Ваше имя...">
      </div>

      <div class="field">
        <label for="input-last-name">* Фамилия:</label>
        <input id="input-last-name" type="text" placeholder="Ваша фамилия...">
      </div>

      <div class="field">
        <label for="input-phone">* Номер телефона:</label>
        <input id="input-phone" type="number" placeholder="87xxxxxxxxx">
      </div>

      <div class="field">
        <label for="input-email">Email:</label>
        <input id="input-email" type="text" placeholder="example@mail.com...">
      </div>

      <button type="submit" class="submit-btn">Сохранить</button>
    </form>

  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: "profile-edit",

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
    ...mapActions(['changeHeader'])
  },

  mounted() {
    this.changeHeader({
      title: 'Редактировать профиль',
      hasReturn: true
    })
  }
}
</script>
