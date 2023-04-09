
import './globals.css'
import Header from './Header'
import Provider from './Provider'

export const metadata = {
  title: 'DAILY NEWS',
  description: 'up-to-date news for you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Provider>
      <body className='bg-gray-100 dark:bg-zinc-800 transition-all duration-500'>
        <Header/>
        {children}
        </body>
        </Provider>
    </html>
  )
}
