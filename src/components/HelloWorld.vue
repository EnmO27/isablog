<template>
  <div>

    <div v-for="(content, index) of pageItems" :key="index" class="mb-5">
      <div class="mb-4">
        <a :href="`#/read/${content.id}`" class="blog-title">
          <h3 style="text-align: start; color: #02023b" class="ml-5 mb-1 font-weight-bolder">{{ content.title }}</h3>
        </a>
        <p style="text-align: start;" class="ml-5">{{ `${content.date} por ${content.author}` }}</p>
      </div>

      <img style="width: 80%;" :src="content.image" />
      <p style="text-align: start;" class="px-5 m-5">{{ content.description }}</p>
    </div>

    <div class="mt-3">
      <b-pagination @change="pageChanged" limit="6" v-model="currentPage" page-class="pagination-thing" :per-page="perPage" :total-rows="rows" align="center"></b-pagination>
    </div>

  </div>
</template>

<script>
import { BPagination } from 'bootstrap-vue';

export default {
  data() {
    return {
      rows: null,
      // currentPage: 1,
      perPage: 4,
      loaded: true,
      blogPage: null,
      blogContent: [

        {
          id: 1,
          title: 'Gestión del talento humano y su evolución histórica',
          date: 'Mayo 21, 2020',
          author: 'Isabella Paez',
          image: 'https://www.endalia.com/wp-content/uploads/historia-de-los-recursos-humanos-702x300.jpg.webp',
          description: 'Los Recursos Humanos tienen cerca de dos siglos de historia. Con motivo del Día Internacional de los Recursos Humanos, que se celebra cada 20 de mayo, hacemos un breve recorrido por los hitos más importantes de esta profesión, que ha ido evolucionando y adaptándose a la situación del mundo.',
          wholeText: `<p style="text-align: left">La gestión del talento humano ha experimentado una evolución significativa a lo largo de la historia, adaptándose a los cambios sociales, económicos y tecnológicos que han marcado cada época. Desde la revolución industrial hasta la actual era del conocimiento, la forma en que las organizaciones gestionan a su capital humano ha ido transformándose para satisfacer las necesidades y demandas de un mundo en constante cambio.<br><br>

En los albores de la revolución industrial, a finales del siglo XVIII y principios del XIX, la gestión del talento humano era prácticamente inexistente. Las fábricas y empresas de la época trataban a sus trabajadores como meros recursos productivos, sin preocuparse por su bienestar o desarrollo personal. Los empleados eran vistos simplemente como mano de obra barata y fácilmente reemplazable.<br><br>

Con la llegada de la industrialización neoclásica a mediados del siglo XX, surgió una mayor conciencia sobre la importancia de gestionar el talento humano de manera más estratégica. Las organizaciones comenzaron a darse cuenta de que contar con empleados motivados, comprometidos y capacitados era fundamental para su éxito a largo plazo. Se empezaron a implementar programas de formación, evaluación del desempeño y beneficios para retener y desarrollar el talento dentro de las empresas.<br><br>

En la actualidad, en la era del conocimiento, la gestión del talento humano ha adquirido una relevancia aún mayor. En un mundo cada vez más globalizado y digitalizado, las organizaciones se enfrentan a nuevos desafíos y oportunidades en la atracción, retención y desarrollo del talento. La competencia por los mejores profesionales es feroz, y las empresas deben adaptarse constantemente para atraer y mantener a los empleados más cualificados.<br><br>

La gestión del talento humano en la era del conocimiento se caracteriza por la valoración de habilidades blandas, el fomento de la creatividad y la innovación, la promoción de la diversidad y la inclusión, así como por el uso de tecnologías avanzadas para optimizar los procesos de reclutamiento, selección y desarrollo de personal.<br>

En resumen, la evolución histórica de la gestión del talento humano refleja la transformación de las organizaciones hacia un enfoque más humano, centrado en el desarrollo integral de sus empleados y en la creación de entornos laborales que fomenten el crecimiento personal y profesional. Adaptarse a las nuevas realidades del mercado laboral y aprovechar al máximo el potencial de cada individuo se ha convertido en una prioridad para las empresas que buscan sobrevivir y prosperar en un entorno empresarial cada vez más competitivo y exigente.</p>`
        },
        {
          id: 2,
          title: 'Revolución industrial, los inicios de la gestión del talento humano',
          date: 'Mayo 26, 2020',
          author: 'José Vargas',
          image: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Skglb_promo_1895.jpg',
          description: 'En la revolución industrial de principios del siglo XX, la gestión del talento humano también jugó un papel crucial en la transformación de las empresas y la sociedad en general. En esta época, la industrialización se aceleró y se produjeron cambios significativos en los procesos de producción, la organización del trabajo y las condiciones laborales.',
          wholeText: `<p style="text-align: left">En la revolución industrial de principios del siglo XX, la gestión del talento humano también jugó un papel crucial en la transformación de las empresas y la sociedad en general. En esta época, la industrialización se aceleró y se produjeron cambios significativos en los procesos de producción, la organización del trabajo y las condiciones laborales.<br><br>

La gestión del talento humano en la revolución industrial de 1900 implicó enfrentarse a desafíos como la creciente demanda de mano de obra especializada, la necesidad de mejorar las condiciones de trabajo y la gestión de conflictos laborales. Las empresas tuvieron que adaptarse a las nuevas realidades del mercado laboral y desarrollar estrategias para atraer, retener y motivar a sus empleados.<br><br>

En esta época, surgieron movimientos sociales y sindicales que luchaban por los derechos de los trabajadores y exigían mejores condiciones laborales y salariales. La gestión del talento humano se convirtió en un tema central en el debate público y las empresas se vieron obligadas a prestar más atención al bienestar y desarrollo de sus empleados.<br><br>

En resumen, la gestión del talento humano en la revolución industrial de principios del siglo XX fue un factor determinante en la evolución de las empresas y la sociedad en general. Las organizaciones que supieron adaptarse a los cambios y responder de manera efectiva a las demandas de sus empleados lograron sobrevivir y prosperar en este período de profunda transformación industrial.</p>`
        },
        {
          id: 3,
          title: '¿Qué es la gestión del talento humano y por qué es tan importante?',
          date: 'Junio 12, 2020',
          author: 'Helenne Ocanto',
          image: 'https://www.revistalideres.ec/files/article_main/uploads/2021/01/14/60008bacc0ddf.jpeg',
          description: 'La gestión del talento humano es un aspecto fundamental en cualquier organización, ya que son las personas las que impulsan el éxito de la empresa. En la actualidad, las empresas se enfrentan a un entorno empresarial cada vez más competitivo y dinámico, por lo que contar con un equipo talentoso y comprometido se ha vuelto crucial para sobresalir en el mercado.',
          wholeText: `<p style="text-align: left">La gestión del talento humano es un aspecto fundamental en cualquier organización, ya que son las personas las que impulsan el éxito de la empresa. En la actualidad, las empresas se enfrentan a un entorno empresarial cada vez más competitivo y dinámico, por lo que contar con un equipo talentoso y comprometido se ha vuelto crucial para sobresalir en el mercado.<br><br>

La gestión del talento humano se refiere a todas las prácticas y estrategias que una empresa implementa para reclutar, retener, desarrollar y motivar a su personal. Esto implica identificar a los empleados con habilidades y capacidades excepcionales, brindarles oportunidades de crecimiento y desarrollo, y crear un ambiente de trabajo que fomente la creatividad, la innovación y el compromiso.<br><br>

Uno de los aspectos más importantes de la gestión del talento humano es el reclutamiento y selección de personal. Es fundamental encontrar a las personas adecuadas para cada puesto, que no solo cuenten con las habilidades técnicas necesarias, sino también con los valores y la cultura organizacional de la empresa. Para ello, es importante diseñar procesos de reclutamiento efectivos que permitan atraer a los mejores talentos del mercado.<br><br>

Una vez que se ha reclutado al personal adecuado, es fundamental invertir en su desarrollo y capacitación. Ofrecer programas de formación continua y oportunidades de crecimiento profesional no solo beneficia a los empleados, sino que también contribuye al crecimiento y la competitividad de la empresa. Además, es importante reconocer y recompensar el desempeño excepcional, ya que esto motiva a los empleados a dar lo mejor de sí mismos y a sentirse valorados en la organización.<br><br>

Por último, la gestión del talento humano también implica crear un ambiente laboral positivo y motivador. Fomentar la comunicación abierta, el trabajo en equipo y el liderazgo participativo son clave para mantener a los empleados comprometidos y satisfechos con su trabajo. Además, es importante promover una cultura organizacional basada en la diversidad, la inclusión y el respeto mutuo, ya que esto contribuye a crear un ambiente laboral más productivo y enriquecedor para todos.<br><br>

En resumen, la gestión del talento humano es un proceso continuo que requiere de la atención y dedicación de los líderes de la organización. Al invertir en el desarrollo y el bienestar de su personal, las empresas pueden potenciar su crecimiento y alcanzar el éxito en un mercado cada vez más competitivo.</p>`
        },
        {
          id: 4,
          title: 'Tendencias en la Gestión del Talento Humano y Planificación Estratégica en las Organizaciones',
          date: 'Junio 15, 2020',
          author: 'Daniela Romero',
          image: 'https://worldcampus.saintleo.edu/img/article/estudiar-recursos-humanos-que-es-la-gestion-de-talento-humano-por-competencias.webp',
          description: 'En un mundo empresarial en constante evolución, la gestión del talento humano se ha convertido en un pilar fundamental para el éxito de las organizaciones. Las tendencias emergentes en este campo están marcando el camino hacia una gestión más estratégica y centrada en las personas.',
          wholeText: `<p style="text-align: left">En un mundo empresarial en constante evolución, la gestión del talento humano se ha convertido en un pilar fundamental para el éxito de las organizaciones. Las tendencias emergentes en este campo están marcando el camino hacia una gestión más estratégica y centrada en las personas. En este artículo, exploraremos algunas de las tendencias clave:<br><br>

1.- Apoyo al Crecimiento Individual: Las empresas están reconociendo la importancia de invertir en el desarrollo profesional de sus empleados. Ofrecer programas de capacitación, aprendizaje y oportunidades para asumir nuevas responsabilidades fomenta el compromiso y la retención del talento.<br><br>
2.- Cultura Organizacional Comprometida: Una cultura que refleje los valores y objetivos de la empresa es esencial. Los empleados deben sentirse parte activa de la misión y visión, comprendiendo cómo su trabajo contribuye al éxito general.<br><br>
3.- Planificación Estratégica del Talento: La gestión del talento debe estar alineada con la estrategia empresarial. Identificar y desarrollar habilidades específicas para cumplir los objetivos de la organización es crucial.<br><br>
4.- Individualidad y Ventaja Competitiva: Cada empleado es único y aporta una ventaja competitiva inimitable. Reconocer y aprovechar estas diferencias es esencial para el crecimiento sostenible.<br><br>
En resumen, la gestión del talento humano ya no se trata solo de administrar recursos, sino de empoderar a las personas para que sean agentes activos en el éxito organizacional. ¡El futuro está en manos de quienes lideran con visión estratégica y enfoque humano!</p>`
        },
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
          id: 7,
          title: 'Reclutamiento de Talento, Desarrolla un Equipo Sólido y Eficiente',
          date: 'Julio 02, 2020',
          author: 'Emily Penzo',
          image: 'https://www.ceupe.com/images/easyblog_articles/3213/b2ap3_amp_seleccionar-perfonal-por-referencias-de-otros-empleados.jpg',
          description: 'En el ámbito de la gestión del talento humano, el reclutamiento es un proceso crucial que se lleva a cabo tanto dentro como fuera de la organización para encontrar a las personas adecuadas que ocuparán los puestos vacantes',
          wholeText: `<p style="text-align: left">En el ámbito de la gestión del talento humano, el reclutamiento es un proceso crucial que se lleva a cabo tanto dentro como fuera de la organización para encontrar a las personas adecuadas que ocuparán los puestos vacantes. Según Hellriegel (2009), existen dos formas principales de reclutamiento: interno y externo.<br><br>

Reclutamiento Interno:<br>
<ul style="text-align: left">
<li>La organización cubre las vacantes con su propio personal existente, ya sea a través de ascensos o transferencias.</li>
<li>Este método es menos costoso y más confiable, ya que genera un mayor compromiso con la organización.</li>
<li>Los empleados actuales tienen la oportunidad de crecimiento y desarrollo dentro de la empresa.</li>
</ul><br>
<p style="text-align: left">Reclutamiento Externo:</p>
<ul style="text-align: left">
<li>La organización contrata personas que no están actualmente empleadas en la empresa.</li>
<li>Se recurre a fuentes externas como head-hunters, universidades, gremios y publicidad.</li>
<li>Aunque puede ser más costoso, el reclutamiento externo aporta diversidad y nuevas habilidades a la organización.</li>
</ul><br>
<p style="text-align: left">En resumen, el reclutamiento es un paso fundamental para asegurar que la organización cuente con el talento adecuado para alcanzar sus objetivos. Tanto el reclutamiento interno como el externo desempeñan un papel crucial en la construcción de un equipo sólido y eficiente.</p>`
        },
        {
          id: 8,
          title: 'Reclutamiento Efectivo: Estrategias y Consejos para Encontrar el Talento Adecuado',
          date: 'Julio 07, 2020',
          author: 'Helenne Ocanto',
          image: 'https://blog.bayton.com/hs-fs/hubfs/Im%C3%A1genes%20BP/2020/2002/6.jpg?width=1206&name=6.jpg',
          description: 'El reclutamiento es un paso crucial en la gestión del talento humano. Encontrar a las personas adecuadas para ocupar posiciones vacantes no solo garantiza el éxito de la organización, sino que también contribuye al crecimiento y la cultura empresarial.',
          wholeText: `<p style="text-align: left">El reclutamiento es un paso crucial en la gestión del talento humano. Encontrar a las personas adecuadas para ocupar posiciones vacantes no solo garantiza el éxito de la organización, sino que también contribuye al crecimiento y la cultura empresarial. Aquí te presentamos algunas estrategias y consejos para llevar a cabo un reclutamiento efectivo:<br><br>

<span style="font-weight: bolder">1. Definir Claramente el Puesto</span><br><br>
Antes de comenzar el proceso de reclutamiento, es esencial tener una descripción detallada del puesto. Esto incluye las responsabilidades, habilidades requeridas, experiencia previa y competencias necesarias. Una descripción clara ayudará a atraer candidatos calificados y evitará malentendidos durante las entrevistas.<br><br>

<span style="font-weight: bolder">2. Utilizar Múltiples Canales de Reclutamiento</span><br><br>
No te limites a un solo canal de reclutamiento. Combina métodos internos y externos para ampliar tu búsqueda. Algunas opciones incluyen:<br>
<ul style="text-align: left">
<li>Bolsas de trabajo en línea: Publica ofertas de empleo en sitios web especializados.</li>
<li>Redes sociales: Utiliza plataformas como LinkedIn, donde puedes buscar candidatos activos y pasivos.</li>
<li>Eventos y ferias laborales: Asiste a eventos donde puedas interactuar directamente con posibles candidatos.</li>
</ul>
<p style="text-align: left"><span style="font-weight: bolder;">3. Implementar Herramientas Tecnológicas</span><br><br>
El uso de software especializado puede agilizar el proceso de selección. Herramientas como sistemas de seguimiento de candidatos (ATS) te ayudarán a filtrar aplicaciones de manera eficiente y a mantener un registro organizado de los candidatos.<br><br>

<span style="font-weight: bolder">4. Realizar Entrevistas Estructuradas</span><br><br>
Prepara preguntas específicas para evaluar habilidades y experiencia relevantes. Las entrevistas estructuradas garantizan que todos los candidatos sean evaluados de manera uniforme. Además, considera realizar pruebas técnicas o de personalidad según el puesto.<br><br>

<span style="font-weight: bolder">5. Considerar la Cultura Organizacional</span><br><br>
No solo busques habilidades técnicas; también evalúa si los candidatos se alinean con los valores y objetivos de la empresa. La cultura organizacional es crucial para la retención a largo plazo.<br><br>

En resumen, un reclutamiento efectivo implica una combinación de estrategias, herramientas tecnológicas y una comprensión profunda de las necesidades de la organización. Al seguir estos consejos, estarás en el camino correcto para encontrar el talento adecuado y construir un equipo sólido.</p>`
        },
        {
          id: 9,
          title: 'Selección en el Proceso de Gestión del Talento Humano: Claves para Encontrar a los Candidatos Ideales',
          date: 'Julio 07, 2020',
          author: 'José Vargas',
          image: 'https://www.gb-advisors.com/wp-content/uploads/2022/05/Talento-humano-2.jpg',
          description: 'En el ámbito de la gestión del talento humano, el proceso de selección es crucial para determinar si un candidato posee las habilidades, capacidades y demás condiciones necesarias para ocupar un puesto específico.',
          wholeText: `
    <p style="text-align: left">En el ámbito de la gestión del talento humano, el proceso de selección es crucial para determinar si un candidato posee las habilidades, capacidades y demás condiciones necesarias para ocupar un puesto específico. Este proceso se lleva a cabo mediante varios mecanismos:</p>
    <ol>
        <li>
            <p style="font-weight: bolder; text-align: left">Hoja de Vida / Formulario de Solicitud de Empleo</p>
            <p style="text-align: left">La hoja de vida o formulario de solicitud de empleo proporciona información básica sobre el candidato reclutado. Es el primer paso para evaluar su idoneidad.</p>
        </li>
        <li>
            <p style="font-weight: bolder; text-align: left">Entrevistas</p>
            <p style="text-align: left">Las entrevistas actúan como un canal bidireccional de comunicación que permite recabar más detalles sobre el candidato. A través de preguntas y respuestas, se evalúan sus habilidades comunicativas, actitud y personalidad.</p>
        </li>
        <li>
            <p style="font-weight: bolder; text-align: left">Pruebas de Empleo</p>
            <p style="text-align: left">Las pruebas de empleo abarcan tests de inteligencia, emocionales, éticos, habilidades y psicotécnicos. Estas herramientas valiosas permiten evaluar a los aspirantes en profundidad y determinar su aptitud para el puesto.</p>
        </li>
    </ol>
    <p style="text-align: left">La selección no solo se basa en la evaluación de habilidades, sino también en la identificación de valores, actitudes y motivaciones que sean coherentes con la cultura organizacional. En última instancia, una selección efectiva contribuye a la construcción de equipos sólidos y al éxito de la empresa.</p>`
        },
        {
          id: 10,
          title: '10 Consejos Prácticos para la Capacitación de Empleados',
          date: 'Julio 12, 2020',
          author: 'Isabella Paez',
          image: 'https://wortev.com/wp-content/uploads/2023/04/consejos-para-estimular-la-capacitacion-laboral-WORTEV.jpg',
          description: 'La capacitación efectiva de los empleados es esencial para el crecimiento y el éxito de cualquier organización. Aquí te presento algunos consejos valiosos para diseñar y ejecutar programas de capacitación que realmente marquen la diferencia',
          wholeText: `<body style="text-align: left">
    <p style="text-align: left">La capacitación efectiva de los empleados es esencial para el crecimiento y el éxito de cualquier organización. Aquí te presento algunos consejos valiosos para diseñar y ejecutar programas de capacitación que realmente marquen la diferencia:</p>
    <ol style="text-align: left">
        <li><strong>Trata la Capacitación como una Inversión:</strong> Aunque puede parecer costoso al principio, considera la capacitación como una inversión a largo plazo en el desarrollo de tus recursos humanos.</li><br>
        <li><strong>Identifica las Necesidades de Capacitación:</strong> Evalúa las habilidades actuales y futuras necesidades de la empresa. ¿Qué competencias son cruciales para el éxito?</li><br>
        <li><strong>Promueve una Cultura de Aprendizaje:</strong> Fomenta la mentalidad de aprendizaje continuo. Comunica a tus empleados la importancia de mantenerse actualizados y mejorar sus habilidades constantemente.</li><br>
        <li><strong>Involucra a la Alta Dirección:</strong> Convence a los líderes de la empresa sobre la importancia de la capacitación. Su apoyo es fundamental para el éxito del programa.</li><br>
        <li><strong>Comienza Pequeño:</strong> Antes de implementar un programa a gran escala, prueba con un grupo reducido de empleados. Aprende de sus comentarios y ajusta el proceso.</li><br>
        <li><strong>Selecciona Instructores y Materiales de Calidad:</strong> La persona encargada de la capacitación marca la diferencia. Además, asegúrate de contar con materiales de formación adecuados.</li><br>
        <li><strong>Elige el Espacio Adecuado:</strong> Un ambiente propicio para el aprendizaje es crucial. Busca un lugar tranquilo y cómodo para las sesiones de capacitación.</li><br>
        <li><strong>Establece Objetivos Claros:</strong> Define metas específicas para cada programa de capacitación. ¿Qué se espera que los empleados logren al finalizar?</li><br>
        <li><strong>Utiliza Herramientas Tecnológicas:</strong> Aprovecha el poder del software de capacitación y las plataformas de aprendizaje electrónico. Facilitan el acceso a contenidos y seguimiento del progreso.</li><br>
        <li><strong>Evalúa Constantemente:</strong> Realiza evaluaciones periódicas para medir el impacto de la capacitación. ¿Se están aplicando los conocimientos adquiridos en el trabajo diario?</li><br>
    </ol>
    <p style="text-align: left">Recuerda que la capacitación no solo beneficia a los empleados, sino también a la empresa en su conjunto. ¡Invierte en el crecimiento y desarrollo de tu equipo!</p></body>`
        },
        {
          id: 11,
          title: 'Evaluación del Desempeño en la Gestión del Talento Humano',
          date: 'Julio 16, 2020',
          author: 'Daniela Romero',
          image: 'https://www.questionpro.com/blog/wp-content/uploads/2020/05/1375.jpg',
          description: 'La evaluación del desempeño es un proceso fundamental en la gestión del talento humano. Permite medir y valorar la actuación de cada persona dentro de una organización, considerando diversos aspectos como las actividades que desempeña, las metas que debe alcanzar, las competencias que ofrece y su potencial de desarrollo.',
          wholeText: `<body>
    <p style="text-align: left">La <strong>evaluación del desempeño</strong> es un proceso fundamental en la gestión del talento humano. Permite medir y valorar la actuación de cada persona dentro de una organización, considerando diversos aspectos como las actividades que desempeña, las metas que debe alcanzar, las competencias que ofrece y su potencial de desarrollo. En este artículo, exploraremos los métodos más comunes utilizados para evaluar el desempeño de los empleados.</p>

    <h5 style="text-align: left">Métodos de Evaluación del Desempeño</h5>
    <ol style="text-align: left"><br><br>
        <li><strong>Escala Gráfica:</strong><br><br>
            <ul>
                <li>Este método implica medir el cumplimiento de criterios básicos o factores de importancia para la organización. Se utiliza una escala numérica o gráfica para calificar el desempeño de los empleados en diferentes áreas.</li>
                <li>Por ejemplo, se pueden evaluar habilidades técnicas, habilidades interpersonales, puntualidad y otros aspectos relevantes.</li>
            </ul>
        </li><br><br>
        <li><strong>Elección Forzada:</strong><br><br>
            <ul>
                <li>En este enfoque, se presentan bloques de frases descriptivas relacionadas con el comportamiento de los empleados.</li>
                <li>Los evaluadores deben elegir entre opciones predefinidas que describen el desempeño de manera positiva o negativa.</li>
                <li>Este método ayuda a evitar respuestas neutrales y fomenta una evaluación más precisa.</li>
            </ul>
        </li><br><br>
        <li><strong>Incidentes Críticos:</strong><br><br>
            <ul>
                <li>El método de incidentes críticos se basa en situaciones extremas que representan desempeños sumamente positivos (éxitos) o negativos (fracasos).</li>
                <li>No se centra en el desempeño cotidiano, sino en momentos excepcionales que impactan significativamente en el trabajo.</li>
            </ul>
        </li><br><br>
        <li><strong>Comparación por Pares:</strong><br><br>
            <ul>
                <li>Aquí, se compara el cumplimiento de criterios específicos entre dos empleados.</li>
                <li>Los evaluadores deben determinar cuál de los dos empleados muestra un mejor desempeño en áreas clave.</li>
                <li>Es importante definir previamente los criterios de comparación.</li>
            </ul>
        </li><br><br>
        <li><strong>Evaluación 360°:</strong><br><br>
            <ul>
                <li>Este enfoque se llama así porque involucra a todas las partes que interactúan con el empleado: superiores, pares y subordinados.</li>
                <li>Se recopilan opiniones y retroalimentación de diversas fuentes para obtener una visión completa del desempeño.</li>
                <li>La evaluación 360° proporciona una perspectiva más holística y ayuda a identificar áreas de mejora.</li>
            </ul>
        </li>
    </ol>

    <h5 style="text-align: left">Importancia de la Evaluación del Desempeño</h5>
    <p style="text-align: left">La evaluación del desempeño no solo permite tomar decisiones sobre ascensos, bonificaciones o capacitación, sino que también contribuye a:</p>
    <ul style="text-align: left">
        <li>Identificar fortalezas y debilidades individuales.</li>
        <li>Establecer planes de desarrollo personalizado.</li>
        <li>Motivar a los empleados al reconocer sus logros.</li>
        <li>Mejorar la comunicación y la colaboración en la organización.</li>

        
        </ul>
        <p style="text-align: left">En resumen, una evaluación efectiva del desempeño es esencial para el crecimiento y el éxito tanto de los empleados como de la empresa. Al implementar métodos adecuados y brindar retroalimentación constructiva, las organizaciones pueden maximizar el potencial de su talento humano.</p>
        </body>`
        },
        {
          id: 12,
          title: 'Calidad de Vida en el Trabajo: Un Enfoque Integral',
          date: 'Julio 22, 2020',
          author: 'Kimberlyn Giménez',
          image: 'https://possitiva.com/wp-content/uploads/2023/03/plano-medio-colegas-felices-1.jpg',
          description: 'La calidad de vida en el trabajo es un aspecto crucial que afecta directamente el desempeño y bienestar de los empleados en sus puestos laborales. En este artículo, exploraremos los componentes clave de la calidad de vida en el trabajo y cómo un enfoque integral puede contribuir al bienestar general.',
          wholeText: `
          <body>
            <p style="text-align: left">
            La calidad de vida en el trabajo es un aspecto crucial que afecta directamente el desempeño y bienestar de los empleados en sus puestos laborales. En este artículo, exploraremos los componentes clave de la calidad de vida en el trabajo y cómo un enfoque integral puede contribuir al bienestar general.<br><br>

<h4 style="text-align: left">Componentes Clave</h4><br><br><p style="text-align: left">
<strong>1.- Satisfacción con la Tarea Ejecutada:</strong> La percepción positiva de las tareas realizadas está estrechamente relacionada con la eficiencia y productividad de los empleados. Cuando los trabajadores se sienten satisfechos con su labor, tienden a rendir mejor.<br><br>
<strong>2.- Posibilidad de Carrera:</strong> Ofrecer oportunidades de crecimiento profesional y personal es esencial. Los empleados deben sentir que tienen un camino claro para avanzar en su carrera dentro de la organización.<br><br>
<strong>3.- Compensaciones:</strong> Tanto las retribuciones económicas como las no monetarias (como reconocimientos y beneficios) son fundamentales para que los empleados se sientan valorados y motivados.<br><br>
<strong>4.- Relaciones Humanas:</strong> Un ambiente laboral positivo se construye sobre relaciones colaborativas. La comunicación efectiva y el apoyo entre colegas contribuyen a un clima organizacional saludable.<br><br>
<strong>5.- Entorno Físico y Psicológico:</strong> El espacio de trabajo debe ser saludable y estimulante. Un lugar limpio, bien iluminado y cómodo promueve la productividad y el bienestar mental.<br><br>
<strong>6.- Comunicación y Autonomía:</strong> La posibilidad de expresarse y tomar decisiones en el trabajo es esencial. La autonomía permite que los empleados se sientan empoderados y comprometidos.<br><br></p>
<p style="text-align: left">La calidad de vida en el trabajo no se limita a un solo aspecto; es un conjunto de factores interrelacionados. Cuando se abordan todos estos componentes de manera integral, se fomenta el bienestar psicológico, económico y social de los trabajadores. Una fuerza laboral feliz y saludable es más productiva y contribuye al éxito de la organización.</p>
        </p></body>`
        },
        {
          id: 13,
          title: 'Liderazgo: Forjando Caminos hacia el Éxito',
          date: 'Agosto 02, 2020',
          author: 'José Vargas',
          image: 'https://cbaglobal.com.ar/wp-content/uploads/2021/12/3.jpg',
          description: 'El liderazgo es un concepto fundamental en el mundo empresarial y organizacional. Se trata de la capacidad de influir en las personas para alcanzar las metas y objetivos de una empresa o equipo.',
          wholeText: `<body>
    <p style="text-align: left">El liderazgo es un concepto fundamental en el mundo empresarial y organizacional. Se trata de la capacidad de influir en las personas para alcanzar las metas y objetivos de una empresa o equipo. A lo largo de la historia, se han propuesto diversas definiciones y enfoques sobre el liderazgo. Dos perspectivas destacadas son las de Daft (2005) y Hellriegel (2009).</p>
    <h5 style="text-align: left; font-weight: bolder">La Perspectiva de Daft (2005)</h5>
    <p style="text-align: left">Según Daft, el liderazgo es la habilidad de guiar, motivar y dirigir a otros hacia el logro de objetivos comunes. El líder debe ser capaz de inspirar confianza, comunicarse efectivamente y tomar decisiones estratégicas. En esta visión, el liderazgo se centra en la acción y la influencia positiva.</p>
    <h5 style="text-align: left; font-weight: bolder">La Perspectiva de Hellriegel (2009)</h5>
    <p style="text-align: left">Hellriegel enfatiza la relación entre el líder y los seguidores. Para él, el liderazgo es una conexión poderosa que impulsa el cambio y genera resultados significativos. El líder no solo busca cumplir metas, sino también crear un impacto duradero en la organización y en las personas que la conforman.</p>
    <p style="text-align: left">En resumen, el liderazgo no se trata solo de títulos o jerarquías, sino de la capacidad de inspirar, motivar y guiar a otros hacia un propósito compartido. Los líderes efectivos cultivan relaciones sólidas, fomentan la colaboración y crean un entorno propicio para el crecimiento y la innovación.</p>
    <h5 style="text-align: left; font-weight: bolder">¿Cómo se Aplica esto en la Práctica?</h5>
    <ul style="text-align: left">
        <li><strong>Comunicación:</strong> Los líderes deben ser excelentes comunicadores. Escuchar activamente, expresar ideas con claridad y fomentar un diálogo abierto son habilidades esenciales.</li>
        <li><strong>Empatía:</strong> Comprender las necesidades y preocupaciones de los demás es crucial para construir relaciones sólidas. La empatía permite adaptar el liderazgo a las circunstancias individuales.</li>
        <li><strong>Visión:</strong> Los líderes deben tener una visión clara y compartirla con su equipo. Inspirar a otros con un propósito significativo es fundamental.</li>
        <li><strong>Toma de Decisiones:</strong> Los líderes enfrentan decisiones constantemente. Evaluar opciones, considerar consecuencias y actuar con integridad es esencial.</li>
    </ul>
    <p style="text-align: left">En conclusión, el liderazgo es un viaje continuo de aprendizaje y crecimiento. Cada líder tiene la oportunidad de marcar la diferencia y dejar una huella positiva en su entorno.</p>
</body>`
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
          id: 15,
          title: 'Participación y Efectividad: Explorando el Modelo de Liderazgo Vroom-Yetton-Jago',
          date: 'Agosto 12, 2020',
          author: 'Helenne Ocanto',
          image: 'https://pinguinodigital.com/wp-content/uploads/2022/10/como-se-puede-mejorar-el-liderazgo-1.jpg',
          description: 'El modelo de liderazgo participativo de Vroom y Yetton, también conocido como Modelo Vroom-Yetton-Jago, es un enfoque utilizado en la toma de decisiones y la gestión de liderazgo en el ámbito empresarial. Fue creado por Victor Vroom y Phillip Yetton en la década de 1970, y más tarde fue mejorado por Arthur Jago en la década de 1980',
          wholeText: `<body>
    <p style="text-align: left">El modelo de liderazgo participativo de Vroom y Yetton, también conocido como Modelo Vroom-Yetton-Jago, es un enfoque utilizado en la toma de decisiones y la gestión de liderazgo en el ámbito empresarial. Fue creado por Victor Vroom y Phillip Yetton en la década de 1970, y más tarde fue mejorado por Arthur Jago en la década de 1980.<br><br>

Este modelo se centra en la relación entre liderazgo y participación. A continuación, exploraremos los aspectos clave del modelo y los diferentes tipos de liderazgo que propone.<br><br>

<strong>¿Qué es el modelo de liderazgo participativo de Vroom y Yetton?</strong><br><br>
El modelo de liderazgo participativo se enfoca en cómo el líder permite la participación de sus subordinados e influye en ellos durante la toma de decisiones. Algunos supuestos importantes en la aplicación de este método son:<br><br>

1. La conducta del líder debe ser específica y no admitir confusión.<br>
2. No se puede aplicar el mismo método de liderazgo a todas las situaciones por igual.<br>
3. El contexto y el problema deben evaluarse para determinar el enfoque adecuado.<br>
4. El método utilizado en una situación debe ser independiente del utilizado en otra circunstancia distinta.<br>
5. Existen procesos sociales mediante los cuales los subordinados pueden resolver problemas.<br>
6. El método de liderazgo varía según el número de subordinados.<br><br>
<strong>Tipos de liderazgo según el grado de participación</strong><br>
Según el grado de participación de los subordinados y el modo de orientar la tarea y tomar decisiones, podemos identificar cinco tipos distintos de liderazgo:<br><br>

<strong>1. Liderazgo de mayorías:</strong> En este enfoque, se busca llegar a un consenso entre los trabajadores. El líder considera y escucha las opiniones de todos, tanto de los subordinados como de sí mismo, para lograr un resultado aceptado por todos.<br><br>
<strong>2. Liderazgo colaborativo:</strong> Aquí también se valora la opinión de los trabajadores, pero se diferencia según las funciones y responsabilidades individuales.<br><br>
<strong>3. Estilo que Decide:</strong> El líder toma la decisión y la comunica al equipo.<br><br>
<strong>4. Estilo de Consulta Individual:</strong> El líder consulta o expone el problema por separado a los miembros del grupo antes de tomar una decisión.<br><br>
<strong>5. Estilo Facilitador:</strong> El líder presenta el problema al equipo como un miembro más, escucha sugerencias y toma una decisión en consenso.<br><br>
<strong>6. Estilo Delegador:</strong> Permite que el equipo tome la decisión, estableciendo límites claros.<br><br>
En resumen, el modelo de Vroom y Yetton reconoce la importancia de adaptar el liderazgo a las circunstancias y la participación de los subordinados para lograr decisiones efectivas en el entorno empresarial.</p>
</body>`
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
        },
        {
          id: 17,
          title: 'Explorando las Teorías de la Motivación: Un Viaje al Interior de la Psicología',
          date: 'Agosto 20, 2020',
          author: 'Daniela Romero',
          image: 'https://economipedia.com/wp-content/uploads/teorias-de-contenido.png',
          description: 'En el ámbito de la psicología, las teorías sobre la motivación son cruciales para entender cómo los individuos se mueven y actúan en su entorno. Estas teorías se dividen principalmente en dos categorías: no cognoscitivas y cognoscitivas.',
          wholeText: `<body>
    <div class="article-container">
        <p style="text-align: left">En el ámbito de la psicología, las teorías sobre la motivación son cruciales para entender cómo los individuos se mueven y actúan en su entorno. Estas teorías se dividen principalmente en dos categorías: no cognoscitivas y cognoscitivas.</p>
        <h5 style="text-align: left">Teorías No Cognoscitivas</h5>
        <ul style="text-align: left">
          <li>Sostienen que los aspectos internos de una persona son desconocidos e imposibles de conocer.</li>
          <li>El comportamiento está dirigido y sostenido por el efecto del condicionamiento del refuerzo. Por ejemplo, un comportamiento puede disminuir o cesar si se ignora o se castiga, mientras que puede incrementar o persistir si se refuerza positivamente.</li>
        </ul>
          <p style="text-align: left"> </p>
        <h5 style="text-align: left">Teorías Cognoscitivas</h5>
        <p style="text-align: left">Están enfocadas hacia los aspectos internos de la persona, como procesos, estados, necesidades, deseos, valores y expectativas. Se dividen en dos enfoques principales: contenido y proceso.</p>
        <ul style="text-align: left">
            <li>El enfoque de contenido busca identificar variables específicas que influyen en el comportamiento, como necesidades internas o condiciones externas. Se pregunta qué motiva a la gente y cómo se motiva.</li>
            <li>El enfoque de proceso se centra en la dinámica de interrelación de variables que influyen en el comportamiento. Las más importantes son: incentivo, impulso, refuerzo y expectativas. Este enfoque busca comprender cómo piensa la persona para predecir su comportamiento futuro.</li>
        </ul>
        <p style="text-align: left">En resumen, estas teorías nos ayudan a comprender los mecanismos detrás de la motivación humana y cómo influyen en nuestras acciones y decisiones cotidianas.</p>
    </div>
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
          id: 19,
          title: 'Explorando la Teoría ERC: Un Enfoque Integral de las Necesidades Humanas',
          date: 'Agosto 26, 2020',
          author: 'Daniela Romero',
          image: 'https://www.lifeder.com/wp-content/uploads/2021/02/personas-organizacion-comportamiento-humano-min.jpg',
          description: 'Clayton Alderfer, en 1972, propuso una variante de la teoría de la motivación de Maslow, conocida como la Teoría ERC (Existencia, Relaciones y Crecimiento)',
          wholeText: `<p style="text-align: left">Clayton Alderfer, en 1972, propuso una variante de la teoría de la motivación de Maslow, conocida como la Teoría ERC (Existencia, Relaciones y Crecimiento). Esta teoría simplifica las cinco necesidades de Maslow en tres categorías fundamentales:<br><br>

<strong>1. Existencia:</strong> Se refiere a nuestras necesidades básicas materiales y físicas. Es comparable al nivel fisiológico y de seguridad según Maslow. En otras palabras, abarca la búsqueda de alimento, refugio y seguridad.<br><br>
<strong>2. Relaciones:</strong> Enfoca la importancia de mantener relaciones interpersonales significativas. Esto se asemeja a las necesidades sociales y de estima externa en la jerarquía de Maslow. Aquí, buscamos conexiones con otros y reconocimiento social.<br><br>
<strong>3. Crecimiento:</strong> Representa el deseo intrínseco de desarrollo personal. Es similar a las necesidades internas de estima y autorrealización en la teoría de Maslow. En este nivel, aspiramos a crecer, aprender y alcanzar nuestro potencial máximo.<br><br>
Es relevante destacar que más de una necesidad puede operar simultáneamente. La teoría ERC proporciona una perspectiva interesante sobre cómo las personas buscan satisfacer sus necesidades y cómo estas se entrelazan en nuestra vida cotidiana.</p>`
        },
        {
          id: 20,
          title: 'Descifrando la Motivación: Una Mirada a la Teoría de David McClelland',
          date: 'Septiembre 04, 2020',
          author: 'Helenne Ocanto',
          image: 'https://impulso06.com/wp-content/uploads/2023/11/La-importancia-de-la-motivacion-en-el-aula-estrategias-para-el-exito-en-primaria-e-infantil.png',
          description: 'En el apasionante mundo de la psicología y la gestión, la motivación es un tema central. ¿Qué impulsa a las personas a actuar, a esforzarse y a alcanzar sus objetivos? En 1961, el psicólogo David McClelland presentó una teoría que arroja luz sobre estas cuestiones.',
          wholeText: `<p style="text-align: left">En el apasionante mundo de la psicología y la gestión, la motivación es un tema central. ¿Qué impulsa a las personas a actuar, a esforzarse y a alcanzar sus objetivos? En 1961, el psicólogo David McClelland presentó una teoría que arroja luz sobre estas cuestiones. En este artículo, exploraremos la Teoría de las Necesidades de McClelland y cómo ha influido en la comprensión de la motivación humana.<br><br>

<strong>Las Tres Necesidades Fundamentales</strong><br>
McClelland identificó tres necesidades adquiridas que desempeñan un papel crucial en nuestra motivación:<br><br>

<strong>1. Necesidad de Logros (nAch):</strong> Esta necesidad se refiere al deseo innato de superar desafíos y alcanzar un alto estándar de excelencia. Las personas con una alta nAch buscan constantemente maneras de mejorar y son persistentes en sus esfuerzos por alcanzar sus metas. Imagina a un escalador que se esfuerza por conquistar la cima de una montaña imponente; esa es la esencia de la nAch.<br><br>
<strong>2. Necesidad de Poder (nPow):</strong> Aquí entramos en el terreno de la influencia y la dirección. Las personas con una alta nPow están motivadas por la oportunidad de ejercer control y liderazgo. Les atraen las posiciones donde pueden tomar decisiones importantes y afectar el comportamiento de otros. Piensa en un líder carismático que guía a su equipo hacia el éxito; esa es la nPow en acción.<br><br>
<strong>3. Necesidad de Afiliación (nAff):</strong> Esta necesidad se centra en las relaciones interpersonales. Aquellos con una alta nAff valoran las conexiones humanas y buscan ambientes colaborativos. Les motiva trabajar en equipo y establecer vínculos significativos. Imagina a un mentor que se preocupa por el bienestar de sus colegas; eso es la nAff en su esplendor.<br><br>
<strong>Implicaciones para la Gestión</strong><br><br>
McClelland argumentó que los mejores gerentes tienden a tener una alta necesidad de poder y baja afiliación. Están motivados por el logro personal, pero también reconocen la importancia del empoderamiento colectivo. Estos líderes inspiran a sus equipos, toman decisiones audaces y crean un entorno donde la excelencia florece.<br><br>

En resumen, la Teoría de las Necesidades de McClelland nos recuerda que la motivación es un mosaico complejo de impulsos internos. Al comprender estas necesidades fundamentales, podemos diseñar estrategias efectivas para motivar a las personas en el trabajo, en el deporte y en la vida cotidiana.</p>`
        },
        {
          id: 21,
          title: 'Desentrañando la Teoría de los Dos Factores de la Motivación',
          date: 'Septiembre 12, 2020',
          author: 'Isabella Paez',
          image: 'https://www.userlike.com/api/proxy/resize/medicion-de-la-satisfaccion-del-cliente/measuring.png?height=720',
          description: 'En 1959, el psicólogo Frederick Herzberg introdujo una teoría revolucionaria que ha tenido un profundo impacto en nuestra comprensión de la motivación y las actitudes humanas hacia el trabajo. Esta teoría, conocida como la Teoría de los Dos Factores, propone que existen dos categorías distintas de factores que influyen en nuestra motivación y satisfacción en el trabajo.',
          wholeText: `<body style="text-align: left">
    <p style="text-align: left">En 1959, el psicólogo Frederick Herzberg introdujo una teoría revolucionaria que ha tenido un profundo impacto en nuestra comprensión de la motivación y las actitudes humanas hacia el trabajo. Esta teoría, conocida como la <strong>Teoría de los Dos Factores</strong>, propone que existen dos categorías distintas de factores que influyen en nuestra motivación y satisfacción en el trabajo.</p>
    <h5 style="text-align: left; font-weight: bolder">Factores Higiénicos (Factores Externos)</h5>
    <p style="text-align: left">Estos factores se refieren a las condiciones externas que rodean al individuo mientras trabaja. Aunque no tienen la capacidad directa de motivar, son cruciales para prevenir la insatisfacción. Algunos ejemplos de factores higiénicos incluyen:</p>
    <ul style="text-align: left">
        <li>Condiciones de Trabajo: El entorno físico en el que se desempeña el trabajo, como la iluminación, la temperatura y la comodidad.</li>
        <li>Políticas Organizacionales: Las reglas y regulaciones establecidas por la empresa.</li>
        <li>Relación con el Supervisor: La calidad de la relación entre el empleado y su jefe.</li>
        <li>Competencia Técnica del Supervisor: La habilidad del supervisor para guiar y apoyar al empleado.</li>
        <li>Salarios y Beneficios: La compensación económica y los incentivos ofrecidos.</li>
        <li>Estabilidad en el Cargo: La seguridad laboral y la perspectiva de permanencia en el puesto.</li>
    </ul>
    <p style="text-align: left">Aunque estos factores higiénicos no aumentan directamente la satisfacción laboral, su ausencia puede llevar a la insatisfacción. Son esenciales pero no suficientes para motivar a los empleados a alcanzar niveles superiores de rendimiento y satisfacción.</p>
    <h5 style="text-align: left; font-weight: bolder">Factores Motivadores (Factores Internos)</h5>
    <p style="text-align: left">Estos factores están relacionados con el contenido real del trabajo y su impacto en el individuo. Los factores motivadores son los que verdaderamente generan satisfacción y motivación. Algunos ejemplos de factores motivadores incluyen:</p>
    <ul style="text-align: left">
        <li>Logro Personal: La sensación de logro y éxito en el trabajo.</li>
        <li>Reconocimiento: La apreciación y el reconocimiento por el esfuerzo y los logros.</li>
        <li>Responsabilidad: La oportunidad de asumir responsabilidades y desafíos.</li>
        <li>Crecimiento y Desarrollo: La posibilidad de aprender y crecer profesionalmente.</li>
        <li>Trabajo Interesante: La naturaleza estimulante e interesante de las tareas laborales.</li>
    </ul>
    <p style="text-align: left">Según Herzberg, estos factores motivadores son los que realmente impulsan la satisfacción y la motivación en el trabajo. Son intrínsecos y se relacionan directamente con la experiencia laboral.</p>
</body>`
        },
      ]
    }
  },
  mounted(){
    this.rows = this.blogContent.length
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  watch:{
    // pageItems(after, before){
    // },

  },
  components: {
    BPagination
  },
  methods: {
    pageChanged(event){
      console.log('changed',event)
      this.$router.push({ path: `/blog/${event}` })
      this.loaded = true
    }
  },
  computed: {

    currentPage(){
      return this.$route.params.page
    },

    pageItems(){
      let showContent
      let term = this.$route.query.searchTerm
      this.loaded = false

      console.log('el term', term)

      if(term){
        showContent = this.blogContent.filter(element => element.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
      }
      else{
        showContent = this.blogContent
      }
      this.rows = showContent.length
      let returnedItems = showContent.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage)
      window.scroll(0, 100);
      return returnedItems;

    }
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
  color: #0086ff;
}

a:hover {
    color: transparent;
}
</style>
