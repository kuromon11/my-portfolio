<template>
  <div class="main">
    <h1>Home</h1>
    <div class="home">
      <p class="homeTitle">〜 Kuromon's Portfolio 〜</p>
      <div class="homeContent">
        <img src="../assets/mypicture1.jpg" class="homeContentImage">
        <div class="homeContentMessage">
          <p class="homeContentMessageTitle">現在転職活動中！</p>
          <p>希望職種：Webエンジニア</p>
          <p>希望勤務地：大阪・東京</p>
          <p>希望年収：330万円/年</p>
          <p>
            Twitterアカウントは
            <a href="https://twitter.com/black_kuromon" class="worksContentInfoSite">こちら</a>
          </p>
          <p>
            GitHubアカウントは
            <a href="https://github.com/kuromon11" class="worksContentInfoSite">こちら</a>
          </p>
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
.main{
  height: calc(100vh - 160px);
  .home{
    min-width: 700px;
    &Title{
      display: block;
      height: 100px;
      width: 100%;
      margin: auto;
      text-align: 100px;
      font-size: 40px;
      font-weight: bold;
      text-align: conter;
      font-family:'Comic Neue',cursive ;
      font-style: italic;
    }
    &Content{
      display: flex;
      justify-content: space-around;
      &Image{
        width: 300px;
        height: 300px;
        border-radius: 50%;
      }
      &Message{
        height: 200px;
        font-size: 24px;
        &Title{
          font-weight: bold;
          font-size: 30px;
        }
      }
    }
  }
}
</style>