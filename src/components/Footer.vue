<template>
  <footer class="footer">
      <div class="container">
          <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6 text-center">
                  <h4>Subscribe to our newsletter to always be in the loop!</h4>
                  <form action="">
                         <input type="email" class="form-control" placeholder="typeyouremail@gmail.com">
                         <button type="submit" class="form__btn">Subscibe</button>
                  </form>
              </div>
              <div class="col-md-3"></div>
          </div>
          <div class="content">
              <div class="content__card">
                  <h6>Company</h6>
                  <p><router-link to="/about">About</router-link></p>
                  <p><router-link to="/about">Terms & Conditions</router-link></p>
                  <!-- <p><router-link to="/about">ABOUT</router-link></p> -->
              </div>
             <div class="content__card">
                  <h6>Discover</h6>
                  <p><router-link to="/about">Contact Us</router-link></p>
                  <p><router-link to="/about">Our Blog</router-link></p>
                  <!-- <p><router-link to="/about">ABOUT</router-link></p> -->
              </div>
               <div class="content__card">
                  <h6>Connect</h6>
                  <p><a href="">Facebook</a></p>
                  <p><a href="">Instagram</a></p>
                  <!-- <p><router-link to="/about">ABOUT</router-link></p> -->
              </div>
              <div class="content__card">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quos corrupti rem magni esse dicta voluptate dolor et necessitatibus quibusdam.</p>
              </div>
          </div>
          <hr>
          <div class="footer__bottom text-center">
              <small>We are a small group of profitable trders that crowdfund resources from our invetors to trade the financial markets and provide returns on a weekly basis. Please take time to read our terms and condition page before you invest your money so you have a working idea of how it works. For any questions or enquiry, kindly use the livechat widget below as a customer care agent is always handy to repond to you. Also, no payment should be made outside of the accounts provided as you would be doing so at your own risk. Happy investing.</small>
          </div>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.footer{
    background: linear-gradient(rgba(4,9,30,.9), rgba(4,9,30,.9)), url('../assets/images/banner1.jpg');
    background-position: center;
    background-size: cover;
    color: #fff;
    padding: 5rem 0;
    form{
        display: flex;
        justify-content: space-between;
        margin-top: 1.5rem;
        input{
            flex: 10;
            height: 3rem;
            box-shadow: none;
            outline: none;
            &::placeholder{
                font-weight: bold;
                color: #627081;
                opacity: .8;
            }
        }
        .form__btn{
            flex: 2;
            background: $primary-color;
            margin-left: 2rem;
            border-radius: 3px;
            border: none;
            padding: 0 2rem;
            color: #fff;
        }
    }
    .content{
        padding-top: 6rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        grid-gap: 30px;
        h6{
            // font-weight: bold;
            font-size: 1rem;
            padding-bottom: 2rem;
        }
        p{
            opacity: .6;
            a{
                color: #fff;
                text-decoration: none;
            }
        }
    }
    hr{
        background: #fff;
        opacity: .8;
    }
    .footer__bottom{
        small{
            color: #fff;
            opacity: .6;
        }
    }
}
</style>