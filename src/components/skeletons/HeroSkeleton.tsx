import React from 'react'

const HeroSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="flex gap-2 justify-between">
        <div className="w-full">
          {/* Name skeleton */}
          <div className="mt-10 h-10 w-48 bg-gray-200 rounded" />
          
          {/* Biography skeleton */}
          <div className="mt-6 space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-3/4 bg-gray-200 rounded" />
          </div>

          {/* Location skeleton */}
          <div className="flex gap-2 items-center mt-6">
            <div className="h-4 w-4 bg-gray-200 rounded" />
            <div className="h-4 w-32 bg-gray-200 rounded" />
          </div>

          {/* Quote skeleton */}
          <div className="mt-6 border-l-2 pl-6 space-y-2">
            <div className="h-4 w-3/4 bg-gray-200 rounded" />
            <div className="h-4 w-3/4 bg-gray-200 rounded" />
            <div className="h-4 w-3/4 bg-gray-200 rounded" />
          </div>
        </div>

        {/* Avatar skeleton */}
        <div className="h-10 w-11 rounded-full bg-gray-200" />
      </div>

      {/* Social icons skeleton */}
      <div className="flex gap-1 mt-4 space-x-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-5 w-5 bg-gray-200 rounded" />
        ))}
      </div>
    </div>
  )
}

export default HeroSkeleton