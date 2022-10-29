<template>
  <div class="question-answer">
    <div id="triangle"></div>
    <slot />
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {};
  },
  computed: {},
};
</script>

<style scoped>
.question-answer {
  border: 1px solid rgba(128, 128, 128, 0);
  padding: 0 20px;
  margin: 10px 0 0 0;
  border-radius: 5px;
  background-color: #eeeeee;
  position: relative;
}
#triangle {
  position: absolute;
  top: -15px;
  border: 7px solid transparent;
  border-bottom: 7px solid #eeeeee;
  width: 0;
  height: 0;
}
</style>
