import { useState } from 'react'

const Category = ({
  categories,
  frequencies,
  handleAmountChange,
  handleFrequencyChange,
  calculateCategoryTotals
}) => {
  return (
    <>
      {Object.keys(categories).map((categoryKey) => (
        <div key={categoryKey} className="cat-table">
          <h2>{categoryKey}</h2>
          {categories[categoryKey].map((item, index) => (
            <table key={index}>
              <tbody>
                <tr>
                  <td>{item.name}</td>
                  <td>
                    Amount:
                    <input
                      type="text"
                      value={item.amount || ''}
                      onChange={(event) => handleAmountChange(categoryKey, index, event.target.value)}
                    />
                  </td>
                  <td>
                    Frequency:
                    <select
                      value={item.frequency || ''}
                      onChange={(event) => handleFrequencyChange(categoryKey, index, event.target.value)}
                    >
                      {frequencies.map((frequency) => (
                        <option key={frequency.label} value={frequency.label}>
                          {frequency.label}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    Annually:
                    <p> {item.annualAmount} </p>
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      ))}
      <p>Total Expenses: ${calculateCategoryTotals(categories)}</p>
    </>
  )
}

const App = () => {
  const [categories, setCategories] = useState({
    transport: [
      {
        name: 'Car loan',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Registration',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Insurance',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Fuel',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Maintenance',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Public Transport',
        amount: '',
        frequency: null,
        annualAmount: 0
      }
    ],
    home: [
      {
        name: 'Home Loan',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Rent',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Maintenance',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Insurance',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Assest',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Groceries',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Laundry',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
    ]
  })

  const calculateTotalAnnualAmount = (amount, frequency) => {
    const numericAmount = parseFloat(amount)
    const selectedFrequency = frequencies.find((f) => f.label === frequency)
    if (selectedFrequency) {
      return numericAmount * selectedFrequency.value
    }
    return 0;
  };

  const calculateCategoryTotals = (categories) => {
    let totalSum = 0

    Object.values(categories).forEach((categoryArray) => {
      categoryArray.forEach((item) => {
        totalSum += item.annualAmount
      })
    })

    return totalSum
  };

  const handleAmountChange = (categoryKey, itemIndex, amount) => {
    const updatedCategories = { ...categories }
    const item = updatedCategories[categoryKey][itemIndex]
    item.amount = amount
    if (!item.frequency || item.frequency === 'Weekly') {
      item.frequency = 'Weekly'
      item.annualAmount = calculateTotalAnnualAmount(amount, 'Weekly')
    }
    console.log(updatedCategories)
    setCategories(updatedCategories)
  };

  const handleFrequencyChange = (categoryKey, itemIndex, frequency) => {
    const updatedCategories = { ...categories }
    const item = updatedCategories[categoryKey][itemIndex]
    item.frequency = frequency
    item.annualAmount = calculateTotalAnnualAmount(item.amount, frequency)
    console.log(updatedCategories)
    setCategories(updatedCategories)
  }

  const frequencies = [
    { label: 'Weekly', value: 52 },
    { label: 'Fortnightly', value: 26 },
    { label: 'Monthly', value: 12 },
    { label: 'Quarterly', value: 4},
    { label: 'Yearly', value: 1 },
  ];

  return (
    <div>
      <h1>Budget Planner</h1>
      <Category
        categories={categories}
        frequencies={frequencies}
        handleAmountChange={handleAmountChange}
        handleFrequencyChange={handleFrequencyChange}
        calculateCategoryTotals={calculateCategoryTotals}
      />
    </div>
  );
}

export default App;
