<template>
  <form v-on:submit.prevent="submit">
    <h1 class="login-title">Login</h1>
    <div class="row">
      <div class="six columns">
        <label for="email">Email</label>
        <TextInput name="email" v-bind:email="email" v-bind:onChange="onChange" />
      </div>
    </div>
    <div class="row">
      <div class="six columns">
        <label for="password">Password</label>
        <PasswordInput name="password" v-bind:password="password" v-bind:onChange="onChange" />
      </div>
    </div>
    <button class="button button-primary" type="submit">Login</button>
  </form>
</template>

<script>
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";

export default {
  name: "LoginForm",
  props: ["onSubmit"],
  components: { TextInput, PasswordInput },
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    submit: function() {
      this.$store.commit('login', {emai: this.email, password: this.password});
    },
    onChange: function(event) {
      this[event.target.name] = event.target.value;
    }
  }
};
</script>

<style lang="scss" scoped>
.login-title {
  color: white;
}
</style>