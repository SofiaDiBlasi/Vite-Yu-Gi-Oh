<script>
    export default{
        name: "Card",

        props: {
            name: String,
            archetipo: String,
            img: String
        }
    }
</script>

<template>
    <div class="cardBox">
        <img class="card" :src="img" alt="">
        <p>{{ name }}</p>
        <p class="archetipo">{{ archetipo }}</p>
    </div>
</template>

<style lang="scss" scoped>
    .cardBox{
        background-color: orange;
        height: 300px;
    }
    .card{
        margin: 5px;
    }

    p{
            font-size: 10px;
            color: white;
            text-align: center;
        }

    .archetipo{
        color: black;
    }
</style>

