<template>
  <div>新增的頁面</div>
  <hr>
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link to="/newpage/a" class="list-group-item list-group-item-action">
          元件Ａ
        </router-link>
        <router-link to="/newpage/b" class="list-group-item list-group-item-action">
          元件Ｂ
        </router-link>
        <router-link to="/newpage/namedview/l2r" class="list-group-item list-group-item-action">
          元件 Left to Right 具名視圖範例
        </router-link>
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
