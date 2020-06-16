<template>
  <tr>
    <td v-for="(value, index) in values" :key="index">
      {{ value }}
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "SimpleTableRow",
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
