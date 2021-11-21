import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const customStyles = {
  option: (provided) => ({
    ...provided,
    borderBottom: '1px dotted black',
    padding: 5,
    color: 'black',
    fontSize: '1.8rem',
  }),
};

const SelectComponent = ({ handleChange, selectedOption, options }) => {
  return (
    <Title>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        defaultValue={options[0]}
        placeholder="Select Country"
        styles={customStyles}
      />
    </Title>
  );
};

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  width: 100%;
`;

SelectComponent.propTypes = {
  handleChange: PropTypes.func.isRequired,
  selectedOption: PropTypes.string,
  options: PropTypes.array.isRequired,
  styles: PropTypes.object,
};
export default SelectComponent;
