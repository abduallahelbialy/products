<template>
  <div class="top-nav">
    <div class="container">
      <div class="row">
        <div
          class="d-flex justify-content-between align-items-center text-white"
        >
          <div class="one d-flex gap-3 flex-wrap">
            <div class="icon d-flex align-items-center gap-2">
              <i class="pi pi-phone"></i><span>01028924906</span>
            </div>
            <div class="addres">{{ $t("message.Mon") }}</div>
          </div>
          <div class="two d-flex">
            <div class="d-flex gap-3 flex-wrap">
              <span>{{ $t("message.EUr") }}</span>
              <span>{{ $t("message.About") }}</span>
              <span>{{ $t("message.Customer") }}</span>
              <span>{{ $t("message.Log") }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"tup",
};
</script>

<style scoped>
.top-nav {
  background-color: black;
  padding: 10px 0;
}
@media (max-width:477px) {
  .one,.two{
    font-size: 12px;
  }
}
</style>
