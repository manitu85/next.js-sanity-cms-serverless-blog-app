import Toggle from 'react-toggle';
import { FiSun } from 'react-icons/fi';
import { RiMoonClearFill } from 'react-icons/ri';

const ThemeToggle = ({ onChange }) => (
  <label>
    <Toggle
      className="day-night-toggle"
      icons={{
        checked: <FiSun />,
        unchecked: <RiMoonClearFill />
      }}
      onChange={onChange}
    />
  </label>
);

export default ThemeToggle;
