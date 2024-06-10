import css from "./filter.module.css"

export const Filter = ({onSearch})=>{
    return(
        <div className={css.container}>
            <input type="text" name="filter" onChange={onSearch} className={css.input}/>
        </div>
    )
}


