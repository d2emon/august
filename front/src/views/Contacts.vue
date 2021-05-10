<template>
  <div class="contact">
    <h2>Contact</h2>
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
    <form action="index.html">
      <label for="firstname">First Name</label>
      <input type="text" id="firstname">
      <label for="lastname">Last Name</label>
      <input type="text" id="lastname">
      <label for="email">Email Address</label>
      <input type="text" id="email">
      <label for="subject">Subject</label>
      <input type="text" id="subject">
      <label for="message">Message</label>
      <textarea name="" cols="30" rows="10" id="message"></textarea>
      <input type="submit" id="submit2" value="">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contacts',
};
</script>

<style scoped>
.body .contact {
  padding:0 0 575px;
}
.body .contact p {
  font-size:13px;
  margin-bottom: 24px;
}
.body .contact form {
  padding:33px 21px 0;
}
.body .contact form label {
  display:block;
  font-family: 'Conv_Muli-Regular';
  font-size:13px;
  color:#868686;
}
.body .contact form input {
  background:url(../assets/images/bg-contact-input.jpg) repeat-x;
  border: 0 none;
  margin: 6px 0 15px;
  padding: 7px 5px;
  width:318px;
  border-width:1px;
  border-color:#e8e8e8;
  border-style: none solid;
  font-family:Arial, Helvetica, sans-serif;
  font-size:12px;
  color: #FEFEFE;
}
.body .contact form textarea {
  border-width:1px;
  border-color:#e8e8e8;
  border-style: none solid;
  width:318px;
  height:98px;
  padding:7px 5px;
  background:url(../assets/images/bg-contact-textarea.jpg) repeat-x;
  color: #FEFEFE;
  font-family:Arial, Helvetica, sans-serif;
  font-size:12px;
  margin: 5px 0;
  resize:none;
  overflow:auto;
}
.body .contact form input#submit2 {
  display:block;
  background:url(../assets/images/submit.jpg) no-repeat;
  border:0;
  width:127px;
  height:40px;
  cursor:pointer;
  color:#fff;
}
.body .contact form input#submit2:hover {
  color:#e5e5e5;
}
</style>
