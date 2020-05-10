<template>
  <div>
    <h1>Works</h1>
    <div class="works">
      <div class="worksContent">
        <img src="../assets/logo.png" class="worksContentImage">
        <div class="worksContentInfo">
          <h2 class="worksContentInfoTitle">Furima(フリマアプリ)</h2>
          <router-link to="/"></router-link>
          <p class="worksContentInfoText">テックキャンプの最終課題にて、5人チームでフリーマーケットのアプリケーションを作成しました。</p>
          <p class="worksContentInfoText">
            認証：<br>
            ユーザー：tech<br>
            パスワード：camp
          </p>
          <p class="worksContentInfoText">
            出品者：<br>
            メールアドレス：seller@seller<br>
            パスワード：testtest
          </p>
          <p class="worksContentInfoText">
            購入者：<br>
            メールアドレス：buyer@buyer<br>
            パスワード：testtest<br>
            番号：4242424242424242<br>
            期限：12月/20年<br>
            セキュリティコード：123     
          </p>          
          <p class="worksContentInfoText">Language : Ruby・RubyonRails・AWS</p>
          <br>
          <a href="http://52.196.62.187" class="worksContentInfoSite">サイト</a>
          <a href="https://github.com/kuromon11/freemarket_sample_71f" class="worksContentInfoGit">Github</a>
        </div>
      </div>
      
      <div class="worksContent">
        <img src="../assets/logo.png" class="worksContentImage">
        <div class="worksContentInfo">
          <h2 class="worksContentInfoTitle">Tavinow</h2>
          <p class="worksContentInfoText">自分の行程に合わせた天気予報がわかるアプリ</p>
          <p class="worksContentInfoText">Language : Ruby・RubyonRails・AWS</p>
          <br>
          <a href="http://japan-traveler-blog.com/" class="worksContentInfoSite">サイト</a>
          <a href="https://github.com/kuromon11/traveler_blog" class="worksContentInfoGit">Github</a>
        </div>
      </div>

      <div class="worksContent">
        <img src="../assets/logo.png" class="worksContentImage">
        <div class="worksContentInfo">
          <h2 class="worksContentInfoTitle">Tavinow</h2>
          <p class="worksContentInfoText">自分の行程に合わせた天気予報がわかるアプリ</p>
          <p class="worksContentInfoText">Language : Ruby・RubyonRails・AWS</p>
          <br>
          <a href="http://52.196.62.187" class="worksContentInfoSite">サイト</a>
          <a href="https://github.com/kuromon11/freemarket_sample_71f" class="worksContentInfoGit">Github</a>
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
    &Info{
      &Site{
        border: 1px solid #00aaff;
        text-decoration: none;
        color: #00aaff;
        margin: 0 10px;
        padding: 5px 10px;
        border-radius: 5px;
      }
      &Site:hover{
        background-color: #00aaff;
        color: white;
      }
      &Git{
        border: 1px solid #00aaff;
        text-decoration: none;
        color: #00aaff;
        margin: 0 10px;
        padding: 5px 10px;
        border-radius: 5px;
        border-color: #171515;
        color: #171515;
      }
      &Git:hover{
        background-color: #171515;
        color: white;
      }
    }
  }
}
</style>