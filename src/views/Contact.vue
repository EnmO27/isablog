<template>
  <div>

<div style="padding: 5rem;">
  <h2>{{ 'Contacto' }}</h2>
  <img style="margin-bottom: 5rem; width: 100%;" src="https://www.saeftyclient.com/wp-content/uploads/2016/06/Banner-Contacto-1.jpg">
  <p style="text-align: left;" v-html="`

<strong>Teléfono</strong><br>
0252-4219842<br><br>
<strong>Email</strong><br>
humanblog@blog.com
`"></p>
</div>

<div class="networks">
  <div style="margin-bottom: 2rem; margin-top: 2rem;">
    <img style="width: 50px; margin-left: 1rem;" src="../assets/facebook.png">
    <img style="width: 50px; margin-left: 1rem;" src="../assets/instagram.png">
    <img style="width: 50px; margin-left: 1rem;" src="../assets/twitter.png">
    <img style="width: 50px; margin-left: 1rem;" src="../assets/youtube.png">
  </div>
</div>

</div>
</template>


<style scoped>
@media screen and (min-width: 768px) {

.article-container {
  padding: 5rem;
}

.networks {
  display: flex;
  padding: 5rem;
  justify-content: end;
}

}
</style>