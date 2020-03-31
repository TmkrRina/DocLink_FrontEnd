<template>
  <header class="header">
    <Container>
      <div class="row">
        <div class="columns two">
          <router-link to="/">{{appName}}</router-link>
        </div>
        <div class="columns six">
          <router-link to="/login" class="button">Login</router-link>
        </div>
      </div>
    </Container>
  </header>
</template>

<script>
import Container from "./Container"
export default {
  name: "Header",
  props: ['appName'],

  components: { Container }
};
</script>

<style scoped>
.header {
  background-color: white;
  height: 90px;
  display: flex;
  align-items: center;
}
</style>