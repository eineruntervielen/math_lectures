<template>
  <div id="info-box">
    <h4>Info</h4>
    <div id="info-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#info-box {
  font-size: 1rem;
  box-sizing: border-box;
  border-left: 0.5rem solid var(--main-color);
  padding: 0.5rem;
  margin-left: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: 3px 3px 2px var(--main-color);
}

#info-box h4 {
  color: var(--main-color);
}
</style>