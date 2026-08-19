import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ConCrédito | Soluções Financeiras',
  description:
    'Soluções financeiras com atendimento simples, humano e transparente.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        {children}
      </body>
    </html>
  )
}
