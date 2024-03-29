<template>
  <div>

    <div v-for="(content, index) of pageItems" :key="index" class="mb-5">
      <div class="mb-4">
        <a :href="`#/read/${content.id}`">
          <h3 style="text-align: start; color: #02023b" class="ml-5 mb-1 font-weight-bolder">{{ content.title }}</h3>
        </a>
        <p style="text-align: start;" class="ml-5">{{ `${content.date} por ${content.author}` }}</p>
      </div>

      <img style="width: 80%;" :src="content.image" />
      <p style="text-align: start;" class="px-5 m-5">{{ content.description }}</p>
    </div>

    <div class="mt-3">
      <b-pagination @change="pageChanged" v-model="currentPage" page-class="pagination-thing" :per-page="perPage" :total-rows="rows" align="center"></b-pagination>
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
          image: 'https://lh3.googleusercontent.com/proxy/r7RuN8cB9pt-uUl8F7p88sY80TJEGiPnsIGZViRm3aYPYjcDMLHFOl20k1Fmv3vNux1i-ud-n2WVufpiQrVgt2N5ZcYi2xI6L5CTcVRlaexV6NRlIH6baog78iahKLzURRwkQ8Cr1LO-yaErPTpM',
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
          image: 'https://wortev.com/wp-content/uploads/2023/04/consejos-para-estimular-la-capacitacion-laboral-WORTEV.jpg',
          description: 'La evaluación del desempeño es un proceso fundamental en la gestión del talento humano. Permite medir y valorar la actuación de cada persona dentro de una organización, considerando diversos aspectos como las actividades que desempeña, las metas que debe alcanzar, las competencias que ofrece y su potencial de desarrollo.',
          wholeText: `<body><h1>Evaluación del Desempeño en la Gestión del Talento Humano</h1>
    <p>La <strong>evaluación del desempeño</strong> es un proceso fundamental en la gestión del talento humano. Permite medir y valorar la actuación de cada persona dentro de una organización, considerando diversos aspectos como las actividades que desempeña, las metas que debe alcanzar, las competencias que ofrece y su potencial de desarrollo. En este artículo, exploraremos los métodos más comunes utilizados para evaluar el desempeño de los empleados.</p>

    <h2>Métodos de Evaluación del Desempeño</h2>
    <ol>
        <li><strong>Escala Gráfica:</strong>
            <ul>
                <li>Este método implica medir el cumplimiento de criterios básicos o factores de importancia para la organización. Se utiliza una escala numérica o gráfica para calificar el desempeño de los empleados en diferentes áreas.</li>
                <li>Por ejemplo, se pueden evaluar habilidades técnicas, habilidades interpersonales, puntualidad y otros aspectos relevantes.</li>
            </ul>
        </li>
        <li><strong>Elección Forzada:</strong>
            <ul>
                <li>En este enfoque, se presentan bloques de frases descriptivas relacionadas con el comportamiento de los empleados.</li>
                <li>Los evaluadores deben elegir entre opciones predefinidas que describen el desempeño de manera positiva o negativa.</li>
                <li>Este método ayuda a evitar respuestas neutrales y fomenta una evaluación más precisa.</li>
            </ul>
        </li>
        <li><strong>Incidentes Críticos:</strong>
            <ul>
                <li>El método de incidentes críticos se basa en situaciones extremas que representan desempeños sumamente positivos (éxitos) o negativos (fracasos).</li>
                <li>No se centra en el desempeño cotidiano, sino en momentos excepcionales que impactan significativamente en el trabajo.</li>
            </ul>
        </li>
        <li><strong>Comparación por Pares:</strong>
            <ul>
                <li>Aquí, se compara el cumplimiento de criterios específicos entre dos empleados.</li>
                <li>Los evaluadores deben determinar cuál de los dos empleados muestra un mejor desempeño en áreas clave.</li>
                <li>Es importante definir previamente los criterios de comparación.</li>
            </ul>
        </li>
        <li><strong>Evaluación 360°:</strong>
            <ul>
                <li>Este enfoque se llama así porque involucra a todas las partes que interactúan con el empleado: superiores, pares y subordinados.</li>
                <li>Se recopilan opiniones y retroalimentación de diversas fuentes para obtener una visión completa del desempeño.</li>
                <li>La evaluación 360° proporciona una perspectiva más holística y ayuda a identificar áreas de mejora.</li>
            </ul>
        </li>
    </ol>

    <h2>Importancia de la Evaluación del Desempeño</h2>
    <p>La evaluación del desempeño no solo permite tomar decisiones sobre ascensos, bonificaciones o capacitación, sino que también contribuye a:</p>
    <ul>
        <li>Identificar fortalezas y</li></ul></body>`
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
    pageItems(after, before){
      window.scroll(0, 100);
    }
  },
  components: {
    BPagination
  },
  methods: {
    pageChanged(event){
      console.log('changed',event)
      this.$router.push({ path: `/blog/${event}` })
    }
  },
  computed: {

    currentPage(){
      return this.$route.params.page
    },

    pageItems(){
      let showContent
      let term = this.$route.query.searchTerm

      console.log('el term', term)

      if(term){
        showContent = this.blogContent.filter(element => element.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
      }
      else{
        showContent = this.blogContent
      }
      this.rows = showContent.length
      return showContent.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage);

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
</style>
