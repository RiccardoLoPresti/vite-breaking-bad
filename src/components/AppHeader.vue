<script>
export default {
    name:'AppHeader'
}
</script>

<template>
    <header class="d-flex align-items-center h-100">
        <img src="/brba-logo.png" alt="logo">
        <h1 class="fw-bold px-3">Breaking Bad Api</h1>
    </header>
</template>


<style lang="scss" scoped>
@use './src/styles/general';
@use './src/styles/partials/vars' as *;

header{
    height: 60px;
    img{
        width: 50px;
        margin-left: 20px;
    }
}
</style>