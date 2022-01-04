<template>
    <div id="sketch"></div>
</template>
<script>
import p5 from 'p5';
import {Sets} from '@/sketches/Sets';

export default {
  mounted () {
    new p5(Sets, 'sketch');
  } 
}
</script>
<style scoped>
#sketch {
    margin: 5rem
}
</style>