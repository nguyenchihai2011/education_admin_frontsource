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
      <v-btn
        text
        class="py-5 px-2"
        :disabled="idInit.length !== 1"
        @click="detailsCourse()"
      >
        <v-icon>mdi-details</v-icon>
      </v-btn>

      <v-btn
        text
        class="py-5 px-2"
        :disabled="idInit.length === 0"
        @click="deleteCategory()"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-col>
    <v-row>
      <course-dialog
        v-if="isCourseDialog"
        v-model="isCourseDialog"
        title="Course Details"
        :idInit="idInit[0].id"
        @closeDialog="() => (isCourseDialog = false)"
      ></course-dialog>
      <DeleteDialog
        v-if="isDeleteDialog"
        v-model="isDeleteDialog"
        :action="action"
        :idsInit="idInit"
        title="Delete Course"
        @closeDialog="() => (isDeleteDialog = false)"
        @deleteSuccess="deleteSuccess()"
      >
      </DeleteDialog>
    </v-row>
  </v-row>
</template>

<script>
import _ from "lodash";
import { mapActions } from "vuex";
import CourseDialog from "./CourseDialog.vue";
import DeleteDialog from "./DeleteDialog.vue";
export default {
  components: {
    CourseDialog,
    DeleteDialog
  },
  data() {
    return {
      isCourseDialog: false,
      isDeleteDialog: false,
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

    detailsCourse() {
      this.isCourseDialog = true;
      this.action = "details";
    },

    deleteCategory() {
      this.isDeleteDialog = true;
      this.action = "delete";
    },

    createSuccess() {
      this.$emit("createSuccess");
      this.addSnackbar({
        isShow: true,
        text: "Created.",
        priority: "success",
        timeout: 3000
      });
    },

    updateSuccess() {
      this.$emit("updateSuccess");
      this.addSnackbar({
        isShow: true,
        text: "Updated.",
        priority: "success",
        timeout: 3000
      });
    },

    deleteSuccess() {
      this.$emit("deleteSuccess");
      this.addSnackbar({
        isShow: true,
        text: "Deleted.",
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
      type: Array
    },
    filtersInit: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped></style>
