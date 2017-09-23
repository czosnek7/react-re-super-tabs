'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabPanel = function TabPanel(_ref) {
    var component = _ref.component,
        id = _ref.id,
        activeTab = _ref.activeTab;

    var Component = component;
    return _react2.default.createElement(
        'div',
        null,
        id === activeTab && _react2.default.createElement(Component, null)
    );
};

process.env.NODE_ENV !== "production" ? TabPanel.propTypes = {
    component: _propTypes2.default.func,
    id: _propTypes2.default.string,
    activeTab: _propTypes2.default.string
} : void 0;

exports.default = TabPanel;
module.exports = exports['default'];