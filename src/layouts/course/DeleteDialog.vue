<template>
  <core-dialog v-model="model" :width="500" persistent :title="title">
    <template v-slot:title>
      <div style="width: 100%;">{{ title }}</div>
      <v-divider class="my-1" color="#ccc"></v-divider>
    </template>
    <template v-slot:body>
      <div></div>
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
          Save
        </core-button>
      </div>
    </template>
  </core-dialog>
</template>

<script>
import CoreDialog from "@/components/core/CoreDialog.vue";
import CoreButton from "@/components/core/CoreButton.vue";
import { deleteCourse } from "@/api/course";
export default {
  components: { CoreDialog, CoreButton },
  data() {
    return {};
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

    submit() {
      const ids = this.idsInit.map(item => item.id);

      deleteCourse(ids).then(() => {
        this.$emit("deleteSuccess");
        this.$emit("closeDialog");
      });
    }
  },

  props: {
    title: {
      type: String
    },
    value: {
      type: Boolean
    },
    action: {
      type: String,
      default: "create"
    },
    idsInit: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped></style>
