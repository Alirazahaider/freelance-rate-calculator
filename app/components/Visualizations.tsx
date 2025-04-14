import React from 'react'

interface VisualizationsProps {
    results: {
        hourlyRate: number
        dailyRate: number
        weeklyRate: number
        annualIncome: number
        expenses: number
        buffer: number
    }
}

export default function Visualizations({ results }: VisualizationsProps) {
    const totalIncomeNeeded = results.annualIncome + results.expenses
    const bufferAmount = totalIncomeNeeded * (results.buffer / 100)
    const totalWithBuffer = totalIncomeNeeded + bufferAmount

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Income Breakdown</h2>

            <div className="space-y-6">
                <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Income Allocation</h3>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                            className="bg-[#0d5256] h-4 rounded-full"
                            style={{ width: `${(results.annualIncome / totalWithBuffer) * 100}%` }}
                        ></div>
                        <div
                            className="bg-[#117378] h-4 rounded-full -mt-4"
                            style={{
                                width: `${(results.expenses / totalWithBuffer) * 100}%`,
                                marginLeft: `${(results.annualIncome / totalWithBuffer) * 100}%`
                            }}
                        ></div>
                        <div
                            className="bg-[#19a1a8] h-4 rounded-full -mt-4"
                            style={{
                                width: `${(bufferAmount / totalWithBuffer) * 100}%`,
                                marginLeft: `${((results.annualIncome + results.expenses) / totalWithBuffer) * 100}%`
                            }}
                        ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>Income</span>
                        <span>Expenses</span>
                        <span>Buffer</span>
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Rate Comparison</h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="bg-gray-100 p-3 rounded">
                            <div className="text-[#0d5256] font-bold">${results.hourlyRate.toFixed(2)}</div>
                            <div className="text-xs text-gray-500">per hour</div>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                            <div className="text-[#0d5256] font-bold">${results.dailyRate.toFixed(2)}</div>
                            <div className="text-xs text-gray-500">per day</div>
                        </div>
                        <div className="bg-gray-100 p-3 rounded">
                            <div className="text-[#0d5256] font-bold">${results.weeklyRate.toFixed(2)}</div>
                            <div className="text-xs text-gray-500">per week</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}