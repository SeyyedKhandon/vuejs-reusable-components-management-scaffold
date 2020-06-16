<template>
  <button @click="clicked" :class="$style['button-red']">{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "SimpleButton",
  props: {
    text: {
      type: String,
      default: "press here",
      required: true
    }
  },
  methods: {
    clicked() {
      console.log("clicking");
      this.$emit("click");
    }
  }
});
</script>

<style lang="scss" module>
@import "SimpleButton";
</style>
