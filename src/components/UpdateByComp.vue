<template>
  <div>
    <HeaderComp />
    <h1>Update Velo</h1>
    
    <div class="update-form">
      <form @submit.prevent="updateVelo">
        <div class="form-group">
          <label for="name">Nom du vélo:</label>
          <input 
            type="text" 
            id="name" 
            v-model="velo.name" 
            class="form-control"
            required
          />
        </div>
        
        <div class="form-group">
          <label for="contact">Contact:</label>
          <input 
            type="text" 
            id="contact" 
            v-model="velo.contact" 
            class="form-control"
            required
          />
        </div>
        
        <div class="form-group">
          <label for="address">Adresse:</label>
          <input 
            type="text" 
            id="address" 
            v-model="velo.address" 
            class="form-control"
            required
          />
        </div>
        
        <button type="submit" class="submit-btn">Mettre à jour</button>
      </form>
    </div>
  </div>
</template>

<script>
import HeaderComp from './HeaderComp.vue'
import axios from 'axios'

export default {
  name: 'UpdateByComp',
  components: {
    HeaderComp
  },
  data() {
    return {
      velo: {
        id: '',
        name: '',
        contact: '',
        address: ''
      }
    }
  },
  async mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({ name: 'SignUp' })
    }
    
    // Récupérer l'ID depuis les paramètres de route
    const veloId = this.$route.params.id;
    
    if (veloId) {
      try {
        const result = await axios.get(`http://localhost:3000/Velos/${veloId}`);
        this.velo = result.data;
      } catch (error) {
        console.error("Erreur lors de la récupération du vélo:", error);
        this.$router.push({ name: 'Home' });
      }
    }
  },
  methods: {
    async updateVelo() {
      try {
        const response = await axios.put(
          `http://localhost:3000/Velos/${this.velo.id}`,
          this.velo
        );
        
        if (response.status === 200) {
          alert('Vélo mis à jour avec succès!');
          this.$router.push({ name: 'Home' });
        }
      } catch (error) {
        console.error("Erreur lors de la mise à jour:", error);
        alert('Erreur lors de la mise à jour');
      }
    }
  }
}
</script>

<style scoped>
.update-form {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #2c3e50;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border 0.3s;
}

.form-control:focus {
  border-color: #3498db;
  outline: none;
}

.submit-btn {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #2980b9;
}

@media (max-width: 768px) {
  .update-form {
    padding: 1rem;
    margin: 1rem;
  }
}
</style>