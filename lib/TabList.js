'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabList = function TabList(_ref) {
    var children = _ref.children,
        changeTab = _ref.changeTab,
        activeTab = _ref.activeTab,
        className = _ref.className;

    var childrenWithProps = _react2.default.Children.map(children, function (child) {
        return _react2.default.cloneElement(child, {
            changeTab: changeTab, activeTab: activeTab
        });
    });

    return _react2.default.createElement(
        'div',
        { className: className },
        childrenWithProps
    );
};

process.env.NODE_ENV !== "production" ? TabList.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.element]),
    changeTab: _propTypes2.default.func,
    activeTab: _propTypes2.default.string,
    className: _propTypes2.default.string
} : void 0;

exports.default = TabList;
module.exports = exports['default'];