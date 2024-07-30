<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="sub">
          <div class="d-flex justify-content-between align-items-center">
            <div class="text d-flex flex-column">
              <h1>{{ $t("message.Subscribe") }}</h1>
              <p>{{ $t("message.We") }}</p>
            </div>
            <div
              class="emailsub d-flex justify-content-between align-items-center flex-wrap"
            >
              <div class="text-am d-flex gap-4 flex-wrap">
                <span class="text-white">{{ $t("message.Email") }}</span>
                <div class="inpu d-flex flex-column align-items-center">
                  <input
                    type="email"
                    name="mail"
                    id="mail"
                    placeholder="abdo@gmail.com"
                  />

                  <div class="form-check mt-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label text-white"
                      for="flexCheckDefault"
                    >
                   {{ $t("message.agree") }}
                    </label>
                  </div>
                </div>
                <div class="btn">
                  <button type=" submit">{{ $t("message.Send") }}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-around flex-wrap text-white">
          <div class="img-footer">
            <img
              src="../../assets/logo.png"
              alt=""
              class="img-fluid bg-white"
            />
            <p>{{ $t("message.Guaranteed") }}</p>
            <p v-html="$t('message.Company')">
             
            </p>
            <p v-html="$t('message.moves')">
             
            </p>
          </div>
          <div class="links">
            <h1>{{ $t("message.Categories") }}</h1>
            <div class="com d-flex flex-column align-items-center">
              <p>{{ $t("message.Compressors") }}</p>
              <p>{{$t("message.Polishers")}}</p>
              <p>{{$t("message.Saws")}}</p>
              <p>{{$t("message.Servicee")}}</p>
            </div>
          </div>
          <div class="links">
            <h1>{{ $t("message.Quick") }}</h1>
            <div class="d-flex flex-column align-items-center">
              <p>{{ $t("message.Our") }}</p>
              <p>{{ $t("message.Privacy") }}</p>
              <p>{{$t("message.Conditions")}}</p>
              <p>{{$t("message.FAQs")}}</p>
              <p>{{$t("message.Terms")}}</p>
              <p>{{ $t("message.Fair") }}</p>
            </div>
          </div>
          <div class="links d-flex align-items-center flex-column">
            <h1>{{ $t("message.Where") }}</h1>
            <div class="d-flex flex-column align-items-center">
              <p>{{ $t("message.Dewaltr") }}</p>
              <p>info@dewalt.eu</p>
              <p>{{ $t("message.Nieuw") }}</p>
              <p>{{ $t("message.Netherlands") }}</p>
              <p>Tel: +31 252 662248</p>
            </div>
          </div>
        </div>
        <div class="under-footer">
          <div
            class="d-flex justify-content-between align-items-center flex-wrap"
          >
            <div class="one text-white">
              <p>{{ $t("message.Reserved") }}</p>
            </div>
            <div class="two d-flex gap-3 text-white">
              <p>{{ $t("message.Privacy") }}</p>
              <p>{{ $t("message.Termss") }}</p>
              <p>{{ $t("message.Contact") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>

<style scoped>
.footer {
  padding: 5px 0;
  background-color: black;
  background-size: cover;
}
.sub {
  background-color: #e6bd0f;
  margin: auto;
  width: 90%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 18px 20px;
  position: relative;
  top: -66px;
}
.under-footer {
  margin: auto;
  width: 90%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 20px 20px;
  background-image: url(../../assets/2def3253e2fc871689d80480104c609bf06690bc.png);
}
.text {
  color: white;
}
.text h1 {
  font-size: 18px;
}
.inpu #mail {
  border: none;
  background-color: rgb(0 0 0 / 20%);
  padding: 7px;
}
.btn button {
  border: none;
  background-color: brown;
  border-radius: 4px;
  padding: 5px;
  width: 100px;
  outline: none;
  color: #fff;
}
.links h1 {
  font-size: 18px;
  color: #e6bd0f;
}
.com p:first-child {
  color: #e6bd0f;
}
@media (max-width: 477px) {
  .sub {
    display: none;
  }
  .img-footer p {
    font-size: 12px;
    font-weight: 500;
  }
  .two{
    font-size: 13px;
  }
  .one{
    font-size: 15px;
  }
  .links{
    font-size: 12px;
  }
}
</style>
