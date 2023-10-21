<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <v-card width="460">
          <v-card-text class="text-center px-12 py-16">
            <validation-observer ref="observer" v-slot="{ invalid }">
              <v-form ref="form" @submit.prevent="signIn">
                <div class="text-h4 font-weight-black mb-10">
                  Sign In
                </div>
                <validation-provider
                  v-slot="{ errors }"
                  name="Username"
                  :rules="{
                    required: true
                  }"
                >
                  <v-text-field
                    v-model="username"
                    label="Username"
                    prepend-icon="mdi-account"
                    :error-messages="errors"
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Password"
                  :rules="{
                    required: true
                  }"
                >
                  <v-text-field
                    v-model="password"
                    label="Password"
                    prepend-icon="mdi-lock-outline"
                    :error-messages="errors"
                    :type="showPassword ? 'text' : 'password'"
                    :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append="showPassword = !showPassword"
                  />
                </validation-provider>
                <v-btn
                  class="mt-6 text-none"
                  type="submit"
                  block
                  x-large
                  rounded
                  color="primary"
                  :disabled="invalid"
                >
                  Signin
                </v-btn>
                <!-- <div class="mt-5">
                  <router-link class="text-decoration-none" to="/">
                    홈
                  </router-link>
                  |
                  <router-link
                    class="text-decoration-none"
                    to="/authentication/sign-up"
                  >
                    회원가입
                  </router-link>
                </div> -->
              </v-form>
            </validation-observer>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { signIn } from "../../api/auth";
import { mapActions } from "vuex";
export default {
  name: "SignIn",
  data: () => ({
    username: null,
    password: null,
    showPassword: false
  }),
  methods: {
    ...mapActions("snackbar", ["addSnackbar"]),
    signIn() {
      this.$refs.observer.validate().then(result => {
        if (result) {
          const payload = {
            username: this.username,
            password: this.password
          };
          signIn(payload)
            .then(res => {
              localStorage.setItem("token", res.data.token);
              this.addSnackbar({
                isShow: true,
                text: "Login is successfully.",
                priority: "success",
                timeout: 3000
              });
              this.$router.push("/");
            })
            .catch(err => console.log(err));
        }
      });
    }
  }
};
</script>
<style lang=""></style>
