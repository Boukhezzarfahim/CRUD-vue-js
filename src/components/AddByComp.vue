<template>
    <div>
      <HeaderComp />
      <h1>Ajouter un Velo</h1>
      
      <div class="add-form">
        <form @submit.prevent="addVelo">
          <div class="form-group">
            <label for="name">Nom du vélo:</label>
            <input 
              type="text" 
              id="name" 
              v-model="velo.name" 
              class="form-control"
              placeholder="Ex: BMX, Rock Rider..."
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
              placeholder="Ex: 0778935841"
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
              placeholder="Ex: Azul city"
              required
            />
          </div>
          
          <div class="form-actions">
            <button type="submit" class="submit-btn">Ajouter</button>
            <button type="button" @click="cancel" class="cancel-btn">Annuler</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import HeaderComp from './HeaderComp.vue'
  import axios from 'axios'
  
  export default {
    name: 'AddByComp',
    components: {
      HeaderComp
    },
    data() {
      return {
        velo: {
          name: '',
          contact: '',
          address: ''
        }
      }
    },
    mounted() {
      let user = localStorage.getItem('user-info');
      if (!user) {
        this.$router.push({ name: 'SignUp' })
      }
    },
    methods: {
      async addVelo() {
        try {
          // Générer un ID simple (à remplacer par un ID généré par le backend si disponible)
          const newVelo = {
            ...this.velo,
            id: Math.floor(Math.random() * 10000).toString()
          };
  
          const response = await axios.post(
            "http://localhost:3000/Velos",
            newVelo
          );
          
          if (response.status === 201) {
            alert('Vélo ajouté avec succès!');
            this.resetForm();
            this.$router.push({ name: 'Home' });
          }
        } catch (error) {
          console.error("Erreur lors de l'ajout:", error);
          alert("Erreur lors de l'ajout du vélo");
        }
      },
      resetForm() {
        this.velo = {
          name: '',
          contact: '',
          address: ''
        };
      },
      cancel() {
        this.$router.push({ name: 'Home' });
      }
    }
  }
  </script>
  
  <style scoped>
  .add-form {
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
  
  .form-control::placeholder {
    color: #aaa;
  }
  
  .form-actions {
    display: flex;
    gap: 15px;
    margin-top: 2rem;
  }
  
  .submit-btn {
    background-color: #2ecc71;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    flex: 1;
  }
  
  .submit-btn:hover {
    background-color: #27ae60;
  }
  
  .cancel-btn {
    background-color: #e74c3c;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    flex: 1;
  }
  
  .cancel-btn:hover {
    background-color: #c0392b;
  }
  
  @media (max-width: 768px) {
    .add-form {
      padding: 1rem;
      margin: 1rem;
    }
    
    .form-actions {
      flex-direction: column;
      gap: 10px;
    }
  }
  </style>