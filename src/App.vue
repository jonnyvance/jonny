<template>
  <div id="app">
    <about></about>
  </div>
</template>

<script>
import resume from './components/resume'
import about from './components/about'
export default {
  name: 'app',
  components: {
      resume, about
  }
}
</script>

<style>
#app {
  margin-top: 0;
  font-family: 'Raleway', sans-serif;
  color: #6B7A8F;
  text-align: center;
  display: flex;
  flex-direction: column;
}

a:-webkit-any-link {
  color: #F7C331;
  text-decoration: none;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24%;
  font-size: 1.2em;
}

#name {
  display: flex;
  flex-direction: column;
  line-height: 3.1em;
  font-size: 2.2rem;
  color: #6B7A8F;
  font-family: 'Baloo', cursive;
}

.embed-container { 
  position: relative; 
  padding-bottom: 56.25%; 
  height: 0; 
  overflow: hidden; 
  max-width: 100%; 
  height: auto; 
  margin: 3rem 0 .5rem 0;
} 

.embed-container iframe, .embed-container object, .embed-container embed { 
  position: absolute; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%; 
}

h1 {
  margin: 0;
}

h2, h3 {
  margin: .1rem;
}

.view {
  margin-bottom: 3rem;
}

.vidWidth {
    max-width: 75%;
    margin: auto;
}
</style>
