import './list-select.css'

function List_select({list_data, onChange}){
    return (
        <>
            <section className="section-select">
                <select className="select-list" onChange={onChange}>
                    <option value="">Selecionar...</option>
                    {list_data.map((item) => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))
                    }
                </select>
            </section>
        </>
    )
}

export default List_select;
