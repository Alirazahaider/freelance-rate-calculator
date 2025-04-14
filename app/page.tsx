'use client'

import { useState } from 'react'
import CalculatorForm from '@/app/components/CalculatorForm'
import ResultsCard from '@/app/components/ResultsCard'
import Visualizations from '@/app/components/Visualizations'

export default function Home() {
    const [results, setResults] = useState<{
        hourlyRate: number
        dailyRate: number
        weeklyRate: number
        annualIncome: number
        expenses: number
        buffer: number
    } | null>(null)

    const handleCalculate = (formData: {
        desiredIncome: number
        billableHours: number
        workWeeks: number
        expenses: number
        bufferPercentage: number
    }) => {
        const { desiredIncome, billableHours, workWeeks, expenses, bufferPercentage } = formData

        const bufferMultiplier = 1 + (bufferPercentage / 100)
        const totalIncomeNeeded = (desiredIncome + expenses) * bufferMultiplier

        const totalBillableHours = billableHours * workWeeks
        const hourlyRate = totalIncomeNeeded / totalBillableHours
        const dailyRate = hourlyRate * 8
        const weeklyRate = hourlyRate * billableHours

        setResults({
            hourlyRate,
            dailyRate,
            weeklyRate,
            annualIncome: desiredIncome,
            expenses,
            buffer: bufferPercentage
        })
    }

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-white mb-2">Freelance Rate Calculator</h1>
            <p className="text-white/90 mb-8">
                Calculate your ideal hourly or project rate based on your income goals
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <CalculatorForm onSubmit={handleCalculate} />
                </div>

                {results && (
                    <div className="space-y-6">
                        <ResultsCard results={results} />
                        <Visualizations results={results} />
                    </div>
                )}
            </div>
        </main>
    )
}