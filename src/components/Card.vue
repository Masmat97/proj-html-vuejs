<script>


import card_1 from '../assets/img/h3-img-1.jpg'
import card_2 from '../assets/img/h3-img-2.jpg'
import card_3 from '../assets/img/h3-img-3.jpg'
import card_4 from '../assets/img/h3-img-4.jpg'
import card_hover from '../assets/svg/svg-5.svg'

export default {
  components: {
   
  },
  data() {
    return {
      cards:[
        card_1,
        card_2,
        card_3,
        card_4,
      ],
      card_hover
    }
  },
  methods: {
 
  },
  mounted() {

  }
}
</script>

<template>
  <section class="container-fluid d-flex h-100">
    <div class="col-3 " style=" position: relative; " v-for="card in cards">
      <img class="w-100" :src="card" alt="">
      <div class="myBg" style="height: 100%; width: 100%; position:absolute; top:0">
        <div class="eye">
          <i class="fa-regular fa-eye"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped> 
.col-3:hover{
  .myBg{
    background-image: radial-gradient(#c0bebe 20%, transparent 20%), radial-gradient(#c0bebe 20%, transparent 20%);
    background-color: #ffffff;
    background-position: 0 0, 6px 6px;
    background-size: 12px 12px;
  }.eye{
    display: inline-block;
  }
}
i{
  font-size: 25px;
}
.eye{
  border-radius: 3rem;
  padding: 2rem;
  display: none;
  background-color: rgb(168, 15, 4);
  position: relative;
  top:calc(50% - 3rem);
  left:calc(50% - 3rem);
}
</style>