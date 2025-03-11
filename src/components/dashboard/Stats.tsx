import { ArrowUpRight, Users, Target, Zap } from 'lucide-react'
import { Button } from '../ui/button'

export function Stats() {
  const handleStatClick = (title: string) => {
    console.log('Stat clicked:', title)
    // Implement stat details view
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {stats.map((stat) => (
        <Button
          key={stat.title}
          variant="ghost"
          className="p-0 h-auto hover:bg-transparent"
          onClick={() => handleStatClick(stat.title)}
        >
          <StatCard {...stat} />
        </Button>
      ))}
    </div>
  )
}

function StatCard({ title, value, change, icon }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm w-full">
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-500 text-sm">{title}</span>
        {icon}
      </div>
      <div className="flex items-baseline gap-2">
        <h3 className="text-2xl font-semibold">{value}</h3>
        <span className="flex items-center text-sm text-green-600">
          {change}
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  )
}

const stats = [
  {
    title: "Total Leads",
    value: "2,543",
    change: "+12.5%",
    icon: <Users className="h-5 w-5 text-blue-600" />
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "+2.1%",
    icon: <Target className="h-5 w-5 text-green-600" />
  },
  {
    title: "Active Campaigns",
    value: "12",
    change: "+1",
    icon: <Zap className="h-5 w-5 text-purple-600" />
  }
]
