export default {
  trazi: '',
  isLoggedIn: false,
  user: [],
  // isLoggedIn: process.server ? '' : !!localStorage.getItem('token'),

  funkPass(checkbox) {
    if (checkbox == true) {
      return 'text'
    } else {
      return 'password'
    }
  },
}
