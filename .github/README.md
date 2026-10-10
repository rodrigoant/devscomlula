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
    </>
  );
}
```

### Next.js (App Router)

No seu `app/layout.tsx`:

```tsx
import { DevsComLula } from "devscomlula";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <DevsComLula position="top-center" />
        {children}
      </body>
    </html>
  );
}
```

## Posições

- `top-left` (fita superior esquerda)
- `top-center` (faixa horizontal superior)
- `top-right` (fita superior direita)
- `bottom-left` (fita inferior esquerda)
- `bottom-center` (faixa horizontal inferior)
- `bottom-right` (fita inferior direita)

## Props

| Prop        | Tipo            | Padrão         | Descrição                   |
| :---------- | :-------------- | :------------- | :-------------------------- |
| `position`  | `DevsPosition`  | `'top-center'` | Posição na tela             |
| `link`      | `string`        | `undefined`    | Link externo ao clicar      |
| `onClick`   | `() => void`    | `undefined`    | Callback ao clicar          |
| `className` | `string`        | `''`           | Classes CSS customizadas    |
| `style`     | `CSSProperties` | `undefined`    | Estilos inline customizados |

## Desenvolvimento Local

```bash
npm install
npm run dev
npm run build:all
```

## Licença

MIT
