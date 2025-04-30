<template>
  <div>
    <HeaderComp />
    <h1>Hello {{ name }}, Welcome on page</h1>
    
    <div class="table-container">
      <table class="velos-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="velo in velos" :key="velo.id">
            <td>{{ velo.id }}</td>
            <td>{{ velo.name }}</td>
            <td>{{ velo.contact }}</td>
            <td>{{ velo.address }}</td>
            <td class="actions">
              <button @click="editVelo(velo.id)" class="edit-btn">Edit</button>
              <button @click="deleteVelo(velo.id)" class="delete-btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import HeaderComp from './HeaderComp.vue'
import axios from 'axios'

export default {
  name: 'HomePage',
  data() {
    return {
      name: '',
      velos: []
    }
  },
  components: {
    HeaderComp
  },
  async mounted() {
    let user = localStorage.getItem('user-info');
    if (user) {
      this.name = JSON.parse(user).name;
    } else {
      this.$router.push({ name: 'SignUp' })
    }
    let result = await axios.get("http://localhost:3000/Velos");
    this.velos = result.data;
  },
  methods: {
    editVelo(id) {
      this.$router.push({ name: 'UpdateByComp', params: { id: id } })
    },
    async deleteVelo(id) {
      let result = await axios.delete(`http://localhost:3000/Velos/${id}`);
      if (result.status === 200) {
        this.velos = this.velos.filter(item => item.id !== id);
      }
    }
  }
}
</script>

<style scoped>
.table-container {
  margin: 2rem auto;
  max-width: 1000px;
  overflow-x: auto;
}

.velos-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.velos-table th,
.velos-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.velos-table th {
  background-color: #2c3e50;
  color: white;
  font-weight: 600;
}

.velos-table tr:hover {
  background-color: #f5f5f5;
}

.actions {
  display: flex;
  gap: 10px;
}

.edit-btn, .delete-btn {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.edit-btn {
  background-color: #3498db;
  color: white;
}

.delete-btn {
  background-color: #e74c3c;
  color: white;
}

.edit-btn:hover {
  background-color: #2980b9;
}

.delete-btn:hover {
  background-color: #c0392b;
}

@media (max-width: 768px) {
  .velos-table {
    display: block;
  }
  
  .velos-table thead {
    display: none;
  }
  
  .velos-table tr {
    display: block;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
  }
  
  .velos-table td {
    display: block;
    text-align: right;
    padding-left: 50%;
    position: relative;
  }
  
  .velos-table td::before {
    content: attr(data-label);
    position: absolute;
    left: 15px;
    width: 45%;
    padding-right: 10px;
    font-weight: bold;
    text-align: left;
  }
  
  .actions {
    justify-content: flex-end;
  }
}
</style>