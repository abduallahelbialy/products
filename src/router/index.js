import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import Product from "../views/Product.vue";
import Frequently from "../views/Frequently.vue";
import Cart from "../views/Cart.vue";
import ProductDetails from "../views/ProductDetails.vue";
import Errorpage from "../views/Errorpage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/product",
      name: "Product",
      component: Product,
    },
    {
      path: "/Frequently",
      name: "Frequently",
      component: Frequently,
    },
    {
      path: "/cart",
      name: "CartPage",
      component: Cart,
    },
    {
      path: "/details/:id",
      name: "details",
      component: ProductDetails,
      props: (route) => ({ img: route.query.img, text: route.query.text }),
    },
    {
      path: "/:cathAll(.*)",
      name: "ErrorPage",
      component: Errorpage,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router
