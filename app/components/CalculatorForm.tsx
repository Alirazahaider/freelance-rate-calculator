import { useState } from 'react'

interface CalculatorFormProps {
    onSubmit: (data: {
        desiredIncome: number
        billableHours: number
        workWeeks: number
        expenses: number
        bufferPercentage: number
    }) => void
}

export default function CalculatorForm({ onSubmit }: CalculatorFormProps) {
    const [formData, setFormData] = useState({
        desiredIncome: 80000,
        billableHours: 30,
        workWeeks: 48,
        expenses: 5000,
        bufferPercentage: 20,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: parseFloat(value) || 0
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(formData)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="desiredIncome" className="block text-sm font-medium text-gray-700 mb-1">
                    Desired Annual Income
                </label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                    <input
                        type="number"
                        id="desiredIncome"
                        name="desiredIncome"
                        value={formData.desiredIncome}
                        onChange={handleChange}
                        className="pl-8 w-full rounded-md border-gray-300 shadow-sm text-black p-2 border focus:ring-[#0d5256] focus:border-[#0d5256]"
                        required
                    />
                </div>
            </div>

            <div>
                <label htmlFor="billableHours" className="block text-sm font-medium text-gray-700 mb-1">
                    Billable Hours per Week
                </label>
                <input
                    type="number"
                    id="billableHours"
                    name="billableHours"
                    value={formData.billableHours}
                    onChange={handleChange}
                    min="1"
                    max="80"
                    className="w-full rounded-md border-gray-300 shadow-sm text-black p-2 border focus:ring-[#0d5256] focus:border-[#0d5256]"
                    required
                />
            </div>

            <div>
                <label htmlFor="workWeeks" className="block text-sm font-medium text-gray-700 mb-1">
                    Weeks Worked per Year
                </label>
                <input
                    type="number"
                    id="workWeeks"
                    name="workWeeks"
                    value={formData.workWeeks}
                    onChange={handleChange}
                    min="1"
                    max="52"
                    className="w-full rounded-md border-gray-300 shadow-sm text-black p-2 border focus:ring-[#0d5256] focus:border-[#0d5256]"
                    required
                />
            </div>

            <div>
                <label htmlFor="expenses" className="block text-sm font-medium text-gray-700 mb-1">
                    Annual Business Expenses
                </label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                    <input
                        type="number"
                        id="expenses"
                        name="expenses"
                        value={formData.expenses}
                        onChange={handleChange}
                        className="pl-8 w-full rounded-md border-gray-300 shadow-sm text-black p-2 border focus:ring-[#0d5256] focus:border-[#0d5256]"
                        required
                    />
                </div>
            </div>

            <div>
                <label htmlFor="bufferPercentage" className="block text-sm font-medium text-gray-700 mb-1">
                    Buffer for Taxes & Savings (%)
                </label>
                <input
                    type="number"
                    id="bufferPercentage"
                    name="bufferPercentage"
                    value={formData.bufferPercentage}
                    onChange={handleChange}
                    min="0"
                    max="100"
                    className="w-full rounded-md border-gray-300 shadow-sm text-black p-2 border focus:ring-[#0d5256] focus:border-[#0d5256]"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full bg-[#0d5256] text-white px-4 py-2 rounded-md hover:bg-[#117378] transition-colors"
            >
                Calculate Rates
            </button>
        </form>
    )
}