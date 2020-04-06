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
    </Container>
  </section>
</template>

<script>
import Container from "./Container";
import { VIEW_ANNOUNCEMENT } from "../constants";

export default {
  name: "ViewBanner",
  components: {
    Container
  },
  data() {
    return {
      post: {},
    };
  },
  mounted() {
  //   const url = VIEW_ANNOUNCEMENT.replace(
  //     "{id}",
  //     this.$router.currentRoute.params.id
  //   );
  //   fetch(url, {
  //     headers: {
  //       "Authorization": `Bearer ${this.$store.getters.token}`,
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       this.post = res;
  //     })
  //     .catch(err => console.error(err));
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
