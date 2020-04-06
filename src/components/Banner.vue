<template>
  <VerticalHeight>
    <div class="banner">
      <Container>
        <div class="row dl-row">
          <div class="columns twelve">
            <BannerAnnouncement />
          </div>
        </div>
      </Container>
    </div>
  </VerticalHeight>
</template>

<script>
import Container from "./Container";
import BannerAnnouncement from "./BannerAnnouncement";
import VerticalHeight from "./VerticalHeight";

export default {
  name: "Banner",
  components: {
    Container,
    BannerAnnouncement,
    VerticalHeight
  }
};
</script>

<style scoped>
.banner {
  height: 100%;
  background-color: #a98c6a;
  display: flex;
  align-items: center;
  position: relative;
  background-image: url("../assets/homebanner.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}

.banner::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
  
}
</style>