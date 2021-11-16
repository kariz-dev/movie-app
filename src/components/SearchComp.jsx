import React from 'react'

function SearchComp({handleInput}) {
  return (
    <section className="searchbox-wrap">
      <input type="text" placeholder="Search for a movie..." className="searchbox" onChange={handleInput} />
    </section>
  )
}

export default SearchComp
