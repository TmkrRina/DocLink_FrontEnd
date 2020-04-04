<template>
  <VerticalHeight>
    <div class="user-register">
      <Container>
        <div class="row">
          <div class="ten columns">
            <form v-on:submit.prevent="submit">
              <input type="hidden" name="userRole" value="ROLE_DOCTOR" />
              <div class="row">
                <h2>Register</h2>
              </div>
              <div class="row">
                <div class="three columns">
                  <label for="exampleEmailInput">Firstname</label>
                  <input class="u-full-width" type="email" placeholder id="exampleEmailInput" />
                </div>
                <div class="three columns">
                  <label for="exampleEmailInput">Lastname</label>
                  <input class="u-full-width" type="email" placeholder id="exampleEmailInput" />
                </div>
              </div>
              <div class="row">
                <div class="six columns">
                  <label for="exampleEmailInput">Your email</label>
                  <input
                    class="u-full-width"
                    type="email"
                    placeholder="test@mailbox.com"
                    id="exampleEmailInput"
                  />
                </div>
              </div>
              <div class="row">
                <div class="six columns">
                  <label for="exampleEmailInput">Your password</label>
                  <input
                    class="u-full-width"
                    type="password"
                    placeholder="******"
                    id="exampleEmailInput"
                  />
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

              <input class="button button-primary" type="submit" value="Register" />
            </form>
          </div>
        </div>
      </Container>
    </div>
  </VerticalHeight>
</template>

<script>
import Container from "./Container";
import VerticalHeight from "./VerticalHeight";

export default {
  components: { Container, VerticalHeight },
  name: "UserRegister",
  props: {
    msg: String
  },
  data: function() {
    return {
      firstName: null,
      lastName: null,
      country: null,
      state: null,
      email: null,
      password: null,
    }
  },
  methods: {
    submit: function() {
      
    }
  }
};
</script>

<style scoped lang="scss">
.user-register {
  display: flex;
  // padding-top: 100px;
  box-sizing: border-box;
  // background-color: white;
  background-color: #e1e9eb;
  height: 100%;
  align-items: center;
  position: relative;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
  }
}
</style>
