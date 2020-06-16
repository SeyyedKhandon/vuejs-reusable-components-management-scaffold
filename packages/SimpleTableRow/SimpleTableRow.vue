<template>
  <tr>
    <td v-for="(value, index) in values" :key="index">
      {{ value }}:<SimpleButton text="click here" />
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import SimpleButton from "./node_modules/@seyyedkhandon/simple-button/SimpleButton";
export default defineComponent({
  name: "SimpleTableRow",
  components: {
    SimpleButton
  },
  props: {
    values: {
      type: Array,
      required: true
    }
  }
});
</script>

<style lang="scss" module>
@import "SimpleTableRow";
</style>
