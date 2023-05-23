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
        store
      }
    },
    mounted() {
      console.log(axios)
      axios.get(this.store.urlAPI).then(r => {
        console.log(r)
        this.store.carte = r.data.data;
        this.store.loading = false;
        console.log(this.store)
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
    <AppIntestazioneVue />
    <AppCorpo />
  </div>
</template>


<style lang="scss" scoped>
</style>
