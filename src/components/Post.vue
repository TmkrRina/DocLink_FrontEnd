<template>
  <section id="posts">
    <mdb-row>
      <mdb-col md="8">
        <div class="card">
          
          <h5 class="card-header">Headache since 3 days</h5>
          <div class="card-body">
            <h6 class="card-title">I am having headchae since  along time now. It hurts in the left side of my head. I have taken few painkillers but it doesnt seem to work. It only helps for a while. Its just a flu? I am in New Jersey at the moment and have been travelling foe a while.</h6>
            <b><h7 class="card-title">Lynn Morrisson</h7></b>
            <p class="card-text"></p>
            <!-- <a href="#" class="btn btn-primary">View Post</a> -->
          </div>
          <mdb-col md="8">
          <form>
          <div class="form-group">
              <label for="exampleFormControlTextarea1">Comment Here</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div> 
          </form>
          </mdb-col>
        </div>
        </mdb-col>
        </mdb-row>
        
      
      
  </section>
</template>

<script>
import { mdbRow, mdbCol} from 'mdbvue'

export default {
  name: 'Post',
  components: {
    mdbRow,
    mdbCol,
    // mdbCard,
    // mdbView,
    // mdbCardBody
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card.card-cascade .view.gradient-card-header {
  padding: 1rem 1rem;
  text-align: center;
}
.card.card-cascade h3, .card.card-cascade h4 {
  margin-bottom: 0px;
}
</style>
