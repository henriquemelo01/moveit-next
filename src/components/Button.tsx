// Definindo a tipagem das propriedades as quais o botão ira receber
interface ButtonProps {
  children: string;
}

export default function Button({ children }: ButtonProps) {
  return <button type="button">{children}</button>;
}
