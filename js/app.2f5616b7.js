(function(e){function a(a){for(var o,i,c=a[0],l=a[1],s=a[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&d.push(t[i][0]),t[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);m&&m(a);while(d.length)d.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==t[c]&&(o=!1)}o&&(r.splice(a--,1),e=l(l.s=n[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return l.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6"}[e]||e)+"."+{actividad:"4a78d0c1","chunk-0206bfa0":"35e84494","chunk-0c047e41":"a4c20267","chunk-13a6037e":"d7ab20e6","chunk-18f95272":"203e5478","chunk-25b302c8":"a36f6617","chunk-26fc7596":"f4029b39","chunk-2c06842c":"e52c3970","chunk-2d0e96ec":"83f9e110","chunk-2d208d90":"86217697","chunk-2d21d0e2":"222ae9ef","chunk-2d22c123":"746091a6","chunk-2d2747e2":"d52b0a96","chunk-2e80bb9a":"bf5189c2","chunk-319206de":"c059dba4","chunk-32334cb6":"562c58f3","chunk-3c57cd7b":"82c20bc0","chunk-3d6834f6":"3ae4f6ee","chunk-4cdd78c0":"2e8bfb7b","chunk-4f2d402a":"a79797ae","chunk-4fde0a08":"078e1980","chunk-515a8379":"bf847027","chunk-53ccb27e":"ea82914c","chunk-55d286b8":"7eddacbc","chunk-59974754":"8081eb1a","chunk-6e1e538a":"34421eb4","chunk-766a929b":"945413d6","chunk-c796899c":"d476a3dd","chunk-e8a7823a":"3376b42c","chunk-f2df7d2c":"9db3bb0d","chunk-fde47172":"bf50641e",comple:"9e015994",creditos:"9aa93dfa",glosario:"95349cee",intro:"8feea6a6",referencias:"d4ac9070",sintesis:"34e721fd",tema1:"51fc3adb",tema2:"de3aeb9f",tema3:"a0a101b0",tema4:"9dfd87ff",tema5:"69da3b47",tema6:"37211b2a"}[e]+".js"}function l(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-3c57cd7b":"3babef71","chunk-3d6834f6":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-4fde0a08":"14d1f3e8","chunk-515a8379":"d3a23c4f","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"3f984178","chunk-6e1e538a":"126808df","chunk-766a929b":"a7fded59","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"9cbc45a6",creditos:"436ff068",glosario:"674bd681",intro:"31d6cfe0",referencias:"cabfce08",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0",tema5:"31d6cfe0",tema6:"31d6cfe0"}[e]+".css",t=l.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var s=r[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===o||u===t))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],u=s.getAttribute("data-href");if(u===o||u===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],m.parentNode.removeChild(m),n(r)},m.href=t;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=t[e]=[a,n]}));a.push(o[2]=r);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var d=new Error;s=function(a){u.onerror=u.onload=null,clearTimeout(m);var n=t[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}t[e]=void 0}};var m=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(a)},l.m=e,l.c=o,l.d=function(e,a,n){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)l.d(n,o,function(a){return e[a]}.bind(null,o));return n},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=a,s=s.slice();for(var d=0;d<s.length;d++)a(s[d]);var m=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,l=n("2877"),s=Object(l["a"])(c,i,t,!1,null,null,null),u=s.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");d["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema5").then(n.bind(null,"5029"))}},{path:"tema6",name:"tema6",component:function(){return n.e("tema6").then(n.bind(null,"92ea"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Servicios e identificación de necesidades al usuario en biblioteca.",descripcionCurso:"En esta unidad el aprendiz conocerá al usuario, razón de ser de la biblioteca, así mismo la clasificación y tipos de usuarios y un conjunto de técnicas y herramientas como web 2.0 y alfabetización informacional en la gestión del servicio al cliente, para encaminarse a la satisfacción de las necesidades que se demandan en el ciclo del servicio, impulsando el desarrollo sostenible.",imagenBannerPrincipal:n("74b5"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2"],imagen:n("8f04")},{clases:["banner-principal-decorativo-3"],imagen:n("7d72")},{clases:["banner-principal-decorativo-4"],imagen:n("f53d")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Cliente o usuario",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Clasificación de clientes",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Población vulnerable",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Servicio al cliente y triángulo del servicio",hash:"t_1_3"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Momentos de verdad con el cliente y su ciclo",hash:"t_1_4"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Netiqueta y protocolo empresarial",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Alfabetización informacional",desarrolloContenidos:!0},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Ciencia y conocimiento de información",desarrolloContenidos:!0},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Desarrollo sostenible",desarrolloContenidos:!0},{nombreRuta:"tema6",icono:"far fa-file-alt",numero:"6",titulo:"<em>Web</em> 2.0. y referencia virtual",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Cliente o usuario",referencia:"Ecosistema de Recursos Educativos Digitales SENA. (2021). Cliente.",tipo:"Video",link:"https://www.youtube.com/watch?v=4WIq433jNMA"},{tema:"Netiqueta y protocolo empresarial",referencia:"Ecosistema de Recursos Educativos Digitales SENA. (2019). Netiqueta y comunicación en medios digitales.",tipo:"Video",link:"https://www.youtube.com/watch?v=nETS1sXMKbw"},{tema:"Alfabetización informacional",referencia:"Ecosistema de Recursos Educativos Digitales SENA. (2021). Alfabetización digital.",tipo:"Video",link:"https://www.youtube.com/watch?v=HBHsp9dZcPo"},{tema:"Ciencia y conocimiento de la información",referencia:"Somos UMAZA. (2021). Alfabetización informacional que significa. ",tipo:"Video",link:"https://www.youtube.com/watch?v=VqNn-Ci_MGY"},{tema:"Desarrollo Sostenible",referencia:"Ecosistema de Recursos Educativos Digitales SENA. (2021). Objetivos de Desarrollo Sostenible",tipo:"Video",link:"https://www.youtube.com/watch?v=QmDctvoX0i4"}],glosario:[{termino:"Análisis",significado:"examen detallado de una cosa para conocer sus características o cualidades, o su estado, y extraer conclusiones, que se realiza separando o considerando por separado las partes que la constituyen."},{termino:"Comunicación asincrónica",significado:"comunicación que no se lleva en tiempo real, por el cual los usuarios envían una consulta y el bibliotecario le responde eventualmente. Por ejemplo, el correo electrónico, formulario electrónico y facsímil."},{termino:"Comunicación sincrónica",significado:"comunicación que se lleva a cabo en tiempo real. El usuario y el bibliotecario se comunican al mismo tiempo. Por ejemplo, <em>chat</em>, teléfono y videoconferencia"},{termino:"Datos",significado:"información concreta sobre hechos, elementos, etc., que permite estudiarlos, analizarlos o conocerlos."},{termino:"Formulario <em>Web</em>",significado:"hoja electrónica que permite el ingreso de datos los cuales serán procesados a través de un servidor."},{termino:"Gestión",significado:"acción o trámite que se lleva a cabo para conseguir o resolver una situación. "},{termino:"Herramienta digital",significado:"paquetes informáticos que están en las computadoras, o en dispositivos electrónicos como celulares y tabletas, entre otros."},{termino:"Información",significado:"conjunto de datos, ya procesados y ordenados para su comprensión, que aportan nuevos conocimientos a un individuo o sistema sobre un asunto, materia, fenómeno o ente determinado."},{termino:"Referencia Virtual",significado:"servicio de referencia iniciado electrónicamente, a menudo en tiempo real, donde los usuarios emplean computadoras u otra tecnología de <em>internet</em> para comunicarse con los bibliotecarios, sin estar físicamente presentes. "},{termino:"Referencista",significado:"bibliotecario encargado del servicio de asistencia intelectual a los lectores, a fin de que estos puedan aprovechar racional y metódicamente los recursos de los que dispone la biblioteca."}],referencias:[{referencia:"Rendón, R., M. A., y Cruz, D., S., et l. (2011). Bibliotecología, archivística, documentación: intradisciplina, interdisciplina o transdisciplinariedad. UNAM, Centro Universitario de Investigaciones Bibliotecológicas",link:"https://libros.metabiblioteca.org/bitstream/001/380/8/978-607-02-0749-5.pdf"},{referencia:"Bawden, D. (2002). Revisión de los conceptos de alfabetización informacional y alfabetización digital. Anales de Documentación (5) ",link:"https://revistas.um.es/analesdoc/article/view/2261/2251"},{referencia:"Río, J. (2008). Didáctica de la bibliotecología: teoría y principios desde la enseñanza de la ciencia. UNAM, Centro Universitario de Investigaciones Bibliotecológicas. ",link:"https://libros.metabiblioteca.org/bitstream/001/389/8/978-970-32-4583-3.pdf"},{referencia:"Servicio Nacional de Aprendizaje. SENA. (s. f.). Poblaciones vulnerables.",link:"https://www.sena.edu.co/es-co/trabajo/Paginas/default.aspx"},{referencia:"Albrecht, K. (2001). La excelencia del servicio”.",link:""}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable Equipo de Desarrollo Curricular",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Diego Villalobos Barreto",cargo:"Experto temático",centro:"Sena Distrito Capital Grupo De Apoyo Administrativo - Cgi"},{nombre:"Fabián Leonardo Correa Díaz",cargo:"Diseñador instruccional",centro:"Centro de la Industrial, la Empresa y los Servicios - Regional Norte de Santander"},{nombre:"Ana Catalina Córdoba Sus",cargo:"Asesora metodológica",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"José Gabriel Ortiz Abella",cargo:"Corrector de estilo",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Blanca Flor Tinoco Torres",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Camilo Andrés Bolaño Rey",cargo:"Locución",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Ernesto Navarro Jaimes",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Estefani Daniela Gallo Cortés",cargo:"Ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Validación audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Ludwyng Corzo García",cargo:"Validación audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Pedro Nel Calao Zabala",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Validación Ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Yicelly Estefania Mesa Silva",cargo:"Ilustración",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy María Ruíz Torres",cargo:"Revisión de guion audiovisual",centro:"Centro de Comercio y Servicios -Regional Tolima"},{nombre:"Magdi Khalifah",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Melina Tatiana Quintero Rodriguez",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Daniel Felipe Varón Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:function(e){return e(u)}}).$mount("#app")},"71f8":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.79072f21.svg"},"74b5":function(e,a,n){e.exports=n.p+"img/banner-princiapal.9deb17a9.png"},"7d72":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-3.d1d2faae.svg"},"8f04":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.55fc1f74.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"6.3.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"5.3.0","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.00400826.png"},f53d:function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-4.8930af02.svg"}});
//# sourceMappingURL=app.2f5616b7.js.map