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
    <div>
        <img :src="img" alt="">
        <p>{{ name }}</p>
        <p>{{ archetipo }}</p>
    </div>
</template>

