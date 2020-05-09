<template>
  <div>
    <div class="header">
      <div class="headerLeft">
        <p class="headerLeftTitle">〜 Kuromon's Portfolio 〜</p>
      </div>
      <div class="headerRight">
        
        <a href="#" class="headerRightComp" id="nav-home">Home</a>
        <a href="#" class="headerRightComp" id="nav-about">About</a>
        <a href="#" class="headerRightComp" id="nav-works">Works</a>
        <a href="#" class="headerRightComp" id="nav-skill">Skill</a>
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
  z-index: 1;
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