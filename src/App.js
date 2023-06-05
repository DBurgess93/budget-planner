
const Category = ({ categories }) => {
  return categories.transport.map((item, index) => (
    <table key={index}>
      <tbody>
        <tr>
          <td>{item.name} - </td>
          <td>Amount: {item.amount} - </td>
          <td>Frequency {item.frequency} </td>
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
        frequency: 'monthly'
      },
      {
        name: 'Registration',
        amount: 0,
        frequency: 'monthly'
      },
      {
        name: 'Insurance',
        amount: 0,
        frequency: 'monthly'
      },
      {
        name: 'Fuel',
        amount: 0,
        frequency: 'monthly'
      },
      {
        name: 'Maintenance',
        amount: 0,
        frequency: 'monthly'
      },
      {
        name: 'Public Transport',
        amount: 0,
        frequency: 'monthly'
      }
    ],
    home: [
      {
        name: 'Home Loan',
        amount: 0,
        frequency: 'monthly'
      },
      {
        name: 'Rent',
        amount: 0,
        frequency: 'monthly'
      },
      {
        name: 'Maintenance',
        amount: 0,
        frequency: 'monthly'
      },
      {
        name: 'Insurance',
        amount: 0,
        frequency: 'monthly'
      },
      {
        name: 'Assest',
        amount: 0,
        frequency: 'monthly'
      },
      {
        name: 'Groceries',
        amount: 0,
        frequency: 'monthly'
      },
      {
        name: 'Laundry',
        amount: 0,
        frequency: 'monthly'
      },
    ]

  }

  return (
    <div>
      <h1>Budget Planner</h1>
      <div>
        <h2>Transport</h2>
        <table>
          <tbody>
            <tr>
              <td> <strong>Car Loan: </strong> </td>
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
      </div>
      <div>
        <Category categories={categories} />
      </div>
    </div>
  );
}

export default App;
