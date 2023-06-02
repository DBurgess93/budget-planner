
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
    ]
  }

  return (
    <div>
      <h1>Budget Planner</h1>
      <div>
        <Category categories={categories} />

      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
