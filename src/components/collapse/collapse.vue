<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "v-collapse",
  props: {
    //是否只能同时显示一个collapse内容
    single: {
      type: Boolean,
      default: false
    },
    //当前被选中项 与 item中的name属性做对比
    selected: {
      type: Array
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  mounted() {
    //在一开始通知子组件当前选中的是哪些
    this.eventBus.$emit("update:selected", this.selected);

    //监听子组件的add collapse事件
    this.eventBus.$on("add:selected", name => {
      //深拷贝到一个变量中 因为vue不允许我们直接给props中的属性赋值 如 this.selected = [name]
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));

      //把当前需要展开的collapse数组更新到最新值
      //如果只能同时展开一个collapse
      if (this.single) {
        selectedCopy = [name];
      } else {
        selectedCopy.push(name);
      }

      //通知子组件检查自己是否需要显示自己的内容
      this.eventBus.$emit("update:selected", selectedCopy);
      //执行下面这句话 HTML标签中的.sync修饰符才会生效
      this.$emit("update:selected", selectedCopy);
    });

    //监听子组件的remove collapse事件
    this.eventBus.$on("remove:selected", name => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      //在数组中找到需要remove的name的索引
      let index = selectedCopy.indexOf(name);
      //从数组中删除该项
      selectedCopy.splice(index, 1);
      //通知子组件更新
      this.eventBus.$emit("update:selected", selectedCopy);
      //执行下面这句话 HTML标签中的.sync修饰符才会生效
      this.$emit("update:selected", selectedCopy);
    });
  }
};
</script>

<style scoped lang="scss">
.collapse {
  background-color: #f7f7f7;
  border-radius: 3px;
  border: 1px solid #dcdee2;

  > div:last-child {
    border-bottom-color: transparent;
  }
}
</style>