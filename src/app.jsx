import './app.css'
import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense } from 'solid-js'
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query'

export default function App() {
  const queryClient = new QueryClient()
  return (
    <Router
      root={(props) => (
        <QueryClientProvider client={queryClient}>
          <Suspense>
            <div>{props.children}</div>
          </Suspense>
        </QueryClientProvider>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
