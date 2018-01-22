var vm = new Vue({
  el: '#app',
  data: {
    guessNum: '',
    randomNum: '',
    result: '',
    guessedValue: [],
    isCorrect: false,
    isError: true,
    gameStart: true
  },
  created: function() {
    this.creatNum()
  },
  methods: {
    creatNum: function() {
      this.randomNum = Math.floor(Math.random() * 100) + 1
      console.log(this.randomNum)
    },

    restart: function() {
      window.location.reload()
    },

    validate: function() {
      let G = this.guessNum,
        R = this.randomNum
      
      if ( G > 100 || G < 1) { alert('Please Guess Between 1~100') } else {
        if (G != R) {
          this.isCorrect = false
          this.isError = true
          this.guessedValue.push(G)
          this.guessNum = ''
        } else {
          this.isCorrect = true
          this.isError = false
          this.result = `${G} is correct, Congratulations!`
          document.querySelector('.form-control').setAttribute('disabled', 'disabled')
          this.gameStart = false

        }
        if (G > R) {
          this.result = `${G} is too large`
        } else if (G < R) {
          this.result = `${G} is too small`
        }
        if (this.guessedValue.length > 10) {
          alert("GameOver! Sorry, you've used up all the chances")
          this.gameStart = false
          document.querySelector('.form-control').remove()
          document.querySelector('#guessed').remove()
          document.querySelector('#result').remove()

        }
      }


    }
  }
})