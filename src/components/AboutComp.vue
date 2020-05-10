<template>
  <div class="content">
    <h1>About</h1>
    <div class="about">
      <div class="aboutProfile">
        <h2>自己紹介</h2>
        <div class="aboutProfileInfo">
          <img src="../assets/logo.png" class="workContentImage">
          <div class="aboutProfileInfoOverview">
            <p>名前：本名</p>
            <p>ニックネーム：くろもん
              <router-link to="/">@black_kuromon</router-link>
            </p>
            <p>誕生日：1993年11月19日 26歳</p>
            <p>強み：ハングリー精神・課題発見能力</p>
          </div>
        </div>
      </div>
      <div class="aboutProfile">
        <h2>学歴・経歴</h2>
        <div class="aboutProfileCareer">
          <p>2013年4月~2017年3月 某大学 工学部電気電子工学科</p>
          <p>2017年4月〜2020年1月 某会社 電気設備の施工管理</p>
          <p>概要・学んだこと</p>
          <p>2020年2月〜2020年4月中旬 プログラミングスクール TECH::CAMP</p> 
          <p>概要・学んだこと</p>
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
        width: 100px;
        height: 100px;
        background-color: aqua;
      }
      &Overview{
        background-color: #f1f1f1;
      }
    }
    &Career{
      padding: 5px;
      background-color: #f1f1f1;

    }
  }
}
</style>