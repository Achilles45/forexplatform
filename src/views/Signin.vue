<template>
  <div class="signin__wrapper">
      <div class="container">
          <div class="row">
              <div class="col-md-6">
                  <h4 class="pt-5"><router-link to="/" class="logo">Home page</router-link></h4>
                  <div class="text">
                      <h1>Welcome Back!</h1>
                      <h5>Signin to your account continue</h5>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form__wrapper">
                      <form @submit.prevent="signin()">
                          <div class="form-group">
                              <!-- <label for="">Email Address</label> -->
                              <input type="email" id="input" class="form-control" placeholder="Email Address" v-model="email">
                          </div>
                           <div class="form-group">
                              <!-- <label for="">Password</label> -->
                              <input type="password" id="input" class="form-control" placeholder="Password" v-model="password">
                          </div>
                          <div class="form__buttom pt-2 pb-3">
                              <p>Yet to have an account? <router-link to="/signup">Create a free account</router-link></p>
                                     <p><router-link to="/reset-password">Reset password</router-link></p>
                          </div>
                          <div v-if="err" class="alert alert-danger animated slideInRight">
                              {{ err }}
                          </div>
                          <div v-if="loading" class="loading text-center">
                              <img src="../assets/images/loader.gif" class="loader" alt="">
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
import firebase from 'firebase';
export default {
    data(){
        return{
            email:null,
            password:null,
            err:null,
            loading: false
        }
    },
    methods:{
        signin(){
            this.loading = true;
            //Check if the user has filled out the form
            if(!this.email || !this.password){
                this.loading = false
                this.err = 'Please provide your credentials and try again!'
            }else{
                this.loading = true
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then((cred)=>{
                    //Check if the user has verified his email address
                    if(cred.user.emailVerified == false){
                        this.loading = false
                        this.err = 'Please kindly verify your email first to continue'
                    }else{
                        this.loading = false
                        // this.$router.push({name: 'dashboard'})
                        alert('You have successfully loged in')
                    }
                }).catch(err =>{
                    this.loading = false;
                    this.err = err.message
                })
            }
        }
    }
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
                }
            }
        }
    }
}

//MEDIA QUERIES
@media only screen and (max-width: 600px){
    .signin__wrapper{
        height: 100% !important;
        padding: 4rem 0;
        h1{
             font-size: 2rem !important;
         }
    }
     .form__wrapper{
         margin-top: 2rem !important;
         margin-bottom: 1rem;
         form{
             .signin__btn{
                 width: 100% !important;
             }
         }
     }
}
</style>