import { GridColDef } from '@mui/x-data-grid'
import './add.scss'

type Props={
    slug: string,
    columns: GridColDef[],
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Add = (props:Props) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //add new user
        //axios.post(`/api/${slug}`, {})
    }

  return (
    <div className='add'>
        <div className="modal">
            <span className="close" onClick={() => props.setOpen(false)}>X</span>
            <h1>Add new {props.slug}</h1>
            <form onSubmit={handleSubmit}>

                {props.columns.filter((item) => item.field !== 'id' && item.field !=='img')

                .map((item) => (
                    <div className="item">
                        <label htmlFor="">{item.headerName}</label>
                        <input type={item.type} placeholder={item.field} />
                    </div>
                ))}
                <button>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Add