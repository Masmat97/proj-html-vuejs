<script>
import Jumbo from './Jumbo.vue';
import cardContainer from './Card.vue'
import LastMainContent from './LastMainContent.vue'
import FirstMainContent from './FirstMainContent.vue';

export default {
  components: {
   Jumbo,
   cardContainer,
   LastMainContent,
   FirstMainContent
  },
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<template>
  <Jumbo />
  <cardContainer />
  <FirstMainContent />
  <LastMainContent />
</template>

<style scoped>

</style>
