export const DeleteButton = ({ id }: any) => {
    const handleDelete = (id: any) => {
        console.log('delete button action send' + id)
        alert('Estas seguro de eliminar el registro?')

    }
    return (
        <button onClick={handleDelete} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Remove</button>
    )
}