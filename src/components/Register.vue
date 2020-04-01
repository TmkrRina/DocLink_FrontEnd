<template>
 <div class="body">
  <div class="row">
    <div class = "six columns" > 
     	<router-link to="/user-register" class="button button-primary">Register as a user</router-link>
  		<div class = "six columns">
 				<router-link to="/doctor-register" class="button button-primary">Register as a doctor</router-link>
			</div>
<!-- Always wrap checkbox and radio inputs in a label and use a <span class="label-body"> inside of it -->
		</div>
    	<div class="two columns"></div>
   

  </div>
 </div>
</template>

<script>
	export default {
	  name: 'Register',
	  props: {
	    msg: String
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
	  margin: 40px 0 0;
	}
	ul {
	  list-style-type: none;
	  padding: 0;
	}
	li {
	  display: inline-block;
	  margin: 0 10px;
	}
	a {
	  color: #42b983;
	}
	.body{
	  background-color: #cbd2d7;
	}
</style>
