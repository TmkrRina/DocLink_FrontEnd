<template>
  <div class="body">
  <div class="row">
  <div class="four columns"></div>
    <div class="ten columns">
<form>
  <div class="row">
    <div class="six columns">
      <label for="exampleEmailInput">Your email</label>
      <input class="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput" />
    </div>

    <!-- <div class="six columns">
      <label for="exampleRecipientInput">Reason for contacting</label>
      <select class="u-full-width" id="exampleRecipientInput">
        <option value="Option 1">Questions</option>
        <option value="Option 2">Admiration</option>
        <option value="Option 3">Can I get your number?</option>
      </select>
    </div> -->

  </div>
  <div class="row">
  <div class="six columns">
  <label for="exampleEmailInput">Your password</label>
  <input class="u-full-width" type="password" placeholder="******" id="exampleEmailInput">
  </div>
</div>


  <input class="button-primary" type="submit" value="Login">
</form>
<!-- Always wrap checkbox and radio inputs in a label and use a <span class="label-body"> inside of it -->
</div>
    <div class="two columns"></div>
   

  </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
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
