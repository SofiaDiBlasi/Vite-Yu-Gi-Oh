<script>
  import AppIntestazioneVue from './components/AppIntestazione.vue';
  import AppCorpo from './components/AppCorpo.vue';

  import { store } from './data/store';
  import axios from 'axios';

  export default {
    name: 'App',
    components: {
      AppIntestazioneVue,
      AppCorpo
    },
    data() {
      return {
        carte : store
      }
    },
    mounted() {
    axios.get(this.store.urlAPI).then(r => {
      this.store.carte = r.data.results;
      this.store.loading = false;
    }).catch(errore => {
      console.error("Cerca in un altro cuore la risposta, senza sosta", errore);
      this.store.carte = [];
      this.store.loading = false;
    });
  }
  }
</script>

<template>
  <div>
    <AppCorpo />
    <AppIntestazioneVue />
  </div>
</template>


<style lang="scss" scoped>
</style>
