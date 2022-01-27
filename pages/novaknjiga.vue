<template>
  <div class="container">
    <div class="main-body">
      <b-form @submit="ucitaj">
        <div class="row gutters-sm">
          <div class="col-md-7 mb-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <div class="contact-form">
                    <h5 class="mb-2" style="color: #2677a7">
                      UNOS NOVE KNJIGE
                    </h5>
                    <br />

                    <div class="form-field col-12 mx-auto mb-0">
                      <input
                        id="imeKnjige"
                        class="input-text js-input"
                        type="text"
                        autocomplete="off"
                        required
                      />
                      <label class="label" for="imeFirme">Naziv knjige</label>
                    </div>

                    <div class="form-field col-lg-12 mx-auto">
                      <textarea
                        id="opis"
                        class="input-text js-input"
                        type="text"
                        autocomplete="off"
                        required
                        style="height: 60px"
                      ></textarea>
                      <label class="label mb-4" for="opis">Opis</label>
                    </div>

                    <div class="form-field col-lg-8 mx-auto">
                      <input
                        id="adresa"
                        class="input-text js-input"
                        type="text"
                        autocomplete="off"
                        required
                      />
                      <label class="label" for="adresa">Adresa</label>
                    </div>

                    <div class="form-field col-lg-8 mx-auto">
                      <input
                        id="sluzbeniEmail"
                        class="input-text js-input"
                        type="email"
                        required
                      />
                      <label class="label" for="sluzbeniEmail">E-mail</label>
                    </div>

                    <div class="form-field col-lg-8 mx-auto">
                      <input
                        id="oib"
                        class="input-text js-input"
                        type="tel"
                        minlength="11"
                        autocomplete="off"
                        required
                      />
                      <label class="label" for="oib">OIB</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <div class="contact-form">
                    <div class="contact-form row">
                      <b-dropdown
                        variant="dark"
                        style="border-radius: 10px; margin-left: 5px"
                        id="dropdown-form"
                        text="Stanje"
                        ref="dropdown"
                        class="mb-4 col-11"
                        ><b-form-group v-slot="{ ariaDescribedby }">
                          <b-form-checkbox-group
                            switches
                            :aria-describedby="ariaDescribedby"
                            class="ml-2"
                          >
                          </b-form-checkbox-group
                        ></b-form-group>
                      </b-dropdown>
                    </div>

                    <div class="form-field col-lg-8 mx-auto mt-5">
                      <input
                        id="facebook"
                        class="input-text js-input"
                        type="url"
                        autocomplete="off"
                      />
                      <label class="label" for="facebook">Facebook</label>
                    </div>

                    <div class="form-field col-lg-8 mx-auto mt-5">
                      <input
                        id="instagram"
                        class="input-text js-input"
                        type="url"
                        autocomplete="off"
                      />
                      <label class="label" for="instagram">Instagram</label>
                    </div>

                    <div class="form-field col-lg-8 mx-auto mt-5">
                      <input
                        id="webStranica"
                        class="input-text js-input"
                        type="url"
                        autocomplete="off"
                      />
                      <label class="label" for="instwebStranicaagram"
                        >Web stranica</label
                      >
                    </div>

                    <div class="form-field col-lg-8 mx-auto mt-5">
                      <input
                        id="youTube"
                        class="input-text js-input"
                        type="url"
                        autocomplete="off"
                      />
                      <label class="label" for="youTube">You Tube</label>
                    </div>

                    <div class="form-field col-lg-8 mx-auto mt-5">
                      <input
                        id="tiktok"
                        class="input-text js-input"
                        type="url"
                        autocomplete="off"
                      />
                      <label class="label" for="tiktok">TikTok</label>
                    </div>

                    <div class="form-field col-lg-8 mx-auto mt-5">
                      <input
                        id="twitter"
                        class="input-text js-input"
                        type="url"
                        autocomplete="off"
                      />
                      <label class="label" for="twitter">Twitter</label>
                    </div>

                    <b-button type="submit" class="blue col-6 mt-4"
                      >POHRANI</b-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'noviIzvodac',

  data() {
    return {}
  },
  methods: {
    ucitaj() {},
  },
}
</script>

<style scoped>
.contact-form .form-field {
  margin: 36px 0;
}
.contact-form .input-text {
  display: block;
  width: 100%;
  height: 36px;
  border-width: 0 0 2px 0;
  border-color: #2677a7;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
}
.contact-form .input-text:focus {
  outline: none;
}
.contact-form .input-text:focus + .label,
.contact-form .input-text.not-empty + .label {
  -webkit-transform: translateY(-24px);
  transform: translateY(-10px);
}
.contact-form .label {
  position: absolute;
  left: 14px;
  bottom: 21px;
  font-size: 17px;
  line-height: 26px;
  font-weight: 400;
  color: #2677a7;
  cursor: text;
  transition: -webkit-transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
}
.btn {
  border: none;
  border-radius: 5px;
  color: #fff;
  position: relative;
  background-color: rgb(180, 89, 89);
}
.btn:hover {
  color: #fff;
}
.btn:after {
  content: '';
  width: 0;
  height: 4px;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 5px;
  transition: all 0.25s ease 0s;
}
.btn:hover:after {
  width: 100%;
}
.btn.blue:after {
  background: #2677a7;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.img-div {
  display: block;
  margin: 25px;
}
img {
  max-width: 250px;
  margin: 15px;
}
</style>
