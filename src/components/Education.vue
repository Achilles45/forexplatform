<template>
  <div class="process" id="process">
      <div class="container">
          <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6 text-center">
                  <h3>HOW WE MAKE IT POSSIBLE</h3>
              </div>
               <div class="col-md-3"></div>
          </div>
          <div class="row">
              <div class="col-md-7">
                  <img src="../assets/images/banner8.jpg" class="img-fluid" alt="">
              </div>
              <div class="col-md-5 pt-5">
                  <div class="content d-flex">
                      <div class="icons">
                          <i class="fa fa-cubes"></i>
                      </div>
                      <div class="text">
                          <h4>Crowdfunding</h4>
                          <p>The company pulls resources from investors that subscribe to different investment plans and our fund managers invest same in the forex market for competitive returns.</p>
                      </div>
                  </div><br>
                  <div class="content d-flex">
                      <div class="icons">
                          <i class="fa fa-clone"></i>
                      </div>
                      <div class="text">
                          <h4>Maturity & Payout</h4>
                          <p>Our systems is able to track every investor and upon investment maturity, your earn 15% of your investment every month. You can also withdraw your capital at the end of the month if you wish. No hidden charges, no story. Terms and condition apply.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.process{
    padding: 7rem 0;
    h3{
        font-weight: bolder;
        color: $primary-color;
    }
    .content{
        .icons{
            padding-right: 2rem;
            font-size: 2rem;
            color: $primary-color;
        }
        .text{
            h4{
                font-weight: bold;
                padding-bottom: .5rem;
                color:$primary-color;
            }
            p{
                color: #627081;
                font-size: .95rem;
                opacity: .95;
                line-height: 1.8;
            }
        }
    }
}
</style>