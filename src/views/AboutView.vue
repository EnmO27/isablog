<template>
  <div>

    <div class="article-container">
      <h2 class="mt-3 mt-md-0">{{ 'Sobre nosotros' }}</h2>
      <img style="margin-bottom: 5rem; width: 100%;"
        src="https://images.squarespace-cdn.com/content/v1/61dcb64d264e7524abe55ffb/ffc879f3-55c8-43e2-b830-838dee4024a1/Banner-Administracio%CC%81n-de-Talento-Humano.png">
      <p style="text-align: left;"
        v-html="`Bienvenidos a nuestro blog dedicado a la gestión del talento humano. Somos un equipo apasionado por el desarrollo y crecimiento de las personas en el ámbito laboral. Nuestra misión es proporcionar información valiosa, consejos prácticos y análisis profundos sobre cómo optimizar la gestión del talento en las organizaciones.<br><br>

<strong>Nuestra Visión</strong><br><br>
Creemos que cada individuo tiene un potencial único y valioso. A través de estrategias efectivas de reclutamiento, capacitación y retención, podemos ayudar a las empresas a aprovechar al máximo el talento de sus empleados. Queremos ser un recurso confiable para líderes, gerentes y profesionales de recursos humanos que buscan mejorar sus prácticas y crear entornos de trabajo excepcionales.<br><br>

<strong>Nuestro Equipo</strong><br><br>
Detrás de este blog, encontrarás un equipo diverso de expertos en recursos humanos, psicólogos organizacionales, analistas de datos y escritores apasionados. Nos apasiona compartir nuestro conocimiento y experiencias para fomentar un cambio positivo en el mundo laboral.<br><br>

<strong>¿Por qué nos importa?</strong><br><br>
La gestión del talento no es solo una tarea empresarial; es una oportunidad para impactar vidas. Creemos que cuando las personas se sienten valoradas, empoderadas y motivadas, pueden lograr cosas extraordinarias. Estamos comprometidos a difundir las mejores prácticas y a inspirar a otros a crear entornos laborales donde el talento florezca.<br><br>

¡Gracias por acompañarnos en este viaje! Esperamos que encuentres inspiración, consejos útiles y una comunidad de apoyo en nuestro blog.`"></p>
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
