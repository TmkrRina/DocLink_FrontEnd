<template>
  <a v-on:click.prevent="logout" class="button nav-link">Logout</a>
</template>

<script>
export default {
    name: "Logout",
    methods: {
        redirect: function(path = '/login') {
            this.$router.push(path);
        },
        logout: function() {
            this.$store.dispatch('logout', { redirect: this.redirect });
        }
    }
}
</script>

<style>

</style>