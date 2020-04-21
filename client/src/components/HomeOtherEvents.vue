<template>
  <div class="other-events">
    
    <div 
      v-for="event in events"
      :key="event.id"
      :style="{ 'background-image': `url(${event.img})` }"
      class="event"
    >
      <div class="overlay">
        <div class="event-title">
          <h4>{{ event.title }}</h4>
        </div>
        <div class="event-date">
          {{ event.date | dateTime }}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home-other-events',

  data: () => ({
    events: [
      {
        id: 1,
        title: 'Большое Алматинское Озеро',
        // date: new Date().toJSON(),
        img: 'https://3.bp.blogspot.com/-EKVaYFJBDKY/XF34v-kZXYI/AAAAAAAAFZo/ptbK0EcUUDgDe9EMXxKEd01AB8s8-tJAwCHMYCw/s1600/nature-landscape-summer-lake-forest-mountain-church-boat.jpg'
      },
      {
        id: 2,
        title: 'Пик Нурсултан',
        date: new Date().toJSON(),
        img: 'https://lh3.googleusercontent.com/proxy/NZ-SDEvkuYLN5f7us9rfNOo72wjG7jbL4AfKK-5e-O2xqYWSKR6GewbdcrtjBk-S-TS0r5U9_80hHHRPmGAJC4W9qaNKpV4nHA7ucLV5aaGvTM8'
      },
      {
        id: 3,
        title: 'Пик Амангелди',
        // date: new Date().toJSON(),
        img: 'https://plusone.kz/static/uploaded/foto/29.23.jpg'
      },
      {
        id: 4,
        title: 'Ice Party',
        date: new Date().toJSON(),
        img: 'https://img.prosports.kz/news/content/162_0a405ba8a2e7ee2b6e75d2a769300aeb.jpg'
      },
    ]
  })
}
</script>
