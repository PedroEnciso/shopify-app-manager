import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from "lucide-react"

export default function StoreApps({ apps }: { apps: string[] }) {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="border-b border-gray-100">
        <CardTitle className="text-lg font-semibold">Installed Apps</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-100">
          {apps.map((app, index) => (
            <div key={index} className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <Download className="w-5 h-5 text-purple-500" />
                </div>
                <span className="font-medium">{app}</span>
              </div>
              <button className="text-sm text-purple-500 font-medium hover:text-purple-600">Configure</button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

