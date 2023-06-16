import { useState } from 'react'
import CategorySummary from './CategorySummary'

const Category = ({
  categories,
  frequencies,
  handleAmountChange,
  handleFrequencyChange,
  categoryTotals,
  showCategory
}) => {
  const currentCategory = categories[showCategory]

  if (!currentCategory) {
    return null
  }

  return (
    <>
      <div className="cat-table">
        <h2>{currentCategory.name}</h2>
        {currentCategory.items.map((item, index) => (
          <table key={index}>
            <tbody>
              <tr>
                <td>{item.name}</td>
                <td>
                  Amount:
                  <input
                    type="text"
                    value={item.amount || ''}
                    onChange={(event) => handleAmountChange(showCategory, index, event.target.value)}
                  />
                </td>
                <td>
                  Frequency:
                  <select
                    value={item.frequency || ''}
                    onChange={(event) => handleFrequencyChange(showCategory, index, event.target.value)}
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
                  <p> {item.annualAmount.toFixed(2)} </p>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
        <table>
          <tbody>
            <tr>
              <td>Total:</td>
              <td>${categoryTotals[currentCategory.name]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

const ToggleCategoryButtons = ({ handleNextCategory, handleBackCategory }) => {
  return (
    <div>
      <button
        onClick={handleBackCategory}
      >
        Previous Category
      </button>
      <button
        onClick={handleNextCategory}
      >
        Next Category
      </button>
    </div>
  )
}

const RunningTotals = ({ totalAllWeekly, totalAllCategories }) => {
  return (
    <div>
      <p>Total Weekly: ${totalAllWeekly.toFixed(2)} </p>
      <p>Total Yearly: ${totalAllCategories.toFixed(2)} </p>
    </div>
  )
}

const CategoryListBtns = ({ categories, handleCategoryClick }) => {
  return (
    <div className="category-list-btns">
      {categories.map((category, index) => (
        <button
          key={index}
          value={category.index}
          onClick={handleCategoryClick(category)}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}

const App = () => {
  const [categories, setCategories] = useState([
    {
      name: 'Transport',
      display: true,
      items: [
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
      ]
    },
    {
      name: 'Home',
      display: true,
      items: [
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
          name: 'Assets',
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
    },
    {
      name: 'Utilities',
      display: true,
      items: [
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
      ]
    },
    {
      name: 'Health',
      display: true,
      items: [
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
      ]
    },
    {
      name: 'Entertainment',
      display: true,
      items: [
        {
          name: 'Netflix',
          amount: '',
          frequency: null,
          annualAmount: 0
        }, {
          name: 'Stan',
          amount: '',
          frequency: null,
          annualAmount: 0
        }, {
          name: 'Prime',
          amount: '',
          frequency: null,
          annualAmount: 0
        }, {
          name: 'Disney',
          amount: '',
          frequency: null,
          annualAmount: 0
        }, {
          name: 'Binge',
          amount: '',
          frequency: null,
          annualAmount: 0
        }, {
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
    },

  ])

  const calculateTotalAnnualAmount = (amount, frequency) => {
    const numericAmount = parseFloat(amount)
    const selectedFrequency = frequencies.find((f) => f.label === frequency)
    if (selectedFrequency) {
      return numericAmount * selectedFrequency.value
    }
    return 0;
  };

  const calculateTotalExpenses = (categoryTotals) => {
    let totalSum = 0

    categoryTotals.forEach((category) => {
      console.log(category)
      totalSum += category || 0
      console.log(totalSum)
    })

    return totalSum
  };

  const calculateCategoryTotals = (categories) => {
    const categoryTotals = {};

    categories.forEach((category) => {
      const { name, items } = category

      let categoryTotal = 0;

      items.forEach((item) => {
        categoryTotal += item.annualAmount || 0;
      });

      categoryTotals[name] = categoryTotal
    });

    return categoryTotals
  };

  const categoryTotals = calculateCategoryTotals(categories);
  const totalAllCategories = Object.values(categoryTotals).reduce((total, value) => total + value, 0)
  const totalAllWeekly = (totalAllCategories / 52)

  const handleAmountChange = (categoryIndex, itemIndex, amount) => {
    const updatedCategories = [...categories]
    const category = updatedCategories[categoryIndex]
    if (category && category.items.length > itemIndex) {
      const item = category.items[itemIndex]
      if (item) {
        item.amount = amount;
        if (!item.frequency || item.frequency === 'Weekly') {
          item.frequency = 'Weekly'
          item.annualAmount = calculateTotalAnnualAmount(amount, 'Weekly')
        }
        setCategories(updatedCategories)
        calculateCategoryTotals(updatedCategories)
      } else {
        console.error(`Item at index ${itemIndex} is undefined`)
      }
    } else {
      console.error(`Category at index ${categoryIndex} not found or item index out of range`)
    }
  }

  const handleFrequencyChange = (categoryIndex, itemIndex, frequency) => {
    const updatedCategories = [...categories]
    const category = updatedCategories[categoryIndex]
    if (category && category.items.length > itemIndex) {
      const item = category.items[itemIndex]
      if (item) {
        item.frequency = frequency
        item.annualAmount = calculateTotalAnnualAmount(item.amount, frequency)
        setCategories(updatedCategories)
        calculateCategoryTotals(updatedCategories)
      } else {
        console.error(`Item at index ${itemIndex} is undefined`)
      }
    } else {
      console.error(`Category at index ${categoryIndex} not found or item index out of range`)
    }
  }

  const [showCategory, setShowCategory] = useState(0)

  const handleNextCategory = () => {
    const currentCatIndex = showCategory
    const nextCatIndex = (currentCatIndex + 1) % categories.length
    setShowCategory(nextCatIndex)
    console.log(nextCatIndex)
  }

  const handleBackCategory = () => {
    const currentCatIndex = showCategory
    const backCatIndex = currentCatIndex - 1 >= 0 ? currentCatIndex - 1 : 0
    setShowCategory(backCatIndex)
    console.log(backCatIndex)
  }

  const handleCategoryClick = () => {
    console.log()
    setShowCategory()
  }

  const frequencies = [
    { label: 'Weekly', value: 52 },
    { label: 'Fortnightly', value: 26 },
    { label: 'Monthly', value: 12 },
    { label: 'Quarterly', value: 4 },
    { label: 'Yearly', value: 1 },
  ];

  return (
    <div className="container">
      <header><h1>Budget Planner 📘</h1></header>
      <nav>
        {/* <CategoryListBtns
          categories={categories}
          handleCategoryClick={handleCategoryClick}
        /> */}
      </nav>
      <main className="content">
        <Category
          categories={categories}
          frequencies={frequencies}
          handleAmountChange={handleAmountChange}
          handleFrequencyChange={handleFrequencyChange}
          calculateTotalExpenses={calculateTotalExpenses}
          calculateCategoryTotals={calculateCategoryTotals}
          categoryTotals={categoryTotals}
          showCategory={showCategory}
        />
        <ToggleCategoryButtons
          handleNextCategory={handleNextCategory}
          handleBackCategory={handleBackCategory}
        />
      </main>
      <aside>
        <CategorySummary
          categories={categories}
          frequencies={frequencies}
          handleAmountChange={handleAmountChange}
          handleFrequencyChange={handleFrequencyChange}
          calculateTotalExpenses={calculateTotalExpenses}
          calculateCategoryTotals={calculateCategoryTotals}
          categoryTotals={categoryTotals}
          showCategory={showCategory}
        />
        <RunningTotals
          totalAllWeekly={totalAllWeekly}
          totalAllCategories={totalAllCategories}
        />
      </aside>
      <footer>Developed by Daniel Burgess 😎</footer>
    </div>
  );
}

export default App;
