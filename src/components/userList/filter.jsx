import "./filter.css"

const Filter = (props) => {
    return ( 
        <section className="filter">
            <select value={props.gender} onChange={(e) => props.updateFilter(e.target.value)}>
                <option value="all">Muškarci i žene</option>
                <option value="m">Muškarci</option>
                <option value="f">Žene</option>
            </select>
        </section>
    );
}
 
export default Filter;