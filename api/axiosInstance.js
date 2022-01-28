import axios from 'axios'
function dohvatiKnjige() {
  const marko = null
  axios
    .get(
      'http://mtomljanovic.intranet.fina.hr:8080/api/KnEur?idtag=eur1&idapp=2&kn=750,00&prefiks=/&sufiks= EUR'
    )
    .then((response) => (this.marko = response.data))
  return marko
}
// let marko = 'marko'

export default dohvatiKnjige
