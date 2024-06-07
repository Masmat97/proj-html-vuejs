<script>

import myData from '../store/data';
// import background from '../assets/img/cielostellato.png'
import slideBg_1 from '../assets/img/h3-rev-img-1.png'
import slideBg_2 from '../assets/img/h3-rev-img-3.png'
import slideBg_3 from '../assets/img/h3-rev-img-5.png'
import slide_1 from '../assets/img/h3-rev-img-2.png'
import slide_2 from '../assets/img/h3-rev-img-4.png'
import slide_3 from '../assets/img/h3-rev-img-6.png'

export default {
  components: {
   
  },
  data() {
    return {
      myData,
      // background,
      carousel_slide:[
        slide_1,
        slide_2,
        slide_3
      ],
      carousel_bg:[
      slideBg_1,
        slideBg_2,
        slideBg_3,
      ],
      activeSlide : 0,
      animated : false
    }
    
  },
  methods: {
    getChangeNext(){
      console.log("funge")
      this.activeSlide++
      if(this.activeSlide == this.carousel_slide.length){
        this.activeSlide = 0
      }
    },
    getChangePrev(){
      console.log("funge") 
      this.activeSlide--
      if(this.activeSlide < 0 ){
        this.activeSlide = this.carousel_slide.length - 1 
      }
    },
    getAnimation() {
      this.animated = true
       setTimeout(() => {
         this.animated = false
       }, 1000);
    } 
  },
  mounted() {
  }
}

</script>

<template>
  <section class="d-flex justify-content-center align-items-center flex-wrap"
    style=" backgroundImage:url(/public/img/cielostellato.PNG)  ">
    <button class="btn btn-light rounded-circle p-2 px-2 prev" style="position: absolute; left:-35px"
      @click="getChangePrev(),getAnimation()">
      PREV
    </button>
    <div class="p-5">
      <img @animationed="this.animated = false" :class="{ 'box': animated }" :src="carousel_slide[activeSlide]" alt="">
      <img @animationed="this.animated = false" :class="{ 'box2': animated }" style="position: absolute;left:30%;z-index:-2;top:30%" :src="carousel_bg[activeSlide]" alt="">
    </div>
    <button class="btn btn-light rounded-circle p-2 px-2 next" style="position: absolute; right:-35px"
      @click="getChangeNext(),getAnimation()">
      NEXT
    </button>
  </section>
</template>

<style scoped>
.myBg{
  position: absolute;
  top:-150px;
  z-index: 0;
  object-fit: contain;
  object-position: bottom;
  height: 750px;
  width: 100%; 
} 
section{
  position: relative;
  top:-25px;
  z-index: 0;
  height: 80vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  padding-top:10rem ;
  overflow: hidden;
}
.next{
  transform: rotate(90deg);
}
.prev{
  transform: rotate(-90deg);
}
.box {
	animation: animate 1s linear ;
}
.box2{
  animation: zoom 1s linear
}
 @keyframes animate {
	0% {
		transform: translateY(-100px);
    opacity: 0;
	}50%{
    opacity: 0.5;
  }
	100% {
		transform:translateY(0);
    opacity: 1;
	}
 }
 @keyframes zoom {
  0%{
    transform: scale(50%);
  }100%{
    transform: scale(100%);
  }
}
 button{
  color: #c83b1a;
  font-weight: 500;
  width: 85px;
  height: 65px;
}
</style>