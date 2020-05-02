<template>
  <div id="event-payment">

    <div id="payment-1" v-if="paymentStep === 1">
      <div class="ticket">

        <div class="ticket-header">
          <div class="ticket-image" :style="{'background-image': `url(${event.img})`}"></div>
          <div class="ticket-info">
            <h4 class="event-title">{{ event.title }}</h4>
            <small class="event-organizer">Организатор: {{ event.organizer.title }}</small>

            <p class="date">{{ event.date | dateTime }}</p>
          </div>
        </div>

        <div class="item-price">
          <div class="price">{{ event.price }} &#8376;</div>
          <div class="counter">
            <button class="decrement" disabled>-</button>
            <div class="qty">1</div>
            <button class="increment" disabled>+</button>
            <p>шт.</p>
          </div>
        </div>

      </div>

      <div class="additional_items">

        <div 
          v-for="item in event.additional_items"
          :key="item.id"
          class="item"
        >
          <h4 class="item-title">{{ item.title }}</h4>
          <div class="item-price">
            <div class="price">{{ item.price }} &#8376;</div>
            <div class="counter">
              <button class="decrement">-</button>
              <div class="qty">1</div>
              <button class="increment">+</button>
              <p>шт.</p>
            </div>
          </div>
        </div>

      </div>

      <h3 class="total-price">Итого: <span>16 500 &#8376;</span></h3>

      <select class="payment-method-select">
        <option selected hidden>&#8595; Выберите способ оплаты *
        </option>
        <option 
          v-for="method in event.payment_methods"
          :key="method.id"
          :value="method.id"
          class="option"
        >{{ method.title }}</option>
      </select>

      <button class="purchase-btn">Перейти к оплате</button>

    </div>

    <div id="payment-instructions" v-if="paymentStep === 'kaspi'">
      <h3 class="title">Для оплаты:</h3>

      <div class="instructionSteps">
        <div class="step">
          <div class="index">1</div>
          <div class="description">
            <p>
              Откройте приложение 'Kaspi.kz', в разделе 'Переводы' выберите 'Клиенту Kaspi'
            </p>
          </div>
        </div>

        <div class="step">
          <div class="index">2</div>
          <div class="description">
            <p>
              Выберите опцию 'Перевод' по номеру карты и введите следующие данные:
            </p>

            <div class="data">
              <p>
                Номер карты: <span>5169 4971 0307 4005</span>
              </p>
              <p>
                Сумма перевода: <span>16 500 &#8376;</span>
              </p>
              <p>
                Сообщение получателю: <span>bz04qw</span>
              </p>
            </div>
          </div>
        </div>

        <div class="step">
          <div class="index">3</div>
          <div class="description">
            <p>
              Нажмите 'Перевести'
            </p>
          </div>
        </div>
      </div>

      <div class="agreement">
          <input id="agreement" type="checkbox">
          <label for="agreement">
            Я выполнил(-а) все шаги и уверен(-а) в достоверности введенных мной данных 
          </label>
      </div>

      <button class="finish-btn">Завершить оплату</button>

    </div>

  </div>
</template>

<script>
export default {
  name: 'event-payment',

  data: () => ({
    paymentStep: 1,
    counter: 0,
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
      additional_items: [
        {
          id: 1,
          title: 'Палатка 3х местная',
          price: 3000
        },
        {
          id: 2,
          title: 'Спальный мешок',
          price: 1500
        },
        {
          id: 3,
          title: 'Каремат',
          price: 500
        },
      ],
      payment_methods: [
        {
          id: 1,
          title: 'Kaspi перевод'
        },
        {
          id: 1,
          title: 'Наличными на месте'
        }
      ],
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    },
  }),

  methods: {
    likeHandler() {
      this.liked = !this.liked;
    }
  }
}
</script>
