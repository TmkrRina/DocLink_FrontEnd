
<template>
  <section id="dashboard">
    <!-- <Container> -->
    <div class="row dl-row" v-for="(row, index) in posts" :key="index">
      <!-- <div class="twelve columns"> -->
        <div class="card-deck dl-card-deck four columns" v-for="post in row" :key="post.id">
          <div class="card border-dark dl-card">
            <div class="card-body">
              <router-link :to="'/posts/' + post.id"> <h5 class="card-title">{{post.title}}</h5> </router-link>
              <p class="card-text">{{post.description}}</p>
            </div>
            <div class="card-footer">
              <span class="text-muted">{{(new Date(post.createDateTime)).toLocaleDateString()}}</span>
            </div>
          </div>
        </div>
      <!-- </div> -->
    </div>
    <!-- </Container> -->
  </section>
</template>
  

<script>
// import Container from "./Container";
import _ from "lodash";

export default {
  name: "Dashboard",
  components: {},
  data: function() {
    return {
      posts: []
    };
  },
  computed: {
    // posts: function() {
    //   let result = _.chunk(posts, 3);
    //   console.log(result);
    //   return result;
    // }
  },
  mounted() {
    this.$store
      .dispatch("fetchPosts", {
        role: this.$store.getters.role,
        id: this.$store.getters.userId
      })
      .then(result => this.posts = _.chunk(result, 3))
      .catch(err => console.error(err));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .card.dl-card {
    .card-text {
      font-size: 14px;
    }
  }


  .dl-card-deck {
    margin-bottom: 20px;
  }

</style>
