export interface Campaign {
  id: number
  name: string
  leads: number
  conversion: number
  growth: number
  image: string
  status: 'active' | 'paused' | 'completed'
}

export interface User {
  name: string
  email: string
  avatar: string
  role: string
}
