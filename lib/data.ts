export type FormResponse = {
  id: number
  staffMember: string
  appsUsed: string[]
}

export type Store = {
  id: number
  name: string
  url: string
  apiKey: string
  staff: string[]
  availableApps: string[]
  formResponses: FormResponse[]
}

export const stores: Store[] = [
  {
    id: 1,
    name: "Fashion Store",
    url: "fashion-store.myshopify.com",
    apiKey: "fashion_api_key",
    staff: ["owner@fashionstore.com", "manager@fashionstore.com", "staff1@fashionstore.com"],
    availableApps: ["Shopify POS", "Mailchimp", "Privy", "Klaviyo", "Judge.me"],
    formResponses: [
      { id: 1, staffMember: "owner@fashionstore.com", appsUsed: ["Shopify POS", "Mailchimp"] },
      { id: 2, staffMember: "manager@fashionstore.com", appsUsed: ["Shopify POS", "Privy"] },
    ],
  },
  {
    id: 2,
    name: "Tech Shop",
    url: "tech-shop.myshopify.com",
    apiKey: "tech_api_key",
    staff: ["admin@techshop.com", "support@techshop.com"],
    availableApps: ["Shopify POS", "Mailchimp", "Privy", "Klaviyo", "Judge.me"],
    formResponses: [{ id: 1, staffMember: "admin@techshop.com", appsUsed: ["Shopify POS", "Klaviyo"] }],
  },
]

