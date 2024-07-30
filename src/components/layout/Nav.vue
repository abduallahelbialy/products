<template>
  <Top />
  <Under />
  <nav class="navbar navbar-expand-lg">
    <div class="container ">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        ref="navbarContent"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">{{
              $t("message.home")
            }}</router-link>
          </li>

          <li class="nav-item dropdown">
            <router-link
              class="nav-link dropdown-toggle"
              to="/Categories"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ $t("message.Categories") }}
            </router-link>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" to="/">Action</a></li>
              <li>
                <router-link class="dropdown-item" to="/"
                  >Another action</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <router-link class="dropdown-item" to="/"
                  >Something else here</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">{{$t("message.Implements")}}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">{{ $t("message.Projects") }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">{{ $t("message.Service") }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">{{ $t("message.Manuals") }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">{{ $t("message.Contacts") }}</router-link>
          </li>
        </ul>
        
        <div class="lang">
          <button class="btn btn-outline-success" @click="changeLanguage">
            {{ $t("message.changeLang") }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Top from "../layout/Top.vue";
import Under from "../layout/Under.vue";
export default {
  name: "Nav",
  data() {
    return {
      direction: "ltr",
      currentPath: window.location.pathname,
    };
  },
  components: { Top, Under },
  methods: {
    changeLanguage() {
      if (this.$i18n.locale === "en") {
        this.$i18n.locale = "ar";
        this.direction = "rtl";
        document.body.style.direction = "rtl";
      } else {
        this.$i18n.locale = "en";
        this.direction = "ltr";
        document.body.style.direction = "ltr";
      }
    },
    toggleMenu() {
      const navbarContent = this.$refs.navbarContent;
      if (navbarContent.classList.contains("show")) {
        navbarContent.classList.remove("show");
      } else {
        navbarContent.classList.add("show");
      }
    },
    closeMenu() {
      const navbarContent = this.$refs.navbarContent;
      if (navbarContent.classList.contains("show")) {
        navbarContent.classList.remove("show");
      }
    },
    handleClickOutside(event) {
      const navbarContent = this.$refs.navbarContent;
      if (!navbarContent.contains(event.target)) {
        this.closeMenu();
      }
    },
  },
  mounted() {
    this.currentPath = this.$route.path;
    window.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    window.removeEventListener("click", this.handleClickOutside);
  },
  created() {
    this.$watch(
      () => this.$route.path,
      (newPath, oldPath) => {
        this.currentPath = newPath;
      }
    );
  },
};
</script>

<style scoped>
.navbar {
  background-color: #febd17;
}
.navbar-nav a {
  color: #fff !important;
font-weight: 500;
}
.navbar-nav a:focus{
  color: black !important;
}
.navbar-nav li{
 padding: 0 10px !important;
}

</style>
