import React from "react";

export default function TableSkeletonLoader() {
    return <>
        {[...Array(5)].map((_) => {
            return <>
                <tbody>
                    <tr className="w-full h-full border-2 rounded-md mx-auto mt-20">
                        {[...Array(6)].map((_) => {
                            return <>
                                <td className="animate-pulse flex-row items-center h-full justify-center space-y-1">
                                    <div className="w-full bg-gray-300 h-12 rounded">
                                    </div>
                                </td>
                            </>
                        })}
                    </tr>
                </tbody>
            </>
        })}
    </>;
};