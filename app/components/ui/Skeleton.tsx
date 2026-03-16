"use client";

import { cn } from "../../../lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "animate-pulse rounded-2xl bg-[#61422D]/20",
                className
            )}
            {...props}
        />
    );
}

export function GameCardSkeleton() {
    return (
        <div className="group">
            <Skeleton className="aspect-video rounded-3xl mb-6" />
            <div className="flex justify-between items-start">
                <div className="flex-1">
                    <Skeleton className="h-8 w-3/4 rounded-lg mb-3" />
                    <Skeleton className="h-4 w-full rounded-lg mb-2" />
                    <Skeleton className="h-4 w-2/3 rounded-lg" />
                </div>
                <Skeleton className="h-8 w-8 rounded-full ml-4" />
            </div>
        </div>
    );
}

export function BlogCardSkeleton() {
    return (
        <div className="bg-[#250804] border border-[#61422D]/20 rounded-[2rem] overflow-hidden">
            <Skeleton className="h-64 rounded-none" />
            <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                    <Skeleton className="h-3 w-24 rounded-full" />
                    <Skeleton className="h-3 w-16 rounded-full" />
                </div>
                <Skeleton className="h-6 w-4/5 rounded-lg mb-3" />
                <Skeleton className="h-4 w-full rounded-lg mb-2" />
                <Skeleton className="h-4 w-3/4 rounded-lg mb-8" />
                <div className="flex items-center justify-between pt-6 border-t border-[#61422D]/20">
                    <div className="flex items-center gap-3">
                        <Skeleton className="w-8 h-8 rounded-full" />
                        <Skeleton className="h-3 w-20 rounded-full" />
                    </div>
                    <Skeleton className="h-3 w-16 rounded-full" />
                </div>
            </div>
        </div>
    );
}

export function FeaturedPostSkeleton() {
    return (
        <div className="flex flex-col lg:flex-row bg-[#250804] border border-[#61422D]/20 rounded-[2.5rem] overflow-hidden">
            <Skeleton className="lg:w-3/5 h-[400px] lg:h-[600px] rounded-none" />
            <div className="lg:w-2/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                    <Skeleton className="h-3 w-24 rounded-full" />
                    <Skeleton className="h-3 w-16 rounded-full" />
                </div>
                <Skeleton className="h-10 w-full rounded-lg mb-3" />
                <Skeleton className="h-10 w-3/4 rounded-lg mb-6" />
                <Skeleton className="h-5 w-full rounded-lg mb-2" />
                <Skeleton className="h-5 w-2/3 rounded-lg mb-8" />
                <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-4">
                        <Skeleton className="w-12 h-12 rounded-full" />
                        <div>
                            <Skeleton className="h-4 w-24 rounded-full mb-2" />
                            <Skeleton className="h-3 w-16 rounded-full" />
                        </div>
                    </div>
                    <Skeleton className="w-12 h-12 rounded-full" />
                </div>
            </div>
        </div>
    );
}

export function PageSkeleton() {
    return (
        <div className="pb-40">
            {/* Header Skeleton */}
            <div className="relative h-[400px] flex items-end">
                <Skeleton className="absolute inset-0 rounded-none" />
                <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-6 pb-16 w-full">
                    <Skeleton className="h-4 w-40 rounded-full mb-6" />
                    <Skeleton className="h-12 w-2/3 rounded-xl mb-4" />
                    <Skeleton className="h-5 w-1/2 rounded-lg" />
                </div>
            </div>
        </div>
    );
}

export default Skeleton;
