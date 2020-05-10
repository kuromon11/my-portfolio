<template>
  <div class="content">
    <h1>About</h1>
    <div class="about">
      <div class="aboutProfile">
        <h2>自己紹介</h2>
        <div class="aboutProfileInfo">
          <img src="../assets/mypicture2.jpg" class="aboutProfileInfoImage">
          <div class="aboutProfileInfoOverview">
            <p>名前：Kuromori Yoshiki</p>
            <p>ニックネーム：くろもん
              <a href="https://twitter.com/black_kuromon" class="worksContentInfoSite">@black_kuromon</a>
            </p>
            <p>誕生日：1993年11月19日 26歳</p>
            <p>強み：ハングリー精神・課題発見能力</p>
          </div>
        </div>
      </div>
      <div class="aboutProfile">
        <h2>学歴・経歴</h2>
        <div class="aboutProfileCareer">
          <p>
            2013年4月~2017年3月<br>
            某大学 工学部電気電子工学科<br>
            概要・学んだこと
          </p>
          <p>
            2017年4月〜2020年1月<br>
            電気設備の施工管理関係の会社に勤める<br>
            概要・学んだこと
          </p>
          <p>
            2020年2月〜2020年4月中旬<br>
            プログラミングスクール TECH::CAMP<br>
            概要・学んだこと
          </p> 
          <p>現在、転職活動中</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World!'
    };
  },
  methods: {
    clear () {
      this.msg = ''
    }
  }
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
h2{
  margin: 20px 40px;
  line-height: 60px;
  font-weight: bold;
  text-align: left;
  font-family:'Comic Neue',cursive ;
  font-style: italic;
}
.about{
  &Profile{
    background-color: #ffffff;
    width: 90%;
    margin: 30px auto;
    &Info{
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 5px;
      &Image{
        width: 360px;
        height: 240px;
        border: 1px solid black;
      }
      &Overview{
        background-color: #f1f1f1;
        width: 40%;
        text-align: left;
        padding: 0 20px;
        p{
          font-size: 20px;
        }
      }
    }
    &Career{
      padding: 5px;
      background-color: #f1f1f1;

    }
  }
}
</style>