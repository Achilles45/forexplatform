<template>
  <div class="signup">
      <div class="container">
          <div class="row">
              <div class="col-md-6">
                <h4 class="pt-5"><router-link to="/" class="logo">Home page</router-link></h4>
                  <div class="text">
                      <h1>Create a free Account</h1>
                      <h5>You are about to start your journey in forex investment</h5>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form__wrapper">
                      <form @submit.prevent="signup()">
                              <h3 class="title">Step 1: Personal Information</h3>
                                <small>Please enter your name as registered with your bank</small>
                              <hr>
                             <div class="row">
                                 <div class="col-md-6">
                                    <div class="form-group">
                                  <input type="text" id="input" class="form-control" v-model="first_name"
                                  placeholder="First Name">
                              </div>
                                 </div>
                                 <div class="col-md-6">
                                <div class="form-group">
                                  <input type="text" id="input" class="form-control" v-model="last_name"
                                  placeholder="Last Name">
                              </div>
                                 </div>
                             </div>
                             <div class="row">
                                 <div class="col-md-6">
                                     <div class="form-group">
                                  <input type="email" id="input" class="form-control" v-model="email"
                                  placeholder="Email Address">
                              </div>
                                 </div>
                                 <div class="col-md-6">
                               <div class="form-group">
                                  <input type="tel" id="input" min="11" max="11" class="form-control" v-model="phone" placeholder="Phone Number"
                                  >
                              </div>
                                 </div>
                             </div>
                              <div class="form-group">
                                  <input type="text" id="input" class="form-control" placeholder="Home or Office Address" v-model="address">
                              </div>
                               <div class="row">
                                  <div class="col-md-6">
                                       <div class="form-group">
                                       <input type="password" id="input" class="form-control" placeholder="Password" v-model="password">
                                   </div>
                                  </div>
                                   <div class="col-md-6">
                                       <div class="form-group">
                                       <input type="password" id="input" class="form-control" placeholder="Repeat Password" v-model="repeat_password">
                                   </div>
                                  </div>
                               </div>
                           <div class="form__buttom pt-2 pb-3">
                              <p>Already have an account? <router-link to="/signin">Sign In</router-link></p>
                          </div>
                            <div v-if="err" class="alert alert-danger animated slideInRight">
                              {{ err }}
                          </div>
                          <div v-if="loading" class="loading text-center">
                              <img src="../assets/images/loader.gif" class="loader" alt="">
                          </div>
                           <button type="submit" class="signin__btn">Submit</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            first_name:null,
            last_name:null,
            email:null,
            phone:null,
            address:null,
            password:null,
            repeat_password:null,
            err:null,
            success:null,
            loading:false
        }
    },
    methods:{
        //Method to sign up a new user into the application
        signup(){
            this.loading = true
            //Check first if all fields has been filled out
            if(!this.first_name || !this.last_name || !this.email || !this.phone || !this.address || !this.password || !this.repeat_password){
                this.loading = false
                this.err = 'All fields are important. Please refresh and try again!'
                const inputBorder = document.querySelectorAll('#input');
                inputBorder[0].style.borderColor = 'red';
                inputBorder[1].style.borderColor = 'red';
                inputBorder[2].style.borderColor = 'red';
                inputBorder[3].style.borderColor = 'red';
                inputBorder[4].style.borderColor = 'red';
                inputBorder[5].style.borderColor = 'red';
                inputBorder[6].style.borderColor = 'red';
            } else if(this.password != this.repeat_password){
                this.err = 'Your paswords did not match. Refresh and try again!'
                this.loading = false
            }else{
                this.loading = true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_colors';
.signup{
    background: $primary-color;
    // color: #fff;
    // height: 100vh;
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
        padding: 2rem 2.5rem;
        border-radius: 5px;
        margin-bottom: 3rem;
        form{
            h3{
                font-weight: bold;
                color: $primary-color;
                font-size: 1.5rem;
            }
            small{
             color: $primary-color;
                font-weight: bold;
                font-size: .85rem;
                opacity: .7;
            }
            input, select{
                height: 3.4rem;
                box-shadow: none;
                font-size: 1rem;
                margin-bottom: 1.5rem;
                padding: 1rem 1.2rem;
                &::placeholder{
                    color: $primary-color;
                    opacity: .5;
                    font-weight: bold;
                    font-size: .95rem;
                }
            }
             a{
                color: $primary-color;
                font-size: .9rem;
                opacity: .8;
            }
            .signin__btn{
                background: $primary-color;
                color:#fff;
                border: none;
                padding: .7rem 3rem;
                width: 30%;
                border-radius: 4px;
            }
            .loader{
                // max-width: 250px;
                height: 100px;
            }
            .form__buttom{
                p{
                    color: #627081;
                    font-weight: bold;
                    font-size: .9rem;
                    opacity: .8;
                }
            }
        }
    }
}
//MEDIA QUERIES
@media only screen and (max-width: 600px){
    .signup{
      h1{
             font-size: 2rem !important;
         }
    }
     .form__wrapper{
         margin-top: 2rem !important;
         form{
             .signin__btn{
                 width: 100% !important;
             }
         }
     }
}
</style>