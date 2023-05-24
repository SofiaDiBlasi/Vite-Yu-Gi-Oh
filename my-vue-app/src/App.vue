<script>
  import AppIntestazioneVue from './components/AppIntestazione.vue';
  import AppCorpo from './components/AppCorpo.vue';
  import AppSelect from './components/AppSelect.vue';

  import { store } from './data/store';
  import { archetipi } from './data/archetipi';
  import axios from 'axios';
 

  export default {
    name: 'App',
    components: {
      AppIntestazioneVue,
      AppCorpo,
        AppSelect
    },
    data() {
      return {
        store,
        archetipi
      }
    },
    mounted() {
      axios.get(this.store.urlAPI).then(r => {
        this.store.carte = r.data.data;
        this.store.loading = false;
      }).catch(errore => {
        console.error("Cerca in un altro cuore la risposta, senza sosta", errore);
        this.store.carte = [];
        this.store.loading = false;
      });
      axios.get(this.archetipi.urlAPI).then(r => {
        this.archetipi.archetipi = r.data;
        this.archetipi.loading = false;
      }).catch(errore => {
        console.error("Cerca in un altro cuore la risposta, senza sosta", errore);
        this.archetipi.archetipi = [];
        this.archetipi.loading = false;
      });
    }
  }
</script>

<template>
  <div>
    <AppIntestazioneVue />
    <app-select />
    <AppCorpo />
  </div>
</template>


<style lang="scss" scoped>
</style>
