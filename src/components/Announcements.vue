<template>
  <main>
    <!-- <Container class=""> -->
    <div class="row dl-row">
      <div class="eight columns">
        <h4>Announcements</h4>
      </div>
      <div class="four columns">
        <router-link
          to="/new-announcements"
          v-show="isDoctor"
          type="button"
          class="button button-primary"
        >New Announcement</router-link>
      </div>
    </div>
    <hr />

    <div class="row dl-row" v-for="(row, index) in announcements" :key="index">
      <div class="card-deck dl-card-deck four columns" v-for="post in row" :key="post.id">
        <div class="card border-dark dl-card">
          <div class="card-body">
            <router-link :to="'/announcements/' + post.id">
              <h5 class="card-title">{{post.title}}</h5>
            </router-link>
            <p style="font-size: 14px" class="card-text">{{post.description}}</p>
          </div>
          <div class="card-footer">
            <span class="text-muted">{{(new Date(post.createDateTime)).toLocaleDateString()}}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<script>
import _ from "lodash";
import { ANNOUNCEMENTS } from "../constants";

export default {
  name: "Annoucements",
  components: {},
  data() {
    return {
      announcements: []
    };
  },
  beforeMount() {
    this.activeItem = this.$route.matched[0].props.default.page;
  },

  async mounted() {
    const token = this.$store.getters.token;
    const context = this;
    await fetch(ANNOUNCEMENTS, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(res => (context.announcements = _.chunk(res, 3)))
      .catch(err => console.log(err));
  },
  computed: {
    isDoctor: function() {
      return this.$store.getters.role === "ROLE_DOCTOR";
    }
  }
};
</script>

<style>
</style>
