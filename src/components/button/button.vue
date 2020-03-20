<template>
  <!--由于使用者直接给v-button标签添加的click事件不会生效，因此需要在button组件中给button添加一个click事件，当button被点击时，触发这个组件的click事件-->
  <button class="v-button" @click="$emit('click')" :class="{[`icon-${iconPosition}`]: true}">
    <!-- 获取iconPosition的值，设置他的值为true，这样值就会被设置成class -->
    <v-icon v-if="icon && !loading" :name="icon"></v-icon>
    <!--loading 效果 name参数默认是loading-->
    <v-icon class="loading" v-if="loading" name="loading"></v-icon>
    <div class="text">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "./icon";
export default {
  name: "v-button",
  //icon:图标类型； position:图标位置；
  components: {
    "v-icon": Icon
  },
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        // 值只能是 right / left， 否则报错
        return value === "right" || value === "left";
      }
    },
    loading: {
      type: Boolean,
      default: false,
      validator(value) {
        // 值只能是true / false ,否则报错
        return value === true || value === false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.v-button {
  color: #333;
  height: 32px;
  /* button 不要用width固定宽度 用padding制造间隙 */
  padding: 0 1em;
  border-radius: 4px;
  border: 1px solid #999;
  background: #fff;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;

  .v-icon {
    order: 0;
  }

  &:hover {
    border-color: #666;
  }

  &:active {
    background-color: #eee;
  }

  &:focus {
    outline: none;
  }

  div.text {
    margin: 0 2px;
  }

  &.icon-right {
    > .v-icon {
      order: 1;
    }
  }

  /*loading icon 无限旋转效果*/
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loading {
    animation: spin infinite 1s linear;
  }

  /* 设置icon样式 */
  .icon {
    /*宽度和高度设置为和字体一样高*/
    width: 1em;
    height: 1em;
  }
}
</style>