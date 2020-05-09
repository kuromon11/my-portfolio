<template>
  <div id=#app>
    <div class="header">
      <div class="headerLeft">
        <h1 class="headerLeftTitle">ポートフォリオ</h1>
      </div>
      <div class="headerRight">
        <a href="#" id="nav-about">About</a>
        <a href="#" id="nav-works">Works</a>
        <a href="#" id="nav-skill">Skill</a>
        <a href="#" id="nav-contact">Contact</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped >
.header{
  height: 100px;
  background-color: green;
  width: 100%;
  display: flex;
  &Left{
    background-color: red;
  }
}
</style>