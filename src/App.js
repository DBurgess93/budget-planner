import { useState } from 'react'

const Category = ({ categories, frequencies, handleAmountChange, handleFrequencyChange }) => {
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
                        <option key={frequency} value={frequency}>
                          {frequency}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    Annually:
                    <p>............</p>
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

  const handleAmountChange = (categoryKey, itemIndex, amount) => {
    const updatedCategories = { ...categories }
    updatedCategories[categoryKey][itemIndex].amount = amount
    console.log(updatedCategories)
    setCategories(updatedCategories)
  };

  const handleFrequencyChange = (categoryKey, itemIndex, frequency) => {
    const updatedCategories = { ...categories }
    updatedCategories[categoryKey][itemIndex].frequency = frequency
    console.log(updatedCategories)
  }

  const frequencies = [
    "weekly",
    "fortnightly",
    "monthly",
    "yearly"
  ]

  return (
    <div>
      <h1>Budget Planner</h1>
      <Category
        categories={categories}
        frequencies={frequencies}
        handleAmountChange={handleAmountChange}
        handleFrequencyChange={handleFrequencyChange}
      />
    </div>
  );
}

export default App;
