import React from 'react'

interface ResultsCardProps {
    results: {
        hourlyRate: number
        dailyRate: number
        weeklyRate: number
        annualIncome: number
        expenses: number
        buffer: number
    }
}

export default function ResultsCard({ results }: ResultsCardProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommended Rates</h2>

            <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-600">Hourly Rate:</span>
                    <span className="font-bold text-lg text-black/80">${results.hourlyRate.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-600">Daily Rate (8hrs):</span>
                    <span className="font-bold text-lg text-black/80">${results.dailyRate.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-600">Weekly Rate:</span>
                    <span className="font-bold text-lg text-black/80">${results.weeklyRate.toFixed(2)}</span>
                </div>

                <div className="pt-4">
                    <h3 className="font-medium text-gray-700 mb-2">Breakdown</h3>
                    <ul className="space-y-1 text-sm text-gray-600">
                        <li>Desired Income: ${results.annualIncome.toLocaleString()}</li>
                        <li>Business Expenses: ${results.expenses.toLocaleString()}</li>
                        <li>Buffer for Taxes/Savings: {results.buffer}%</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}