<template>
  <Container>
    <h1>New Post</h1>
    <div class="row dl-row">
      <div class="columns ten">
        <div class="new-post-wrapper">
          <form v-on:submit.prevent="submit">
            <div class="row dl-row">
              <div class="six columns">
                <label for="title">Title</label>
                <input type="text" v-model="title" class="u-full-width" />
              </div>
            </div>
            <div class="row dl-row">
              <div class="eight columns">
                <label for="title">Description</label>
                <textarea type="text" v-model="description" class="u-full-width" rows="50"></textarea>
              </div>
            </div>
            <div class="row dl-row">
              <button class="button button-primary">Post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "./Container";
import { CREATE_HEALTH_ISSUES } from "../constants";
export default {
  name: "NewPost",
  components: { Container },
  data: function() {
    return {
      title: "",
      description: ""
    };
  },
  methods: {
    submit: async function() {

      await fetch(CREATE_HEALTH_ISSUES.replace("{id}", this.$store.getters.userId), {
        method: "post",
        body: JSON.stringify({
          title: this.title,
          description: this.description
        }),
        headers: {
            "Authorization": `Bearer ${this.$store.getters.token}`,
            "Content-type": "application/json"
        }
      })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }
  }
};
</script>

<style scoped lang="scss">
.new-post-wrapper {
  padding: 20px;
  background-color: white;
}
</style>