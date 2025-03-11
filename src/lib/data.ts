import { Campaign, User } from './types'

export const currentUser: User = {
  name: "Alex Thompson",
  email: "alex@company.com",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  role: "Marketing Manager"
}

export const campaigns: Campaign[] = [
  {
    id: 1,
    name: "LinkedIn Sales Navigator",
    leads: 856,
    conversion: 4.2,
    growth: 12,
    status: 'active',
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    name: "Twitter Engagement",
    leads: 643,
    conversion: 3.8,
    growth: 8,
    status: 'active',
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 3,
    name: "Email Outreach",
    leads: 432,
    conversion: 2.9,
    growth: 5,
    status: 'active',
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80"
  },
]
