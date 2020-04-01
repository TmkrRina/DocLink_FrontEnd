<template>
  <div class="body">
  <div class="row">
  <div class="four columns"></div>
    <div class="ten columns">
<form>
  <div class="row">
    <h2>Register Here!</h2>
  </div>
  <div class="row">
    <div class="three columns">
      <label for="exampleEmailInput">Firstname</label>
      <input class="u-full-width" type="email" placeholder="" id="exampleEmailInput" />
    </div>
    <div class="three columns">
      <label for="exampleEmailInput">Lastname</label>
      <input class="u-full-width" type="email" placeholder="" id="exampleEmailInput" />
    </div>
  </div>
  <div class="row">
    <div class="six columns">
      <label for="exampleEmailInput">Your email</label>
      <input class="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput" />
    </div>
  </div>
  <div class="row">
  <div class="six columns">
  <label for="exampleEmailInput">Your password</label>
  <input class="u-full-width" type="password" placeholder="******" id="exampleEmailInput">
  </div>
</div>

  <div class="row">
   <div class="six columns">
      <label for="roleInput">Country</label>
      <select class="u-full-width" id="roleInput">
        <option value="Option 1">USA</option>
        <option value="Option 2">Australia</option>
        <option value="Option 2">Ethiopia</option>
        <option value="Option 2">Nigeria</option>
        <option value="Option 2">Nepal</option>
        
      </select>
    </div>
    </div>

    <div class="row">
   <div class="six columns">
      <label for="roleInput">State</label>
      <select class="u-full-width" id="roleInput">
        <option value="Option 1">Iowa</option>
        <option value="Option 2">California</option>
        <option value="Option 2">New York</option>

        
      </select>
    </div>
    </div>

  <input class="button-primary" type="submit" value="Register">
</form>
</div>
    <div class="two columns"></div>
   

  </div>
  </div>
</template>

<script>
export default {
  name: 'UserRegister',
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
