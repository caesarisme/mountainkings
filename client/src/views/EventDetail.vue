<template>
  <div id="event-detail">

    <div class="event-image" :style="{'background-image': `url(${event.img})`}">
      <button @click="likeHandler" class="like-btn">
        <i v-if="liked" class="fas fa-heart"></i>
        <i v-else class="far fa-heart"></i>
      </button>
    </div>

    <div class="event-info">
      <h3 class="event-title">{{ event.title }}</h3>
      <small class="event-organizer">Организатор: {{ event.organizer.title }}</small>

      <div class="event-details">
        <p>Дата мероприятия: <span>{{ event.date | dateTime }}</span></p>
        <p>Базовый тариф: <span>{{ event.price }} &#8376;</span></p>
        <p>Способы оплаты: <span 
          v-for="method in event.payment_methods"
          :key="method.id"
        >{{ method.title }},</span></p>
      </div>

      <router-link 
        :to="`/event-payment/${event.id}`"
        tag="button"
        class="purchase-btn"
      >Купить билет</router-link>
      <button class="contact-btn">Связаться с организатором</button>

      <h3 class="title">В билет уже включено:</h3>
      <ul class="event-basic-services">
        <li 
          v-for="service in event.basic_services"
          :key="service.id"
        >{{ service.title }}</li>
      </ul>

      <h3 class="title">О мероприятии:</h3>
      <p class="event-description">{{ event.description }}</p>
    </div>

    

  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'event-detail',

  data: () => ({
    liked: false,
    event: {
      id: 1,
      title: 'Кино в горах',
      organizer: {
        id: 1,
        title: 'MountainKings.kz'
      },
      date: new Date().toJSON(),
      price: 2500,
      img: 'https://washington-org.s3.amazonaws.com/s3fs-public/georgetown-sunset-cinema-on-the-waterfront_credit-sam-kittner-georgetown-bid.jpg',
      basic_services: [
        {
          id: 1,
          title: 'Проезд из города до места',
        },
        {
          id: 2,
          title: 'Сэндвич и вода',
        },
        {
          id: 3,
          title: 'Сопровождение инструктора',
        },
        {
          id: 4,
          title: 'Доступ в кино',
        },
      ],
      payment_methods: [
        {
          id: 1,
          title: 'Kaspi перевод'
        }
      ],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    },
  }),

  methods: {
    ...mapActions(['changeHeader']),

    likeHandler() {
      this.liked = !this.liked;
    }
  },

  mounted() {
    this.changeHeader({
      title: this.event.title,
      hasReturn: true
    })
  }
}
</script>
