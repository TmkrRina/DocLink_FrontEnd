<template>
  <div class="banner-announcement">
    <div class="banner-announcement-content">
      <div class="row dl-row">
        <div class="columns twelve">
          <h1 class="ba-header">{{ banner.title }}</h1>
        </div>
      </div>
      <div class="row dl-row">
        <div class="columns twelve">
          <p class="ba-excerpt">{{banner.description}}</p>
        </div>
      </div>
      <div class="row dl-row">
        <div class="columns twelve">
          <button type="button" class="button button-primary">Read more...</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BANNER_ANNOUNCEMENTS } from "../constants";

export default {
  name: "BannerAnnouncement",
  data() {
    return {
      banner: {
        title: "Announcement Title",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      }
    }
  },
  async mounted() {
    const context = this;
    await fetch(BANNER_ANNOUNCEMENTS, {
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(res => res.json())
      .then(res => {
        if(!res) return;
        console.log(res[0]);
        context.banner = {...res[0]};
      })
      .catch(err => console.log(err));
  }
};
</script>

<style lang="scss" scoped>
.banner-announcement {
  overflow: hidden;

  &-content {
    padding: 20px 0;
    width: 100%;
    min-height: inherit;
    box-sizing: border-box;
  }

  .ba-header, .ba-excerpt {
    color: white;
    }
  
}
</style>