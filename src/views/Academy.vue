<template>
  <div class="academy">
     <Topbar />
     <Navbar />
     <div class="contact__wrapper">
          <div class="container">
            <div class="text text-right">
            <h1>Learn Forex Trade</h1>
            <p>Learn to trade the forex market from experts!</p>
        </div>
        </div>
      </div>
      <div class="academy__content">
          <div class="container">
              <div class="row">
                  <div class="col-md-6">
                      <img src="../assets/images/banner6.png" class="img-fluid" alt="">
                  </div>
                  <div class="col-md-6 text">
                      <h2>Join over 100 students learning winning strategies in the forex market</h2>
                      <p>Learning to trade the biggest financial market in the world can prove to be most valuable skill to have in 2020. Our highly skilled educational team has designed a result driven approach to deliver world class education in forex trade.<br><br>We train you so that you can start trading and getting results as soon as possible with clear illustrations.</p>
                        <a href="tel:08103515205" class="call__btn">Get Started</a>
                  </div>
              </div>
          </div>
      </div>
      <div class="why">
          <div class="container">
              <div class="row">
                  <div class="col-12">
                      <h2>Why Learn with Us</h2>
                      <small>You are about to change your financial situation by learning how to trade the forex market.</small>
                      <hr>
                  </div>
              </div>
              <div class="row pt-4 pb-4">
                 <div class="col-md-3">
                      <div class="card mb-3">
                    <img src="../assets/images/train1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">You have access to an amazing experience while lerning online as we provide all the tools you need.</p>
                    </div>
                </div>
                 </div>
                  <div class="col-md-3">
                      <div class="card mb-3">
                    <img src="../assets/images/train2.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Get to lean the basics to advanced stuff in the most simplest manner rating you as you learn</p>
                    </div>
                </div>
                 </div>
                  <div class="col-md-3">
                      <div class="card mb-3">
                    <img src="../assets/images/banner7.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">The customer support to team is always handy respond to all your queries in real time.</p>
                    </div>
                </div>
                 </div>
                <div class="col-md-3">
                     <div class="card mb-3">
                    <img src="../assets/images/growth.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">You will also have access to our well thought-out trading signals at a huge discount.</p>
                    </div>
                </div>
                </div>
              </div>
          </div>
      </div>
      <Footer />
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue"
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
export default {
    components:{
        Topbar,
        Navbar,
        Footer
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.contact__wrapper{
    background: linear-gradient(rgba(4,9,30,.8), rgba(4,9,30,.8)), url('../assets/images/banner4.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;
    padding: 7rem 0;
  .text{
    h1{
      font-weight: 900;
    }
    p{
      // font-size: .9rem;
      opacity: .8;
    }
  }
}
.academy__content{
    padding: 5rem 0;
    .text{
        h2{
            font-weight: bold;
            color: $primary-color;
            text-transform: capitalize;
            line-height: 1.4;
            padding-bottom: 1rem;
        }
        p{
            color: #627081;
            line-height: 1.8;
            padding-top: 1rem;
            padding-bottom: 1.5rem;
        }
        .call__btn{
            background: $primary-color;
            padding: 1rem 3rem;
            color:#fff;
            border-radius: 4px;
            text-decoration: none;
        }
    }
}
.why{
    padding: 3rem 0;
    h2{
        font-weight: bold;
        color:$primary-color;
    }
    small{
           font-weight: bold;
        color:$primary-color;
        opacity: .8;
    }
}
//MEDIA QUERIES
  @media only screen and (max-width: 600px){
    .contact__wrapper{
      padding: 4rem 0;
      p{
        font-size: .9rem;
      }
    }
    .academy__content{
      .heading {
        h1{
          font-size: 1.8rem;
        }
        p{
          font-size: 1rem;
          color: #627081;
        }
      }
    }
  }
</style>