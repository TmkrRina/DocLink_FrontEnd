<template>
  <header class="header">
    <Container>
      <div class="row">
        <div class="columns two">
          <router-link to="/" class="nav-link button logo">{{appName}}</router-link>
        </div>
        <div class="columns ten">
          <div class="nav-links dock-right">
            <router-link to="/login" class="nav-link button">Login</router-link>
            <router-link to="/register" class="nav-link button">Register</router-link>
            <router-link to="/dashboard" class="nav-link button">Dashboard</router-link>
          </div>
        </div>
      </div>
    </Container>
  </header>
</template>

<script>
import Container from "./Container";
export default {
  name: "Header",
  props: ["appName"],

  components: { Container }
};
</script>

<style scoped>
.header {
  /* background-color: #e1e9eb; */
  background-color: white;
  height: 90px;
  display: flex;
  align-items: center;
}
</style>