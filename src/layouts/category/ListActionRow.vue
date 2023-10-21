<template>
  <v-row class="align-center mb-2">
    <v-col cols="6">
      <v-text-field
        v-model="filters.search"
        outlined
        prepend-inner-icon="mdi-magnify"
        placeholder="Search for anything"
        color="#000"
        hide-details
        class="rounded-xl"
        dense
      ></v-text-field>
    </v-col>
    <v-col cols="2">
      <v-btn class="text-none py-4 px-6" outlined>
        <v-icon>mdi-filter-variant</v-icon>
        Filter
      </v-btn>
    </v-col>
    <v-col cols="4" class="d-flex align-center justify-end">
      <v-btn text class="py-5 px-2" @click="createCategory()">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn text class="py-5 px-2" @click="editCategory()">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn text class="py-5 px-2" @click="detailsCategory()">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-col>
    <v-row>
      <category-dialog
        v-if="isCategoryDialog"
        v-model="isCategoryDialog"
        :action="action"
        :idInit="idInit"
        @closeDialog="() => (isCategoryDialog = false)"
        @createSuccess="createSuccess()"
      ></category-dialog>
    </v-row>
  </v-row>
</template>

<script>
import _ from "lodash";
import { mapActions } from "vuex";
import CategoryDialog from "./CategoryDialog.vue";
export default {
  components: {
    CategoryDialog
  },
  data() {
    return {
      isCategoryDialog: false,
      action: "create",
      filters: {},
      debounce: () => {}
    };
  },

  watch: {
    "filters.search"() {
      this.debounce();
    }
  },

  methods: {
    ...mapActions("snackbar", ["addSnackbar"]),
    updateSearch() {
      this.$emit("update:search", this.filters.search);
    },
    createCategory() {
      this.isCategoryDialog = true;
      this.action = "create";
    },

    editCategory() {
      this.isCategoryDialog = true;
      this.action = "edit";
    },

    detailsCategory() {
      (this.isCategoryDialog = true), (this.action = "details");
    },

    createSuccess() {
      this.$emit("createSuccess");
      this.addSnackbar({
        isShow: true,
        text: "Login is successfully.",
        priority: "success",
        timeout: 3000
      });
    }
  },

  created() {
    this.filters = { ...this.filtersInit };
    this.debounce = _.debounce(this.updateSearch, 1000);
  },

  props: {
    idInit: {
      type: Number
    },
    filtersInit: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped></style>
