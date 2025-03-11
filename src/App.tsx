import { useState } from 'react'
import { Sidebar } from './components/dashboard/Sidebar'
import { Header } from './components/dashboard/Header'
import { Stats } from './components/dashboard/Stats'
import { CampaignList } from './components/dashboard/CampaignList'
import { AnalyticsPage } from './components/analytics/AnalyticsPage'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar onNavigate={setCurrentPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          {currentPage === 'dashboard' ? (
            <div className="p-6">
              <Stats />
              <CampaignList />
            </div>
          ) : currentPage === 'analytics' ? (
            <AnalyticsPage />
          ) : null}
        </main>
      </div>
    </div>
  )
}

export default App
