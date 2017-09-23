'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tab = function Tab(_ref) {
    var component = _ref.component,
        label = _ref.label,
        id = _ref.id,
        changeTab = _ref.changeTab,
        activeTab = _ref.activeTab;

    var Component = component;
    var isActive = id === activeTab;
    return _react2.default.createElement(
        'span',
        { onClick: changeTab, 'data-id': id },
        _react2.default.createElement(
            Component,
            { isActive: isActive },
            label
        )
    );
};

process.env.NODE_ENV !== "production" ? Tab.propTypes = {
    component: _propTypes2.default.func,
    id: _propTypes2.default.string,
    label: _propTypes2.default.string,
    changeTab: _propTypes2.default.func,
    activeTab: _propTypes2.default.string
} : void 0;

exports.default = Tab;
module.exports = exports['default'];