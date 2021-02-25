import { IconContext } from 'react-icons';
import { GrList } from 'react-icons/gr';
import { FaBorderNone } from 'react-icons/fa';

const FilteringMenu = ({ onChange, filter }) => {
  return (
    <IconContext.Provider value={{ className: 'react-list-icons' }}>
      <div className="filtering-menu mb-2">
        <div onClick={() => onChange('view', { list: +!filter.view.list })}>
          {filter.view.list ? <GrList /> : <FaBorderNone />}
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default FilteringMenu;
