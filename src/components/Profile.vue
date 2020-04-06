<template>
  <section id="profile">
        <div class="row dl-row">
      <div class="columns twelve">
        <h4>Profile</h4>
        <hr />
      </div>
    </div>
    <mdb-row>
      <mdb-col md="3">
        <mdb-card cascade narrow>
          <mdb-view>
            <img
              src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg"
              alt="Project"
              class="img-fluid"
            />
            <mdb-mask overlay="white-slight" waves />
          </mdb-view>
          <mdb-card-body class="text-center">
            <mdb-card-title class="font-bold mb-2">
              <strong>{{ fullName }}</strong>
            </mdb-card-title>
            <h5 class="indigo-text">
              <strong>{{ profession }}</strong>
            </h5>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
      <mdb-col md="5">
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Firstname</label>
            <input type="text" class="u-full-width" v-model="update.firstName" placeholder />
            <label for="exampleFormControlInput1">Lastname</label>
            <input type="text" class="u-full-width" v-model="update.lastName" id="exampleFormControlInput1" placeholder />
            <label for="exampleFormControlInput1">Age</label>
            <input type="text" class="u-full-width" v-model="update.age" placeholder />
            <label for="exampleFormControlInput1">Gender</label>
            <input
              v-model="update.gender"
              type="text"
              class="u-full-width"
            />
            <label v-show="isDoctor">Specialization</label>
            <input v-show="isDoctor" type="text" class="u-full-width" v-model="update.specialization" id="exampleFormControlInput1" placeholder />
            <div class="form-group" v-show="isDoctor">
              <label for="exampleFormControlTextarea1" v-show="isDoctor">Experience</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" v-model="update.experience" rows="3"></textarea>
            </div>
          </div>
          <div class="form-group">
            <label>Country</label>
            <select class="u-full-width" v-model="update.country">
              <option>Nepal</option>
              <option>USA</option>
              <option>Ethiopia</option>
              <option>Nigeria</option>
              <option>Krosova</option>
            </select>
            <button type="button" class="btn btn-primary">Edit Details</button>
          </div>
        </form>
      </mdb-col>
    </mdb-row>
  </section>
</template>

<script>
import {
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbView,
  mdbMask,
  mdbCardTitle
} from "mdbvue";

export default {
  name: "Profile",
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbView,
    mdbMask,
    mdbCardTitle
    // mdbCardText,
    // mdbCardFooter,
    // mdbIcon,
    // mdbBtn,
    // mdbPagination,
    // mdbPageNav,
    // mdbPageItem
  },
  data() {
    return {
    };
  },
  computed: {
    update: function() {
      return this.$store.getters.user;
    },
    profile: function() {
      return this.$store.getters.user
    },
    fullName: function() {
      const profile = this.profile;
      return profile.firstName + " " + profile.lastName;
    },
    profession: function() {
      const role = this.$store.getters.role;
      if(role !== "ROLE_DOCTOR") return null;

      return this.profile.specialization;
    },
    isDoctor: function() {
      return this.$store.getters.role === "ROLE_DOCTOR"
    }
  }
};
</script>

<style scoped>
.profile-card-footer {
  background-color: #f7f7f7 !important;
  padding: 1.25rem;
}
.card.card-cascade .view {
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15), 0 3px 12px 0 rgba(0, 0, 0, 0.15);
}
</style>
