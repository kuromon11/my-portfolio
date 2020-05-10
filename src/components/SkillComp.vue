<template>
  <div>
    <h1>Skill</h1>
    <h3>★：基礎作りの段階</h3>
    <h3>★★：個人アプリ製作段階</h3>
    <h3>★★★：実務経験済みもしくはそれ相当の技術が身についている段階</h3>
    <h4>2020/05/10現在<br></h4>
    <div class="skill">
      <div class="skillLanguage">
        <img src="../assets/html.png" class="skillLanguageImage">
        <p class="skillLanguageName">HTML / Haml</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/css.png" class="skillLanguageImage">
        <p class="skillLanguageName">CSS</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/scss.png" class="skillLanguageImage">
        <p class="skillLanguageName">SCSS</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/javascript.png" class="skillLanguageImage">
        <p class="skillLanguageName">JavaScript</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/jquery.png" class="skillLanguageImage">
        <p class="skillLanguageName">jQuery</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/bootstrap.png" class="skillLanguageImage">
        <p class="skillLanguageName">Bootstrap</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/logo.png" class="skillLanguageImage">
        <p class="skillLanguageName">Vue.js</p>
        <p class="skillLanguageLevel">★☆☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/ruby.png" class="skillLanguageImage">
        <p class="skillLanguageName">Ruby</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/rubyonrails.png" class="skillLanguageImage">
        <p class="skillLanguageName">Ruby on Rails</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/php.png" class="skillLanguageImage">
        <p class="skillLanguageName">PHP</p>
        <p class="skillLanguageLevel">★☆☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/sql.png" class="skillLanguageImage">
        <p class="skillLanguageName">SQL</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/mysql.png" class="skillLanguageImage">
        <p class="skillLanguageName">MySQL</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/aws.png" class="skillLanguageImage">
        <p class="skillLanguageName">AWS</p>
        <p class="skillLanguageLevel">★★☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/nginx.png" class="skillLanguageImage">
        <p class="skillLanguageName">Nginx</p>
        <p class="skillLanguageLevel">★☆☆</p>
      </div>
      <div class="skillLanguage">
        <img src="../assets/github.png" class="skillLanguageImage">
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
h3{
  width: 90%;
  text-align: left;
  margin: 0 auto;
}
h4{
  width: 90%;
  text-align: right;
  margin: 0 auto;

}
.skill{
  display: flex;
  width: 90%;
  min-height: calc(100vh - 160px);
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