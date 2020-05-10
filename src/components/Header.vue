<template>
  <div>
    <div class="header">
      <div class="headerLeft">
        <p class="headerLeftTitle">〜 Kuromon's Portfolio 〜</p>
      </div>
      <div class="headerRight">
        <router-link to="/" class="headerRightComp" id="nav-home">Home</router-link>
        <router-link to="/about" class="headerRightComp" id="nav-home">About</router-link>
        <router-link to="/works" class="headerRightComp" id="nav-home">Works</router-link>
        <router-link to="/skill" class="headerRightComp" id="nav-home">Skill</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped >
.header{
  height: 80px;
  background-color: #03111a;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
  top: 0;

  &Left{
    width: 340px;
    height: 80px;
    margin: 0 auto;
    &Title{
      width: 340px;
      line-height: 40px;
      font-size: 24px;
      margin-left: 20px;
      color: white;
      font-weight: bold;
      text-align: conter;
      font-family:'Comic Neue',cursive ;
      font-style: italic;
    }
  }
  &Right{
    width: calc(100% - 300px);
    display: flex;
    justify-content: flex-end;
    margin: auto;
    &Comp{
      font-size: 24px;
      color: white;
      text-decoration: none;
      margin-right: 20px;
      font-weight: light;
      font-family:'Comic Neue',cursive ;
      font-style: italic;
    }
  }
}
</style>