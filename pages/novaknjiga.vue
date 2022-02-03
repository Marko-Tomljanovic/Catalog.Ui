<template>
  <div class="container">
    <div class="main-body mt-4">
      <b-form @submit="ucitaj">
        <div class="row gutters-sm">
          <div class="col-md-7 mb-3">
            <div class="card">
              <div class="card-body">
                <div class="xd-flex flex-column align-items-center text-center">
                  <div class="contact-form">
                    <h5 class="mb-2" style="color: #2677a7">
                      UNOS NOVE KNJIGE
                    </h5>
                    <br />

                    <div class="form-field col-12 mx-auto mb-0">
                      <input
                        id="imeKnjige"
                        v-model="nazivKnjige"
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
                        v-model="opis"
                        class="input-text js-input"
                        type="text"
                        autocomplete="off"
                        required
                        style="height: 60px"
                        maxlength="110"
                      ></textarea>
                      <label
                        class="label"
                        style="margin-bottom: 30px"
                        for="opis"
                        >Opis</label
                      >
                    </div>
                    <p class="text-muted text-left">
                      Max {{ opis.length }}/110 znakova
                    </p>

                    <div class="form-field col-lg-8 mx-auto">
                      <input
                        id="cijena"
                        v-model="cijena"
                        class="input-text js-input"
                        type="number"
                        placeholder="kn"
                        autocomplete="off"
                        required
                      />
                      <label class="label" for="cijena">Cijena</label>
                    </div>
                    <b-form-file
                      id="image"
                      v-model="file1"
                      :state="Boolean(file1)"
                      placeholder="Choose a file or drop it here..."
                      drop-placeholder="Drop file here..."
                    ></b-form-file>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="card">
              <div class="card-body">
                <div class="flex-column align-items-center text-center">
                  <div class="contact-form">
                    <div class="contact-form row">
                      <b-dropdown
                        variant="dark"
                        style="border-radius: 10px"
                        id="dropdown-form"
                        text="Stanje"
                        ref="dropdown"
                        class="mb-4 col-11 mx-auto"
                        ><b-form-group>
                          <b-form-checkbox-group
                            switches
                            :options="kategorije.stanje"
                            v-model="kategorije.selected"
                            class="ml-2"
                          >
                          </b-form-checkbox-group
                        ></b-form-group>
                      </b-dropdown>
                    </div>
                    <p class="text-muted">Odaberite stanje knjige</p>
                    <p class="text-muted">
                      Odabrano: {{ kategorije.selected }}
                    </p>

                    <div class="contact-form row">
                      <b-dropdown
                        variant="dark"
                        style="border-radius: 10px"
                        id="dropdown-form"
                        text="Kategorija knjige"
                        ref="dropdown"
                        class="mb-4 col-11 mx-auto"
                        ><b-form-group>
                          <b-form-checkbox-group
                            switches
                            :options="kategorije.odabirKategorije"
                            v-model="kategorije.odabirSelected"
                            class="ml-2"
                          >
                          </b-form-checkbox-group
                        ></b-form-group>
                      </b-dropdown>
                    </div>
                    <p class="text-muted">Možete odabrati više kategorija</p>
                    <p class="text-muted">
                      Odabrano:
                      {{ this.kategorije.odabirSelected }}
                    </p>

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
import kategorije from '@/store/kategorije'
import axios from 'axios'

export default {
  name: 'novaKnjiga',
  data() {
    return {
      kategorije,
      nazivKnjige: '',
      opis: '',
      cijena: '',
      file1: null,
      knjige: null,
    }
  },
  methods: {
    ucitaj(event) {
      event.preventDefault()
      axios
        .post('http://10.42.206.52:3333/books', {
          naslov: this.nazivKnjige,
          opis: this.opis,
          cijena: this.cijena,
          stanje: this.kategorije.selected,
          kategorija: JSON.stringify(this.kategorije.odabirSelected),
        })
        .then(function (response) {
          console.log(response)

          let formData = new FormData()
          let file = document.getElementById('image').files[0]

          formData.append('image', file)
          console.log(formData.append('image', file))
          axios
            .post(
              'http://10.42.206.52:3333/uploadImage/' + response.data,
              formData,
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              }
            )

            .then(function (response) {
              console.log(response)
            })
            .catch(function (error) {
              console.log(error)
            })
        })
        .catch(function (error) {
          console.log(error)
        })
      // this.$router.push({ path: '/' })
    },
  },
  computed: {
    maxId() {
      return this.knjige.map((a) => a.id)
    },
  },
  mounted() {
    axios
      .get('http://10.42.206.52:3333/books')
      .then((response) => {
        this.knjige = response.data
      })
      .catch((error) => console.log(error))
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
