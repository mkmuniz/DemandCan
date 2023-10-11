import React from "react";

export default function TableSkeletonLoader() {
    return <>
        <div className="w-full h-full border-2 rounded-md mx-auto mt-20">
            <div className="animate-pulse flex-row items-center h-full justify-center space-y-1">
                {[...Array(5)].map((_) => {
                    return <>
                        <div className="w-full bg-gray-300 h-12 rounded">
                        </div>
                    </>
                })}
            </div>
        </div>
    </>;
};