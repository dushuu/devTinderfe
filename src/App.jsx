import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import 'react-datepicker/dist/react-datepicker.css'


import AppRoutes from '@/router/AppRoutes'



function App() {
  const queryClient = new QueryClient( { defaultOptions: { queries: { refetchOnWindowFocus: false } } } )

  return (
    <HelmetProvider>
      <QueryClientProvider client={ queryClient }>
        <BrowserRouter>
     
           

              <AppRoutes />

           
           
        
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  )
}

export default App
