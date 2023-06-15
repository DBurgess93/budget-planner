const CategorySummary = ({
  categories,
  frequencies,
  handleAmountChange,
  handleFrequencyChange,
  categoryTotals,
  showCategory
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
                    <p> {item.annualAmount.toFixed(2)} </p>
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
    </>
  )
}
