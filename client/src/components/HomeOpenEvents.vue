<template>
  <div class="home-open-events">

    <router-link 
      v-for="event in events"
      :key="event.id"
      :to="`/event/${event.id}`"
      :style="{ 'background-image': `url(${event.img})` }"
      tag="div"
      class="event"
    >
      <div class="overlay">
        <div class="event-title">
          <h4>{{ event.title }}</h4>
        </div>
        <div class="event-footer">
          <div class="date">{{ event.date | dateTime }}</div>
          <div class="more">Подробнее &#8594;</div>
        </div>
      </div>
    </router-link>

  </div>
</template>


<script>
export default {
  name: 'home-open-events',

  data: () => ({
    events: [
      {
        id: 1,
        title: 'Кино в горах',
        date: new Date().toJSON(),
        img: 'https://washington-org.s3.amazonaws.com/s3fs-public/georgetown-sunset-cinema-on-the-waterfront_credit-sam-kittner-georgetown-bid.jpg'
      },
      {
        id: 2,
        title: 'ВелоВечер',
        date: new Date().toJSON(),
        img: 'https://i2.wp.com/cycloscope.net/wp-content/uploads/2020/03/pxfuel.com_.jpg?resize=800%2C520&ssl=1'
      },
      {
        id: 3,
        title: 'Пик Фурманова',
        date: new Date().toJSON(),
        img: 'https://x-travels.ru/wp-content/uploads/2013/01/gora.jpg'
      },
      {
        id: 4,
        title: 'Пик Молодежный',
        date: new Date().toJSON(),
        img: 'https://gorny-club.kz/wp-content/uploads/2017/01/5582be1715eb2.jpg'
      },
    ]
  })
}
</script>
