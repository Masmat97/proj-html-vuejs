<script>
export default {
    name: 'AppMain',
    data() {
        return {
            
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
                    icon: '<i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-facebook"></i>',
                    image: '/img/h1-team-1a-700x700.jpg'
                },
                {
                    name: 'SHARON HAYES',
                    task: 'Executive Chef',
                    icon: '<i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-facebook"></i>',
                    image: '/img/h1-team-2a.jpg'
                },
                {
                    name: 'FRANK BAILEY',
                    task: 'Kitchen Porter',
                    icon: '<i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-facebook"></i>',
                    image: '/public/img/h1-team-3a.jpg'
                },
                {
                    name: 'CAROL SIMPSON',
                    task: 'Sous Chef',
                    icon: '<i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-facebook"></i>',
                    image: '/public/img/h1-team-4a.jpg'
                },
            ],

        };
        computed: {

        };
    },
    methods: {
            
        },
    
    mounted() {
    
    },
    
}
</script>

<template>
    <div class="hello">
        <h3>"FORGET THE TRENDY PIZZA SHOPS, THIS HIDDEN SPOT MAKES THE BEST NEW YORK-STYLE PIZZA SLICE IN NAPLES"</h3>
        <p class="fonte"><strong>WASHINGTON POST 2018</strong></p>
    </div>
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
    <div class="four-image">
        <div v-for="person in teams" class="person">
            <img :src="person.image" class="team" alt="">
            <div class="overlay">
                <div class="red">
                    <p>{{ person.name }}</p>
                    <p>{{ person.task }}</p>
                    <p>'<i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-twitter"></i> <i
                            class="fa-brands fa-facebook"></i>',</p>
                </div>
            </div>
        </div>

    </div>
    <div class="image-container">
        <img src="/public/img/h1-clients-img-1.png" class="image-wrapper">
        <img src="/public/img/h1-clients-img-2.png" class="image-wrapper">
        <img src="/public/img/h1-clients-img-3.png" class="image-wrapper">
        <img src="/public/img/h1-clients-img-4.png" class="image-wrapper">
        <img src="/public/img/h1-clients-img-5.png" class="image-wrapper">
    </div>

    



</template>

<style scoped>
.hello {
    background-image: url(/public/img/h3-testimonials-bckgrnd.jpg);
}

h3 {
    padding-top: 15%;
    text-align: center;
    padding-left: 15%;
    padding-right: 15%;
    font-weight: bold;
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
    color: #B2B2B2;

}

.name {
    font-size: 1.5rem;
    padding-bottom: 5rem;
    font-weight: bold;

}

.ingredients {
    margin-left: 5rem;
    color: #B2B2B2;

}

.big {
    background-image: url(/public/img/h3-background-img.jpg);
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

.team {
    width: 376px;
    padding-top: 1rem;
}

.four-image {
    display: flex;
    flex-direction: row;
    margin-bottom: 5rem;

}

.person {
    position: relative;
    width: 376px;
    height: 376px;
}

.overlay {
    position: absolute;
    top: 1rem;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(#c0bebe 20%, transparent 20%), radial-gradient(#c0bebe 20%, transparent 20%);
    background-color: #ffffff;
    background-position: 0 0, 6px 6px;
    background-size: 12px 12px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s;
}

.person:hover .overlay {
    opacity: 1;
}

.red {
    background-color: red;
    color: white;
    width: 75%;
    height: 75%;
    position: relative;
    display: table-cell;
    text-align: center;
    padding-top: 5rem;
    vertical-align: middle;
}

.image-container {
    padding: 5rem;
    background-color: #EBEBDE;
}

</style>
