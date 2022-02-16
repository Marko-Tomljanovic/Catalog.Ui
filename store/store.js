export default {
  trazi: '',
  isLoggedIn: process.server ? '' : !!localStorage.getItem('token'),

  funkPass(checkbox) {
    if (checkbox == true) {
      return 'text'
    } else {
      return 'password'
    }
  },
}
