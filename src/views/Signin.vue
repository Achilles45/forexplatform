<template>
  <div class="signin__wrapper">
      <div class="container">
          <div class="row pt-5">
              <div class="col-md-6">
                  <h4><router-link to="/" class="logo">Home page</router-link></h4>
                  <div class="text">
                      <h1>Welcome Back!</h1>
                      <h5>Signin to your account continue</h5>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form__wrapper">
                      <form action="">
                          <div class="form-group">
                              <label for="">Email Address</label>
                              <input type="text" class="form-control" placeholder="example@gmail.com">
                          </div>
                           <div class="form-group">
                              <label for="">Password</label>
                              <input type="password" class="form-control">
                          </div>
                          <div class="form__buttom pt-2 d-flex justify-content-between">
                              <p>Yet to have an account? <router-link to="/signup">Create a free account</router-link></p>
                                     <p><router-link to="/signup">Reset password</router-link></p>
                          </div>
                          <button type="submit" class="signin__btn">Sign In</button>
                          
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
        padding: 2rem;
        border-radius: 4px;
        form{
            label{
                color:#627081;
                font-weight: bold;
                font-size: .9rem;
            }
            input{
                height: 3.5rem;
            }
            .signin__btn{
                background: $primary-color;
                color:#fff;
                border: none;
                padding: 1rem 2rem;
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
     .form__wrapper{
         margin-top: 4rem !important;
         form{
             .form__buttom{
                 flex-direction: column;
             }
         }
     }
}
</style>