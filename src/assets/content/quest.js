const quest = [{
    title: 'Mon titre',
    subtitle: 'Mon sous titre',
    img: 'assets/astekg.png',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed justo ex. Ut auctor tempus ligula vitae finibus. Morbi at sem vitae nibh tincidunt convallis eu ut sapien. Sed eleifend mi et ligula sodales suscipit. Maecenas sodales urna sed luctus ultricies. Phasellus elementum luctus nulla vitae faucibus. Donec ultrices commodo diam vel aliquam',
    taskList: [],
    techno: ['js', 'html'],
},
{
    title: 'Mon titre 2',
    subtitle: 'Mon sous titre 2',
    img: 'assets/philesg.png',
    content: 'Lorem ipsum 2',
    taskList: [],
    techno: ['js', 'html'],
},
{
    title: 'RTE',
    subtitle: 'Développeur fullstack',
    img: 'assets/philesg.png',
    content: "Développement d'une application de gestion d'offres métier et de salariés pour société de transport d'éléctricité.",
    taskList: [
        "Développement d'une application frontend en AngularJs permettant de visualiser les différentes données offertes aux utilisateurs (salariés, candidats, offres, ...)",
        "Développement d'une application backend en Java/Spring avec Hibernate",
        "Déploiement mis en oeuvre à l'aide de Docker",
    ],
    techno: ['java', 'spring','hibernate','oracle','docker','angularjs', 'html'],
},
{
    title: 'Géolocalisation avionique',
    subtitle: 'Développeur fullstack/Resp. technique',
    img: 'assets/philesg.png',
    content: "Réalisation d’une application de géolocalisation d’un pilote de ligne au sein d’une représentation 3D de la terre et de l’ensemble de données de navigation nécessaire au bon déroulement du vol",
    taskList: [
        "Développement d’une vue 3D WebGL de la terre.",
        "Persistance en BDD de données de navigation (FIR, point de cheminement, aéroport)",
        "Développement d’un portail web (frontend et backend), permettant au pilote de stocker ses documents nécessaires à son vol.",
    ],
    techno: ['cesiumjs', 'angularjs','webgl','java','spring'],
},
{
    title: 'Météorologie avionique',
    subtitle: 'Développeur fullstack / Responsable technique',
    img: 'assets/philesg.png',
    content: "Réalisation d’une application de géolocalisation d’un pilote de ligne lui permettant de recevoir en temps-réel les données météos environnantes.",
    taskList: [
        "Développement d’une solution informatique permettant aux pilotes de faciliter leur préparation de vol et leur navigation",
        "Conception et Architecture MVVM",
        "Réalisation d’IHM en responsive design (HTML5 / CSS3).",
        "Référent technique sur l’utilisation avancée d’un moteur de cartographie 3D (Cesium) pour la visualisation de données météorologiques ponctuelles et surfaciques",
        "Représentation de données météorologiques en 4D (3D temporalisée)",
        "Communication Web Service en HTTP REST",
        "Automatisation de tâches de développement et de génération avec Gulp",
        "Analyse de code avec SonarQube et ESLint",
        "Rédaction de documentation technique en anglais (Software Design Document, Version Delivery Description, Software Test Description & Software Test Results)",
        "Contribution à des workshops et Intégration conjointe sur banc de tests client",
    ],
    techno: ['angularjs', 'cesiumjs','javascript','html'],
},
{
    title: 'Développeur fullstack / Responsable technique',
    subtitle: 'Mon sous titre 2',
    img: 'assets/philesg.png',
    content: "Réalisation d’un conteneur d’application liés à l'aviation pour tablette",
    taskList: [
        "Développement d’une application Microsoft pour tablette sous Windows8 & 10",
        "Développement d’un conteneur d’application en AngularJs",
        "Développement d’une instance de serveur local (au sein du cockpit) et distante (serveur au sol)",
        "Mise en place d’une virtualisation d’une instance CentOS, contenant un serveur Tomcat",
        "Implémentation d’une base de données se synchronisant entre le serveur sol, local et la tablette",
        "Développement d’un cœur C/C++ s’interfaçant avec le JavaScript via l’API Windows Runtime (pour remontées des données GPS par exemple)"
    ],
    techno: ['c++', 'java','spring','angularjs','html'],
},
{
    title: 'Développeur fullstack / Responsable technique',
    subtitle: 'Mon sous titre 2',
    img: 'assets/philesg.png',
    content: "Réalisation d’une interface graphique de décodage de trames réseaux à partir de chaînes de caractères",
    taskList: [
        "Développement d’une interface web dynamique",
        "Mise en place d’un algorithme de décodage de trames dynamique, basé sur un fichier de règles pouvant être mis à jour."
        ],
    techno: ['javascript', 'html'],
}];

export default quest;