<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: 'v-collapse',
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        }
    }
</script>

<style scoped lang="scss">
    .collapse {
        border: 1px #ddd solid;
        border-radius: 4px;
        margin: 100px;
    }
</style>