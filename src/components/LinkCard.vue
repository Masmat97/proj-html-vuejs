<script>
import iconUrl from '../assets/svg/svg-0.svg'
export default {
  props : [
    "links",
    "index"
  ],
  data() {
    return {
      iconUrl
    }
  },
  methods: {
  
  },
  mounted() {

  }
}
</script>

<template>
    <li class="dropdown-item" style="" >
      <img v-if="index == 2" style="height: 10px;margin-right: -22px; filter:invert(1)" :src="iconUrl" alt="">
      <img style="height: 10px;filter:invert(1)" class="myVisible" :src="iconUrl" alt="">
        <a id="a" class="text-decoration-none text-white" href="#">
          {{links}}
        </a>
    </li>
</template>

<style scoped>
.myVisible{
  visibility: hidden;
}.dropdown-item:hover{
  background-color: rgb(92, 91, 91);
  .myVisible{
    visibility: visible;
  }
}
</style>