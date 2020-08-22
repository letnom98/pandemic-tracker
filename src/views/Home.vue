<template>
  <section class="container text-center text-white" style=" margin:120px auto;">
    <div class="row justify-content-center">
      <div class="col-10 col-md-8 col-ld-6 bg-dark pt-3 pb-3" style="border-radius: 10px;">
        <h3>Selecione o estado ao qual deseja consultar:</h3>
        <select v-model="selected" style="width:80%;" class="mt-4">
          <option
            v-for="estado in estados"
            :value="estado.value"
            :key="estado.id"
          >{{ estado.nome.toUpperCase() }}</option>
        </select>
        <br />
        <button @click="selecionado()" class="btn btn-light mb-4">Pesquisar</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      estados: [
        { id: "0", value: "", nome: "todos" },
        { id: "1", value: "/brazil/uf/ro", nome: "rondônia" },
        { id: "2", value: "/brazil/uf/ac", nome: "acre" },
        { id: "3", value: "/brazil/uf/am", nome: "amazonas" },
        { id: "4", value: "/brazil/uf/rr", nome: "roraima" },
        { id: "5", value: "/brazil/uf/pa", nome: "pará" },
        { id: "6", value: "/brazil/uf/ap", nome: "amapá" },
        { id: "7", value: "/brazil/uf/to", nome: "tocantins" },
        { id: "8", value: "/brazil/uf/ma", nome: "maranhão" },
        { id: "9", value: "/brazil/uf/pi", nome: "piauí" },
        { id: "10", value: "/brazil/uf/ce", nome: "ceará" },
        { id: "11", value: "/brazil/uf/rn", nome: "rio grande do norte" },
        { id: "12", value: "/brazil/uf/pb", nome: "paraíba" },
        { id: "13", value: "/brazil/uf/pe", nome: "pernambuco" },
        { id: "14", value: "/brazil/uf/al", nome: "alagoas" },
        { id: "15", value: "/brazil/uf/se", nome: "sergipe" },
        { id: "16", value: "/brazil/uf/ba", nome: "bahia" },
        { id: "17", value: "/brazil/uf/mg", nome: "minas gerais" },
        { id: "18", value: "/brazil/uf/es", nome: "espírito santo" },
        { id: "19", value: "/brazil/uf/rj", nome: "rio de janeiro" },
        { id: "20", value: "/brazil/uf/sp", nome: "são paulo" },
        { id: "21", value: "/brazil/uf/pr", nome: "paraná" },
        { id: "22", value: "/brazil/uf/sc", nome: "santa catarina" },
        { id: "23", value: "/brazil/uf/rs", nome: "rio grande do sul" },
        { id: "24", value: "/brazil/uf/ms", nome: "mato grosso do sul" },
        { id: "25", value: "/brazil/uf/mt", nome: "mato grosso" },
        { id: "26", value: "/brazil/uf/go", nome: "goiás" },
        { id: "27", value: "/brazil/uf/df", nome: "distrito federal" },
      ],
      selected: "",
    };
  },
  methods: {
    selecionado: function () {
      this.$router.push({
        name: "resultado",
        params: {
          estado: this.selected,
        },
      });
    },
  },
};
</script>
