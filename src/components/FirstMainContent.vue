<script>
export default {
    name: 'AppMain',
    data() {
        return {
            carousel :[
                { title: "FORGET THE TRENDY PIZZA SHOPS, THIS HIDDEN SPOT MAKES THE BEST NEW YORK-STYLE PIZZA SLICE IN NAPLES1",
                    subtitle : "WASHINGTON POST 2018",
                    pallino : "pallino"

                },
                { title: "FORGET THE TRENDY PIZZA SHOPS, THIS HIDDEN SPOT MAKES THE BEST NEW YORK-STYLE PIZZA SLICE IN NAPLES2",
                    subtitle : "WASHINGTON POST 2018",
                    pallino : "pallino"

                },
                { title: "FORGET THE TRENDY PIZZA SHOPS, THIS HIDDEN SPOT MAKES THE BEST NEW YORK-STYLE PIZZA SLICE IN NAPLES3",
                    subtitle : "WASHINGTON POST 2018",
                    pallino : "pallino"

                }
            ],
            
            specials: [
                {
                    price: '$10',
                    name: 'COMBO PICCOLO',
                    ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.'
                },
                {
                    price: '$20',
                    name: 'COMBO MEZZO',
                    ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.'
                },
                {
                    price: '$30',
                    name: 'COMBO GRANDE',
                    ingredients: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam dui.'
                },
            ],
            teams: [
                {
                    name: 'PETER ANDERSON',
                    task: 'Head Chef',
                    image: '/img/h1-team-1a-700x700.jpg'
                },
                {
                    name: 'SHARON HAYES',
                    task: 'Executive Chef',
                    image: '/img/h1-team-2a.jpg'
                },
                {
                    name: 'FRANK BAILEY',
                    task: 'Kitchen Porter',
                    image: '/img/h1-team-3a.jpg'
                },
                {
                    name: 'CAROL SIMPSON',
                    task: 'Sous Chef',
                    image: '/img/h1-team-4a.jpg'
                },
            ],
                activeSlide :0,
                animated : false,
                animatedIn : false,
                pause : ""
        };
        computed : {

        };
    },
    methods: {
        getChangeNext(){
      this.activeSlide++
      if(this.activeSlide == this.carousel.length){
        this.activeSlide = 0
      }
    },
    getChangePrev(){
      this.activeSlide--
      if(this.activeSlide < 0 ){
        this.activeSlide = this.carousel.length - 1 
      }
    },
    getAnimation() {
      this.animated = true
       setTimeout(() => {
         this.animated = false
    }, 1500);
    } ,
    getAnimationIn() {
      this.animatedIn = true
       setTimeout(() => {
         this.animatedIn = false
         
    }, 1500);
    } ,
    getPause(){
        this.pause = "pauseFirstAnimation pauseSecondAnimation"
    },
    getRestart(){
        this.pause = ""
    }
        },
    
    mounted() {
    
    },
    
}
</script>

<template>
    <!-- Carosello -->
    <div class="text-center d-flex jusify-content-between align-items-center p-0 hello" style="position: relative">
        <div style="position: absolute; left :0 ;top:50% ; transform: rotate(-90deg);">
            <button @click="getChangePrev(),getAnimationIn()" class="btn btn-light rounded-circle p-2 px-2"
                style="background-color: whitesmoke;">
                prev
            </button>
        </div>
        <div class="col-12 overflow-hidden">
            <i class="fa-solid fa-quote-left" style="color: gold; font-size: 90px;"></i>
            <h3 @animationed="this.animated = false, this.animatedIn = false"
                :class="{'box' : animated},{'box2' : this.animatedIn}" class="text-black">{{
                carousel[this.activeSlide].title }}</h3>
            <p @animationed="this.animated = false, this.animatedIn = false"
                :class="{'box' : animated},{'box2' : this.animatedIn}" class="text-black"> {{
                carousel[this.activeSlide].subtitle }}</p>
            <span class="">{{ carousel[this.activeSlide].pallino }}</span>
        </div>
        <div style="position: absolute; right :0 ;top:50% ; transform: rotate(90deg);">
            <button @click="getChangeNext(),getAnimation()" class="btn btn-light rounded-circle p-2 px-2"
                style="background-color: whitesmoke;">
                next
            </button>
        </div>
    </div>
    <!-- Fine Carosello -->
    <div class="special">
        <div class="left-section">
            <img class="pizza" src="/public/img/h1-img-7n.png" alt="">
        </div>
        <div class="right-section">
            <h2 class="strong"><strong>SPECIALS*</strong></h2>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut.</h4>
            <div v-for="element in specials">
                <span class="price">{{ element.price }}</span>
                <span class="name">{{ element.name }}</span>
                <p class="ingredients">{{ element.ingredients }}</p>
            </div>
        </div>
    </div>
    <div class="big">
        <p class="text">GO AHEAD AND BUILD YOUR OWN PIZZA WE WON'T JUDJE!</p>
    </div>
    <div class="d-flex  m-0 my-3">
        <div v-for="person in teams" class="col-3 justify-content-center myCard" style="position: relative;">
            <img :src="person.image" style=" width:100%;object-fit: contain;" alt="">
            <div class="overlay d-flex justify-content-center align-items-center">
                <div class="red" style="height: 75%;">
                    <h3 class=" m-5 p-0">{{ person.name }}</h3>
                    <p class=" m-0 p-0">{{ person.task }}</p>
                    <p class=" m-0 p-0">
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-facebook"></i>
                    </p>
                </div>
            </div>
        </div>

    </div>
    <div class="image-container d-flex justify-content-center ">
        <div class="overflow-hidden d-flex" style="width: 1300px;" @mouseover="this.getPause()" @mouseleave="this.getRestart()">
            <img src="/img/h1-clients-img-1.png" class="imageWrapper switchCarousel" :class="this.pause">
            <img src="/img/h1-clients-img-2.png" class="imageWrapper switchCarousel" :class="this.pause">
            <img src="/img/h1-clients-img-3.png" class="imageWrapper switchCarousel" :class="this.pause">
            <img src="/img/h1-clients-img-4.png" class="imageWrapper switchCarousel" :class="this.pause">
            <img src="/img/h1-clients-img-5.png" class="imageWrapper switchCarousel" :class="this.pause">
            <img src="/img/h1-clients-img-1.png" class="imageWrapper switchCarousel2" :class="this.pause">
            <img src="/img/h1-clients-img-2.png" class="imageWrapper switchCarousel2" :class="this.pause">
            <img src="/img/h1-clients-img-3.png" class="imageWrapper switchCarousel2" :class="this.pause">
            <img src="/img/h1-clients-img-4.png" class="imageWrapper switchCarousel2" :class="this.pause">
            <img src="/img/h1-clients-img-5.png" class="imageWrapper switchCarousel2" :class="this.pause">
        </div>
    </div>
</template>

<style scoped>
.hello {
    height: 450px;
    background-image: url(/img/h3-testimonials-bckgrnd.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.fonte {
    font-size: 10px;
    text-align: center;
    color: #EE2852;
    padding-bottom: 10rem;
}

.special {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.left-section {
    width: 50%;
    background-image: url(/src/assets/img/h1-img-4.jpg);
    background-size: cover;
    height: 40rem;
}

.pizza {
    margin: 10rem;
}

.right-section {
    margin: 0 11rem;
}

.strong {
    margin-top: 10rem;

}

.price {
    color: #AB4027;
    margin-right: 2rem;
    font-size: 1.5rem;
    font-weight: bold;
}

h4 {
    margin-bottom: 2rem;
    color: #4d4b4b;

}

.name {
    font-size: 1.5rem;
    padding-bottom: 5rem;
    font-weight: bold;

}

.ingredients {
    margin-left: 5rem;
    color: #2c2a2a;

}

.big {
    background-image: url(/img/h3-background-img.jpg);
    height: 50rem;
    background-size: cover;
    margin-top: 5rem;
}

.text {
    color: white;
    font-size: 4rem;
    padding-left: 15rem;
    padding-top: 10rem;
    padding-right: 50rem;
    font-weight: bold;
}
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(#c0bebe 20%, transparent 20%), radial-gradient(#c0bebe 20%, transparent 20%);
    background-color: #ffffff;
    background-position: 0 0, 6px 6px;
    background-size: 12px 12px;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.5s;
}

.myCard:hover .overlay {
    opacity: 1;
}

.red {
    background-color: red;
    color: white;
    width: 75%;
    height: 75%;
    position: relative;
    text-align: center;
    vertical-align: middle;
    line-height: 4rem;
}

.image-container {
    padding: 5rem;
    background-color: #EBEBDE;
}
/* ANIMAZIONE CAROSELLO */
.box {
	animation: animate 2s ease-out ;
}

@keyframes animate {
    0% {transform: translateX(0);
        opacity: 1;}
    40% {
        transform: translateX(650px);
        opacity: 0;
    }
    50% {
        transform: translateX(-400px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
.box2 {
	animation: animateIn 2s ease-out ;
}
@keyframes animateIn {
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    40% {
        transform: translateX(-400px);
        opacity: 0;
    }
    50% {
        transform: translateX(650px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

.switchCarousel {
    animation: carousel 8s linear ;
    animation-iteration-count: infinite;
    animation-play-state: running;
}
.switchCarousel2 {
    animation: carouselsecond 8s linear ;
    animation-iteration-count: infinite; 
    animation-play-state: running;
}
.pauseFirstAnimation{
    animation: carousel;
    animation-play-state: paused;
}
.pauseSecondAnimation{
    animation: carouselsecond ;
    animation-play-state: paused;
}

.imageWrapper{
    opacity: 0.5;
}
.imageWrapper:hover{
    /* animation: bounce 2s linear ; */
    opacity: 1;
    transition: 300ms;
}

@keyframes carousel {
    0% {transform: translateX(0);}
    20% {transform: translateX();}
    40% {transform: translateX();}
    60% {transform: translateX();}
    80% {transform: translateX();}
    100% {transform: translateX(1300px);}
}
@keyframes carouselsecond {
    0% {transform: translateX(-2600px);}
    20% {transform: translateX();}
    40% {transform: translateX();}
    60% {transform: translateX();}
    80% {transform: translateX();}
    100% {transform: translateX(-1300px);}
}
@keyframes bounce {
    0% {transform: translateY(0px);}
    40% {transform: translateY(-150px);opacity: 0;}
    41% {transform: translateY(150px);opacity:0}
    80%{transform: translateY(0);opacity:1}
    100%{transform: translateY(0);opacity:1}
}
</style>
