import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ArrowUpRight, Users, Target, Zap } from 'lucide-react'
import { Button } from '../ui/button'

const analyticsData = [
  { name: 'Jan', leads: 400, conversion: 24 },
  { name: 'Feb', leads: 300, conversion: 13 },
  { name: 'Mar', leads: 200, conversion: 18 },
  { name: 'Apr', leads: 278, conversion: 39 },
  { name: 'May', leads: 189, conversion: 48 },
  { name: 'Jun', leads: 239, conversion: 38 },
]

const metrics = [
  {
    title: 'Total Leads YTD',
    value: '12,543',
    change: '+23.1%',
    icon: <Users className="h-5 w-5 text-blue-600" />
  },
  {
    title: 'Avg. Conversion Rate',
    value: '4.3%',
    change: '+1.4%',
    icon: <Target className="h-5 w-5 text-green-600" />
  },
  {
    title: 'Active Campaigns',
    value: '23',
    change: '+3',
    icon: <Zap className="h-5 w-5 text-purple-600" />
  }
]

export function AnalyticsPage() {
  const [timeframe, setTimeframe] = useState('6m')

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Analytics Overview</h1>
        <div className="flex gap-2">
          <Button
            variant={timeframe === '1m' ? 'default' : 'outline'}
            onClick={() => setTimeframe('1m')}
          >
            1M
          </Button>
          <Button
            variant={timeframe === '6m' ? 'default' : 'outline'}
            onClick={() => setTimeframe('6m')}
          >
            6M
          </Button>
          <Button
            variant={timeframe === '1y' ? 'default' : 'outline'}
            onClick={() => setTimeframe('1y')}
          >
            1Y
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {metrics.map((metric) => (
          <div
            key={metric.title}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-500 text-sm">{metric.title}</span>
              {metric.icon}
            </div>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-semibold">{metric.value}</h3>
              <span className="flex items-center text-sm text-green-600">
                {metric.change}
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-6">Campaign Performance</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="leads" fill="#3b82f6" name="Leads" />
              <Bar yAxisId="right" dataKey="conversion" fill="#10b981" name="Conversion %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
