var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'Lorem ipsum',
    image: './assets/vmSocks-green-onWhite.jpeg',
    inventory: 100,
    details: ['aaaa', 'bbbb', 'cccc'],
    variants: [
      {
        id: 111,
        color: 'green',
      },
      {
        id: 112,
        color: 'blue',
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },
  },
});
