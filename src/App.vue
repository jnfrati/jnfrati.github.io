<template>
<div id="app">
    <div class="container">

    <header id="profilePhoto"><!--Profile photo-->
      <img src="https://www.gravatar.com/avatar/3ba4f174206afc508dbe40945928431f?s=1024">
      <h3>Nicolas Frati</h3>
      <span><i>Developer</i></span>
    </header>
      <div id="whoAmIBox" class="box"><!--Who am I-->
        <div class="box-title">
          <p><b>Who am I?</b></p>
        </div>
        <div class="box-content">
        <p>
          This is a brief description of who am I. Nice to meet you. My a name is Nicolas Frati, I'm a full-stack junior developer. I'm a student in the 4th year of the bachelor sistem career. 
          </p>
        </div>
      </div>  
    <div id="commonLinksBox" class="box"><!--Common Links-->
      <div class="box-title">
        <p><b>Contact Me!</b></p>
      </div>
      <div class="box-content">
      <div class="list">
        <a href="#" class="button"><span class="fab fa-github fa-2x"></span>Github</a>
        <a href="https://www.instagram.com/nicofrati/" class="button"><span class="fab fa-instagram fa-2x"></span>Instagram</a>
        <a href="https://twitter.com/NFrati" class="button"><span class="fab fa-twitter fa-2x"></span>Twitter</a>
        <a href="https://twitter.com/NFrati" class="button"><span class="fab fa-linkedin fa-2x"></span>Linkedin</a>
      </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style>
html, body, #app{
  margin: 0px;
  padding: 0px;
  overflow: auto;
}
#app {
  background: no-repeat linear-gradient(to bottom right,#0c0032, #190061);
  background-attachment: fixed;
  font-family: 'Roboto Slab', serif;
  font-size: 10px;
}
.container{
  margin: 20px auto;
  padding: 0px;
  width: 85%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  /* grid-template-rows: 1fr 1fr 1fr; */
  grid-auto-rows: auto;
  grid-template-areas:  
                        "profile"
                        "whoami"
                        "commonlink";
    row-gap: 30px;
}

#profilePhoto {
  grid-area: profile;
  width: 100%;
  text-align: center;
  font-size: 1.6rem;
  color: #f2f2f2;
}

#profilePhoto img {
  display: block;
  width: 100%;
  max-width: 300px;
  border-radius: 50%;
  margin: 0 auto;
}

.box {
  display:block;
  margin: 0px auto;
  width: 100%;
  max-width: 400px;
  background: #3523ff;
  border-radius: 10px;
}
.box .box-title{
  border-bottom: 1px #282828 solid;
  text-align: center;
  height: 10%;
  padding: 1px;
  font-size: 1.2rem;
  background: #f64c72;
  color: white;
}
.box .box-content{
  font-size: 1rem;
  margin: 10px;
  padding-bottom: 3px;
  color:black;
}

.list{
  text-align:center;
}
.button{
  text-decoration: none;
  color: white;
  display: inline-block;
  margin: 5px auto;
  padding: 2px;
  width: 200px;
  text-align: center;
  background-color: #f64c72;
  border: 1px #f64c72 solid;
}
.button span{
  display: inline-block;
  vertical-align: middle;
  line-height:normal;
  margin-right: 10px;
}

.button:hover{
  border: 1px #f64c72 solid;
  background: none;
}

#whoAmIBox{
   grid-area: whoami;
   display: block;
   float:left;
}
#whoAmIBox .box-title{
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
#commonLinksBox{
  grid-area: commonlink;
  display: block;
  float:right;
}
#commonLinksBox .box-title{
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
}
@media (min-width:1024px){
  .container{
    grid-template-columns: 1fr 1fr;
    grid-template-areas:  
                        "profile profile"
                        "whoami . "
                        ". commonlink";
    column-gap: 0;
    row-gap: 30px;
  }
}

</style>
