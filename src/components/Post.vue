<template>
  <section id="posts">
    <Container>
      <div class="row dl-row">
        <div class="twelve columns">
          <h1>{{ post.title }}</h1>
          <div class="post">
            <p class="post-description">{{post.description}}</p>
          </div>
        </div>
      </div>
      <div class="row dl-row">
        <div class="six columns">
          <div class="comments">
            <div class="comment-form">
              <form v-on:submit.prevent="submitComment">
                <div class="row dl-row">
                  <div class="columns twelve">
                    <textarea v-model="comment.description" class="u-full-width"></textarea>
                  </div>
                </div>
                <div class="row dl-row">
                  <div class="columns ten">
                    <button class="button button-primary">Comment</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="row dl-row">
        <div class="ten columns">
          <h3>Comments</h3>

          <div class="card" v-for="(comment, index) in demoComments" :key="index">
            <div class="card-body">
              <p style="font-size: 14px" class="card-text">{{ comment.description }}</p>
              by <a href="#" class="card-link" style="color: black">{{ comment.user.firstName + " " + comment.user.lastName }}</a>  -
              <a href="#" class="card-link" style="color: black">{{ (new Date()).toLocaleString() }}</a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from "./Container";
import { VIEW_HEALTH_ISSUES } from "../constants";
export default {
  name: "Post",
  components: {
    Container
  },
  data() {
    return {
      post: {},
      demoComments: [
        {
          description: "has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydne",
          user: { firstName: "John", lastName: "Doe" }
        }
      ],
      comment: {
        description: ""
      }
    };
  },
  methods: {
    submitComment: function() {
      const payload = { description: this.comment.description };
      console.log(payload);
      // const userId = this.$store.getters.userId;
      // const token = this.$store.getters.token;

      // const url = `/api/users/${userId}/`;
    }
  },
  mounted() {
    const url = VIEW_HEALTH_ISSUES.replace(
      "{id}",
      this.$store.getters.userId
    ).replace("{healthIssueId}", this.$router.currentRoute.params.id);
    fetch(url, {
      headers: {
        Authorization: `Bearer ${this.$store.getters.token}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        this.post = res;
      })
      .catch(err => console.error(err));
  }
};
</script>

<style scoped lang="scss">
.post {
  background-color: white;
  padding: 20px;

  .post-description {
    font-size: 16px;
  }

  margin-bottom: 20px;
}
</style>
