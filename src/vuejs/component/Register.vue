<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <h1>Register</h1>
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
        <div class="errorRegister">{{ showError("Email") }}</div>
        <div class="form-group">
          <label>Username</label>
          <input
            type="text"
            v-model="formdata.username"
            class="form-control"
            name="username"
            id="user-name"
          />
        </div>
        <div class="errorRegister">{{ showError("Username") }}</div>
        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            v-model="formdata.password"
            name="password"
            class="form-control"
            id="password"
          />
          <div class="errorRegister">{{ showError("Password") }}</div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary" @click="register">Đăng kí</button>
          <span>{{ message }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.router-link {
  display: none;
}
.register-success {
  display: inline;
  margin-left: 50px;
}
.errorRegister {
  color: red;
}
</style>
<script>
export default {
  data() {
    return {
      formdata: {},
      message: "",
      errors: [
        {
          message: "",
          key: ""
        }
      ],
      isActive: false
    };
  },
  methods: {
    register() {
      this.axios
        .post("https://sfbserver.herokuapp.com/register", this.formdata)
        .then(response => {
          if (
            response.data.state !== "successful" &&
            response.data.state !== "existed"
          ) {
            const errorRegister = response.data.details;
            for (let index = 0; index < errorRegister.length; index++) {
              this.errors.push({
                message: errorRegister[index].message,
                key: errorRegister[index].context.key
              });
            }
          }
          else this.message = response.data.message
        });
    },
    showError(errorType) {
      var object = {};
      this.errors.forEach((error, index) => {
        if (error.key == errorType) {
          object = error;
        }
      });
      return object.message;
    }
  }
};
</script>
