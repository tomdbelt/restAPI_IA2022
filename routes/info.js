var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/:idFood', function(req, res, next) {
    // https://www.fatsecret.es/calorías-nutrición/genérico/bolón-de-verde 
    bolon = {
        nombre : 'Bolón',
        porcion : 'De Verde. Tamaño regular - 120 g',
        energia : '1383 kj',
        calorias : '331 kcal',
        grasa : '23.04 g',
        carbohidratos : '21.67 g',
        proteinas : '11.82 g'
    }

    // https://www.fatsecret.es/calorías-nutrición/genérico/encebollado
    encebollado = {
        nombre : 'Encebollado',
        porcion : 'Tazón regular - 240 g',
        energia : '1025 kj',
        calorias : '245 kcal',
        grasa : '5.56 g',
        carbohidratos : '21.88 g',
        proteinas : '25.96 g'
    }

    // https://www.fatsecret.es/calorías-nutrición/genérico/fritada?portionid=23631247&portionamount=1,000
    fritada = {
        nombre : 'Fritada',
        porcion : '1 Porción - 300 g',
        energia : '3093 kj',
        calorias : '739 kcal',
        grasa : '46.83 g',
        carbohidratos : '6.21 g',
        proteinas : '69.29 g'
    }

    // https://www.fatsecret.es/calorías-nutrición/genérico/seco-de-pollo?portionid=28703839&portionamount=1,000
    secoPollo = {
        nombre : 'Seco de Pollo',
        porcion : '1 Porción - 212 g',
        energia : '838 kj',
        calorias : '200 kcal',
        grasa : '10.10 g',
        carbohidratos : '2.69 g',
        proteinas : '23.08 g'
    }

    // https://redecuador.org/comida-ecuatoriana/llapingachos/
    // https://fitia.app/calorias-informacion-nutricional/llapingacho-1003989/?quant=3&portion_idx=0
    // https://holadoctor.com/es/recetas-sanas/llapingachos 
    llapingacho = {
        nombre : 'Llapingacho',
        porcion : '1 Porción - 250 g',
        energia : '1125 kj',
        calorias : '747 kcal',
        grasa : '35.71 g',
        carbohidratos : '19.33 g',
        proteinas : '29.30 g'
    }

    /*
    0 -> Bolón
    1 -> Encebollado
    2 -> Fritada
    3 -> SecoPollo
    5 -> Yapingacho
    */

    let lstFood = [bolon, encebollado, fritada, secoPollo, llapingacho];
    var idFood = parseInt(req.params.idFood);

    if (idFood >= lstFood.length || idFood < 0) {
        res.send({
            message : "Wrong index"
        });       
    }
    else {
        res.send(lstFood[idFood]);
    }
});

module.exports = router;