import CategoriaBase from './CategoriaBase';
export default function AluguelScreen() {
  const dicas = [
    "Pague o aluguel em dia para evitar multas",
    "Considere negociar o valor com o proprietário",
    "Pesquise por imóveis com aluguel mais barato",
    "Considere dividir o aluguel com colegas",
    "Mantenha um fundo de emergência para cobrir imprevistos relacionados ao aluguel"
  ];

  return (
    <CategoriaBase
      titulo="Aluguel"
      icone="🏠"
      descricao="O aluguel é o valor pago mensalmente para morar em um imóvel que não é de sua propriedade. Pode incluir despesas como condomínio, IPTU e taxas de serviços."
      informacoes="O aluguel é uma das maiores despesas mensais para muitas pessoas. É importante planejar bem esse gasto, considerando não apenas o valor do aluguel, mas também as despesas adicionais que podem surgir."
      dicas={dicas}
      corTema="#FF7043"
    />
  );
}