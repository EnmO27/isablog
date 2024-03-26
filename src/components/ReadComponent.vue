<template>
  <div>
    <div v-if="article">
    <h1>{{ article.title }}</h1>
  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      article: null,
      blogContent: [
        {
          id: 1,
          title: 'Gestión del talento humano y su evolución histórica',
          date: 'Mayo 21, 2020',
          author: 'Isabella Paez',
          image: 'https://www.endalia.com/wp-content/uploads/historia-de-los-recursos-humanos-702x300.jpg.webp',
          description: 'Los Recursos Humanos tienen cerca de dos siglos de historia. Con motivo del Día Internacional de los Recursos Humanos, que se celebra cada 20 de mayo, hacemos un breve recorrido por los hitos más importantes de esta profesión, que ha ido evolucionando y adaptándose a la situación del mundo.',
          wholeText: ''
        },
        {
          id: 2,
          title: 'Evolución histórica del talento humano',
          date: 'Noviembre 21, 2015',
          author: 'Isabella Paez',
          image: 'https://www.endalia.com/wp-content/uploads/historia-de-los-recursos-humanos-702x300.jpg.webp',
          description: 'Los Recursos Humanos tienen cerca de dos siglos de historia. Con motivo del Día Internacional de los Recursos Humanos, que se celebra cada 20 de mayo, hacemos un breve recorrido por los hitos más importantes de esta profesión, que ha ido evolucionando y adaptándose a la situación del mundo. Hasta llegar al momento actual en plena Revolución Digital.'
        },
      ]
    }
  },
  name: 'ReadComponent',
  props: {
    msg: String
  },
  mounted() {
      let idParam = this.$route.params.id
      let inFactArticle = this.blogContent.find(element => element.id == idParam)
      console.log(idParam)
      console.log(inFactArticle)
      this.article = inFactArticle
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
