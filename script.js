Vue.createApp({
    //! Les données
    data(){
        return {
            imgLink:'https://s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg',
            userName:'BestCosplayerMario',
            userAge:45
        }
    },
    //! Les fonctions
    methods:{
        nbrFetiche(){
            //? On génère un nombre aléatoire entre 0.00 et 1.00, on le multiplie par 100 et on enlève les chiffres apres la virgule
            return Math.floor(Math.random()*100);
        },
        plusDixAns(){
            //? On rajoute 10 a l'age de l'utilisateur, stocké dans la variable userAge dans les data
            return this.userAge+10;
        }
    }
}).mount('body');