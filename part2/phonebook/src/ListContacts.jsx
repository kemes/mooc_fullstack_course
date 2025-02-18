const ListContacts = ({ persons, filter, handleDeleteName }) => {
const listPersons = persons.filter((x) => x.name.toLowerCase().includes(filter.toLocaleLowerCase())).map((x) => <li key={x._id}><button onClick={() => {handleDeleteName(x._id)}}>del</button> {x.name} :: {x.number}</li>)
return (
    <div>{listPersons}</div>
)
}

export default ListContacts
