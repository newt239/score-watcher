<template>
  <div class="home">
    <div class="content">
      <p>Ver.0.11.0</p>
      <p>
        最新のバージョンは<a
          href="https://github.com/newt-20st/score-watcher/releases"
          target="_blank"
          >こちらのリポジトリ</a
        >から確認してください。
      </p>
      <p>
        今後の方針などについては<a
          href="https://www.notion.so/newt-house/Score-Watcher-Info-e3605dc670724bc8adf0a5ee3f0c8392"
          >こちらのページ</a
        >から確認できます。
      </p>
      <h2>形式を選択</h2>
      <div class="formatList">
        <router-link to="/json">
          <h3>設定ファイルから読み込む</h3>
          <div>
            過去に設定した際に出力したファイルから形式データを読み込みます。
          </div>
        </router-link>
        <router-link to="/config?type=Count"
          ><h3>スコア計算</h3>
          <div>単純なスコアを計算します。</div></router-link
        >
        <router-link to="/config?type=NoMx">
          <h3>N o M x</h3>
          <div>N回正解で勝ち抜け、M回誤答で失格の形式です。</div></router-link
        >
        <router-link to="/config?type=NbyN">
          <h3>N by N</h3>
          <div>
            正答数と誤答数2つの変数を持ち、それぞれの初期値は0とNです。2つの変数の積がN
            ** 2に達したら勝ち抜けの形式です。
          </div></router-link
        >
        <router-link to="/config?type=Nupdown">
          <h3>N updown</h3>
          <div>
            N回正解で勝ち抜けですが、途中で一度でも誤答すると0に戻る形式です。
          </div></router-link
        >
        <router-link to="/config?type=SwedishX">
          <h3>Swedish X</h3>
          <div>
            1回の正答で+1,n回目の誤答で-nでXを目指す形式です。
          </div></router-link
        >
        <router-link to="/config?type=AttackSurvival">
          <h3>Attack Survival</h3>
          <div></div
        ></router-link>
        <router-link to="/config?type=SquareX">
          <h3>Square X</h3>
          <div>
            奇数問目と偶数問目の正解数をかけた数がX以上になれば勝ち抜けの形式です。
          </div></router-link
        >
      </div>
      <h2>大会モード</h2>
      <p>
        複数の形式が連結した、複数組や複数ステージに対応したモードです。v1.0のリリースで実装予定です。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style lang="scss" scoped>
.home {
  margin: 1rem;
  border-top: 3px solid $base-color;
}
.formatList {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1vw;
  margin: 1vw 0;
  a {
    display: block;
    background-color: $back-color;
    color: var(--teal);
    text-decoration: none;
    border: 0.3rem solid var(--teal);
    border-radius: 2rem;
    padding: 1rem;
    height: 25vh;
    transition: all ease-in 0.3s;
    overflow-y: hidden;
    h3 {
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 1.5rem;
    }
    div {
      font-size: 1rem;
      line-height: 1rem;
    }
    &.wait {
      color: gray;
      border: 0.3rem solid gray;
      &:hover {
        background-color: gray;
        color: $back-color;
      }
    }
    &:hover {
      background-color: var(--teal);
      color: $back-color;
    }
    &:first-child {
      color: var(--info);
      border: 0.3rem solid var(--info);
      &:hover {
        background-color: var(--info);
        color: $back-color;
      }
    }
  }
}
</style>