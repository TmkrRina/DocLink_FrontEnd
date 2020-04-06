<template>
  <!-- <VerticalHeight> -->
    <div class="doctor-register">
      <Container>
        <div class="row dl-row">
          <div class="ten columns">
            <form v-on:submit.prevent="submit">
              <div class="row dl-row">
                <h2>Register as a Doctor</h2>
              </div>
              <div class="row dl-row">
                <div class="six columns">
                  <label for="exampleEmailInput">Firstname</label>
                  <input class="u-full-width" v-model="firstName" type="text" />
                </div>
                <div class="six columns">
                  <label for="exampleEmailInput">Lastname</label>
                  <input class="u-full-width" v-model="lastName" type="text"  />
                </div>
              </div>
              <div class="row dl-row">
                <div class="six columns">
                  <label for="exampleEmailInput">Your email</label>
                  <input
                    class="u-full-width"
                    type="email"
                    placeholder="test@mailbox.com"
                    id="exampleEmailInput"
                    v-model="email"
                  />
                </div>
              </div>
              <div class="row dl-row">
                <div class="six columns">
                  <label for="exampleEmailInput">Your password</label>
                  <input
                    class="u-full-width"
                    type="password"
                    placeholder="******"
                    id="exampleEmailInput"
                    v-model="password"
                  />
                </div>
              </div>
              <div class="row dl-row">
                <div class="six columns">
                  <label for="exampleEmailInput">Specialization</label>
                  <input class="u-full-width" type="text" v-model="specialization" placeholder="2" id="exampleEmailInput" />
                </div>
              </div>

              <div class="row dl-row">
                <label for="exampleMessage">Experience</label>
                <textarea
                  class="u-full-width"
                  placeholder=""
                  id="exampleMessage"
                  v-model="experience"
                ></textarea>
              </div>

              <div class="row dl-row">
                <div class="six columns">
                  <label for="roleInput">Country</label>
                  <select class="u-full-width" v-model="country" id="roleInput">
                    <option value="USA">USA</option>
                    <option value="Australia">Australia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Nepal">Nepal</option>
                  </select>
                </div>

                <div class="six columns">
                  <label for="roleInput">State</label>
                  <select class="u-full-width" v-model="state" id="roleInput">
                    <option value="Iowa">Iowa</option>
                    <option value="Califonia">California</option>
                    <option value="New York">New York</option>
                  </select>
                </div>
              </div>

              <input class="button-primary" type="submit" value="Register" />
            </form>
          </div>
        </div>
      </Container>
    </div>
  <!-- </VerticalHeight> -->
</template>

<script>
import Container from "../Container";
// import VerticalHeight from "../VerticalHeight";
import { DOCTOR_REGISTRATION } from '../../constants'

export default {
  components: { Container },
  name: "DoctorRegister",
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
      userRole: "ROLE_DOCTOR",
      experience: null,
      specialization: null
    };
  },
  methods: {
    submit: function() {
      const details = JSON.stringify({
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
        country: this.country,
        state: this.state,
        userRole: this.userRole,
        experience: this.experience,
        specialization: this.specialization
      });

      const context = this;

      fetch(DOCTOR_REGISTRATION, {
        method: "post",
        body: details,
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json())
      .then(response => {
        console.log(response);
        context.$router.push({path: '/login'});
      }).catch(() => false)
    }
  }
};
</script>


<style scoped lang="scss">
.doctor-register {
  display: flex;

  box-sizing: border-box;
  // background-color: rgba(0,0,0,0.5);
  background-color: #e1e9eb;
  height: 100vh;
  align-items: center;
  position: relative;
  padding: 30px 0;

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
