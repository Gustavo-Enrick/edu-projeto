
import CategoriaBase from './CategoriaBase';
export default function VestuarioScreen() {
  const dicas = [
    "Compre apenas o que for necessário.",
    "Avalie qualidade e durabilidade.",
    "Aproveite liquidações e brechós.",
    "Organize seu guarda-roupa para evitar compras repetidas."
  ];

  return (
    <CategoriaBase
      titulo="Vestuário"
      icone="👕"
      descricao="Compras de roupas, calçados e acessórios entram nessa categoria, tanto itens essenciais quanto por desejo."
      informacoes="Gastos impulsivos com roupas podem prejudicar o orçamento. Avalie a real necessidade de cada compra."
      dicas={dicas}
      corTema="#37474F"
    />
  );
}