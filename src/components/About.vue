<template>
  <div class="about" id="about">
      <div class="container">
          <div class="row">
              <div class="col-md-4 heading">
                  <h2>Why<br />Uratraining</h2>
                  <p>Uratraining is your forex management company of choice that helps you make more money trading the bigget financial market in the world which is the forex market. It is managed by a seasoned group of traders that takes well managed risk, thus producing good value.</p>
                  <router-link to="/about" class="about__link">Read more here <i class="fa fa-long-arrow-alt-right"></i></router-link>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-7">
                <div class="card__wrapper">
                    <div class="card__content">
                        <div class="content">
                           <img src="../assets/images/chart.svg" class="img-fluid icons" alt="">
                           <h5>Forex Trading</h5>
                           <p>Our strategy allows us to trade and pay our investors 15% weekly. Terms and conditions apply.</p>
                          </div>
                    </div>
                    <div class="card__content">
                       <div class="content">
                           <img src="../assets/images/sign.svg" class="img-fluid icons" alt="">
                           <h5>Trading Signals</h5>
                           <p>We send high probabilty signals to our subscribers so you don't have to miss anything</p>
                          </div>
                    </div>
                    <div class="card__content">
                       <div class="content">
                           <img src="../assets/images/book.svg" class="img-fluid icons" alt="">
                           <h5>Forex Training</h5>
                           <p>You can learn to trade the financial market from the comfort of your home following our structured guide.</p>
                          </div>
                    </div>
                    <div class="card__content">
                       <div class="content">
                           <img src="../assets/images/software.svg" class="img-fluid icons" alt="">
                           <h5>Product Development</h5>
                           <p>Our in-house team of software developers can help develop solutions that suits your particular trading need.</p>
                          </div>
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
.about{
    padding: 3rem 0;
    background: #F8F9FC;
    .heading{
        padding-top: 2rem;
        h2{
            font-weight: 900;
            color: $primary-color;
            padding-bottom: 1.5rem;
            font-size: 2.5rem;
        }
        p{
            color: $primary-color;
            line-height: 1.8;
            font-size: .98rem;
            font-weight: 400;
            opacity: .7;
        }
        .about__link{
            text-transform: capitalize;
            font-weight: bold;
            color: $primary-color;
            border-bottom: 1px dashed $primary-color;
            font-size: 1.1rem;
            text-decoration: none;
            padding: .4rem 0;
        }
        .fa-long-arrow-alt-right{
            animation-name: animate;
            animation-duration: 3s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
        }
    }
    .card__wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 20px;
        margin-top: 2rem;
          .card__content{
                background: #fff;
                border-radius: 4px;
                padding: 2rem;
                border: 1px solid #f4f4f4;
                position: relative;
                .icons{
                    max-width:55px;
                    height: auto;
                }
                h5{
                    font-weight: bold;
                    color: $primary-color;
                    padding-top: .8rem;
                    line-height: 1.45;
                    font-size: 1.2rem;
                    opacity: .9;
                }
                p{
                    opacity: .8;
                    padding-top: .4rem;
                    font-weight: 400;
                    line-height: 1.7;
                    color:#627081;
                    font-size: .93rem;
                }
            }
    }
}
//Animation for button arrow
@keyframes animate {
    from{
        opacity: 0;
    }
    to{
        transform: translateX(30px);
        opacity: 1;
    }
}
</style>