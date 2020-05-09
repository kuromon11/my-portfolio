<template>
  <div>
    <h1>Home</h1>
    <div class="home">
      <p class="homeTitle">〜 Kuromon's Portfolio 〜</p>
      <div class="homeContent">
        <img src="../assets/logo.png" class="homeContentImage">
        <div class="homeContentMessage">
          <p>ただ今転職活動中！</p>
          <p>希望職種：Webエンジニア</p>
          <p>希望勤務地：大阪・東京</p>
          <p>希望年収：320万円/年以上</p>
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
  font-size: 40px;
  font-weight: bold;
  text-align: conter;
  font-family:'Comic Neue',cursive ;
  font-style: italic;
}
.home{
  min-width: 700px;
  &Title{
    display: block;
    height: 100px;
    width: 100%;
    margin: auto;
    text-align: 100px;
    font-size: 32px;
    font-weight: bold;
    text-align: conter;
    font-family:'Comic Neue',cursive ;
    font-style: italic;
  }
  &Content{
    display: flex;
    justify-content: space-around;
  }
}
</style>