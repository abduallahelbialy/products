<template>
  <div class="Frequently">
    <div class="container">
      <div class="row">
        <div class="title text-center mb-3">
          <h1>{{ $t("message.Frequently") }}</h1>
        </div>
        <div
          class="d-flex justify-content-center align-items-center flex-wrap mt-3"
        >
          <swiper
            :slidesPerView="1"
            :centeredSlides="false"
            :slidesPerGroupSkip="1"
            :grabCursor="true"
            :keyboard="{
              enabled: true,
            }"
            :breakpoints="{
              '769': {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              '1024': {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }"
            :navigation="true"
            :pagination="{
              clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="silder in silders" :key="silder.id">
              <div class="card-product d-flex flex-column align-items-center">
                <div class="tir">
                  <p>{{ $t(silder.text) }}</p>
                </div>
                <div class="img-prod">
                  <img :src="silder.img" class="img-fluid" alt="img-prod" />
                </div>
                <div class="price d-flex flex-column align-items-center mb-4">
                  <span>{{ silder.price }}</span>
                  <div class="stars">
                    <Rating v-model="value" :stars="5" />
                  </div>
                </div>
                <div class="cart position-relative mb-2">
                  <div
                    class="imgcart position-absolute"
                    @click="addToCart(silder)"
                  >
                    <div class="imgga">
                      <img :src="silder.imgcart" alt="" class="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from "primevue/rating";
import { ref } from "vue";
import { useCartStore } from "../stores/cart"; // استيراد store
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Pagination } from "swiper/modules";
import img1 from "../assets/2acbc9f2bccc3e9f7ade1fad5e50a36f0c0a8564.png";
import img3 from "../assets/f462465a5523aeabae83d225148c7e2899286cf7.png";
import img4 from "../assets/038340680ce91d36ade3703531ba4301d8238e31.png";
import img2 from "../assets/shopping-cart-icon.png";

export default {
  name: "Frequently",
  data() {
    return {
      value: ref(3),
      modules: [Keyboard, Scrollbar, Pagination],
      silders: [
        {
          id: 1,
          text: "sildertext.1",
          img: img1,
          imgcart: img2,
          price: "EUR 1,050.00",
        },
        {
          id: 2,
          text: "sildertext.2",
          img: img3,
          imgcart: img2,
          price: "EUR 1,570.00",
        },
        {
          id: 3,
          text: "sildertext.3",
          img: img4,
          imgcart: img2,
          price: "EUR 1,050.00",
        },
        {
          id: 4,
          text: "sildertext.3",
          img: img4,
          imgcart: img2,
          price: "EUR 1,050.00",
        },
      ],
    };
  },
  components: { Rating, Swiper, SwiperSlide },
  setup() {
    const cartStore = useCartStore();

    function addToCart(item) {
      cartStore.addItem(item);
    }

    return {
      addToCart,
    };
  },
};
</script>

<style scoped>
.Frequently {
  padding: 20px 0;
  margin-bottom: 10%;
}
.title h1 {
  color: black;
  font-weight: normal;
  position: relative;
  font-size: 22px;
  display: inline-block;
  font-family: "Pacifico", cursive;
}

.title h1::after {
  position: absolute;
  content: "";
  width: 140px;
  height: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 30px;
  background: #e7e7e7;
}
.card-product {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 5px 30px;
  border: 3px solid #e4e4e4;
}
.img-prod {
  max-width: 240px;
}
.stars {
  color: #ffc107;
}
.price span {
  font-size: 25px;
}
.imgcart {
  top: -26px;
  padding: 0px 5px;
  cursor: pointer;
  right: -150px;
  background-color: #ffffff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.tir p {
  font-size: 20px;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
