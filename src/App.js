import { useState } from 'react'

const Category = ({
  categories,
  frequencies,
  handleAmountChange,
  handleFrequencyChange,
  calculateTotalExpenses,
  calculateCategoryTotals,
  categoryTotals
}) => {
  return (
    <>
      {Object.keys(categories).map((categoryKey) => (
        <div key={categoryKey} className="cat-table">
          <h2>{categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}</h2>
          {categories[categoryKey].map((item, index) => (
            <table key={index}>
              <tbody>
                <tr>
                  <td>{item.name}</td>
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
                    Amount:
                    <input
                      type="text"
                      value={item.amount || ''}
                      onChange={(event) => handleAmountChange(categoryKey, index, event.target.value)}
                    />
                  </td>
                  <td>
                    Annually:
                    <p> {item.annualAmount} </p>
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
          <table>
            <tbody>
              <tr>
                <td>{categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)} Total:</td>
                <td>${categoryTotals[categoryKey]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
      <p>Total Expenses: $</p>
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
    ],
    utilities: [
      {
        name: 'Mobile Phone',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Gas',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Electricity',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Internet',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Water',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Cleaners',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
    ],
    health: [
      {
        name: 'Health Insurance',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Life Insurance',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Dental',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Medical',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Chemist',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Optical',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Fitness',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
    ],
    entertainment: [
      {
        name: 'Netflix',
        amount: '',
        frequency: null,
        annualAmount: 0
      },{
        name: 'Stan',
        amount: '',
        frequency: null,
        annualAmount: 0
      },{
        name: 'Prime',
        amount: '',
        frequency: null,
        annualAmount: 0
      },{
        name: 'Disney',
        amount: '',
        frequency: null,
        annualAmount: 0
      },{
        name: 'Binge',
        amount: '',
        frequency: null,
        annualAmount: 0
      },{
        name: 'Kayo',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Spotify',
        amount: '',
        frequency: null,
        annualAmount: 0
      },
      {
        name: 'Audible',
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

  const calculateTotalExpenses = (categories) => {
    let totalSum = 0

    Object.values(categories).forEach((categoryArray) => {
      categoryArray.forEach((item) => {
        totalSum += item.annualAmount
      })
    })

    return totalSum
  };

  const calculateCategoryTotals = (categories) => {
    const categoryTotals = {};

    Object.keys(categories).forEach((categoryKey) => {
      const categoryItems = categories[categoryKey];
      let categoryTotal = 0;

      categoryItems.forEach((item) => {
        categoryTotal += item.annualAmount || 0;
      });

      categoryTotals[categoryKey] = categoryTotal;
    });

    return categoryTotals;
  };

  const categoryTotals = calculateCategoryTotals(categories);


  const handleAmountChange = (categoryKey, itemIndex, amount) => {
    const updatedCategories = { ...categories }
    const item = updatedCategories[categoryKey][itemIndex]
    item.amount = amount
    if (!item.frequency || item.frequency === 'Weekly') {
      item.frequency = 'Weekly'
      item.annualAmount = calculateTotalAnnualAmount(amount, 'Weekly')
    }
    setCategories(updatedCategories)
    calculateCategoryTotals(categories)
  };

  const handleFrequencyChange = (categoryKey, itemIndex, frequency) => {
    const updatedCategories = { ...categories }
    const item = updatedCategories[categoryKey][itemIndex]
    item.frequency = frequency
    item.annualAmount = calculateTotalAnnualAmount(item.amount, frequency)
    setCategories(updatedCategories)
    calculateCategoryTotals(categories)
  }

  const frequencies = [
    { label: 'Weekly', value: 52 },
    { label: 'Fortnightly', value: 26 },
    { label: 'Monthly', value: 12 },
    { label: 'Quarterly', value: 4 },
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
        calculateTotalExpenses={calculateTotalExpenses}
        calculateCategoryTotals={calculateCategoryTotals}
        categoryTotals={categoryTotals}
      />
    </div>
  );
}

export default App;
