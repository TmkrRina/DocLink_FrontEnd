<template>
      <div id="app">
        <p>
            <router-link to="/">Home</router-link>
            <router-link to="/login">Login</router-link>
        </p>
          <router-view/>
      </div>
</template>

<script>

export default {
  name: 'App',
}
</script>


