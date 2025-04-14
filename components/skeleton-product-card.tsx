export default function SkeletonProductCard() {
  return (
    <div className="space-y-3">
      <div className="aspect-square bg-slate-200 rounded-lg"></div>
      <div className="space-y-2">
        <div className="h-4 bg-slate-200 rounded w-3/4"></div>
        <div className="h-4 bg-slate-200 rounded w-1/2"></div>
      </div>
      <div className="h-4 bg-slate-200 rounded w-1/4"></div>
    </div>
  )
}

