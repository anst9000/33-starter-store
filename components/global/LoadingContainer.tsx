import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

function LoadingContainer() {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
    </div>
  )
}

function LoadingProduct() {
  return (
    <Card>
      <CardContent className="p-4">
        <Skeleton className="h-48 w-full mt-4" />
        <Skeleton className="h-4 w-2/5 mt-4 mx-auto" />
        <Skeleton className="h-4 w-1/3 mt-4 mx-auto" />
      </CardContent>
    </Card>
  )
}

export default LoadingContainer
