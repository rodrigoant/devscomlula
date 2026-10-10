import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { DevsComLula, type DevsPosition } from './components/DevsComLula';
import { CodeBlock } from './components/CodeBlock';
import { Check, Copy } from 'lucide-react';

export function App() {
  const [position, setPosition] = useState<DevsPosition>('top-center');
  const [installCopied, setInstallCopied] = useState(false);
  const installCommand = 'npm install devscomlula';

  const handleCopyInstall = () => {
    navigator.clipboard.writeText(installCommand);
    setInstallCopied(true);
    setTimeout(() => setInstallCopied(false), 2000);
  };

  const positions: { id: DevsPosition; label: string }[] = [
    { id: 'top-left', label: 'top-left' },
    { id: 'top-center', label: 'top-center' },
    { id: 'top-right', label: 'top-right' },
    { id: 'bottom-left', label: 'bottom-left' },
    { id: 'bottom-center', label: 'bottom-center' },
    { id: 'bottom-right', label: 'bottom-right' },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-[#ededed] antialiased selection:bg-[#bc1313] selection:text-white">
      <DevsComLula
        position={position}
      />

      <header className="border-b border-neutral-800/80 bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="mx-auto flex h-14 max-w-[692px] items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 26 26" fill="none">
              <path
                d="M9.85484 9.84393H0L8.03763 16.0058L4.96237 26L12.8602 19.8382L20.9677 26L17.7527 16.0058L26 9.84393H15.9355L12.8602 0L9.85484 9.84393Z"
                fill="#bc1313"
              />
            </svg>
            <span className="font-semibold text-sm tracking-tight text-white">Devs com Lula</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-neutral-400">
                        <a
              href="https://github.com/rodrigoant/devscomlula"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              github
            </a>
            <a
              href="https://www.npmjs.com/package/devscomlula"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              npm
            </a>

          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[692px] px-4 sm:px-6 py-8 sm:py-13">
        <section className="flex flex-col items-center text-center pb-8 border-b border-neutral-800/60">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            #devscomlula
          </h1>

          <p className="mt-3 max-w-md text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
            Um componente de faixa e fita para React em apoio à classe trabalhadora e à democracia.
          </p>
        </section>

        <section className="py-8 sm:py-13 border-b border-neutral-800/60">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-white mb-3">
            Installation
          </h2>

          <div className="relative flex items-center justify-between rounded-xl border border-neutral-800 bg-[#0d0d0e] px-3.5 sm:px-4 py-3 font-mono text-xs sm:text-sm text-neutral-200 shadow-sm">
            <code className="overflow-x-auto pr-3">{installCommand}</code>
            <button
              onClick={handleCopyInstall}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-neutral-700/60 bg-neutral-800/60 text-neutral-400 hover:border-neutral-600 hover:bg-neutral-700 hover:text-white"
              aria-label="Copiar comando de instalação"
            >
              {installCopied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
            </button>
          </div>
        </section>

        <section className="py-8 sm:py-13 border-b border-neutral-800/60">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-white mb-2">
            Usage
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mb-2">
            Renderize o componente na raiz da sua aplicação ou no layout principal.
          </p>

          <CodeBlock
            language="tsx"
            code={`import { DevsComLula } from 'devscomlula'

export default function App() {
  return (
    <div>
      <DevsComLula />
      <main>
        {/* Conteúdo da aplicação */}
      </main>
    </div>
  )
}`}
          />
        </section>

        <section className="py-8 sm:py-13 border-b border-neutral-800/60">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/80 px-3 py-1 text-xs text-neutral-300">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
              <span>Posição ativa: <code className="text-white bg-neutral-800 px-1.5 py-0.5 rounded font-mono font-semibold">{position}</code></span>
            </div>
          </div>

          <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-white mb-2">
            Position
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 mb-4">
            A orientação diagonal e a faixa horizontal se adaptam imediatamente à posição escolhida.
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
            {positions.map((pos) => {
              const isActive = position === pos.id;
              return (
                <button
                  key={pos.id}
                  onClick={() => {
                    setPosition(pos.id);
                  }}
                  data-active={isActive ? 'true' : 'false'}
                  className={`rounded-lg border px-2.5 sm:px-3 py-1.5 text-xs font-mono font-medium ${
                    isActive
                      ? 'border-white/40 bg-white text-black shadow-sm font-semibold'
                      : 'border-neutral-800 bg-[#121214] text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                  }`}
                >
                  {pos.label}
                </button>
              );
            })}
          </div>

          <CodeBlock
            language="tsx"
            code={`<DevsComLula position="${position}" />`}
          />
        </section>

        <section className="py-8 sm:py-13 ">
          <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-white mb-2">
            Exemplos de Uso
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mb-4">
            Variações práticas para integrar o componente ao seu projeto.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-white mb-1">
                Fita Diagonal no Canto com Link
              </h3>
              <p className="text-xs text-neutral-400 mb-2">
                Exibe a fita no canto inferior e redireciona ao clicar.
              </p>
              <CodeBlock
                language="tsx"
                code={`<DevsComLula
  position="bottom-left"
  link="http://lula.rodrigoantunes.dev/"
/>`}
              />
            </div>

            <div>
              <h3 className="text-sm font-medium text-white mb-1">
                Faixa Fixa no Rodapé
              </h3>
              <p className="text-xs text-neutral-400 mb-2">
                Fixa a faixa com texto completo na parte inferior da tela.
              </p>
              <CodeBlock
                language="tsx"
                code={`<DevsComLula position="bottom-center" />`}
              />
            </div>

            <div>
              <h3 className="text-sm font-medium text-white mb-1">
                Next.js (App Router)
              </h3>
              <p className="text-xs text-neutral-400 mb-2">
                Adicione diretamente no seu layout raiz (<code className="font-mono text-neutral-300">app/layout.tsx</code>).
              </p>
              <CodeBlock
                language="tsx"
                filename="app/layout.tsx"
                code={`import { DevsComLula } from 'devscomlula'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <DevsComLula position="top-center" />
        {children}
      </body>
    </html>
  )
}`}
              />
            </div>

            <div>
              <h3 className="text-sm font-medium text-white mb-1">
                Com Ação Customizada
              </h3>
              <p className="text-xs text-neutral-400 mb-2">
                Dispara uma função personalizada ao clicar na fita ou banner.
              </p>
              <CodeBlock
                language="tsx"
                code={`<DevsComLula
  position="top-right"
  onClick={() => {
    console.log('Banner clicado')
  }}
/>`}
              />
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-neutral-800/60 py-6 sm:py-8 text-center text-xs text-neutral-500">
        <div className="mx-auto flex flex-col sm:flex-row gap-2 max-w-[692px] items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 26 26" fill="none">
              <path
                d="M9.85484 9.84393H0L8.03763 16.0058L4.96237 26L12.8602 19.8382L20.9677 26L17.7527 16.0058L26 9.84393H15.9355L12.8602 0L9.85484 9.84393Z"
                fill="#bc1313"
              />
            </svg>
            <span>#devscomlula</span>
          </div>

          <div>
            <span>Este projeto é uma iniciativa independente e voluntária.</span>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}

export default App;
