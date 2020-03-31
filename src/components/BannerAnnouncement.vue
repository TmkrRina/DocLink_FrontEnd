<template>
  <div class="banner-announcement">
    <div class="banner-announcement-content">
      <div class="row">
        <div class="columns twelve">
          <h1 class="ba-header">Announcement Title</h1>
        </div>
      </div>
      <div class="row">
        <div class="columns twelve">
          <p class="ba-excerpt">This is the excerpt of the description</p>
        </div>
      </div>
      <div class="row">
        <div class="columns twelve">
          <button type="button" class="button button-primary">Follow us</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerAnnouncement"
};
</script>

<style lang="scss" scoped>
.banner-announcement {
  overflow: hidden;

  &-content {
    padding: 20px;
    width: 100%;
    min-height: inherit;
    box-sizing: border-box;
  }

  .ba-header, .ba-excerpt {
    color: white;
    }
}
</style>