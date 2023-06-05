
const Category = ({ categories, frequencies }) => {
  return categories.transport.map((item, index) => (
    <table key={index}>
      <tbody>
        <tr>
          <td>{item.name}</td>
          <td>
            Amount:
            <input type="text" />
          </td>
          <td>
            Frequency:
            <select>
              {frequencies.map((frequency) => (
                <option key={frequency}>
                  {frequency}
                </option>
              ))}
            </select>
          </td>
          <td>
            Annually:
          </td>
        </tr>
      </tbody>
    </table>
  ))
}

const App = () => {

  const frequencies = [
    "weekly",
    "fortnightly",
    "monthly",
    "yearly"
  ]

  const categories = {
    transport: [
      {
        name: 'Car loan',
        amount: 0,
        frequency: null
      },
      {
        name: 'Registration',
        amount: 0,
        frequency: null
      },
      {
        name: 'Insurance',
        amount: 0,
        frequency: null
      },
      {
        name: 'Fuel',
        amount: 0,
        frequency: null
      },
      {
        name: 'Maintenance',
        amount: 0,
        frequency: null
      },
      {
        name: 'Public Transport',
        amount: 0,
        frequency: null
      }
    ],
    home: [
      {
        name: 'Home Loan',
        amount: 0,
        frequency: null
      },
      {
        name: 'Rent',
        amount: 0,
        frequency: null
      },
      {
        name: 'Maintenance',
        amount: 0,
        frequency: null
      },
      {
        name: 'Insurance',
        amount: 0,
        frequency: null
      },
      {
        name: 'Assest',
        amount: 0,
        frequency: null
      },
      {
        name: 'Groceries',
        amount: 0,
        frequency: null
      },
      {
        name: 'Laundry',
        amount: 0,
        frequency: null
      },
    ]

  }

  return (
    <div>
      <h1>Budget Planner</h1>
      <Category categories={categories} frequencies={frequencies} />
    </div>
  );
}

export default App;
