<template>
       <div class="container">
        <img class="logo" src="../assets/40626.jpg" alt="Logo" />

        <h1>Login</h1>

        <div class="azul">
            <input v-model="email" type="text" placeholder="Enter email">
            <input v-model="password" type="password" placeholder="Enter password">
            <button v-on:click="login">Login</button> <br> <br>

            <router-link to="/sign-up">Sign Up</router-link>
        </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'

  export default {
  name: 'AzulComponent',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      )

      if (result.status === 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]))
        this.$router.push({ name: 'HomePage' })
      }
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info')
    if (user) {
      this.$router.push({ name: 'HomePage' })
    }
  }
}


   
  </script>

<style scoped>
h1 {
    display: inline-block;
    background: #3498db;
    /* Fond bleu */
    color: white;
    /* Texte blanc */
    padding: 12px 30px;
    /* Espace intérieur */
    border-radius: 12px;
    /* Bords arrondis */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    /* Ombre portée */
    font-family: 'Poppins', 'Arial', sans-serif;
    font-size: 32px;
    margin-bottom: 30px;
    font-weight: bold;
    letter-spacing: 1px;
}



/* Conteneur principal */
.container {
    text-align: center;
    margin-top: 40px;
}

/* Logo */
.logo {
    width: 120px;
    /* adapte selon ton besoin */
    height: auto;
    display: block;
    margin: 0 auto 20px auto;
    /* centré + marge bas */
    border-radius: 50%;
    /* option : arrondi si tu veux un style "rond" */
}

/* Titre */
h1 {
    font-family: 'Arial', sans-serif;
    color: #333;
    margin-bottom: 30px;
}

/* Formulaire */
.azul {
    background: #f0f4f8;
    padding: 30px;
    border-radius: 12px;
    max-width: 400px;
    margin: 0 auto;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* Champs */
.azul input {
    display: block;
    width: 90%;
    margin: 15px auto;
    padding: 12px 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
}

/* Focus sur input */
.azul input:focus {
    border-color: #3498db;
    outline: none;
}

/* Bouton */
.azul button {
    margin-top: 20px;
    padding: 12px 20px;
    background-color: #3498db;
    border: none;
    color: white;
    font-size: 18px;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.3s;
}

/* Effet hover sur bouton */
.azul button:hover {
    background-color: #2980b9;
}
</style>
  