<template>
  <div>
    <h1>Skill</h1>
    <div class="skill">
      <div class="skillLanguage">
        <img src="../assets/logo.png" class="skillLanguageImage">
        <p class="skillLanguageName">HTML / Haml</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/logo.png" class="skillLanguageImage">
        <p class="skillLanguageName">CSS</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/logo.png" class="skillLanguageImage">
        <p class="skillLanguageName">SCSS</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/logo.png" class="skillLanguageImage">
        <p class="skillLanguageName">JavaScript</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/logo.png" class="skillLanguageImage">
        <p class="skillLanguageName">jQuery</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/logo.png" class="skillLanguageImage">
        <p class="skillLanguageName">Bootstrap</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/logo.png" class="skillLanguageImage">
        <p class="skillLanguageName">Vue.js</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/logo.png" class="skillLanguageImage">
        <p class="skillLanguageName">Ruby</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/logo.png" class="skillLanguageImage">
        <p class="skillLanguageName">Ruby on Rails</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/logo.png" class="skillLanguageImage">
        <p class="skillLanguageName">PHP</p>
        <p class="skillLanguageLevel">★☆☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/logo.png" class="skillLanguageImage">
        <p class="skillLanguageName">SQL</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/logo.png" class="skillLanguageImage">
        <p class="skillLanguageName">MySQL</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/logo.png" class="skillLanguageImage">
        <p class="skillLanguageName">AWS</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/logo.png" class="skillLanguageImage">
        <p class="skillLanguageName">Git / GitHub</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
h1{
  margin: 20px;
  line-height: 60px;
  font-weight: bold;
  text-align: left;
  font-family:'Comic Neue',cursive ;
  font-style: italic;
}
.skill{
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  margin: 10px auto;
  background-color: white;
  &Language{
    background-color: #f1f1f1;
    padding: 5px;
    margin: 5px 15px;
    &Image{
      width: 120px;
      height: 120px;
    }
    &Name{
      font-family:'Comic Neue',cursive ;
      font-style: italic;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>