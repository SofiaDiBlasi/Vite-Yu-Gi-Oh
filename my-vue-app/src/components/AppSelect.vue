<script>
    import { archetipi } from '../data/archetipi';
    import { store } from '../data/store';
    import axios from 'axios';

       export default{
        name: "Select",

        data() {
            return{
                archetipi,
                store
            }
        },
        methods: {
            changeOp(event) {
                console.log(this.archetipi.archetipi[event.target.value].archetype_name);

                axios.get(this.store.urlAPI + "&archetype=" + this.archetipi.archetipi[event.target.value].archetype_name).then(r => {
                    console.log(r.data.data)
                    this.store.carte = r.data.data;
                    this.store.loading = false;
                }).catch(errore => {
                    console.error("Cerca in un altro cuore la risposta, senza sosta", errore);
                    this.store.carte = [];
                    this.store.loading = false;
                });
            }
        }
    }
</script>

<template>
    <select @change="changeOp($event)" name="" id="">
        <option v-for="(item,i) in archetipi.archetipi" :key="item" :value="i">
            {{ item.archetype_name }}
        </option>
    </select>
</template>


<style lang="scss" scoped>
    select{
        width: 100px;
        height: 50px;
        font-size: 15px;
    }
</style>