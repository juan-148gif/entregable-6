import React from 'react'

const FilterPrice = ({setInputPrice}) => {

    const handleSubmit = e => {
        e.preventDefault()
        const inputfrom = +e.target.from.value
        const inputTo = +e.target.to.value
        if(inputfrom && inputTo){
            setInputPrice({
                from: inputfrom,
                to: inputTo
            })
        }else if (!inputfrom && inputTo) {
            setInputPrice({
                from: 0,
                to: inputTo
            })
        }else if(inputfrom && !inputTo){
            setInputPrice({
                from:inputfrom,
                to: Infinity
            })
        }else{
            setInputPrice({
                from:0,
                to:Infinity
            })
        }
    }

  return (
    <section>
        <h2>Price</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="from">From</label>
                <input type="number" id='from' />
            </div>
            <div>
                <label htmlFor="to">To</label>
                <input type="number" id='to' />
            </div>
            <button>Apply</button>
        </form>
    </section>
  )
}

export default FilterPrice