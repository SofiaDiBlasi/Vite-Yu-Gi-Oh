import { reactive } from 'vue'

export const archetipi = reactive({
    loading: true,
    urlAPI: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    archetipi: []
});