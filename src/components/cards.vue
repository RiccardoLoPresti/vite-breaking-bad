<script>
export default {
    name:'cards',
    props:{
        objectCard: Object
    },
}
</script>

<template>

    <div class="col-12 col-md-6 col-lg-4 col-xxl-3">

        <div class="rl-card pt-4 mx-2 text-center mt-4 mb-3">
            <img :class="{'noImg':objectCard.img==''}" :src="objectCard.img" alt="">
            <h6 class="fw-bold text-uppercase pt-4">{{objectCard.name}}</h6>
            <div class="description mt-3">
                <p>{{objectCard.category}}</p>
                <p>{{objectCard.status}}</p>
            </div>
        </div>
        
    </div>

</template>



<style lang="scss" scoped>
@use './src/styles/partials/vars' as *;

.rl-card{
    background-color: $bg-main-color;
    height: 520px; 
    transition: all 0.3s;
    &:hover{
        transform: scale(1.03);
        box-shadow: 0 0 6px 1px $bg-secondary-color;
    }
    img{
        object-fit: cover;
        height: 320px;
        width: 225px;
    }
    p{
        color: $font-seconday-color;
        font-size: 1.15rem;
    }
   
}
</style>