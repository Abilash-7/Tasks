import {useState} from 'react'
import bg from './bg.jpg'

function App() {

  const [user,setUser] = useState([])

  const showApi= () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(res => setUser(res))        
}

const [newitem,setNewItem] = useState("")
const handleSubmit = (e) =>{
  e.preventDefault();
  if(!newitem) return;
  console.log(newitem);
  addItem(newitem);
  setNewItem("")
}

const addItem = (item) => {
    
  const id= user.length ? user[user.length-1].id + 1 : 1 ;
  // console.log(newId);
  const addnewitem = {id,completed:false,item};
  // console.log(addnewitem);
  setUser(user => [...user,addnewitem]); 
}

const handleCheck = (id) => {
  const changeItems = user.map((u) => u.id === id ? {...u,completed:!u.completed} : u)
  setUser(changeItems);
}
const handleDelete = (id) => {
  const changeitems = user.filter((u) => u.id !== id);
  setUser(changeitems); 
}

const clearState = () => {
  setUser('')
}

  return (
    <div className='container-fluid home p-5' >
      
        <h1 className='text-center text-white pt-5' style={{fontSize:'3rem'}}>Todo List</h1>
      <div className='d-flex justify-content-between mx-auto'style={{marginTop:'5rem',width:'60rem'}}>
        <div className="head d-flex"> 
          <input type="text" placeholder='Enter the task' className='form-control' style={{width:'30rem'}} required autoFocus id='itemInput'
          value={newitem} onChange={(e) => setNewItem(e.currentTarget.value)}/>
          <button onClick={handleSubmit} className='btn bg-primary form-control-sm'>Add</button>
        </div>
        <div className='btn'>
          <button onClick={()=>showApi()}  className="btn-primary btn ">Fetch Api</button>
          <button onClick={clearState} className='btn-primary btn ms-2'>Clear All</button>
        </div>
      </div>
      <div className='box m-5  p-5 shadow'>
        <div className="show"> 
        <p className='bg-white rounded ms-3 text-center mb-5' style={{width:'10rem'}}>No of tasks : {user.length}</p>
         </div>
       
        {user.length>0 ? 
      (
        <div className='list'>
          {user.map(u => 
            <div className='d-flex bg-light rounded m-3 p-1 justify-content-between '>
              <input className='ms-5 checkbox' type="checkbox"   checked={u.completed} onChange={() => handleCheck(u.id)}/>
              <p style={{fontSize:"1.2rem",marginTop:'1rem'}}>{u.title}</p>
              <button className='btn btn-danger me-1 mt-2 py-1' style={{height:'3rem'}} onClick={() => handleDelete(u.id)}>delete</button>
            </div>
          )}
        </div>

      )
      :
      <h3 className='text-center text-white p-5'>No Data is Added !!!</h3>}
      </div>
     
    </div>
  );
}

export default App;
