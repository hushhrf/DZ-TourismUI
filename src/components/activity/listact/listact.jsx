import './listact.scss'

import { ActData } from '../../../lib/dummydata'
import Card from '../accommodation/Card'

function ListAct(){
  return (
    <div className='list'>
      {ActData.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default ListAct