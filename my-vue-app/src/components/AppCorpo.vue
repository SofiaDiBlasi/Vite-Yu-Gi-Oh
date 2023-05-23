<script>
import AppCardVue from './AppCard.vue';
import { store } from '../data/store';

    export default{
        name: "Body",

        components: {
            AppCardVue
        },
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="cardContainer">
        <AppCardVue v-for="carta in store.carte" :key="carta" :name="carta.name" :archetipo="carta.archetype" :img="carta.card_images[0].image_url_small" />
    </div>
</template>


<style lang="scss" scoped>
    .cardContainer{
        background-color: white;
        display: flex;
        flex-wrap: wrap;
        width: 1000px;
        height: 1200px;
        overflow-y: auto;
        justify-content: center;
        justify-content: space-around;
        padding: 30px;
        margin: auto;
    }
</style>
