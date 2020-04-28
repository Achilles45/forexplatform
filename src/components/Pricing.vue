<template>
  <div class="pricing" id="pricing">
      <div class="container">
         <div class="row">
             <div class="col-12 text-center heading">
                 <h2>OUR INVESTMENT PLANS</h2>
                 <h6>Choose a plan that suits your risk appetite</h6>
             </div>
         </div>
         <div class="plans__wrapper">
             <div class="plans__card card text-center">
                 <h4>$100.00 Plan</h4>
                 <hr>
                 <p>15% Return On Investment</p>
                 <p>24/7 Customer Support</p>
                 <p>Bank Payment Supported</p>
                 <br>
                 <router-link to="/signup" class="card__btn">Select Plan</router-link>
             </div>
              <div class="plans__card card text-center">
                 <h4>$200.00 Plan</h4>
                 <hr>
                 <p>15% Return On Investment</p>
                 <p>24/7 Customer Support</p>
                 <p>Bank Payment Supported</p>
                 <br>
                 <router-link to="/signup" class="card__btn">Select Plan</router-link>
             </div>
              <div class="plans__card card text-center">
                 <h4>$500.00 Plan</h4>
                 <hr>
                 <p>15% Return On Investment</p>
                 <p>24/7 Customer Support</p>
                 <p>Bank Payment Supported</p>
                 <br>
                 <router-link to="/signup" class="card__btn">Select Plan</router-link>
             </div>
              <div class="plans__card card text-center">
                 <h4>$1,000.00 Plan</h4>
                 <hr>
                 <p>15% Return On Investment</p>
                 <p>24/7 Customer Support</p>
                 <p>Bank Payment Supported</p>
                 <br>
                 <router-link to="/signup" class="card__btn">Select Plan</router-link>
             </div>
              <div class="plans__card card text-center">
                 <h4>$5,000.00 Plan</h4>
                 <hr>
                 <p>15% Return On Investment</p>
                 <p>24/7 Customer Support</p>
                 <p>Bank Payment Supported</p>
                 <br>
                 <router-link to="/signup" class="card__btn">Select Plan</router-link>
             </div>
              <div class="plans__card card text-center">
                 <h4>$10,000.00 Plan</h4>
                 <hr>
                 <p>15% Return On Investment</p>
                 <p>24/7 Customer Support</p>
                 <p>Bank Payment Supported</p>
                 <br>
                 <router-link to="/signup" class="card__btn">Select Plan</router-link>
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
.pricing{
    padding: 4rem 0;
    .heading{
        h2{
            font-weight: bold;
            color: $primary-color;
            font-size: 2.3rem;
        }
        h6{
            color: #627081;
            font-size: 1.2rem;
        }
    }
    .plans__wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
        grid-gap: 30px;
        margin-top: 3rem;
        .plans__card{
            // box-shadow: 3px 0px 3px rgba(0,0,0,.15);
            padding: 2rem 1.5rem;
            border-radius: 4px;
            cursor: pointer;
            transition: all ease-in-out .5s;
            &:hover{
                border-top: 5px solid $primary-color;
                transform: scale(0.9);
            }
            h4{
                font-weight: bold;
                color: $primary-color;
            }
            p{
                color: #627081;
                font-size: 1rem;
            }
            .card__btn{
                background: linear-gradient(to right, $primary-color , $secondary-color);
                color: #fff;
                text-decoration: none;
                border-radius: 20px;
                padding: .7rem 2rem;
                width: 60%;
                margin: 0 auto;
            }
        }
    }
}
</style>