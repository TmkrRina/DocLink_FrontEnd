<template>
  <div class="banner">
    <Container>
      <div class="row">
        <div class="columns twelve">
          <BannerAnnouncement />
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "./Container";
import BannerAnnouncement from "./BannerAnnouncement";

export default {
  name: "Banner",
  components: {
    Container,
    BannerAnnouncement
  }
};
</script>

<style scoped>
.banner {
  height: calc(100vh - (140px));
  background-color: white;
  display: flex;
  align-items: center;
  position: relative;
}

.banner::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
}
</style>