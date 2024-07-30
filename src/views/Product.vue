<template>
  <div class="product">
    <div class="container">
      <div class="row">
        <div class="text-product mb-2">
          <p class="fw-medium">{{ $t("message.Select") }}</p>
        </div>
        <div
          class="d-flex justify-content-between align-items-center flex-wrap"
        >
          <div
            class="child d-flex flex-column align-items-center m-auto mb-2"
            v-for="child in childs"
            :key="child.id"
          >
            <div class="img-prod">
              <router-link
                :to="{
                  name: 'details',
                  params: { id: child.id },
                  query: { img: child.imgs, text: child.text },
                }"
              >
                <img :src="child.imgs" alt="" class="img-fluid" />
              </router-link>
              <div class="overlay">
                <router-link
                  :to="{
                    name: 'details',
                    params: { id: child.id },
                    query: { img: child.imgs, text: child.text },
                  }"
                  class="details-button"
                >
                  {{ $t("message.Details") }}
                </router-link>
              </div>
            </div>
            <p class="fw-medium">{{ $t(child.text) }}</p>
          </div>

          <div
            class="spcishal d-flex flex-column align-items-center m-auto mb-2"
          >
            <div class="subtitle">{{ $t("message.with") }}</div>
            <div class="highlight">25</div>
            <div class="subtitle">{{ $t("message.years") }}</div>
            <div class="bottom">
              {{ $t("message.Wee") }}
            </div>
          </div>
        </div>
        <div
          class="d-flex justify-content-between align-items-center flex-wrap mt-2"
        >
           <div
            class="child d-flex flex-column align-items-center m-auto mb-2"
            v-for="child in childs"
            :key="child.id"
          >
            <div class="img-prod">
              <router-link
                :to="{
                  name: 'details',
                  params: { id: child.id },
                  query: { img: child.imgs, text: child.text },
                }"
              >
                <img :src="child.imgs" alt="" class="img-fluid" />
              </router-link>
              <div class="overlay">
                <router-link
                  :to="{
                    name: 'details',
                    params: { id: child.id },
                    query: { img: child.imgs, text: child.text },
                  }"
                  class="details-button"
                >
                  {{ $t("message.Details") }}
                </router-link>
              </div>
            </div>
            <p class="fw-medium">{{ $t(child.text) }}</p>
          </div>
          <div class="video-container m-auto">
            <video
              controls
              autoplay
              width="380"
              height="auto"
              src="../assets/7567992-hd_1920_1080_25fps.mp4"
            ></video>
            <i class="play-icon">&#9658;</i>
            <!-- This is the play icon. You can use an icon from a library like FontAwesome -->
            <div class="text">{{ $t("message.See") }}</div>
            <div class="duration">{{ $t("message.video") }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/1130c38cd3bcb548eb4ef76539bc50a33739a4f1.png";
import img2 from "../assets/c15737a673c6b55086d223d4381c2a04761135ab.png";
export default {
  name: "Product",
  data() {
    return {
      childs: [
        { id: 1, imgs: img1, text: "texts.1" },
        { id: 2, imgs: img2, text: "texts.2" },
      ],
    };
  },
};
</script>

<style scoped>
.product {
  padding: 20px 0;
}
.child {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 5px 30px;
  position: relative;
}
.img-prod {
  position: relative;
  width: 250px; /* يمكن تعديل العرض حسب الحاجة */
}

.img-prod img {
  width: 100%;
  height: auto;
  display: block;
}

.img-prod::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* اللون والشفافية يمكن تعديلهم حسب الحاجة */
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.img-prod:hover::after,
.img-prod:hover .overlay {
  opacity: 1;
}

.details-button {
  background: #ffc107;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  z-index: 1; /* لتظهر الزر فوق الطبقة الشفافة */
}
.spcishal {
  width: 300px;
  height: 300px;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  font-family: Arial, sans-serif;
}

.spcishal .highlight {
  font-size: 3em;
  font-weight: bold;
  color: #ffffff;
}
.spcishal .subtitle {
  font-size: 1.5em;
  margin: 20px 0;
}
.spcishal .bottom {
  background-color: #ffc107;
  color: black;
  width: 100%;
  padding: 10px;
  border-radius: 0 0 10px 10px;
  font-size: 1em;
}
.video-container {
  position: relative;
  width: 300px;
  height: 200px;
  background-size: cover;
  border-radius: 10px;
  overflow: hidden;
  font-family: Arial, sans-serif;
  color: white;
}
.video-container .play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3em;
  color: white;
}

.video-container .text {
  position: absolute;
  bottom: 50px;
  left: 10px;
  font-size: 1.1em;
}

.video-container .duration {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 0.9em;
}
@media (max-width: 477px) {
  .img-prod {
    width: 125px;
  }
  .child {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    padding: 5px 30px;
    width: 100%;
  }
}
</style>
