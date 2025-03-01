<template>
  <Wrapper :light="true">
  </Wrapper>
</template>
<script>
import Wrapper from "../components/Wrapper.vue";
export default {
  data() {
    return {
      nav: false,
      isSidebarOpen: false,
    };
  },
  components: {
    Wrapper,
  },
};
</script>