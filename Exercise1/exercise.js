new Vue ({
el : '#exercise',
  data : {
    name : 'Guilherme',
    age : '26',
    image : 'https://vignette.wikia.nocookie.net/dragonballfanon/images/7/70/Random.png/revision/latest?cb=20161221030547'
	},
  methods : {
  	ageMultiplier : function () {
    	return this.age * 3;
    },
    randomFloatBetween0and1 : function () {
    	return Math.random();
    }
  }
   
});