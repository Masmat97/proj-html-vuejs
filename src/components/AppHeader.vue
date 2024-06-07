<script>
import myData from '../store/data';
import LinkCard from './LinkCard.vue';
import SubMenu from './submenu.vue'
import imgUrl from '../assets/img/h5-logo-divided-header.png'
import iconUrl from '../assets/svg/svg-0.svg'
import iconDark from '../assets/img/h5-logo-divided-header-dark.png'
import iconCart from '../assets/svg/svg-1.svg'
import iconPizza from '../assets/svg/svg-4.svg'
import asideIconFirst from '../assets/svg/svg-10.svg'
import asideIconSecond from '../assets/svg/svg-9.svg'

export default {
    components :{
    LinkCard,
    SubMenu
    },
  data() {
   
    return {
        myData,
        imgUrl,
        iconUrl,
        iconCart,
        iconDark,
        iconPizza,
        asideIconFirst,
        asideIconSecond,
        scrollLine : null,
        visible : ""
    }
  },
  methods: {
    getFix(){
       this.scrollLine = window.scrollY
        if(this.scrollLine > 100){
            console.log(this.scrollLine,"sta andando")
            // nav.classList.add("ciao")  
             this.visible ="navFixed"
        }else if(this.scrollLine < 100){
            console.log("contiene")
            this.visible =""
        } 
    }
  },
  created(){
    window.addEventListener('scroll', this.getFix)
  },
  mounted() {
    
  }
}
</script>

<template>
    <section :class="this.visible" class="container-fluid align-items-center" >
        <nav class="bg-transparent">
            <div id="left" class="d-flex align-items-center p-2 ">
                <div  class="col-2 text-center d-flex justify-content-end">
                    <button v-if="this.scrollLine < 100" class="btn" style="background-color: #c83b1a; text-wrap: nowrap;">
                        ORDER ONLINE
                    </button>
                </div>
                <div class="col-8 text-center">
                    <ul class=" col-12 d-flex justify-content-center m-0" style="list-style: none;">
                        <li class="d-flex align-items-center dropdown  col-1" style="height: 100px;">
                            <a class="nav-link" aria-current="page" href="#">
                                <img :src="iconUrl" style="height: 10px; filter: invert(1);" alt="">
                                HOME
                            </a>
                            <ul class="dropdown-menu text-start">
                                 <LinkCard v-for="link,i of myData.links.home" :links="link" :index="i"/> 
                            </ul>
                        </li>
                        <li class="d-flex align-items-center  dropdown col-1" style="height: 100px;">
                            <a class="nav-link" href="#">
                                PAGES
                            </a>
                            <ul class="dropdown-menu" >
                                <LinkCard v-for="link in myData.links.pages" :links="link"/>
                            </ul>
                        </li>
                        <li class="d-flex align-items-center dropdown col-1" style="height: 100px;">
                            <a class="nav-link" href="#">
                                MENU
                            </a>
                            <ul class="dropdown-menu" >
                                <LinkCard v-for="link in myData.links.menu.list_types" :links="link"/>
                            </ul>
                        </li>
                        <li class=" col-1 mx-5 d-flex justify-content-center" style="height: 100px;">
                            <a class="nav-link" aria-current="page" href="#">
                                <img v-if="this.scrollLine < 100" :src="imgUrl" style="height: 105px;" alt="">
                                <img v-if="this.scrollLine > 100" :src="iconDark" style="height: 105px;" alt="">
                            </a>
                        </li>
                        <li class="d-flex align-items-center dropdown col-1" style="height: 100px;">
                            <a class="nav-link active" aria-current="page" href="#">
                                EVENT
                            </a>
                            <ul class="dropdown-menu" >
                                <LinkCard v-for="link in myData.links.event" :links="link" />
                            </ul>
                        </li>
                        <li class="d-flex align-items-center dropdown col-1" style="height: 100px;">
                            <a class="nav-link" href="#">
                                BLOG
                            </a>
                            <ul class="dropdown-menu" id="blog-menu" >
                                <LinkCard v-for="link in myData.links.blog[0].name" :links="link" />
                                <li class="dropdown-item dropdown" style="">
                                    <img style="height: 10px; filter:invert(1)" class="myVisible" :src="iconUrl" alt="">
                                    <a id="a" class="text-decoration-none text-white" href="#">
                                        {{ myData.links.blog[1].name }}
                                    </a>
                                    <SubMenu />
                                </li>
                            </ul>
                        </li>
                        <li class="d-flex align-items-center col-1" style="height: 100px;">
                            <a class="nav-link" href="#">{{myData.links.landing.toUpperCase()}}</a>
                        </li>
                    </ul>
                </div>
                <div id="right" class="align-self-center d-flex justify-content-start col-2">
                    <a class="text-decoration-none text-white mx-2" href="">
                        <img style="height: 19px; width: 19px; filter: invert(1);" :src="iconCart" alt="">
                        CART
                    </a>
                    <a class="text-decoration-none text-white mx-2" href="">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        SEARCH
                    </a>
                </div>
            </div>
        </nav>
        <div v-if="this.scrollLine > 100" style="background-color: whitesmoke; height: 50px; width: 50px; position: fixed; right: 25px; bottom: 35px; z-index:9999" class="rounded-circle d-flex justify-content-center p-2">
            <img :src="iconPizza" alt="" class="rotatePizza">
        </div>
        <aside style="position: fixed; right: 15px; bottom: calc(50vh - 100px); z-index:9999">
            <div style="background-color:#ee2852; height: 50px; width: 50px; " class="my-1 p-2">
                <img :src="asideIconFirst" alt="" style="filter: invert(100%) saturate(0%) hue-rotate(15deg) brightness(118%) contrast(119%)">
            </div>
            <div style="background-color: whitesmoke; height: 50px; width: 50px; " class="my-1 p-2">
                <img :src="asideIconSecond" alt="">
            </div>
        </aside>
    </section>
</template>

<style scoped>
.debug{
    border: 1px solid red;

}.pok{
    position: relative;
}
.dropdown-menu{
    display: none;
    background-color: whitesmoke;
    text-decoration: none;
    list-style: none;
    line-height-step: 0;
    margin-left: 0;
}
.dropdown:hover>.dropdown-menu{
    border-top:2px solid #c83b1a;
    background-color: rgb(36, 36, 36);
    display: block;
    position: absolute;
    width: 180px;
    left: 0px;
    top:100px
}
section{
    margin: 0 auto;
    position: absolute;
    top:0;
    z-index:1;
}
.myVisible{
  visibility: hidden;
}
.dropdown-item:hover{
  background-color: rgb(92, 91, 91);
  .myVisible{
    visibility: visible;
  }
}
.navFixed{
    position: fixed;
    background-color: white;
    width: 100%;
    left: 0;
    color: black;
}
.rotatePizza:hover{
    animation: rotate 1.7s infinite;
}
@keyframes rotate {
  from {transform:rotatez(0)}
  to {transform: rotatez(-90deg)};
}
</style>
