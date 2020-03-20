<template>
  <!--用div元素把该组件包裹起来 click事件本来应该写在默认的slot里面，默认的slot用来插入button，但是slot无法添加事件，写在div
  元素上一样-->
  <div class="popover" ref="popover">
    <div
      class="content-wrapper"
      ref="contentWrapper"
      v-if="visible"
      :class="{[`position-${position}`]: true}"
    >
      <!--name=content,在HTML中对应slot=content的标签-->
      <slot name="content" :close="closePopover"></slot>
    </div>
    <span ref="triggerWrapper" class="triggerWrapper">
      <!--默认的slot，用来做trigger触发pooover，比如放一个button在里面，click / hover / focus触发popover显示上面的content-->
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "v-popover",
  data() {
    return {
      //针对name为content的slot，默认不可见
      visible: false
    };
  },
  props: {
    //content位置
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].includes(value);
      }
    },
    //触发popover的方式
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].includes(value);
      }
    }
  },
  mounted() {
    //根据用户传入的trigger方式不同而监听的事件也不同
    if (this.trigger === "click") {
      this.$refs.popover.addEventListener("click", this.triggerVisible);
    } else {
      this.$refs.popover.addEventListener("mouseenter", this.showPopover);
      this.$refs.popover.addEventListener("mouseleave", this.closePopover);
    }
  },
  destroy() {
    /* 组件销毁时，记得把监听的事件移除掉,如果是在HTML标签上用@click写的监听事件，vue会自动移动，但是这里用的是js自己写的，
            需要自己移除掉*/
    if (this.trigger === "click") {
      this.$refs.popover.removeEventListener("click", this.triggerVisible);
    } else {
      this.$refs.popover.removeEventListener("mouseenter", this.showPopover);
      this.$refs.popover.removeEventListener("mouseleave", this.closePopover);
    }
  },
  methods: {
    //切换visible的状态
    triggerVisible(e) {
      //button包含e.target，说明用户点击的是button
      if (this.$refs.triggerWrapper.contains(e.target)) {
        //如果当前visible是true（说明content是显示状态）
        if (this.visible === true) {
          //关闭content
          this.closePopover();
        } else {
          //显示content
          this.showPopover();
          /*如果不用异步，会直接执行document监听器里面的代码（比如：用户监听元素A的click事件1，该click事件里面
                          会有一个if判断，当判断为true，会给document增加一个click的监听器，这里称为事件2，当用户第一次点击元素A时，
                          事件1会被触发，然后里面的if会进行判断，如果为true，继续执行里面的代码也就是给document增加一个click监听器，
                          而这个监听器立马察觉到这一次用户就是click了这个div，所以这个监听器会被立马执行，而不是，先创建了这个监听器，
                          等用户下次再触发click时才调用监听器指定的函数。）*/
          setTimeout(() => {
            //创建document的click监听器
            document.addEventListener("click", this.eventHandler);
          }, 0);
        }
      }
    },
    eventHandler(event) {
      /*如果当前点击的元素(event.target)被包含在contentWrapper中，说明用户点击的是content内容，
                  用户也许想法是想复制里面的内容，因此在这种情况下不要关闭content*/
      if (
        !(
          this.$refs.contentWrapper &&
          this.$refs.contentWrapper.contains(event.target)
        )
      ) {
        //document中除了content的其他范围发生click，关闭content
        this.closePopover();
      }
    },
    //关闭popover
    closePopover() {
      this.visible = false;
      //移除document的click监听器
      document.removeEventListener("click", this.eventHandler);
    },
    //显示popover的content
    showPopover() {
      this.visible = true;
      setTimeout(() => {
        //将content移动到button上方
        this.moveContentPosition();
      }, 0);
    },
    //把content内容移动到button上方
    moveContentPosition() {
      let { contentWrapper, triggerWrapper } = this.$refs;
      //获取triggerWrapper(button)的位置
      let { left, top, height, width } = triggerWrapper.getBoundingClientRect();

      //将ref为contentWrapper的元素移动到body中 移动的元素除了位置改变，其他功能都保留
      document.body.appendChild(contentWrapper);
      //解构赋值中的变量重命名语法，后续用width2获取值
      let {
        width: width2,
        height: height2
      } = contentWrapper.getBoundingClientRect();

      //表驱动编程，给contentWrapper设置位置
      let positions = {
        top: {
          left: left + window.scrollX,
          top: top + window.scrollY
        },
        bottom: {
          left: left + window.scrollX,
          top: top + height + window.scrollY
        },
        left: {
          left: left - width2 + window.scrollX,
          top: top - Math.abs(height - height2) / 2 + window.scrollY
        },
        right: {
          left: left + width + window.scrollX,
          top: top - Math.abs(height - height2) / 2 + window.scrollY
        }
      };

      contentWrapper.style.top = positions[this.position].top + "px";
      contentWrapper.style.left = positions[this.position].left + "px";
    }
  }
};
</script>

<style scoped lang="scss">
.popover {
  position: relative;
  display: inline-block;

  .triggerWrapper {
    display: inline-block;
  }
}

//之所以不写在.popover里面是因为content显示在页面中时会被append在body中而不是放在popover中，那样样式无法生效
.content-wrapper {
  padding: 10px 15px;
  position: absolute;
  border: 1px #333 solid;
  border-radius: 3px;
  //用drop-shadow是为了解决box-shadow不会应用&::before三角形的问题 但是这个必须配合background一起写
  filter: drop-shadow(0 1px 1px #aaa);
  background: #fff;
  max-width: 20em;
  //自动换行
  word-wrap: break-word;

  &::before,
  &::after {
    content: "";
    display: block;
    border: 10px solid transparent;
    position: absolute;
  }

  //position为top时
  &.position-top {
    margin-top: -15px;
    transform: translateY(-100%);

    &::before {
      border-bottom: none;
      border-top-color: #333;
      top: 100%;
    }

    &::after {
      border-bottom: none;
      border-top-color: #fff;
      top: calc(100% - 1px);
    }
  }

  &.position-bottom {
    margin-top: 15px;

    &::before {
      border-top: none;
      border-bottom-color: #333;
      bottom: 100%;
    }

    &::after {
      border-top: none;
      border-bottom-color: #fff;
      bottom: calc(100% - 1px);
    }
  }

  &.position-left {
    margin-left: -15px;

    &::before,
    &::after {
      border-right: none;
      top: 50%;
      transform: translateY(-50%);
    }

    &::before {
      border-right: none;
      border-left-color: #333;
      left: 100%;
    }

    &::after {
      border-left-color: #fff;
      left: calc(100% - 1px);
    }
  }

  &.position-right {
    margin-left: 15px;

    &::before,
    &::after {
      border-left: none;
      top: 50%;
      transform: translateY(-50%);
    }

    &::before {
      border-left: none;
      top: 50%;
      border-right-color: #333;
      right: 100%;
    }

    &::after {
      border-right-color: #fff;
      right: calc(100% - 1px);
    }
  }
}
</style>