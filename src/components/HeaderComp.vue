<template>
    <header>
      <nav class="navbar">
        <div class="navbar-container">
          <h1 class="logo">CRUD</h1>
          <ul class="nav-links">
           <router-link to="/">Home</router-link>
           <router-link to="/add">Add</router-link>
            <li><a v-on:click="logout" href="#">Logout</a></li>
          </ul>
        </div>
      </nav>
    </header>
</template>

<script>
export default {
  name: 'HeaderComp',
  methods:{
      logout() {
          localStorage.clear();
          this.$router.push({name:'AzulComponent'})
      }
  }
};
</script>

<style scoped>
/* Modern CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Navbar styles */
.navbar {
  background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
  background-size: 400% 400%;
  padding: 1rem 2rem;
  position: relative;
  z-index: 100;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  animation: gradientBG 15s ease infinite;
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  color: #fff;
  font-size: 2rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 3px;
  cursor: pointer;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  letter-spacing: 1px;
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}

.nav-links a:hover {
  color: #fff;
  transform: translateY(-3px);
}

.nav-links a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

/* Logout button effect */
.nav-links li:last-child a {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.nav-links li:last-child a:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.nav-links li:last-child a::after {
  display: none;
}

/* Responsive design */
@media (max-width: 768px) {
  .navbar {
    padding: 1rem;
  }
  
  .navbar-container {
    flex-direction: column;
    align-items: center;
  }
  
  .logo {
    margin-bottom: 1rem;
  }
  
  .nav-links {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    width: 100%;
  }
  
  .nav-links a {
    padding: 0.5rem 1rem;
  }
  
  .nav-links li:last-child a {
    margin-top: 1rem;
  }
}

/* Glass morphism effect */
.navbar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.05);
  z-index: -1;
}
</style>