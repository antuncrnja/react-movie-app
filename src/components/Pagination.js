import { Link } from 'react-router-dom'

export const Pagination = ({page}) => {
  return (
    <div className="paginate container" style={{width: '100%'}}>

      <Link to={`?page=${page-1}`}>
       <button disabled={page <= 1}><span className='button-arrow'>&#x2039;</span> Previous</button>
      </Link>

      <Link to={`?page=${page+1}`}>
        <button>Next <span className='button-arrow'>&#x203A;	</span></button>
      </Link>

    </div>
  )
}