<template>
  <div class="cart-page">
    <div v-if="cartItems.length === 0">
      <h1 class="text-center mt-2">{{ $t("message.cart") }}</h1>
    </div>
    <div v-else>
      <ul class="d-flex justify-content-around flex-wrap m-auto">
        <li v-for="item in cartItems" :key="item.id" class="position-relative">
          <div class="card-product d-flex flex-column align-items-center mb-3">
            <button @click="removeItem(item.id)" class="remove-btn">X</button>
            <div class="tir">
              <p>{{$t(item.text)  }}</p>
            </div>
            <div class="img-prod">
              <img :src="item.img" alt="item image" class="img-fluid" />
            </div>
            <div class="price d-flex flex-column align-items-center mb-4">
              <p>{{ item.price }}</p>
              <div class="stars">
                <Rating v-model="value" :stars="5" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/cart";
import Rating from "primevue/rating";
import { ref } from "vue";

export default {
  name: "CartPage",
  data (){
    return{
        value:ref(5)
    }
  },
  setup() {
    const cartStore = useCartStore();
    const removeItem = (id) => {
      cartStore.removeItem(id);
    };
    return {
      cartItems: cartStore.items,
      removeItem,
    };
  },
  components: {
    Rating,
  },
};
</script>

<style scoped>
.cart-page {
  padding: 20px 0;
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
li {
  list-style: none;
  position: relative;
}
.remove-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  cursor: pointer;
}
</style>
