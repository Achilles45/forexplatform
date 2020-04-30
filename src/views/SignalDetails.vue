<template>
  <div class="signin__wrapper">
      <div class="container">
          <div class="row">
              <div class="col-md-6">
                  <h4 class="pt-5"><router-link to="/" class="logo">Home page</router-link></h4>
                  <div class="text">
                      <h1>Get High Probability Trading Signals.</h1>
                      <h5>When you subscribe to our trading signal room, we will send you high probability trading setups daily.</h5>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="form__wrapper">
                      <form @submit.prevent="signin()">
                           <div class="form-group">
                              <!-- <label for="">Email Address</label> -->
                              <input type="text" id="input" class="form-control" placeholder="Your Full Name" v-model="name">
                          </div>
                          <div class="form-group">
                              <!-- <label for="">Email Address</label> -->
                              <input type="email" id="input" class="form-control" placeholder="Email Address" v-model="email">
                          </div>
                           <div class="form-group">
                              <!-- <label for="">Password</label> -->
                              <input type="tel" id="input" class="form-control" placeholder="Phone Number" v-model="phone">
                          </div>
                          <div v-if="err" class="alert alert-danger animated slideInRight">
                              {{ err }}
                          </div>
                          <div v-if="success" class="alert alert-success animated slideInRight">
                              {{ success }}
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
import db from '@/firebase/init'
import firebase from 'firebase';
export default {
    data(){
        return{
            name:null,
            email:null,
            phone:null,
            err:null,
            loading: false,
            success:null
        }
    },
    methods:{
        redirec(){
            setTimeout(() => {
                this.$router.push({name: 'PaymentDetails'})
            }, 4000);
        },
        signin(){
            this.loading = true;
            //Check if the user has filled out the form
            if(!this.name || !this.email || !this.phone){
                this.loading = false
                this.err = 'Please fill out the form first before submitting!'
            }else{
                db.collection('signals').add({
                    name:this.name,
                    email:this.email,
                    phone:this.phone
                }).then(()=>{
                    this.loading = false
                    this.success = 'Your subcription was successful. Please make your payment into the provided accounts'
                    this.redirec();
                })
                
                .catch(err=>{
                    this.loading = false
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
            padding-bottom: 1.2rem;
        }
        h5{
            font-weight: 400;
            font-size: .9rem;
            opacity: .8;
            letter-spacing: .5px;
            line-height: 1.6;
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