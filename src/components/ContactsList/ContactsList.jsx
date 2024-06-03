
import css from "./contactlist.module.css"




export const ContactsList = ({ contacts, onDelete }) => {
    const handleDelete = (id) => {
        onDelete(id);
    };

    return (
        <ul className={css.contact_list}>
            {contacts.map(contact => (
                <li key={contact.id} className={css.contact_item}>
                    {contact.name}: {contact.number}
                    <button onClick={() => handleDelete(contact.id)} className={css.button_close}>x</button>
                </li>
            ))}
        </ul>
    );
};