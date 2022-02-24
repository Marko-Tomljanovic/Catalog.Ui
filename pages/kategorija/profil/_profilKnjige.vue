<template>
  <div v-if="knjige">
    <div class="container emp-profile">
      <form method="post">
        <div class="row">
          <div class="col-md-5">
            <div class="profile-img">
              <img :src="`http://127.0.0.1:3333${knjige.image}`" alt="knjiga" />
            </div>
          </div>

          <div class="col-md">
            <div class="profile-head">
              <h5>{{ knjige.naslov }}</h5>
              <h6>{{ knjige.kategorija }}</h6>
              <p class="proile-rating">
                OCJENA PRODAVAČA : <span>(u izradi)</span>
              </p>
              <br />
              <div class="nav nav-tabs" id="myTab" role="tablist">
                <a
                  class="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  >Opis</a
                >
              </div>
              <div class="col-md">
                <div class="tab-content profile-tab" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label>Naziv knjige</label>
                      </div>
                      <div class="col-md-6">
                        <p>{{ knjige.naslov }}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Stanje</label>
                      </div>
                      <div class="col-md-6">
                        <p>{{ knjige.stanje }}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Cijena</label>
                      </div>
                      <div class="col-md-6">
                        <p>{{ knjige.cijena }} KN</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Prodavač</label>
                      </div>
                      <div class="col-md-6">
                        <p>{{ knjige.user }}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Grad</label>
                      </div>
                      <div class="col-md-6">
                        <p>{{ store.user.city }}</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <label>Objavljeno</label>
                      </div>
                      <div class="col-md-6">
                        <p>{{ knjige.created_at }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div>
              <b-button to="/" block variant="primary"
                >Početna stranica</b-button
              >
            </div>
          </div>

          <div class="col-2">
            <b-button
              type="button"
              class="profile-edit-btn"
              to="/kategorija/profil/kupi"
              >Kupi knjigu</b-button
            >
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="profile-work">
              <p>SLIČNE KNJIGE</p>
              <a href="">(link u izradi)..</a><br />
              <a href="">(link u izradi)..</a><br />
              <a href="">(link u izradi)..</a>
              <p>OD ISTOG PRODAVAČA</p>
              <a href="">(link u izradi)..</a><br />
              <a href="">(link u izradi)..</a><br />
              <a href="">(link u izradi)..</a><br />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from '@/store/store'

export default {
  name: 'profil',
  data() {
    return {
      knjige: null,
      store,
    }
  },
  computed: {
    samoNaslovi() {
      return this.knjige.map((a) => a.naslov.replace(/\s/g, '').toLowerCase())
    },
    // knjigaProfila() {
    //   return this.knjige.find(
    //     ({ naslov }) =>
    //       naslov.replace(/\s/g, '').toLowerCase() ===
    //       this.$route.params.profilKnjige
    //   )
    // },
  },
  mounted() {
    axios
      .get(`http://127.0.0.1:3333/books/${this.$route.params.profilKnjige}`)
      .then((response) => {
        this.knjige = response.data
      })
      .catch((error) => {
        console.log(error)
        localStorage.clear()
      })
  },
}
</script>

<style>
.emp-profile {
  padding: 3%;
  margin-top: 3%;
  margin-bottom: 3%;
  border-radius: 0.5rem;
  background: #fff;
}
.profile-img {
  text-align: center;
}
.profile-img img {
  width: 80%;
  height: 100%;
}
.profile-img .file {
  position: relative;
  overflow: hidden;
  margin-top: -20%;
  width: 70%;
  border: none;
  border-radius: 0;
  font-size: 15px;
  background: #212529b8;
}
.profile-img .file input {
  position: absolute;
  opacity: 0;
  right: 0;
  top: 0;
}
.profile-head h5 {
  color: #333;
}
.profile-head h6 {
  color: #0062cc;
}
.profile-edit-btn {
  border: none;
  border-radius: 1.5rem;
  width: 70%;
  padding: 7%;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  background-color: #a3a3a3;
}
.proile-rating {
  font-size: 12px;
  color: #818182;
  margin-top: 5%;
}
.proile-rating span {
  color: #495057;
  font-size: 15px;
  font-weight: 600;
}
.profile-head .nav-tabs {
  margin-bottom: 5%;
}
.profile-head .nav-tabs .nav-link {
  font-weight: 600;
  border: none;
}
.profile-head .nav-tabs .nav-link.active {
  border: none;
  border-bottom: 2px solid #0062cc;
}
.profile-work {
  padding: 14%;
  margin-top: -15%;
}
.profile-work p {
  font-size: 12px;
  color: #818182;
  font-weight: 600;
  margin-top: 10%;
}
.profile-work a {
  text-decoration: none;
  color: #495057;
  font-weight: 600;
  font-size: 14px;
}
.profile-work ul {
  list-style: none;
}
.profile-tab label {
  font-weight: 600;
}
.profile-tab p {
  font-weight: 600;
  color: #0062cc;
}
</style>
