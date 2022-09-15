const products= [
    {
        id:1,
        title: "Samsung Galaxy A32",
        price: 76000,
        description: "128 GB memoria interna, Cámara delantera de 20Mpx, Con reconocimiento facial y sensor de huella dactilar, Cámara delantera de 20Mpx.",
        category: "tecnologia",
        img: "https://http2.mlstatic.com/D_NQ_NP_878776-MLA48428092348_122021-O.webp",
        stock:35
    },
    {
        id:2,
        title: "Samsung Galaxy A22",
        price: 56000,
        description: "128 Gb de memoria internta y 4 GB de RAM, Compatible con redes 5G, Tiene 3 cámaras traseras de 48Mpx/5Mpx/2Mpx, Con sensor de huella dactilar.",
        category:"tecnologia" ,
        img:"https://http2.mlstatic.com/D_NQ_NP_737027-MLA48697557165_122021-O.webp",
        stock:24
    },
    {
        id:3,
        title: "Samsung Galaxy S21",
        price: 175000,
        description: "Dispositivo liberado para que elijas la compañía telefónica que prefieras ,Cámara delantera de 32Mpx, Memoria interna de 128GB, Tiene 3 cámaras traseras de 12Mpx/12Mpx/8Mpx.",
        category: "tecnologia",
        img:"https://http2.mlstatic.com/D_NQ_NP_969567-MLA48800009129_012022-O.webp",
        stock:15
    },
    {
        id:4,
        title: "Pava eléctrica",
        price: 7400,
        description: "Potencia de 2000w. Trae luz indicadora de funcionamiento. Cuenta con base giratoria. Con apagado automático",
        category: "electrodomesticos",
        img: "https://http2.mlstatic.com/D_NQ_NP_737702-MLA40088738103_122019-O.webp",
        stock:50
    },
    {
        id:5,
        title: "Licuadora",
        price: 7500,
        description: "Capacidad de 1.5 L. Su potencia es de 400 W. Funciona con 4 velocidades. Cuchilla resistente de acero inoxidable.",
        category:"electrodomesticos",
        img: "https://http2.mlstatic.com/D_NQ_NP_863231-MLA50593710429_072022-O.webp",
        stock:10
    },
    {
        id:6,
        title: "Cafetera",
        price: 42000,
        description: "Cafetera expreso, cápsulas monodosis. Cafetera expreso, cápsulas monodosis. Incluye bandeja recolectora removible. Con emisión de vapor.",
        category:"electrodomesticos",
        img: "https://http2.mlstatic.com/D_NQ_NP_967076-MLA42314632441_062020-O.webp",
        stock: 20
    }
]
const getList=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve (products);
        },2000)
    })
}
export  default getList;