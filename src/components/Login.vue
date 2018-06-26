<template>
  <div class="container">
    <div class="row justify-content-md-center" style="margin: 10%;">

      <div id="login" class="col col-md-6 border-d" style="text-align: center">
        <!-- title -->
        <h2 class="h2 mt-4"></h2><img src="../assets/loo.png" alt="Responsive image" class="mr-4 img-fluid" height="45"></h2>
        <hr style="height: 1px; background-color: grey; border-radius: 300px/10px;">
        <!-- formulario de login -->
        <div class="mt-4">
          <form @submit.prevent="auth">
            <div class="form-group">
                <label for="username" class="float-left"><b>Usuario</b></label>
                <input type="text" class="form-control" placeholder="Nombre de usuario" autocomplete="off" v-model="form.user">
            </div>
            <div class="form-group">
                <label for="password" class="float-left"><b>Contraseña</b></label>
                <input type="password" class="form-control" placeholder="Escriba su contraseña" v-model="form.password">
            </div>
            <button type="submit" class="btn btn-success float-right">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data(){
      return {

        form:{
          user: '',
          password: ''
        }
      }
    },
    methods: {
      auth(){
        this.$store.dispatch('login')

        axios.post('url', this.data.form)
          .then( (res) => {
            this.$store.commit('logon_success', res)
            this.$router.push({path: '/'})

          })
          .catch((error) => {
            this.$store.commit('login_failed', {error})
          })
      }
    }
  }
</script>