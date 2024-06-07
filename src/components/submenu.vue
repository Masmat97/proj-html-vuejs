<script>
import myData from '../store/data';
export default {
  data() {
    
    return {
      myData
      
    }
  },
  methods: {
  
  },
  mounted() {

  }
}

</script>
<template>
    <ul class="dropdown-submenu">
      <li v-for="link in myData.links.blog[1].submenu" class="dropdown-item" style="">
        <a class="text-decoration-none text-white " href="">
          {{ link }}
        </a>
      </li>
    </ul>
</template>
<style scoped>
.dropdown-submenu{
    display: none;
    background-color: whitesmoke;
    text-decoration: none;
    list-style: none;
    border-radius: 10px;
    margin-left: 0;
}
.dropdown:hover>.dropdown-submenu{
  background-color: rgb(36, 36, 36);
    display: block;
    position: absolute;
    width: 180px;
    left: 178px;
    top:-1px;
}.dropdown-item:hover{
  background-color: rgb(92, 91, 91);
}
</style>