<template>
      <div id="app">
        <p>
            <router-link to="/">Home</router-link>
            <router-link to="/login">Login</router-link>
            <router-link to="/register">Register</router-link>
                        
        </p>
          <router-view/>
      </div>
</template>

<script>

export default {
  name: 'App',
}
</script>


