<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <h1>Đăng nhập</h1>

        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            v-model="formdata.email"
            class="form-control"
            name="email"
            id="email"
          />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            v-model="formdata.password"
            name="password"
            class="form-control"
            id="password"
          />
        </div>
        <div class="form-group" id="button">
          <button class="btn btn-primary" v-on:click="Login">
            Đăng nhập
          </button>

          <router-link class="router" to="/register"
            >Create an account</router-link
          >
        </div>
        <div class="notification">
          <h5
            class="error-notification"
            v-bind:class="{ 'green-notification': isActive }"
          >
            {{ message }}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.router {
  margin-left: 330px;
}
.error-notification {
  color: red;
}
.green-notification {
  color: green;
}
</style>

<script>
import { router } from "../routes/routes.js";
export default {
  data() {
    return {
      formdata: {},
      message: "",
      isActive: false,
    };
  },
  methods: {
    Login() {
      this.axios
        .post("https://sfbserver.herokuapp.com", this.formdata)
        .then((response) => {
          this.message = response.data.message
        });
    },
  },
};
</script>
