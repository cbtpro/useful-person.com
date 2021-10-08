import React from 'react';
import { connect } from 'react-redux';
import { changeLanguage } from '../actions';

let ChangeLanguage = ({ dispatch }) => {
    let lang;

    return (
        <select
            defaultValue={lang}
            onChange={($event) => {
                let { value } = $event.target;
                dispatch(changeLanguage(value))
            }}>
            <option value="zh">中文</option>
            <option value="en">English</option>
        </select>
    );
}

ChangeLanguage = connect()(ChangeLanguage);

export default ChangeLanguage;
