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
    <div>
        <AppCardVue v-for="carta in store" :key="carta" :name="carta.name" :archetipo="carta.archetype" :img="carta.card_images.image_url_small" />
    </div>
</template>
