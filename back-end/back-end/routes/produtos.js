var express = require('express');
var router = express.Router();
const cors = require('cors');
const bodyPaser = require('body-parser');
router.use(bodyPaser.json());
router.use(cors());
const Produtos = require('../models/produtos');



let produtos = [
  { "tipo": "masculino", "id": 1, "nome": "Tênis Nike Sb Chron 2 Preto/Branco", "preço": 199.99, "img": "tenis.jpg", "desc": "Tênis da linha SB Chron 2, da marca Nike. Modelo cano baixo com estilo casual, perfeito para os amantes do skateboard! Confeccionado em lona na cor preta, ele possui aplicação do símbolo icônico -Swoosh- em suas laterais e o logo da marca em branco na língua. Seu fechamento é em cadarço e solado e vira em borracha.Possui forma normal, recomenda-se comprar número habitual. Código: DM3494-001.Atenção: A cor do produto pode variar devido as configurações do monitor e o número de passadores podem variar conforme numeração do tênis. Todos os produtos que vendemos são originais, acompanhados de nota fiscal. Garantia contra defeito de fabricação.", "tamanho": 40 },

  { "tipo": "infantil", "id": 2, "nome": "Air Jordan 1 Retro High", "preço": 149.99, "img": "tenis1.jpg", "desc": "Air Jordan 1 Retro High OG “Stage Haze Para os fãs do MJ, nunca tem erro quando a Nike lança um modelo no color blocking “Black Toe”. A nova edição a receber esse tratamento é o AJ1 “Stage Haze”. O sneaker é construído sobre uma entressola branca de borracha, e possui estrutura de couro predominantemente branco e sobreposições em tons e materiais que se contrastam. A região do calcanhar é executada em suede cinza, enquanto o couro craquelado preto se estende do colar do calcanhar até a toebox. Para acrescentar ainda mais contraste a esse sneaker irado, as palmilhas e escrita Nike Air da língua são rosas.", "tamanho": 41 },

  { "tipo": "feminino", "id": 3, "nome": "Tênis Stan Smith - Branco adidas", "preço": 179.99, "img": "tenis2.jpg", "desc": "TRANSFORMA QUALQUER LOOK EM UM CLÁSSICO INSTANTÂNEO Seja sua própria lenda. Ao longo do tempo, o Stan Smith tem conquistado as quadras. Calce este tênis adidas que honra seu nome e ganhe destaque nas ruas. Tudo neste tênis capta a essência do estilo original de 1971, com estrutura minimalista em couro e detalhes discretos.", "tamanho": 42 },

  { "tipo": "masculino", "id": 4, "nome": "Tênis Nike Air Max SC", "preço": 189.99, "img": "tenis3.jpg", "desc": "VISUAL OLD SCHOOL. CONFORTO NEW SCHOOL. Com suas linhas fáceis, o visual das pistas de herança e, claro, amortecimento Air visível, o Nike Air Max SC é a finalização perfeita para qualquer look. A rica mistura de materiais confere profundida, enquanto o transforma em um tênis durável e leve para uso no dia a dia.", "tamanho": 43 },

  { "tipo": "masculino", "id": 5, "nome": "Tênis Adidas Stan Smith", "preço": 159.99, "img": "tenis4.jpg", "desc": "VERSÃO MINIMALISTA DO STAN SMITH COM CABEDAL DE SUEDE Desde que estreou em meados dos anos 60, o tênis adidas Stan Smith tem sido um item básico da moda. A silhueta minimalista deste par mostra sua versatilidade com o cabedal de suede. Os principais detalhes continuam, como as Três Listras perfuradas e o formato elegante, sem perder a linha progressiva. O cabedal de suede também assume cores pastéis discretas, dando uma vibe descontraída perfeita para passeios casuais ou apenas relaxar com os amigos.", "tamanho": 39 },

  { "tipo": "masculino", "id": 6, "nome": "Tênis Nike Shox", "preço": 169.99, "img": "tenis5.jpg", "desc": "Proteção contra impacto, sensação de firmeza Ideal para o corredor que anseia por proteção contra impactos, o tênis masculino Nike Shox NZ foi desenvolvido com um cabedal confortável, cadarços firmes e entressola amortecida. Referência no mercado esportivo e casual, a Nike é sinônimo de conforto, estilo e praticidade. Ao longo da história, a marca desenvolveu modelos que se tornaram verdadeiros ícones; um deles é o clássico e atemporal Nike Shox. Com um sistema único de amortecimento, composto por quatro colunas adaptáveis com placas moderadoras, o tênis proporciona uma pisada flexível e anatômica. O resultado é um tênis versártil que acompanha caminhadas, corridas ou simplesmente o lifestyle de quem aposta no visual.", "tamanho": 38 }
];

/* GET users listing. */
router.route('/')
  .get((req, res, next) => {



    Produtos.find({})
      .then((produtosBanco) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(produtosBanco);
      }, (err) => next(err))
      .catch((err) => next(err));
    


  res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(produtos);
  })

  .post((req, res, next) => {
    produtos.push(req.body);


    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(req.body);
  });

router.route('/:id')
  .delete((req, res, next) => {

    produtos = produtos.filter(function (value, index, arr) {
      return value.id != req.params.id;
    });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(req.params.id);
  })

  .put((req, res, next) => {
    let index = req.body.id - 1
    produtos.splice(index, 1, req.body);


    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(req.body);
  });


module.exports = router;
