
import CategoriaBase from './CategoriaBase';
export default function MercadoScreen() {
  const dicas = [
    "Monte uma lista antes de ir às compras.",
    "Aproveite promoções, mas evite exageros.",
    "Compare preços entre mercados.",
    "Evite ir com fome ao mercado.",
    "Se estiver caro não compre (Lula - 2025)"
  ];

  return (
    <CategoriaBase
      titulo="Mercado"
      icone="🛒"
      descricao="Refere-se às compras de alimentos, produtos de limpeza e itens essenciais do dia a dia."
      informacoes="Esse é um dos principais gastos mensais. Planejamento e controle são essenciais para evitar desperdícios."
      dicas={dicas}
      corTema="#999705"
    />
  );
}