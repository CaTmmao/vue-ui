<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: 'v-collapse',
        props: {
            //是否只能同时显示一个collapse内容
          single: {
              type: Boolean,
              default: false
          }
        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            //用户希望同时只显示一个collapse内容时使eventBus有效
            if (this.single) {
                return {
                    eventBus: this.eventBus
                }
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