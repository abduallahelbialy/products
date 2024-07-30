<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="text-home">
          <div class="title text-white">
            <h1 v-html="$t('message.power')"></h1>
            <p>
              {{ $t("message.Over") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pag-card mb-3">
    <div class="des">
      <div
        class="img-des d-flex justify-content-between align-items-center flex-wrap"
      >
        <img
          :src="img.photo"
          alt=""
          class="img-fluid"
          v-for="img in imgs"
          :key="img.us"
        />
      </div>
    </div>
  </div>
  <Product />
  <Frequently/>
</template>

<script>
import img1 from "../assets/Our brands.png";
import img2 from "../assets/Shape.png";
import img3 from "../assets/kubota-logo.png";
import img4 from "../assets/kverneland-group.png";
import img5 from "../assets/kverneland-logo.png";
import Product from "../views/Product.vue";
import Frequently from "../views/Frequently.vue";
export default {
  name: "Home",
  data() {
    return {
      imgs: [
        { us: 1, photo: img1 },
        { us: 2, photo: img2 },
        { us: 3, photo: img3 },
        { us: 4, photo: img4 },
        { us: 5, photo: img5 },
      ],
    };
  },
  components: { Product,Frequently },
};
</script>

<style scoped>
.home {
  padding: 20px 0;
  height: 100vh;
  background-position: center;
  background-image: url(../assets/9db287a4b234b9a586096dff7e05c85ff8921fc6.png);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-home {
  background-color: rgb(0 0 0 / 50%);
  width: 360px;
  height: 40vh;
  margin-left: auto;
}
.title {
  color: white;
}
.pag-card {
  position: relative;
  top: -25px;
}
.des {
  background-color: white;
  margin: auto;
  width: 90%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 18px 20px;
}
@media (max-width: 477px) {
  .img-des {
    flex-direction: column;
    align-items: center;
  }
  .img-des img {
    margin-bottom: 20px;
  }
}
</style>
