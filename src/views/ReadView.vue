<template>
  <div class="home">
    <ReadComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import ReadComponent from '@/components/ReadComponent.vue'

export default {
  name: 'ReadView',
  components: {
    ReadComponent
  }
}
</script>
