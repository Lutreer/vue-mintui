<template>
    <div>
        <Developing></Developing>
    </div>
</template>
<script>
import Developing from '../../components/error/Developing.vue'
export default {
    data() {
        return {

        }
    },
    components: {Developing},
    methods:{

    },
    mounted() {
        this.$loading.close();
    }

}
</script>
<style lang="scss" scoped>

</style>
