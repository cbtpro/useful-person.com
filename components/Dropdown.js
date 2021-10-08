import PropTypes from 'prop-types';

const selectStyles = {
    width: 100,
    height: 24
};

const Dropdown = ({ value, items, onChange }) => {
    return (
        <select defaultValue={value} onChange={onChange} style={selectStyles}>
            {items.map((item) =>
                <option key={item.key} value={item.key}>
                    {item.value}
                </option>
            )}
        </select>
    );
}

Dropdown.propTypes = {
    value: PropTypes.string,
    items: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Dropdown;