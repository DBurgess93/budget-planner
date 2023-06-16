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
      <h2>Yearly Totals</h2>
      {categories.map((category, index) => (
        <div key={index} className="cat-table">
          <table>
            <tbody>
              <tr>
                <td> {category.name} </td>
                <td>${categoryTotals[categories[index].name]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </>
  )
}

export default CategorySummary
