<template>
  <div id="app" style="width: 100vw;">
    <nav style="width: 100vw;">
      <b-row class="px-md-5" style="background-color: #02023b">
        <b-col class="py-4 p-md-4 d-flex d-md-block justify-content-center" md="2">
          <div>
            <img @click="$router.push({ path: '/blog/1' })" src="./assets/HUMAN.png" style="width: 60%; cursor: pointer;" />
          </div>
        </b-col>

        <b-col class="p-2 p-md-5 d-flex justify-content-center justify-content-md-end align-items-center" md="10">
          <router-link class="mr-3" to="/blog/1">Inicio</router-link> |
          <router-link class="mr-3" to="/about">Sobre nosotros</router-link>
          <router-link class="mr-3" to="/contact">Contacto</router-link>
        </b-col>
      </b-row>
    </nav>
    <div class="container-fluid" style="width: 100vw;">
      <b-row>
        <b-col col="12" md="8">
          <router-view />
        </b-col>

        <b-col class="p-5" style="background-color: #df5aff" col="12" md="4">
          <div class="d-flex">
            <b-form-input @keyup="test_keydown_handler" v-model="searchTerm" placeholder="Buscar"></b-form-input>
            <b-button @click="searchMethod">Buscar</b-button>
          </div>
          <hr>

          <div>
            <h5 style="text-align: start" class="font-weight-bolder text-white">Subscribete por Email</h5>
          </div>

          <div class="d-flex">
            <b-form-input placeholder="Email"></b-form-input>
            <b-button>Ir</b-button>
          </div>

          <hr>

          <h5 style="text-align: start" class="font-weight-bolder text-white">Posts destacados</h5>
          <div class="w-100"
            style="height: auto; background-color: white; border-radius: 20px; overflow: hidden; padding: 2rem">
            <div v-for="(post, index) in bestPosts" :key="index" style="cursor: pointer" @click="bestClick(post.id)">
              <b-row>
                <b-col md="6">
                  <img :src="post.image" class="w-100" style="border-radius: 1rem;">
                </b-col>

                <b-col md="6" class="d-flex align-items-center">
                  <p style="font-weight: bolder; text-align: left;">{{ post.title }}</p>
                </b-col>

              </b-row>

              <hr>
            </div>
          </div>
        </b-col>


      </b-row>
    </div>
  </div>
</template>

<script>
import { BCol, BRow, BFormInput, BButton } from 'bootstrap-vue'

export default {
  data() {
    return {
      searchTerm: null,
      bestPosts: [
        {
          id: 5,
          title: 'Enfoque Estratégico: Desglosando los Pilares del Éxito Empresarial',
          date: 'Junio 21, 2020',
          author: 'Emily Penzo',
          image: 'https://static.vecteezy.com/system/resources/previews/002/136/634/non_2x/business-success-concept-business-people-climb-the-bar-graph-through-a-column-by-column-for-their-success-illustration-vector.jpg',
          description: 'En el ámbito empresarial, es crucial entender los diferentes aspectos que contribuyen al crecimiento y desarrollo de una organización',
          wholeText: `<p style="text-align: left">En el ámbito empresarial, es crucial entender los diferentes aspectos que contribuyen al crecimiento y desarrollo de una organización. Uno de estos aspectos es el “ENFOQUE”, que se divide en cuatro categorías principales:<br><br>

1.- Personal: Se refiere al repertorio de comportamientos que agregan valor económico y social tanto para la empresa como para la persona. Aquí, se considera la actitud, habilidades y competencias individuales.<br><br>
2.- Competencia: Esta categoría incluye conocimiento, habilidad, juicio y actitud. Estas características son fundamentales para desempeñar roles específicos dentro de una organización con eficacia. La competencia es un pilar esencial para el éxito empresarial.<br><br>
3.- Talento Humano: Combina talento con contexto. En esta categoría, se consideran elementos como la estructura organizativa, la cultura empresarial, el clima laboral y el liderazgo. El talento humano es la fuerza impulsora detrás de la innovación y la productividad.<br><br>
4.- Capital Humano e Intelectual: El capital humano se subdivide en interno (procesos y tecnología) y externo (relaciones con partes interesadas y stakeholders). El capital intelectual se enfoca en la imagen y proyección de la organización. Ambos aspectos son cruciales para el crecimiento sostenible y la ventaja competitiva.<br><br>
Estas categorías no solo identifican los recursos disponibles sino también cómo pueden ser optimizados para mejorar la productividad y eficiencia operacional. En resumen, el enfoque adecuado en estas áreas es esencial para el éxito empresarial a largo plazo</p>`
        },
        {
          id: 6,
          title: 'Optimizando el Talento Humano: Estrategias Clave para el Éxito Empresarial',
          date: 'Junio 27, 2020',
          author: 'Kimberlyn Giménez',
          image: 'https://blog.vantagecircle.com/content/images/2022/06/capital-humano.png',
          description: 'En el mundo empresarial, la gestión eficiente del talento humano es crucial para el éxito y crecimiento de cualquier organización. Un modelo efectivo para gestionar el talento humano se basa en tres pilares fundamentales: atraer, conservar y desarrollar empleados eficientes.',
          wholeText: `<p style="text-align: left">En el mundo empresarial, la gestión eficiente del talento humano es crucial para el éxito y crecimiento de cualquier organización. Un modelo efectivo para gestionar el talento humano se basa en tres pilares fundamentales: atraer, conservar y desarrollar empleados eficientes.<br><br>

1.- Atraer empleados eficientes:<br><br>

<ul style="text-align: left">
<li>Planificación de Talento Humano: Implica una planificación meticulosa de los recursos humanos, anticipando las necesidades de personal y definiendo perfiles de puestos.</li>
<li>Reclutamiento: Seleccionar candidatos adecuados para los puestos vacantes.</li>
<li>Selección: Evaluar y elegir a los candidatos más idóneos.</li>
<li>Análisis de Puestos: Comprender las responsabilidades y requisitos de cada puesto.</li>
</ul><br><br>
<p style="text-align: left">2.- Conservar empleados eficientes:</p><br>

<ul style="text-align: left">
<li>Sueldos y Salarios: Ofrecer remuneraciones competitivas para retener al talento.</li>
<li>Beneficios: Proporcionar incentivos como seguros médicos, vacaciones pagadas y otros beneficios.</li>
<li>Relaciones Laborales: Fomentar un ambiente de trabajo saludable y relaciones positivas entre empleados y la empresa.</li>
</ul><br><br>
<p style="text-align: left">3.- Desarrollar empleados eficientes:</p><br>

<ul style="text-align: left">
<li>Capacitación: Brindar formación continua para mejorar habilidades y competencias.</li>
<li>Desarrollo Profesional: Facilitar oportunidades de crecimiento y ascenso dentro de la organización.</li>
<li>Evaluación: Realizar evaluaciones regulares para asegurar que los empleados estén comprometidos y alineados con los objetivos de la empresa.</li>
</ul><br>
<p style="text-align: left">Este enfoque integral permite a las organizaciones no solo atraer y retener talento, sino también a desarrollar un equipo altamente competente y comprometido con el éxito empresarial</p>`
        },
        {
          id: 14,
          title: 'Explorando los Estilos de Liderazgo: Un Vistazo al Modelo de la Universidad de Iowa',
          date: 'Agosto 07, 2020',
          author: 'Emily Penzo',
          image: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/268000/268912-Iowa.jpg',
          description: 'En el ámbito del liderazgo organizacional, es crucial entender los diferentes estilos y enfoques que pueden adoptar los líderes para maximizar la eficiencia y la productividad del equipo. En un estudio realizado por la Universidad de Iowa, se exploraron tres tipos distintos de liderazgo para determinar cuál era el más efectivo.',
          wholeText: `<body>
    <p style="text-align: left">En el ámbito del liderazgo organizacional, es crucial entender los diferentes estilos y enfoques que pueden adoptar los líderes para maximizar la eficiencia y la productividad del equipo. En un estudio realizado por la Universidad de Iowa, se exploraron tres tipos distintos de liderazgo para determinar cuál era el más efectivo.<br><br>

<strong>Líder Democrático</strong><br>
Este estilo implica involucrar a los subordinados en el proceso decisional, delegando autoridad y promoviendo la participación activa. Es un enfoque inclusivo que valora las opiniones y perspectivas diversas para llegar a decisiones consensuadas.<br><br>

<strong>Líder Autocrático</strong><br>
A diferencia del líder democrático, el líder autocrático centraliza la toma de decisiones y dicta métodos de trabajo. Este enfoque limita la participación activa de los subordinados, poniendo énfasis en la dirección unilateral.<br><br>

<strong>Líder Liberal</strong><br>
El líder liberal da libertad al grupo para tomar decisiones y completar el trabajo según consideren adecuado. Este estilo minimiza la intervención directa del líder en las operaciones diarias, permitiendo una mayor autonomía del equipo.<br><br>

Tras una evaluación exhaustiva, se concluyó que el estilo democrático es generalmente el más efectivo. Sin embargo, otros estudios han arrojado resultados mixtos, indicando que no existe un “tamaño único” cuando se trata de liderazgo efectivo.</p>
</body>`
        },
        {
          id: 18,
          title: 'La Jerarquía de las Necesidades Humanas según Abraham Maslow',
          date: 'Agosto 21, 2020',
          author: 'Isabella Paez',
          image: 'https://eb.up-flow.agency/wp-content/uploads/2022/12/image4-4-1024x570.jpg',
          description: 'En el ámbito de la psicología, la teoría de la jerarquía de las necesidades humanas, desarrollada por Abraham Maslow en 1943, sigue siendo un tema central para entender la motivación humana. Esta teoría propone que la motivación es impulsada por una serie de necesidades que están relativamente separadas y diferenciadas, pero interconectadas en una jerarquía.',
          wholeText: `<body><p style="text-align: left">
            En el ámbito de la psicología, la teoría de la jerarquía de las necesidades humanas, desarrollada por Abraham Maslow en 1943, sigue siendo un tema central para entender la motivación humana. Esta teoría propone que la motivación es impulsada por una serie de necesidades que están relativamente separadas y diferenciadas, pero interconectadas en una jerarquía.<br><br>

<strong>¿Cómo funciona esta jerarquía?</strong><br><br>

<strong>1. Necesidades Inferiores:</strong> En la base de la pirámide, encontramos las necesidades más básicas y fundamentales. Estas son las necesidades fisiológicas, como el alimento, el agua, el refugio y el descanso. Cuando estas necesidades no están satisfechas, se convierten en poderosos motivadores.<br><br>
<strong>2. Necesidades de Seguridad:</strong> Una vez que las necesidades fisiológicas están relativamente atendidas, surge la necesidad de seguridad. Esto incluye la seguridad física, la estabilidad financiera y la protección contra amenazas. Las personas buscan empleo, vivienda segura y un entorno estable.<br><br>
<strong>3. Necesidades Sociales o de Pertenencia:</strong> A medida que las necesidades de seguridad se satisfacen, surge el deseo de pertenecer a un grupo. Las relaciones sociales, la amistad, el amor y la afiliación son esenciales en esta etapa. La soledad y el aislamiento pueden ser fuertes desencadenantes.<br><br>
<strong>4. Necesidades de Estima:</strong> Una vez que se satisfacen las necesidades sociales, las personas anhelan reconocimiento y respeto. Esto incluye la autoestima y la estima de los demás. Logros personales, reconocimiento profesional y sentirse valioso son aspectos clave.<br><br>
<strong>5. Necesidades de Autorrealización:</strong> En la cima de la jerarquía se encuentran las necesidades de autorrealización. Estas son aspiraciones más profundas relacionadas con el crecimiento personal, la creatividad y la realización de nuestro potencial máximo. Las personas buscan significado, propósito y autotrascendencia.<br><br>
Es importante destacar que las necesidades inferiores nunca se satisfacen completamente; son recurrentes y pueden ser potentes motivadoras si se restringen. Las necesidades superiores emergen cuando las inferiores están relativamente satisfechas. La más alta de estas necesidades monopoliza la mente y guía el comportamiento del individuo.<br><br>

En resumen, la teoría de Maslow nos recuerda que la motivación humana es un proceso complejo y multifacético. A medida que avanzamos en la jerarquía, nuestras aspiraciones se vuelven más profundas y abstractas. Siempre estamos en busca de satisfacer estas necesidades aún más, especialmente cuando las necesidades inferiores están relativamente atendidas.<br><br>

Fuente: Desarrollada por Abraham Maslow en 1943, la teoría de la jerarquía de las necesidades humanas sigue siendo relevante en la comprensión de lo que nos impulsa como seres humanos.
            </p></body>`
        },
        {
          id: 16,
          title: 'MOTIVACIÓN: Energía, Dirección y Perseverancia',
          date: 'Agosto 16, 2020',
          author: 'José Vargas',
          image: 'https://www.turijobs.com/blog/wp-content/uploads/2018/11/photo-1497561813398-8fcc7a37b567-1024x683.jpeg',
          description: 'La motivación es un proceso fundamental en la búsqueda del éxito y el logro de metas. En este artículo, exploraremos los tres componentes clave que impulsan nuestra motivación: energía, dirección y perseverancia.',
          wholeText: `<body>
    <p style="text-align: left">La motivación es un proceso fundamental en la búsqueda del éxito y el logro de metas. En este artículo, exploraremos los tres componentes clave que impulsan nuestra motivación: energía, dirección y perseverancia.<br><br>

<strong>Energía</strong><br>
La energía es la fuerza impulsora detrás de nuestros esfuerzos. No basta con simplemente trabajar; debemos hacerlo con intensidad y constancia. Imagina una batería cargada al máximo, lista para alimentar tus acciones hacia tus objetivos. La energía es esa chispa que nos impulsa a avanzar.<br><br>

<strong>Dirección</strong><br>
La dirección es como un mapa que guía nuestros esfuerzos. Sin ella, podríamos estar dando vueltas sin llegar a ningún destino. Define tus metas con claridad y traza un camino hacia ellas. La dirección nos ayuda a canalizar nuestra energía hacia resultados concretos.<br><br>

<strong>Perseverancia</strong><br>
La perseverancia es la tenacidad que nos mantiene en el camino, incluso cuando enfrentamos obstáculos. Es la voluntad de seguir adelante, a pesar de las dificultades. Imagina un escalador que, a pesar del cansancio y las adversidades, sigue ascendiendo hacia la cima. Esa es la perseverancia en acción.<br><br>

En resumen, la motivación es más que un simple deseo; es la combinación de energía, dirección y perseverancia que nos impulsa a alcanzar nuestras metas. ¿Qué te motiva hoy?</p>
</body>`
        }
      ]

    }
  },

  mounted() {
  },

  components: {
    BCol,
    BRow,
    BFormInput,
    BButton
  },

  methods: {

    test_keydown_handler(event) {
    if (event.which === 13) {
      this.searchMethod()
    }
  },

    bestClick(id){
      this.$router.push({ path: `/read/${id}` })
    },

    searchMethod() {
      if (this.searchTerm) {
        this.$router.push({ path: `/blog/1`, query: { searchTerm: this.searchTerm } })
      }

      else {
        this.$router.push({ path: `/blog/1` })
      }
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #FFFFFF;
}

nav a.router-link-exact-active {
  color: #f84fff;
}
</style>
