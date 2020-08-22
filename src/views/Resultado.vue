<template>
  <section class="container mb-5 mt-5">
    <div class="text-center text-light">
      <div v-if="erroed" class="row justify-content-center">
        <div
          class="col-10 col-md-8 col-lg-6 bg-danger text-center text-light pt-3 pb-3 m-5"
          style="border-radius: 10px;"
        >
          <h3 class="d-4">
            Não foi possível recuperar os dados.Tente novamente mais tarde.
          </h3>
        </div>
      </div>
      <div v-else-if="loading" class="row justify-content-center">
        <div
          class="col-10 col-md-8 col-lg-6 bg-dark pt-3 pb-3 m-5"
          style="border-radius: 10px;"
        >
          <h3 class="d-4 d-md-2">Carregando...</h3>
        </div>
      </div>
      <div v-else>
        <div v-if="$route.params.estado == ''">
          <div
            class="row justify-content-center"
            v-for="estados in info.data.data"
            v-bind:key="estados.uid"
          >
            <div
              style="border-radius: 10px;"
              class="col-10 col-md-8 col-lg-6 bg-dark pt-3 pb-3 m-3"
            >
              <div class="p-2">
                <h1 class="d-5">{{ estados.state }}</h1>
                <h3 class="d-6">Casos: {{ estados.cases }}</h3>
                <h3 class="d-6">Mortes: {{ estados.deaths }}</h3>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="row justify-content-center">
            <div
              style="border-radius: 10px;"
              class="col-sm-12 col-md-8 col-lg-6 bg-dark text-light pt-3 pb-3 m-3"
            >
              <h1 class="d-5">{{ info.data.state }}</h1>
              <h3 class="d-6">Casos: {{ info.data.cases }}</h3>
              <h3 class="d-6">Mortes: {{ info.data.deaths }}</h3>
            </div>
          </div>
        </div>
        <router-link to="/" class="btn btn-dark m-4">Voltar</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Resultado",

  data() {
    return {
      info: null,
      loading: true,
      erroed: false,
      url: null,
    };
  },
  mounted: function() {
    this.url =
      "https://covid19-brazil-api.now.sh/api/report/v1" +
      this.$route.params.estado;
    axios
      .get(this.url)
      .then((response) => {
        this.info = response;
      })
      .catch((error) => {
        console.log(error);
        this.erroed = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>
