# #devscomlula

Faixa e fita para React em apoio à democracia.

[Demonstração Online](http://lula.rodrigoantunes.dev/) · [GitHub](https://github.com/rodrigoant/devscomlula)

## Instalação

```bash
npm install devscomlula
```

## Uso

```tsx
import { DevsComLula } from "devscomlula";

export default function App() {
  return (
    <>
      <DevsComLula position="top-center" />
      <main>{/* Conteúdo */}</main>
    </>
  );
}
```

## Posições

- `top-left`
- `top-center`
- `top-right`
- `bottom-left`
- `bottom-center`
- `bottom-right`

## Props

| Prop        | Tipo            | Padrão         | Descrição              |
| :---------- | :-------------- | :------------- | :--------------------- |
| `position`  | `DevsPosition`  | `'top-center'` | Posição na tela        |
| `link`      | `string`        | `undefined`    | Link externo ao clicar |
| `onClick`   | `() => void`    | `undefined`    | Função ao clicar       |
| `className` | `string`        | `''`           | Classes CSS            |
| `style`     | `CSSProperties` | `undefined`    | Estilos inline         |

## Licença

MIT
