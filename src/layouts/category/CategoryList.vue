<template>
  <v-container fluid>
    <list-action-row
      :idInit="idInit"
      :filtersInit="filters"
      @update:search="updateSearch"
      @createSuccess="createSuccess()"
    ></list-action-row>
    <app-data-table
      v-model="selected"
      title="Category"
      :headers="headers"
      :items="items"
      :items-per-page="10"
      show-select
      item-key="name"
    >
    </app-data-table>
  </v-container>
</template>
<script>
import AppDataTable from "@/components/app/DataTable";
import ListActionRow from "./ListActionRow.vue";
import { getListCategory } from "@/api/category";

export default {
  components: {
    AppDataTable,
    ListActionRow
  },
  data: () => ({
    abortController: new AbortController(),
    headers: [
      {
        text: "No.",
        align: "start",
        sortable: false,
        value: "id"
      },
      { text: "Category name", value: "name" }
    ],
    filters: {
      search: undefined
    },
    items: [],
    selected: []
  }),

  computed: {
    idInit() {
      return this.selected[0]?.id || 0;
    }
  },

  methods: {
    fetchData(params = {}) {
      this.abortController.abort();
      // Tạo mới AbortController
      this.abortController = new AbortController();
      getListCategory(params, this.abortController.signal).then(res => {
        this.items = res.data;
      });
    },

    createSuccess() {
      this.fetchData();
    },
    updateSearch(val) {
      this.fetchData({ search: val });
    }
  },

  created() {
    this.fetchData();
  },

  updateted() {
    console.log(this.selected);
  }
};
</script>
<style lang=""></style>
