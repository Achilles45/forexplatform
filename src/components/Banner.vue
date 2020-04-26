<template>
  <div class="carousel__wrapper">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="carousel-overlay"></div>
          <img class="carousel-img" src="../assets/images/banner2.jpg" alt="First slide" />
          <div class="carousel-caption">
            <h2 class="animated bounceIn">Making forex trade investment profitable to everyone</h2>
            <p>Our team of proficient and experienced traders crowdfund resources from investors to trade the forex market and pay our investors 15% weekly. No hidden charges, no story.</p>
            <router-link to="/products" class="carousel-btn animated zoomIn animate3d">Get Started<i class="fa fa-long-arrow-alt-right"></i></router-link>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-overlay"></div>
          <img class="carousel-img" src="../assets/images/banner1.jpg" alt="Second slide" />
          <div class="carousel-caption">
            <h2 class="animated slideInDown animate3d">Want to trade alone? Get access to reliable trading signals</h2>
            <p
              class="animated slideInRight animate3d"
            >If you want to be in charge of your money and still trade profitably, we've got you. Subscribe to our reliable trading signals and analysis to hepl you win more and lose less.</p>
            <router-link to="/contact" class="carousel-btn animated zoomIn animate3d">Get Started Now<i class="fa fa-long-arrow-alt-right"></i></router-link>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-overlay"></div>
          <img class="carousel-img" src="../assets/images/banner3.jpg" alt="Third slide" />
          <div class="carousel-caption">
            <h2
              class="animated slideInDown animate3d"
            >Learn to trade the forex market from your comfort</h2>
            <p
              class="animated slideInDown animate3d"
            >We provide you with quality and focused guide and software to help you get started and become profitable as quickly as possible.</p>
            <router-link to="/products" class="carousel-btn animated zoomIn animate3d">Join Forex School<i class="fa fa-long-arrow-alt-right"></i></router-link>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon d-none d-md-block" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon d-none d-md-block" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Carousel"
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/_colors';
.carousel__wrapper {
  .carousel-inner {
    position: relative;
  }
  .carousel-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(4, 9, 30, 0.9);
  }
  .carousel-img {
    width: auto;
    height: 82vh;
    display: block !important;
    width: 100vw;
  }
  .animate3d {
    animation-duration: 5s;
  }
  .carousel-caption {
    position: absolute;
    top: 25%;
    transform: translateX(-50%, -50%);
    width: 60%;
    text-align: left;
    color:#fff;
    h2 {
      font-weight: 700;
      font-size: 2.8rem;
      padding-bottom: 1rem;
      letter-spacing: 0.4px;
      text-transform: uppercase;
      text-shadow: 0.02em 0.02em 0.03em #fff;
      line-height: 1.3;
    }
    p {
      letter-spacing: 1px;
      font-size: 1rem;
      padding-bottom: 2rem;
      opacity: 0.5;
    }
    .fa-long-arrow-alt-right{
      margin-left: 1rem;
      animation-name: animate;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
    .carousel-btn {
      color: #fff;
      background: $primary-color;
      padding: 1.2rem 4rem;
      text-align: center;
      font-size: 1rem;
      text-decoration: none;
      border-radius: 3px;
    }
  }
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    height: 50px;
    width: 50px;
    background-color: rgba(0, 0, 0, 0.3) !important;
    background-size: 40%, 40%;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.7);
  }
}

@media only screen and (max-width: 960px) {
  .carousel__wrapper {
    .carousel-overlay{
      background: rgba(4, 9, 30, 0.7) !important;
    }
    .carousel-img {
      width: auto;
      height: 100vh;
      max-height: 600px;
      display: block;
    }
    .carousel-caption {
      position: absolute;
      top: 25%;
      width: 80%;
      transform: translateX(-50%, -50%);
      text-align: left;
      h2 {
        font-size: 1.5rem;
        padding-bottom: 2rem;
      }
      p {
        font-size: 0.8rem;
        padding-bottom: 2rem;
        opacity: .8 !important;
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