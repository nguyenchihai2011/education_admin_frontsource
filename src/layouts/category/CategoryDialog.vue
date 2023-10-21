<template>
  <core-dialog v-model="model" :width="500" persistent :title="title">
    <template v-slot:title>
      <div style="width: 100%;">{{ title }}</div>
      <v-divider class="my-1" color="#ccc"></v-divider>
    </template>
    <template v-slot:body>
      <div>
        <v-row no-gutters class="">
          <v-col cols="2" class="d-flex flex-column">
            <div
              class="text-subtitle-1 font-weight-bold"
              style="line-height: 24px !important;"
            >
              Name:
            </div>
            <div v-if="!isDetails" class="text-caption red--text">
              required
            </div>
          </v-col>
          <v-col v-if="!isDetails" cols="10" class="d-flex">
            <v-text-field
              v-model="categoryName"
              outlined
              class="pt-0 rounded-lg"
              dense
            ></v-text-field>
          </v-col>
          <v-col v-else cols="10">
            <div class="text-subtitle-1 font-weight-bold">
              {{ categoryName }}
            </div>
          </v-col>
        </v-row>
      </div>
    </template>
    <template v-slot:actions>
      <!-- <v-divider class="my-1" color="#ccc"></v-divider> -->
      <div class="d-flex justify-center">
        <core-button
          @click.native="closeDialog()"
          outlined
          color="primary"
          class="rounded-lg"
        >
          Cancel
        </core-button>
        <core-button
          @click.native="submit()"
          tonal
          class="primary white--text ml-6"
        >
          Agree
        </core-button>
      </div>
    </template>
  </core-dialog>
</template>

<script>
import CoreDialog from "@/components/core/CoreDialog.vue";
import CoreButton from "@/components/core/CoreButton.vue";
import { getCategory, createCategory } from "@/api/category";
export default {
  components: { CoreDialog, CoreButton },
  data() {
    return {
      categoryName: ""
    };
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      }
    },

    title() {
      return this.isCreate
        ? "Create Category"
        : this.isEdit
        ? "Edit Category"
        : "Category Details";
    },

    isCreate() {
      return this.action === "create";
    },

    isEdit() {
      return this.action === "edit";
    },

    isDetails() {
      return this.action === "details";
    }
  },

  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },

    submit() {
      if (this.isCreate) {
        const payload = {
          name: this.categoryName
        };
        createCategory(payload)
          .then(res => {
            this.$emit("createSuccess");
            this.$emit("closeDialog");
          })
          .catch(err => console.log(err));
      }
    },

    fetchData() {
      getCategory(this.idInit).then(res => {
        this.categoryName = res.data.name;
      });
    }
  },

  created() {
    if (!this.isCreate) this.fetchData();
  },

  props: {
    value: {
      type: Boolean
    },
    action: {
      type: String,
      default: "create"
    },
    idInit: {
      type: Number
    }
  }
};
</script>

<style lang="scss" scoped></style>
