import { useState } from 'react'
import { MoreVertical, ArrowUpRight, Pause, Play, X } from 'lucide-react'
import { Button } from '../ui/button'
import { campaigns as initialCampaigns } from '@/lib/data'
import type { Campaign } from '@/lib/types'
import { CreateCampaignModal } from '../campaign/CreateCampaignModal'

export function CampaignList() {
  const [campaigns, setCampaigns] = useState<Campaign[]>(initialCampaigns)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePauseCampaign = (id: number) => {
    setCampaigns(campaigns.map(campaign => 
      campaign.id === id 
        ? { ...campaign, status: campaign.status === 'active' ? 'paused' : 'active' } 
        : campaign
    ))
  }

  const handleDeleteCampaign = (id: number) => {
    setCampaigns(campaigns.filter(campaign => campaign.id !== id))
  }

  const handleCampaignClick = (id: number) => {
    console.log('Campaign clicked:', id)
    // Implement campaign details view
  }

  const handleCreateCampaign = (newCampaign: Campaign) => {
    setCampaigns([newCampaign, ...campaigns])
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Active Campaigns</h2>
          <Button 
            variant="outline"
            onClick={() => setIsModalOpen(true)}
          >
            Create Campaign
          </Button>
        </div>
        <div className="divide-y">
          {campaigns.map((campaign) => (
            <div 
              key={campaign.id} 
              className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div 
                className="flex items-center gap-4 cursor-pointer"
                onClick={() => handleCampaignClick(campaign.id)}
              >
                <img
                  src={campaign.image}
                  alt={campaign.name}
                  className="h-12 w-12 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-medium">{campaign.name}</h3>
                  <p className="text-sm text-gray-500">{campaign.leads} leads generated</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-sm font-medium">{campaign.conversion}%</div>
                  <div className="flex items-center text-xs text-green-600">
                    <ArrowUpRight className="h-3 w-3" />
                    {campaign.growth}%
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handlePauseCampaign(campaign.id)}
                    title={campaign.status === 'active' ? 'Pause Campaign' : 'Resume Campaign'}
                  >
                    {campaign.status === 'active' ? (
                      <Pause className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Play className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteCampaign(campaign.id)}
                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                    title="Delete Campaign"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CreateCampaignModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateCampaign}
      />
    </>
  )
}
