import { useState } from 'react'

const Category = ({
  categories,
  frequencies,
  handleAmountChange,
  handleFrequencyChange,
  calculateTotalAnnualAmount
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
                    <p> {calculateTotalAnnualAmount(item.amount, item.frequency)} </p>
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      ))}
    </>
  )
}

const App = () => {

  const [categories, setCategories] = useState({
    transport: [
      {
        name: 'Car loan',
        amount: '',
        frequency: null
      },
      {
        name: 'Registration',
        amount: '',
        frequency: null
      },
      {
        name: 'Insurance',
        amount: '',
        frequency: null
      },
      {
        name: 'Fuel',
        amount: '',
        frequency: null
      },
      {
        name: 'Maintenance',
        amount: '',
        frequency: null
      },
      {
        name: 'Public Transport',
        amount: '',
        frequency: null
      }
    ],
    home: [
      {
        name: 'Home Loan',
        amount: '',
        frequency: null
      },
      {
        name: 'Rent',
        amount: '',
        frequency: null
      },
      {
        name: 'Maintenance',
        amount: '',
        frequency: null
      },
      {
        name: 'Insurance',
        amount: '',
        frequency: null
      },
      {
        name: 'Assest',
        amount: '',
        frequency: null
      },
      {
        name: 'Groceries',
        amount: '',
        frequency: null
      },
      {
        name: 'Laundry',
        amount: '',
        frequency: null
      },
    ]
  })

  const [totalAnnualAmount, setTotalAnnualAmount] = useState(0)

  const calculateTotalAnnualAmount = () => {
    let totalAmount = 0;
    Object.keys(categories).forEach((categoryKey) => {
      categories[categoryKey].forEach((item) => {
        const { amount, frequency } = item;
        if (amount && frequency) {
          const numericAmount = parseFloat(amount);
          const selectedFrequency = frequencies.find((f) => f.label === frequency);
          if (selectedFrequency) {
            totalAmount += numericAmount * selectedFrequency.value;
          }
        }
      });
    });
    return totalAmount;
  };

  const handleAmountChange = (categoryKey, itemIndex, amount) => {
    const updatedCategories = { ...categories }
    updatedCategories[categoryKey][itemIndex].amount = amount
    console.log(updatedCategories)
    setCategories(updatedCategories)
    setTotalAnnualAmount(calculateTotalAnnualAmount)
  };

  const handleFrequencyChange = (categoryKey, itemIndex, frequency) => {
    const updatedCategories = { ...categories }
    updatedCategories[categoryKey][itemIndex].frequency = frequency
    console.log(updatedCategories)
    setCategories(updatedCategories)
    setTotalAnnualAmount(calculateTotalAnnualAmount)
  }

  const frequencies = [
    { label: 'Weekly', value: 52 },
    { label: 'Fortnightly', value: 26 },
    { label: 'Monthly', value: 12 },
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
        calculateTotalAnnualAmount={calculateTotalAnnualAmount}
      />
    </div>
  );
}

export default App;
