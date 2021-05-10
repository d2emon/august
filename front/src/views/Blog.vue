<template>
  <div class="blog">
    <h2>Its' All About Image</h2>
    <img src="@/assets/images/photo-shoot.jpg" alt="">
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
    <div class="share">
      <span>Posted Mar 22, 2023 in <a href="#">Brand</a>, <a href="#">Production</a>,
        <a href="#">Marketing</a></span> <span><a href="#">0 Comments</a></span>
    </div>
    <div class="paging">
      <a href="#">&#60;&#60; Older Post</a> <a href="#">Newer Posts &#62;&#62;</a>
    </div>
    <div class="section">
      <div>
        <h3>Recent blog posts</h3>
        <ul>
          <li>
            <a href="#">It’s All About Image</a> <span>Posted Mar 22, 2023</span>
          </li>
          <li>
            <a href="#">Choosing The Right Font For Your Logo</a> <span>Posted Mar 21, 2023</span>
          </li>
          <li>
            <a href="#">Outsmart The Competition</a> <span>Posted Mar 20, 2023</span>
          </li>
        </ul>
      </div>
      <div>
        <h3>Popular blog posts</h3>
        <ul>
          <li>
            <a href="#">We Can Get You To The Top</a> <span>Posted Mar 19, 2023</span>
          </li>
          <li>
            <a href="#">Think Of It As Investment</a> <span>Posted Mar 20, 2023</span>
          </li>
          <li>
            <a href="#">Behind Every Success Is Planning And Anticipation</a>
            <span>Posted Mar 21, 2023</span>
          </li>
        </ul>
      </div>
      <div class="categories">
        <h3>Categories</h3>
        <ul>
          <li>
            <a href="#">Brand</a>
          </li>
          <li>
            <a href="#">Creative</a>
          </li>
          <li>
            <a href="#">Production</a>
          </li>
          <li>
            <a href="#">SEO</a>
          </li>
          <li>
            <a href="#">Marketing</a>
          </li>
          <li>
            <a href="#">Copywriting</a>
          </li>
          <li>
            <a href="#">Planning</a>
          </li>
          <li>
            <a href="#">Brandding</a>
          </li>
          <li>
            <a href="#">Advertising</a>
          </li>
          <li>
            <a href="#">Web</a>
          </li>
          <li>
            <a href="#">Design</a>
          </li>
          <li>
            <a href="#">Conversation</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
};
</script>

<style scoped>
.body .blog img {
  margin:28px 0 0 21px;
}
.body .blog p {
  font-size:13px;
  margin:14px 0 25px;
}
.body .blog .share {
  background:url(../assets/images/bg-share.jpg) repeat-x;
  height:42px;
}
.body .blog .share span:first-child {
  line-height: 43px;
  font-family:"Myriad Pro", sans-serif;
  font-size:11px;
  color:#808080;
  float:left;
}
.body .blog .share span:first-child a {
  color:#333333;
  text-decoration:none;
  display:inline-block;
}
.body .blog .share span {
  float:right;
  color:#333333;
  font-family:"Myriad Pro", sans-serif;
  font-size:11px;
  line-height: 43px;
  padding:0 20px 0 0;
}
.body .blog .share span a {
  color:#333333;
  text-decoration:none;
}
.body .blog .share span a:hover {
  text-decoration:underline;
}
.body .blog .paging {
  overflow:hidden;
}
.body .blog .paging a:first-child {
  float:left;
  padding:0;
}
.body .blog .paging a {
  color:#333333;
  font-family:"Myriad Pro", sans-serif;
  font-size:11px;
  line-height: 43px;
  text-transform:uppercase;
  text-decoration:none;
  float:right;
  padding:0 30px 0 0;
}
.body .blog .paging a:hover, .body .blog .share span:first-child a:hover {
  text-decoration:underline;
}
.body .blog .section {
  margin:225px 0 0;
  background-color:#f4f4f4;
  -moz-box-shadow: 0 0 9px -1px #888888 inset;
  -webkit-box-shadow: 0 0 9px -1px #888888 inset;
  box-shadow: 0 0 9px -1px #888888 inset;
}
.body .blog .section div:first-child {
  background:none;
}
.body .blog .section div {
  width:195px;
  background:url(../assets/images/bg-border.jpg) repeat-y left top;
  float:left;
  margin:0;
  text-align:left;
  padding:0 20px;
}
.body .blog .section div h3 {
  font-family:Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size:16px;
  color:#7d7d7d;
  text-transform:uppercase;
  background:none;
  margin:30px 0 15px;
}
.body .blog .section div ul li {
  text-align:left;
  height:auto;
  background:none;
  margin:0 0 15px!important;
}
.body .blog .section div ul li a {
  font-family:"Myriad Pro", sans-serif;
  text-decoration:none;
  font-size:13px;
  text-transform:none;
  color:#414141;
  margin:0 0 3px!important;
}
.body .blog .section div ul li a:hover {
  text-decoration:underline;
  color:#414141;
}
.body .blog .section .categories ul li {
  width:95px;
}
</style>
