import css from "./form.module.css"

export const FormBook = ({name,number,onChange,onSubmit}) => {
   

  return (
      
    <form onSubmit={onSubmit} className={css.form}>
      <label className={css.label}>
        <span className={css.span}>Name</span>
        <input type="text" name="name" value={name} onChange={onChange} className={css.input}/>
      </label>
      <label  className={css.label}>
        <span className={css.span}>Number</span>
        <input type="text" name="number"value={number}  onChange={onChange} className={css.input} />
      </label>
      <button type="submit" className={css.button}>Submit</button>
    </form>
      
  );
  
}
    