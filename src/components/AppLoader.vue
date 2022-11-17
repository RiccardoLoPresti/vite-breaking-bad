<script>
export default {
    name:'AppLoader'
}
</script>

<template>
  <div class="loading d-flex flex-column justify-content-center align-items-center">
    <p>Loading...</p>
    <img src="/FNb.gif" alt="">
  </div>
</template>

<style lang="scss" scoped>
.loading{
    position: relative;
    p{
        color: black;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 1.5rem;
        font-weight: 700;
    }
    img{
        width: 200px;   
        height: 200px;
        border-radius: 50%;
    }
}
</style>