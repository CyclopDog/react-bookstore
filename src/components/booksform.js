import React from 'react'

const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]

export default class Booksform extends React.Component {
  render() {
    const cats = categories.map(cat => {
      return <option value={cat}>{cat}</option>
    })
    
    return (
    <form>
      <input type='text'></input>
      <select>
        {cats}
      </select>
      <button>Submit</button>
    </form>
    )
  }
}