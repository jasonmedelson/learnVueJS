new Vue({
	el: '#app',
  data: {
      myhealth: 100,
      bosshealth: 100,
      log:["New Game Started!", "Hero Health - 100 | Boss Health - 100"]
  },
  methods: {
    heal: function() {
      if(this.myhealth<100){
        num = Math.floor(Math.random() * 12) + 4;
        this.myhealth += num
      }
      if(this.myhealth>100){
          this.myhealth=100;
      }
      this.bossattack();
      this.loghealth();
    },
    newGame:function(){
        this.myhealth = 100;
        this.bosshealth=100;
        this.log.push("New Game Started!")
        this.loghealth();
    },
    attack:function(){
        num = Math.floor(Math.random() * 2) + 3;
        this.bosshealth -= num;
        this.bossattack();
        if(this.bosshealth < 0){
            this.bosshealth = 0;
        }
        this.loghealth();

    },
    specialattack:function(){
        num = Math.floor(Math.random() * 6) + 6;
        this.bosshealth -= num;
        this.bossattack();
        if(this.bosshealth < 0){
            this.bosshealth = 0;
        }
        this.loghealth();

    },
    bossattack: function(){
        num = Math.floor(Math.random() * 4) + 4;
        this.myhealth -= num;
        if(this.myhealth < 0){
            this.myhealth = 0;
        }
    },
    loghealth:function(){
        message = "Hero Health - "+this.myhealth+ "| Boss Health -" + this.bosshealth
        this.log.push(message)
    },
  },
  watch:{
      bosshealth:function(value){
          var vm = this;
          if(this.bosshealth == 0){
              this.log.push("You Win!!!!")
          }
      },
      myhealth:function(value){
        var vm = this;
        if(this.myhealth == 0){
            this.log.push("You Lose!!!!")
        }
    }
  }
});