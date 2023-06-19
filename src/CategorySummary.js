const CategorySummary = ({
  categories,
  frequencies,
  handleAmountChange,
  handleFrequencyChange,
  categoryTotals,
  showCategory
}) => {
  return (
    <div className="category-summary">
      <h2>Yearly Totals</h2>
      {categories.map((category, index) => (
        <div key={index} className="cat-table">
          <table>
            <tbody>
              <tr>
                <td className="cat-sum-name"> {category.name} </td>
                <td className="cat-sum-total">${categoryTotals[categories[index].name]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}

export default CategorySummary
