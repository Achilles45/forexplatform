<template>
  <div class="signin__wrapper">
      <div class="container">
          <div class="row">
              <div class="col-md-6">
                  <h4 class="pt-5"><router-link to="/" class="logo">Home page</router-link></h4>
                  <div class="text">
                      <h1>Recover Password</h1>
                      <h5>Recover your password in seconds</h5>
                  </div>
              </div>
              <div class="col-md-6 pt-5">
                  <div class="form__wrapper">
                      <form action="">
                          <div class="form-group">
                              <!-- <label for="">Email Address</label> -->
                              <input type="text" class="form-control" placeholder="Email Address">
                          </div>
                          <button type="submit" class="signin__btn">Reset Password</button>
                          
                      </form>
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
.signin__wrapper{
    background: $primary-color;
    // color: #fff;
    height: 100vh;
    .logo{
        color: #fff;
        text-decoration: none;
        font-weight: bold;
    }
    .text{
        padding-top: 5rem;
        color: #fff;
        h1{
            font-weight: 900;
            font-size: 3rem;
        }
        h5{
            font-weight: 400;
            font-size: 1rem;
            opacity: .8;
            letter-spacing: .5px;
        }
    }
    .form__wrapper{
        margin-top: 9rem;
        background: #fff;
        padding: 4rem 2.5rem;
        border-radius: 5px;
        form{
            label{
                color:$primary-color;
                font-weight: bold;
                font-size: .95rem;
                opacity: .8;
            }
            input{
                height: 3.8rem;
                box-shadow: none;
                font-size: 1rem;
                margin-bottom: 1.5rem;
                padding: 1rem 1.2rem;
                &::placeholder{
                    color: $primary-color;
                    opacity: .5;
                    font-weight: bold;
                }
            }
            // input[type=password]{
            //     font-size: 1.5rem;
            //     color: #333
            // }
            a{
                color: $primary-color;
                font-size: .9rem;
                opacity: .8;
            }
            .signin__btn{
                background: $primary-color;
                color:#fff;
                border: none;
                padding: .8rem 2rem;
                width: 50%;
                border-radius: 4px;
            }
            .form__buttom{
                p{
                    color: #627081;
                    font-weight: bold;
                    font-size: .9rem;
                }
            }
        }
    }
}

//MEDIA QUERIES
@media only screen and (max-width: 600px){
    // .signin__wrapper{
    //     // height: 100% !important;
    //     // padding: 4rem 0;
    // }
     .form__wrapper{
         margin-top: 2rem !important;
         form{
             .form__buttom{
                 flex-direction: column;
             }
         }
     }
}
//MEDIA QUERIES
@media only screen and (max-width: 600px){
    // .signin__wrapper{
    //     // height: 100% !important;
    //     // padding: 4rem 0;
    // }
     .form__wrapper{
         margin-top: 2rem !important;
         form{
             .signin__btn{
                 width: 100% !important;
                 height: 3.8rem;
             }
         }
     }
}
</style>