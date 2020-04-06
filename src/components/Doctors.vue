<template>
  <section id="tables">
    <div class="row dl-row">
      <h4>Doctors</h4>
    </div>
    <hr />
    <!-- <Container> -->
    <div class="row dl-row">
      <div class="columns twelve">
        <div class="dl-doctors-list">
          <table class="u-full-width">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Sex</th>
                <th>Location</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dave Gamache</td>
                <td>26</td>
                <td>San Francisco</td>
                <td>Male</td>
                <td>
                  <button class="button button-primary">Approve</button>
                </td>
              </tr>
              <tr>
                <td>Dwayne Johnson</td>
                <td>42</td>
                <td>Male</td>
                <td>Hayward</td>
                <td>
                  <button class="button button-primary">Approve</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- </Container> -->
  </section>
</template>

<script>
// import Container from "./Container";

export default {
  name: "Doctors",
  components: {},
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dl-doctors-list {
  padding: 20px;
  background-color: white;

  table {
    td,
    th {
      font-size: 14px;
    }
  }
}
</style>
