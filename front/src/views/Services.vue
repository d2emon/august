<template>
  <div class="services">
    <h2>Design</h2>
    <ul class="navigation">
      <li class="selected">
        <a href="services.html">Design</a>
      </li>
      <li>
        <a href="services.html">Seo</a>
      </li>
      <li>
        <a href="services.html">Copywriting</a>
      </li>
    </ul>
    <ul>
      <li>
        <h3><span>Logo Design</span></h3>
        <div>
          <img src="@/assets/images/logo-design.jpg" alt="">
        </div>
        <p>
          This website template has been designed by <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> for you, for free. You can replace all this text with your own text.
        </p>
        <p>
          You can remove any link to our website from this website template, you're free to use this
          website template without linking back to us.
        </p>
        <p>
          If you're having problems editing this website template, then don't hesitate to ask for help on the <a href="http://www.freewebsitetemplates.com/forums/">Forums</a>.
        </p>
      </li>
      <li>
        <h3><span>Web Design</span></h3>
        <div>
          <img src="@/assets/images/web-design.jpg" alt="">
        </div>
        <p>
          Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What's more, they're absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the <a href="http://www.freewebsitetemplates.com/about/terms">Terms of Use</a>. You can even remove all our links if you want to.
        </p>
      </li>
      <li>
        <h3><span>Print Design</span></h3>
        <div>
          <img src="@/assets/images/print-design.jpg" alt="">
        </div>
        <p>
          Looking for more templates? Just browse through all our <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> and find what you're looking for. But if you don't find any website template you can use, you can try our <a href="http://www.freewebsitetemplates.com/freewebdesign/">Free Web Design</a> service and tell us all about it. Maybe you're looking for something different, something special. And we love the challenge of doing something different and something special.
        </p>
        <p>
          If you're experiencing issues and concerns about this website template, join the discussion <a href="http://www.freewebsitetemplates.com/forums/">on our forum</a> and meet other people in the community who share the same interests with you.
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Services',
};
</script>

<style scoped>
.body .services h2, .body .portfolio h2 {
  float:left;
}
.body .services ul.navigation {
  float:right;
  overflow:hidden;
  padding:32px 10px 22px 0;
  margin:0;
  list-style:none;
  clear:right;
}
.body .services ul.navigation li.selected,
.body .portfolio ul.navigation li:hover,.body .services ul.navigation li:hover {
  background:url(../assets/images/bg-nav-selected.jpg) repeat-x;
}
.body .services ul.navigation li:hover a {
  color:#fff;
}
.body .services ul.navigation li.selected a, .body .portfolio ul.navigation li.selected a {
  color:#fff;
}
.body .services ul.navigation li:first-child, .body .portfolio ul.navigation li:first-child {
  margin:0;
}
.body .services ul.navigation li, .body .portfolio ul.navigation li {
  height:38px;
  float:left;
  border-radius:7px;
  background:url(../assets/images/bg-nav.jpg) repeat-x;
  margin:0 0 0 6px;
  border-width:2px;
  border-style:none solid;
  border-color:#f4f4f4;
  width: auto;
}
.body .services ul.navigation li a, .body .portfolio ul.navigation li a {
  font-family:Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size:16px;
  text-decoration:none;
  color:#7f7f7f;
  text-transform:uppercase;
  line-height: 38px;
  padding:0 12px;
  display:block;
}
.body .services ul, .body .portfolio ul {
  clear:both;
  padding:0 0 195px;
  margin:0;
  list-style:none;
}
.body .services ul li {
  overflow:hidden;
}
.body .services ul li h3 {
  background: url("../assets/images/border.jpg") repeat-x scroll right center transparent;
  width:665px;
  overflow:hidden;
  margin:0 21px;
}
.body .services ul li h3 span {
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
.body .services ul li div {
  margin:35px 0 0 29px;
  width:251px;
  min-height:290px;
  height:auto;
  float:left;
}
.body .services ul li p {
  float: right;
  padding: 0 25px 0 0;
  width: 400px;
  margin: 20px 0;
  font-family: 'Conv_Muli-Regular';
  font-size:13px;
}
</style>
