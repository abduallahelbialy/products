<template>
  <div class="ProductDetails">
    <div class="backdestils">
      <div class="text text-white">
        <router-link to="/">{{ $t("message.Go") }}</router-link>

        <div class="description mt-3">
          <h1 v-html="$t('message.Dewalt')"></h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="d-flex justify-content-between flex-wrap pt-4 gap-3">
          <div class="text-info flex-grow-1">
            <div class="bord d-flex justify-content-between align-items-center">
              <div class="one d-flex flex-column">
                <h2>{{ $t($route.query.text) }}</h2>
                <div class="d-flex gap-4 align-items-center flex-wrap-reverse">
                  <span style="color: #ffc107; font-size: 22px"
                    >{{ $t("message.EUr") }} 1,050.00</span
                  >
                  <span class="text-black-50">{{
                    $t("message.exclusive")
                  }}</span>
                </div>
              </div>
              <div class="two">
                <div class="d-flex flex-column">
                  <p class="text-black-50">{{ $t("message.reviews") }}</p>
                  <div class="stars">
                    <Rating v-model="value" />
                  </div>
                </div>
              </div>
            </div>
            <div class="text-prr mt-3 text-dark">
              <p v-html="$t('message.Pellentesque')"></p>
              <p class="mb-4" v-html="$t('message.eleifend')"></p>
              <p class="text-black-50">
                {{ $t("message.valid") }}
              </p>
            </div>
          </div>
          <div class="info-imgsa d-flex flex-column">
            <div class="imgprod">
              <img
                :src="$route.query.img"
                alt="Product Image"
                class="img-fluid"
              />
            </div>
            <div
              class="border-twoimg d-flex gap-2 flex-wrap justify-content-end mt-2"
            >
              <div class="border-child">
                <img
                  :src="$route.query.img"
                  alt="Product Image"
                  class="img-fluid"
                />
              </div>
              <div class="border-child">
                <img
                  :src="$route.query.img"
                  alt="Product Image"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="Overview">
          <div class="title">
            <h1>{{ $t("message.ProductOverview") }}</h1>
          </div>
          <div class="text-aill p-2 mb-2">
            <p>
              {{ $t("message.placerat") }}
            </p>
            <p>
              {{ $t("message.Vestibulum") }}
            </p>
            <p class="text-black-50">
              {{ $t("message.functionalities") }}
            </p>
            <p v-html="$t('message.control')"></p>
            <p v-html="$t('message.Documentation')"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from "primevue/rating";
import { ref } from "vue";

export default {
  name: "ProductDetails",
  data() {
    return {
      value: ref(3),
    };
  },
  components: { Rating },
};
</script>

<style scoped>
.ProductDetails {
  padding: 5px 0;
}
.backdestils {
  background-color: black;
  background-size: cover;
  width: 100%;
  height: 40vh;
  background-image: url(../assets/caption-bg.png);
}

.text {
  padding: 30px;
}
.text a {
  background-color: black;
  color: white;
  text-align: center;
  padding: 5px;
  text-decoration: none;
}
.description h1 {
  font-size: 30px;
  line-height: 2;
}
.stars {
  color: #ffc107;
}
.one h2 {
  font-size: 30px;
  color: #373738;
}
.bord {
  border-bottom: 15px solid rgb(255 193 7 / 20%);
  border-radius: 4px;
  padding: 12px;
}

.imgprod {
  width: 450px;
  height: 450px;
  margin: auto;
  padding: 10px;
  border: 2px solid #bebebe;
  border-radius: 4px;
}
.border-child {
  width: 70px;
  height: 70px;
  object-fit: cover;
  padding: 5px;
  border: 2px solid #bebebe;
}
.title {
  border-bottom: 15px solid rgb(255 193 7 / 20%);
  border-radius: 4px;
  padding: 7px;
}
.title h1 {
  font-size: 22px;
}
@media (max-width: 477px) {
  .imgprod {
    width: 350px;
    height: 350px;
    margin: auto;
    padding: 10px;
  }
  .description h1 {
    font-size: 24px;
    line-height: 2;
  }
  .one h2 {
    font-size: 20px;
    color: #373738;
  }
}
</style>
