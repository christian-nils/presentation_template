<template lang="pug">
    div
      h1 Hello World Neu!
      eg-code-block(lang='bash').
        git clone https://github.com/christian-nils/presentation_template.git
          cd presentation_template.git
          npm install
          npm run dev
</template>

<script>
export default {
  name: "Second",
};
</script>

<style>
.slide-FirstPage {
  background-color: black;
}
</style>
