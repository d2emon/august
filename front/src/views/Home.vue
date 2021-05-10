<template>
  <div class="home">
    <h2>Welcome to FineMinds Marketing Solutions</h2>

    <p>
      This website template has been designed by Free Website Templates for you, for free.
      You can replace all this text with your own text.
    </p>

    <img src="@/assets/images/tree.jpg" alt="">
    <img alt="Vue logo" src="../assets/logo.png">

    <div>
      <h3><span>What We Do</span></h3>
      <p>
        This website template has been designed by Free Website Templates for you, for free.
        You can replace all this text with your own text. You can remove any link to our
        website from this website template, you're free to use this website template without
        linking back to us.
      </p>
      <ul>
        <li id="link1">
          <a href="services.html"><span>Design</span></a>
        </li>
        <li id="link2">
          <a href="services.html"><span>Seo</span></a>
        </li>
        <li id="link3">
          <a href="services.html"><span>Copywriting</span></a>
        </li>
      </ul>
    </div>

    <div class="section">
      <h3><span>Latest Projects</span></h3>
      <ul>
        <li>
          <a href="services.html"><img src="@/assets/images/template1.jpg" alt=""></a>

          <span>Project: Web Design</span>

          <span>Client: Frosty Sweets</span>

          <a href="services.html">Read Details</a>
        </li>
        <li>
          <a href="services.html"><img src="@/assets/images/template2.jpg" alt=""></a>

          <span>Project: Corporate Identity</span>

          <span>Client: Puppy Love</span>

          <a href="services.html">Read Details</a>
        </li>
        <li>
          <a href="services.html"><img src="@/assets/images/template3.jpg" alt=""></a>

          <span>Project: Advertising Campaign</span>

          <span>Client: Baby School</span>

          <a href="services.html">Read Details</a>
        </li>
      </ul>
    </div>

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
