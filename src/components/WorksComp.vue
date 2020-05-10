<template>
  <div>
    <h1>Works</h1>
    <div class="works">
      <div class="worksContent">
        <img src="../assets/app1.jpg" class="worksContentImage">
        <div class="worksContentInfo">
          <h2 class="worksContentInfoTitle">Furima(フリマアプリ)</h2>
          <router-link to="/"></router-link>
          <p class="worksContentInfoText">
            テックキャンプの最終課題にて、5人チームでフリーマーケットのアプリケーションを作成しました。
            <br>
            マークアップとサーバーサイドの作成に加えて、デプロイ全般を担当しました。
          </p>
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
          <p class="worksContentInfoText">言語: Ruby・RubyonRails・AWS</p>
          <br>
          <a href="http://52.196.62.187" class="worksContentInfoSite">サイト</a>
          <a href="https://github.com/kuromon11/freemarket_sample_71f" class="worksContentInfoGit">Github</a>
          <a href="https://docs.google.com/document/d/1GfHrYCxOgwuK_K9vjOEyGGjtBw8VV_j9XJvFd_OFMag/edit?usp=sharing" class="worksContentInfoSite" >説明文</a>
        </div>
      </div>
      
      <div class="worksContent">
        <img src="../assets/app2.jpg" class="worksContentImage">
        <div class="worksContentInfo">
          <h2 class="worksContentInfoTitle">JapanTraveler</h2>
          <p class="worksContentInfoText">
            テックキャンプ在学中に製作したアプリです。<br>
            日本国内に特化した旅行系ブログアプリです。<br>
            日本国内の様々な都道府県を体感していただけます。
          </p>
          <p class="worksContentInfoText">
            認証：<br>
            ユーザー：japan<br>
            パスワード：kagawa
          </p>
          <p class="worksContentInfoText">
            テストアカウント：<br>
            ユーザー：test@test<br>
            パスワード：testtest
          </p>
          <p class="worksContentInfoText">言語: Ruby・RubyonRails・AWS</p>
          <p class="worksContentInfoText">
            主な特徴：<br>
            記事として、タイトル・本文・複数枚画像・タグ・旅行した都道府県を投稿できます。<br>
            レスポンシブデザインに対応しているので、お手持ちのスマートフォンで使うことができます。<br>
            気になる記事を容易に検索できます（都道府県検索・タグ検索・ユーザー毎の記事検索）。
          </p>
          <br>
          <a href="http://japan-traveler-blog.com/" class="worksContentInfoSite">サイト</a>
          <a href="https://github.com/kuromon11/traveler_blog" class="worksContentInfoGit">Github</a>
        </div>
      </div>

      <div class="worksContent">
        <img src="../assets/logo.png" class="worksContentImage">
        <div class="worksContentInfo">
          <h2 class="worksContentInfoTitle">Kuromon's Portfolio</h2>
          <p class="worksContentInfoText">
            自分自身を紹介するポートフォリオです。<br>
            Vue.jsを使ってSPA(シングルページアプリケーション)のポートフォリオを作成しました。<br>
            こちらは随時更新していきます。
          </p>
          <p class="worksContentInfoText">言語：JavaScript(Vue.js)・Netlify</p>
          <p class="worksContentInfoText">
            主な特徴：<br>
            Aboutでは、簡単な自己紹介に加えて経歴・学歴を掲載しています。<br>
            Worksでは、今まで製作したアプリを成果物として掲載しています。<br>
            Skillでは、習得したプログラミングスキルの一覧を掲載しています。
          </p>
          <br>
          <a href="https://kuromon-portfolio.netlify.app" class="worksContentInfoSite">サイト</a>
          <a href="https://github.com/kuromon11/my-portfolio" class="worksContentInfoGit">Github</a>
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
  margin: 5px auto;
  &Content{
    list-style: none;
    height: 820px;
    width: 320px;
    margin: 1%;
    background-color: #f1f1f1;
    border: 1px solid black;
    &Image{
      width: 320px;
      height: 210px;
    }
    &Info{
      &Site{
        border: 1px solid #00aaff;
        text-decoration: none;
        color: #00aaff;
        margin: 0 5px;
        padding: 10px 15px;
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
        padding: 10px 15px;
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