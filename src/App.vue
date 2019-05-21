<template>
<div id="app">
    <img src="@/assets/favicon-32x32.png"/>
    <div id="floatingList" >
      <!-- <a onClick="expandBrandList()"><span class="fas fa-link"></span></a> -->
      <div id="listItems">
        <a @click="changeLanguage"><span class="fas fa-language"></span></a> 
        <a href="http://github.com/jnfrati" target="_blank"><span class="fab fa-github"></span></a>
        <a href="https://www.instagram.com/nicofrati/" target="_blank" ><span class="fab fa-instagram"></span></a>
        <a href="https://twitter.com/NFrati" target="_blank" ><span class="fab fa-twitter"></span></a>
        <a href="https://www.linkedin.com/in/jnfrati" target="_blank"><span class="fab fa-linkedin"></span></a>
        <a href="mailto: nicofrati@gmail.com" target="_blank"><span class="fas fa-envelope"></span></a>
      </div>
    </div>
    <header><!--Profile photo-->
      <div id="profile">
        <img id="profilePhoto" src="https://www.gravatar.com/avatar/3ba4f174206afc508dbe40945928431f?s=1024">
        <div id="profileDescription">
          <h3>Nicolas Frati</h3>
          <span><i>{{info.profileSpan}}</i></span>
          <a href="https://drive.google.com/open?id=1OZ0OaNDnPskxcTQqQF1jqPKABjvWrxjJ" target="_blank">{{info.resume}}<i class="far fa-file-pdf"/></a>
        </div>
      </div>
    </header>
  <div class="divisor"><span>{{info.aboutMeHeader}}</span><i class="fas fa-angle-down"></i></div>
    <div class="container">
    <div id="whoAmIBox" class="box"><!--Who I am-->
        <div class="box-title">
          <p><b>{{info.whoAmITitle}}</b></p>
        </div>
        <div class="box-content">
          <p>{{info.whoAmI}}</p>
        </div>
      </div>  
    <div id="commonLinksBox" class="box"><!--Common Links-->
      <div class="box-title">
        <p><b>{{info.whatIDoTitle}}</b></p>
      </div>
      <div class="box-content">
        <p>{{info.whatIDo}}</p>
      </div>
    </div>
  </div>
  <div class="divisor"><span>{{info.projectsHeader}}</span><i class="fas fa-angle-down"></i></div>
  <div class="work-cards">
    <div class="project-box" v-for="project in info.projects" v-bind:key=project.name><!--My Projects-->
        <div class="box-title">
          <p><b>{{project.name}}</b></p>
        </div>
      <div class="box-buttons"><a :href="project.url" target="_blank"><span class="fas fa-external-link-alt"/></a></div> 
    </div>
  </div>
  <footer>
    <p>Frati Nicolas Portfolio. 2019</p>
  </footer>
  </div>
</template>
<script>
import myself from './myself.js'
import './App.css';
export default {
  data(){
    return({
      info: myself.es
    })
  },
  methods:{
    changeLanguage: function(){
      if(this.info.language == "ES"){
        this.info = myself.en
      }else{
        this.info = myself.es
      }
    },
    expandBrandList: ()=>{
      var x = document.getElementById('listItems')
      if(x.style.display == 'none' || x.style.display==''){
        x.style.display = 'inherit';
      }else{
        x.style.display = "none";
      }
    }
  }
}
</script>

