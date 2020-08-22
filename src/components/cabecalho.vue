<template>
  <header>
    <nav class="navbar navbar-expand navbar-dark bg-dark justify-content-center">
      <div class="navbar-nav p-1">
        <router-link to="/">
          <!-- <h1 class="text-center">Rastreamento Covid-19</h1> -->
          <img src="../assets/logo.png" class="img-fluid" />
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "cabecalho",
};
</script>

<style>
.logo {
  width: 100px;
  height: auto;
}
</style>
