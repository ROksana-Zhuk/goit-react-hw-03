import clsx from 'clsx';
import css from './SearchBox.module.css'

export default function SearchBox({ value, onFilter }) {
      return (
        <div className={clsx(css.box)}>
        <p className={clsx(css.title)}>Find contacts by name</p>
          <input type='text'
                 value={value}
                 onChange={(event)=> onFilter(event.target.value)}
                 className={clsx(css.input)}
                 />
        </div>
      );
    }


