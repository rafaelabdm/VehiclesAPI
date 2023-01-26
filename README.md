<h1 align="center">
	VehiclesAPI
</h1>

<p align="center"><br>
Exercício para aula de Programação Web III da OiDevs em parceria com a Let's Code by Ada.<br>
Ferramentas: Javascript, em ambiente Node e SQLite.<br>

</p>

<p align="center">
	<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/rafaelabdm/VehiclesAPI?color=lightblue" />
	<img alt="Code language count" src="https://img.shields.io/github/languages/count/rafaelabdm/VehiclesAPI?color=yellow" />
	<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/rafaelabdm/VehiclesAPI?color=blue" />
	<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/rafaelabdm/VehiclesAPI?color=green" />
</p>

---

<h2>Sobre o projeto 🚗</h2>

<p>
Nesse exercício tínhamos que criar um serviço (API) para cadastrar veículos. O critério dos dados salvos no banco era livre, então escolhi gravar
	os campos: <i><b>id</b></i> (sendo único, seria a placa do carro), <i><b>brand</b></i> (marca do carro), <i><b>owner</b></i> (dono do carro),
	<i><b>color</b></i> (cor) e <i><b>year</b></i> (ano de lançamento).<br>
Já as funcionalidades que o projeto deveria cumprir, o professor especificou as seguntes:

  * Cadastrar um veículo;
  * Buscar um veículo por id (no meu caso usei a placa como identificador único);
  * Buscar um veículo por nome;
  * Atualizar os dados de um veículo;
  * Excluir um veículo;
  
</p>

<h2>Para usar a VehiclesAPI 💻</h2>

<p>
Ao baixar o repositório rode o comando <TT>npm install</TT>, isso instalará os pacotes necessários para rodas a aplicação.
Terminado esse processo a API já estará pronta para rodar na sua máquina.<br>
Com o comando <TT>npm start</TT> ou <TT>npm run dev</TT> rode a aplicação, ela fará com que o servidor fique ouvindo na porta padrão 80.<br>
Depois disso, você pode usar seu navegador para acessar os dados que deseja, escrevendo <TT>localhost/vehicles</TT> na barra de pesquisa. 
Você terá acesso a lista de carros salva no banco de dados. Ou <TT>localhost/vehicles/<i>marca_do_carro</i></TT> para ver se tem algum carro
dessa marca no banco. <br>
Usando uma plataforma de API, como o Postman por exemplo, você pode testar as demais funcionalidades (GET, POST, PATCH, DELETE).
</p>

