<template>
  <div class="signals">
      <div class="container">
          <div class="row">
              <div class="col-md-6 pb-5">
               <h2>Get Access to Our Trading Signals</h2>
                  <p>You can get access to our high probability trading setup everyday excluding weekends(of course, there is usually no trade at weekends) and still be very profitable for only a monthly subsciption of $100.</p>
                  <router-link to="/signal-details" class="signals__btn">Begin for $50 only</router-link>
              </div>
              <div class="col-md-6 pt-2">
                  <img src="../assets/images/signals.svg" class="img-fluid" alt="">
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
.signals{
    padding: 3rem 0;
    h2{
        font-weight: bold;
        color: $primary-color;
        padding-bottom: 1rem;
    }
    p{
        padding-bottom: 2rem;
        line-height: 1.8;
    }
    .signals__btn{
        background: $primary-color;
        color: #fff;
        text-decoration: none;
        padding: 1rem 2rem;
        border-radius: 4px;
    }
}
</style>