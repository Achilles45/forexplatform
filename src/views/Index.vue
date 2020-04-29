<template>
  <div class="home">
    <Topbar />
    <Navbar />
    <Banner />
    <About />
    <Pricing />
    <Education />
    <Signals />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Topbar from '@/components/Topbar.vue'
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'
import About from '@/components/About.vue'
import Pricing from '@/components/Pricing.vue'
import Education from '@/components/Education.vue'
import Signals from '@/components/Signals.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Index',
  components:{
    Topbar,
    Navbar,
    Banner,
    About,
    Pricing,
    Education,
    Signals,
    Footer
  }
}
</script>
