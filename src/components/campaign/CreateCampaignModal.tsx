import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '../ui/button'

interface CreateCampaignModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (campaign: any) => void
}

export function CreateCampaignModal({ isOpen, onClose, onSubmit }: CreateCampaignModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    target: '',
    platform: 'linkedin',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      ...formData,
      id: Date.now(),
      leads: 0,
      conversion: 0,
      growth: 0,
      status: 'active'
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Create New Campaign</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Campaign Name</label>
              <input
                type="text"
                required
                className="w-full p-2 border rounded-lg"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                className="w-full p-2 border rounded-lg"
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Target Audience</label>
              <input
                type="text"
                required
                className="w-full p-2 border rounded-lg"
                value={formData.target}
                onChange={(e) => setFormData({ ...formData, target: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Platform</label>
              <select
                className="w-full p-2 border rounded-lg"
                value={formData.platform}
                onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
              >
                <option value="linkedin">LinkedIn</option>
                <option value="twitter">Twitter</option>
                <option value="email">Email</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1"
            >
              Create Campaign
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
