import { ReactElement } from 'react'
import EarlyREaderBook from './EarlyReaderBook/page'
import ExceptionalProducts from './ExceptionalProducts/page'

const ErbPage = (): ReactElement => {

  return (
    <>
    <div className='custom-gredient-bg'>
        <EarlyREaderBook />
        <ExceptionalProducts />
    </div>
    </>
  )
}

export default ErbPage