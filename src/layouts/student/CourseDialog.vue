<template>
  <core-dialog
    v-model="model"
    :width="650"
    :height="700"
    persistent
    :title="title"
  >
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
          </v-col>
          <v-col cols="10">
            <div class="text-subtitle-1 font-weight-bold">
              {{ course.firstName }} {{ course.lastName }}
            </div>
          </v-col>
          <v-col cols="2" class="d-flex flex-column">
            <div
              class="text-subtitle-1 font-weight-bold"
              style="line-height: 24px !important;"
            >
              Address:
            </div>
          </v-col>
          <v-col cols="10">
            <div class="text-subtitle-1 font-weight-bold">
              {{ course.address }}
            </div>
          </v-col>
          <v-col cols="2" class="d-flex flex-column">
            <div
              class="text-subtitle-1 font-weight-bold"
              style="line-height: 24px !important;"
            >
              Email paypal:
            </div>
          </v-col>
          <v-col cols="10">
            <div class="text-subtitle-1 font-weight-bold">
              {{ course.emailPaypal }}
            </div>
          </v-col>
        </v-row>
      </div>
    </template>
    <template v-slot:actions>
      <div class="d-flex justify-center">
        <core-button
          @click.native="closeDialog()"
          outlined
          color="primary"
          class="rounded-lg"
        >
          Cancel
        </core-button>
      </div>
    </template>
  </core-dialog>
</template>

<script>
import CoreDialog from "@/components/core/CoreDialog.vue";
import CoreButton from "@/components/core/CoreButton.vue";
import { getLecture } from "@/api/lecture";

export default {
  components: { CoreDialog, CoreButton },
  data() {
    return {
      course: {
        name: "",
        title: "",
        imageUrl: "",
        description: "",
        price: 0,
        level: "",
        language: "",
        categoryId: ""
      }
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
    }
  },

  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },

    fetchData() {
      getLecture(this.idInit).then(res => {
        this.course = res.data;
      });
    }
  },

  created() {
    this.fetchData();
  },

  props: {
    title: {
      type: String
    },
    value: {
      type: Boolean
    },
    idInit: {
      type: Number
    }
  }
};
</script>

<style lang="scss" scoped></style>
