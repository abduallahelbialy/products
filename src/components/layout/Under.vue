<template>
  <div class="under">
    <div class="container">
      <div class="row">
        <div
          class=" d-flex justify-content-between align-items-center flex-wrap "
        >
          <div class="logo">
            <img :src="img" alt="" class="img-fluid" />
          </div>
          <div
            class="sdev d-flex justify-content-between gap-3 flex-wrap align-items-center"
          >
            <div class="search-container">
              <input type="text" placeholder="I'm looking for ..." />
              <button>
                <img
                  src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"
                  alt="Search Icon"
                />
              </button>
            </div>
            <div class="bor"></div>
            <div class="cart d-flex gap-2 align-items-center">
              <span>{{ totalItems }}</span>
              <div>{{ $t("message.shopping") }}</div>
            </div>
            <div class="cart-img">
              <router-link to="/cart">
                <img :src="img2" alt="" class="img-fluid" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../../assets/logo.png";
import cart from "../../assets/shopping-cart-icon.png";
import { useCartStore } from '../../stores/cart';

export default {
  name: "under",
  data() {
    return {
      img: logo,
      img2: cart,
    };
  },
  computed: {
    totalItems() {
      const cartStore = useCartStore();
      return cartStore.totalItems;
    },
  },
};
</script>

<style scoped>
.under {
  padding: 20px 0;
}
.search-container {
  display: flex;
  align-items: center;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
}

.search-container input {
  border: none;
  outline: none;
  padding: 3px;
  font-size: 16px;
  flex: 1;
}

.search-container button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.search-container button img {
  width: 20px;
  height: 20px;
}
.bor {
  border-left: 3px solid #c3c3c3;
}
.cart span {
  width: 22px;
  height: 22px;
  background-color: gray;
  border-radius: 50%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width:477px) {
    .logo{
        margin: auto;
        padding-bottom: 13px;
        width: 90px;
    }
    .search-container{
        margin: auto;
        padding: 7px 11px;
    }
}
</style>
