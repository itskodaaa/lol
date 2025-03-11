import { Home, Users, BarChart, Settings, HelpCircle, LogOut } from 'lucide-react'
import { Button } from '../ui/button'

interface SidebarProps {
  onNavigate: (page: string) => void
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const handleLogout = () => {
    console.log('Logging out')
    // Implement logout logic
  }

  return (
    <div className="w-64 bg-white border-r flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold">LeadGen Pro</h1>
      </div>
      
      <nav className="flex-1 px-4">
        <div className="space-y-1">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="w-full justify-start gap-2"
              onClick={() => onNavigate(item.route)}
            >
              {item.icon}
              {item.label}
            </Button>
          ))}
        </div>
      </nav>
      
      <div className="p-4 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start gap-2 text-red-500 hover:text-red-600 hover:bg-red-50"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  )
}

const navItems = [
  { label: 'Dashboard', icon: <Home className="h-5 w-5" />, route: 'dashboard' },
  { label: 'Leads', icon: <Users className="h-5 w-5" />, route: 'leads' },
  { label: 'Analytics', icon: <BarChart className="h-5 w-5" />, route: 'analytics' },
  { label: 'Settings', icon: <Settings className="h-5 w-5" />, route: 'settings' },
  { label: 'Help', icon: <HelpCircle className="h-5 w-5" />, route: 'help' },
]
