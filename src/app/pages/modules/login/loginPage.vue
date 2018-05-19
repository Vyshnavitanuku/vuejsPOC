<template>
  <div class="helper">
    <div class="dv_login"> 
        <div class="container">
          <div>
            <label for="uname" class="control-label"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" v-model="loginDetails.username">
              </div>
          <div>
            <label for="psw" class="control-label"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" v-model="loginDetails.password">
              </div>
                      <label>
        </label>
            <button class="loginbutton" @click="login">Login</button>

        </div>
        <div style="background-color:#f1f1f1">
            <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  methods: {
    validateLoginFields() {
      if (!this.loginDetails.username || !this.loginDetails.password) {
        return false;
      }
      return true;
    },
    login() {
      if (this.validateLoginFields()) {
	  
        this.$store
          .dispatch("validateUser", this.loginDetails)
          .then(data => {
            if (data.isValidUser) {
              this.$router.push({
                name: "home"
              });
            } else {
              alert("Not a valid user");
            }
          })
          .catch(err => {
            alert(err);
          });
      }
    }
  },
  data() {
    return {
      loginDetails: {
        username: "",
        password: ""
      }
    };
  }
};
</script>
