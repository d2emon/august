<template>
  <div class="portfolio">
    <h2>Portfolio</h2>
    <ul class="navigation">
      <li>
        <a href="services.html">Logo Design</a>
      </li>
      <li>
        <a href="services.html">Web Design</a>
      </li>
      <li>
        <a href="services.html">Print Design</a>
      </li>
    </ul>
    <h3><span>Logo Design</span></h3>
    <ul>
      <li>
        <a href="#"><img src="@/assets/images/logo1.jpg" alt=""></a>
        <span>Client: Elizabeth Morrisson</span>
        <a href="#">Read Details</a>
      </li>
      <li>
        <a href="#"><img src="@/assets/images/logo2.jpg" alt=""></a>
        <span>Client: Elizabeth Morrisson</span>
        <a href="#">Read Details</a>
      </li>
      <li>
        <a href="#"><img src="@/assets/images/logo3.jpg" alt=""></a>
        <span>Client: Elizabeth Morrisson</span>
        <a href="#">Read Details</a>
      </li>
      <li>
        <a href="#"><img src="@/assets/images/logo4.jpg" alt=""></a>
        <span>Client: Elizabeth Morrisson</span>
        <a href="#">Read Details</a>
      </li>
      <li>
        <a href="#"><img src="@/assets/images/logo5.jpg" alt=""></a>
        <span>Client: Elizabeth Morrisson</span>
        <a href="#">Read Details</a>
      </li>
      <li>
        <a href="#"><img src="@/assets/images/logo6.jpg" alt=""></a>
        <span>Client: Elizabeth Morrisson</span>
        <a href="#">Read Details</a>
      </li>
      <li>
        <a href="#"><img src="@/assets/images/logo7.jpg" alt=""></a>
        <span>Client: Elizabeth Morrisson</span>
        <a href="#">Read Details</a>
      </li>
      <li>
        <a href="#"><img src="@/assets/images/logo8.jpg" alt=""></a>
        <span>Client: Elizabeth Morrisson</span>
        <a href="#">Read Details</a>
      </li>
      <li>
        <a href="#"><img src="@/assets/images/logo9.jpg" alt=""></a>
        <span>Client: Elizabeth Morrisson</span>
        <a href="#">Read Details</a>
      </li>
      <li>
        <a href="#"><img src="@/assets/images/logo10.jpg" alt=""></a>
        <span>Client: Elizabeth Morrisson</span> <a href="#">Read Details</a>
      </li>
      <li>
        <a href="#"><img src="@/assets/images/logo11.jpg" alt=""></a>
        <span>Client: Elizabeth Morrisson</span> <a href="#">Read Details</a>
      </li>
      <li>
        <a href="#"><img src="@/assets/images/logo12.jpg" alt=""></a>
        <span>Client: Elizabeth Morrisson</span> <a href="#">Read Details</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
};
</script>

<style scoped>
.body .portfolio ul.navigation {
  float:right;
  overflow:hidden;
  padding:32px 10px 22px 0;
  margin:0;
  list-style:none;
  clear:right;
}
.body .portfolio ul.navigation li a:hover {
  color:#e6e6e6;
}
.body .portfolio h3 {
  background: url("../assets/images/border.jpg") repeat-x scroll right center transparent;
  margin: 0 21px 27px;
  overflow: hidden;
  width: 665px;
}
.body .portfolio h3 span {
  background-color: #FFFFFF;
  color: #7D7D7D;
  display: inline;
  font-family: 'Conv_Muli-Regular';
  font-size: 18px;
  font-weight: normal;
  line-height: 24px;
  margin: 22px 0;
  padding: 0 11px 0 0;
}
.body .portfolio ul {
  overflow:hidden;
  padding: 0 11px 40px;
}
.body .portfolio ul li {
  width:217px;
  float:left;
  margin: 0 5px;
  text-align:center;
}
.body .portfolio ul li a:first-child {
  margin:0;
}
.body .portfolio ul li a:first-child img:hover {
  filter:alpha(opacity=90);/* Needed for IE8 and old versions */
  opacity:0.9;
}
.body .portfolio ul li span {
  font-family:"Myriad Pro", sans-serif;
  font-size:12px;
  color:#7d7d7d;
  margin:14px 0 5px;
  display:block;
}
.body .portfolio ul li a {
  text-decoration:none;
  font-family:Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color:#7d7d7d;
  text-transform:uppercase;
  font-size:14px;
  display:inline-block;
  margin:0 0 20px;
}
.body .portfolio ul li a:hover {
  color:#404040;
}
</style>
