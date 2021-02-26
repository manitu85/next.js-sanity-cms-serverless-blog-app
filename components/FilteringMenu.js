import { IconContext } from 'react-icons';
import { GrList } from 'react-icons/gr';
import { MdBorderAll } from 'react-icons/md';
import { FaSortNumericDown, FaSortNumericUp } from 'react-icons/fa';

const FilteringMenu = ({ onChange, filter }) => {
  return (
    <IconContext.Provider value={{ className: 'react-list-icons' }}>
      <div className="filtering-menu mb-2">
        <div
          className="mr-2"
          onClick={() => onChange('view', { list: +!filter.view.list })}
        >
          {filter.view.list ? <GrList /> : <MdBorderAll />}
        </div>
        <div onClick={() => onChange('date', { asc: +!filter.date.asc })}>
          {filter.date.asc ? <FaSortNumericDown /> : <FaSortNumericUp />}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default FilteringMenu;
