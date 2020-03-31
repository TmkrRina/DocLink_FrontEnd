<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="columns two">
          <router-link to="/" class="button">DocLink</router-link>
        </div>
        <div class="columns six">
          <router-link to="/login" class="button">Login</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  background-color: gray;
  height: 90px;
  display: flex;
  align-items: center;
}
</style>