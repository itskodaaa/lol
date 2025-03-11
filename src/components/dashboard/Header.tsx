import { Bell, Search, Settings } from 'lucide-react'
import { Button } from '../ui/button'
import { currentUser } from '@/lib/data'

export function Header() {
  const handleNotifications = () => {
    console.log('Notifications clicked')
    // Implement notifications logic
  }

  const handleSettings = () => {
    console.log('Settings clicked')
    // Implement settings logic
  }

  const handleProfile = () => {
    console.log('Profile clicked')
    // Implement profile logic
  }

  return (
    <header className="bg-white border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search campaigns..."
            className="pl-8 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleNotifications}
            className="relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleSettings}
          >
            <Settings className="h-5 w-5" />
          </Button>

          <button
            onClick={handleProfile}
            className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg"
          >
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="h-8 w-8 rounded-full"
            />
            <div className="text-sm text-left hidden sm:block">
              <div className="font-medium">{currentUser.name}</div>
              <div className="text-gray-500">{currentUser.role}</div>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}
