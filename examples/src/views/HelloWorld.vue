<template>
  <div>
    {{ msg }}
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  data() {
    return {
      msg: 'hello,world',
    };
  }
});
</script>
