"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UserPlus, X } from "lucide-react"

type StaffMember = {
  id: number
  email: string
  role?: string
}

export default function StaffMembers({
  storeId,
  initialStaff,
}: {
  storeId: number
  initialStaff: StaffMember[]
}) {
  const [staff, setStaff] = useState(initialStaff)
  const [newEmail, setNewEmail] = useState("")

  const addStaffMember = (e: React.FormEvent) => {
    e.preventDefault()
    if (newEmail) {
      setStaff([...staff, { id: Date.now(), email: newEmail, role: "Staff" }])
      setNewEmail("")
    }
  }

  const removeStaffMember = (id: number) => {
    setStaff(staff.filter((member) => member.id !== id))
  }

  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="border-b border-gray-100">
        <CardTitle className="text-lg font-semibold">Staff Members</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-100">
          {staff.map((member) => (
            <div key={member.id} className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-600 font-medium">{member.email.charAt(0).toUpperCase()}</span>
                </div>
                <div>
                  <p className="font-medium">{member.email}</p>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </div>
              <button onClick={() => removeStaffMember(member.id)} className="text-gray-400 hover:text-red-500">
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
        <form onSubmit={addStaffMember} className="p-4 border-t border-gray-100">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Add staff member by email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" className="bg-purple-500 hover:bg-purple-600">
              <UserPlus className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

