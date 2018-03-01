var vm = new Vue({
  el: '#app',
  data: {
    guessNum: '',
    randomNum: '',
    result: '',
    range: '',
    counter: 5,
    max: 100,
    min: 1,
    isCorrect: false,
    isError: true,
    isDisabled: false,
    gameStart: true
  },
  created: function () {
    this.creatNum()
  },
  methods: {
    creatNum: function () {
      this.randomNum = Math.floor(Math.random() * 100) + 1
      console.log(this.randomNum)
    },

    restart: function () {
      window.location.reload()
    },

    validate: function () {
      let G = this.guessNum,
        R = this.randomNum

      if (G > 100 || G < 1) {
        alert('Please Guess Between 1~100')
        this.guessNum = ''
      } else {
        this.counter--
          if (G != R) {
            this.isCorrect = false
            this.isError = true
            this.guessNum = ''
          } else {
            this.isCorrect = true
            this.isError = false
            this.result = `${G} is correct, Congratulations!`
            this.isDisabled = true
            this.gameStart = false
          }
        if (G > R) {
          this.result = `${G} is too large`
          this.max = G
        } else if (G < R) {
          this.result = `${G} is too small`
          this.min = G
        }
        if (this.counter < 1 && G != R) {
          alert(`GameOver! You Failed... the right answer is ${this.randomNum}`)
          this.gameStart = false
          this.isDisabled = true
        }
      }
    }
  }
})
