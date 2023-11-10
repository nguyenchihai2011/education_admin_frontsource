<template>
  <v-container fluid>
    <list-action-row
      :idInit="idInit"
      :filtersInit="filters"
      @update:search="updateSearch"
      @createSuccess="refreshData()"
      @deleteSuccess="refreshData()"
      @updateSuccess="refreshData()"
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
import { getListCourse } from "@/api/course";

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
      { text: "Name", value: "name" },
      { text: "Price", value: "price" },
      { text: "Level", value: "level" },
      { text: "Language", value: "language" },
      { text: "Lecture", value: "lectureName" }
    ],
    filters: {
      search: undefined
    },
    items: [],
    selected: []
  }),

  computed: {
    idInit() {
      return this.selected;
    }
  },

  methods: {
    fetchData(params = {}) {
      this.abortController.abort();
      // Tạo mới AbortController
      this.abortController = new AbortController();
      getListCourse(params, this.abortController.signal).then(res => {
        this.items = res.data.result.map(item => {
          return {
            ...item,
            lectureName: item.lecture.firstName + " " + item.lecture.lastName
          };
        });
      });
    },
    updateSearch(val) {
      this.fetchData({ search: val });
    },

    refreshData() {
      this.fetchData();
      this.selected = [];
    }
  },

  created() {
    this.fetchData();
  }
};
</script>
<style lang=""></style>
