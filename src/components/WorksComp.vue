<template>
  <div>
    <h1>Works</h1>
    <div class="works">
      <div class="worksContent">
        <img src="../assets/logo.png" class="workContentImage">
        <div class="workContentInfo">
          <h2 class="workContentInfoTitle">Hurima</h2>
          <p class="workContentInfoText">自分の行程に合わせた天気予報がわかるアプリ</p>
          <p class="workContentInfoText">Language : Ruby・RubyonRails・AWS</p>
          <p class="workContentInfoText">Language : Ruby・RubyonRails・AWS</p>
          <br>
          <a href="/" class="workContentInfoSite">サイト</a>
          <a href="/" class="workContentInfoGit">Github</a>
        </div>
      </div>
      
      <div class="worksContent">
        <img src="../assets/logo.png" class="workContentImage">
        <div class="workContentInfo">
          <h2 class="workContentInfoTitle">Tavinow</h2>
          <p class="workContentInfoText">自分の行程に合わせた天気予報がわかるアプリ</p>
          <p class="workContentInfoText">Language : Ruby・RubyonRails・AWS</p>
          <br>
          <a href="/" class="card-link github-link">サイト</a>
          <a href="/" class="card-link github-link">Github</a>
        </div>
      </div>

      <div class="worksContent">
        <img src="../assets/logo.png" class="workContentImage">
        <div class="workContentInfo">
          <h2 class="workContentInfoTitle">Tavinow</h2>
          <p class="workContentInfoText">自分の行程に合わせた天気予報がわかるアプリ</p>
          <p class="workContentInfoText">Language : Ruby・RubyonRails・AWS</p>
          <br>
          <a href="/" class="card-link github-link">サイト</a>
          <a href="/" class="card-link github-link">Github</a>
        </div>
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
.works{
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  background-color: #ffffff;
  margin: 10px auto;
  &Content{
    list-style: none;
    width: 45%;
    margin: 1%;
    background-color: #f1f1f1;
  border: 1px solid black;
  }
}
</style>