# commodities-scraping-api
Esta e uma API que retorna o valor diário de commodities.

<img src="https://i.imgur.com/ilPl3DB.gif" alt="demo" height="400">
<hr />

<p align="center">
  <a href="#-acesso">Acesso a API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-lista-de-commodities-aceitos">Lista de commodities</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-formato-do-retorno">Formato do retorno</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## 💻 Acesso
Para acessar a API, utilize o nome de um commodity, como por exemplo "soja".

Exemplo de pesquisa:
https://commodities-scraping-api.herokuapp.com/commodity/soja

## 🌽 Lista de commodities aceitos:
- Ouro (Grama)
- Petróleo (Barril)
- Café (Saca)
- Soja (Saca)
- Boi (Arroba)
- Milho (Saca)
- Ovo (Dúzia)

## 📑 Formato do retorno
O retorno é feito via um objeto JSON, com a unidade de medida e o valor do commodity neste dia.

~~~json
{
  "saca": "162,96"
}
~~~

## :memo: Licença:
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
