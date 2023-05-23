<script>
    export default{
        name: "Head"
    }
</script>

<template>
    <header>
        <div class="logoContainer">
            <img class="logo" src="../assets/yugi logo.png" alt="" width="10" height="10">
            <h2>Yu-Gi-Oh Api</h2>
        </div>
    </header>
</template>
 

<style lang="scss" scoped>
    header{
        background-color: white;
        width: 100%;
        height: 50px ;
        margin-bottom: 50px;
    }
    .logoContainer{
        width: 100%;
        height: 50px ;
        display: flex;
        align-items: center;
        padding-left: 20px;
    }
    .logo{
        width: 100px;
        height: 30px;
    }
</style>

