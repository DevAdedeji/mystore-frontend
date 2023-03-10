module.exports = {
  mode:'jit',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
// or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'primary-color':'#1B92F4',
        'white':'#ffffff',
        'grey':'#e9e9e9'
      }
    }
  }
}
