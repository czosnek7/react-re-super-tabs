'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabsContainer = function (_React$Component) {
    _inherits(TabsContainer, _React$Component);

    function TabsContainer(props) {
        _classCallCheck(this, TabsContainer);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        var activeTab = props.activeTab;

        _this.state = { activeTab: activeTab };
        _this.changeTab = _this.changeTab.bind(_this);
        return _this;
    }

    TabsContainer.prototype.render = function render() {
        var _this2 = this;

        var activeTab = this.state.activeTab;

        var childrenWithProps = _react2.default.Children.map(this.props.children, function (child, index) {
            return _react2.default.cloneElement(child, {
                index: index, changeTab: _this2.changeTab, activeTab: activeTab
            });
        });

        return _react2.default.createElement(
            'div',
            null,
            childrenWithProps
        );
    };

    TabsContainer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var activeTab = this.props.activeTab;

        if (nextProps.activeTab !== activeTab) {
            this.setState(function () {
                return { activeTab: nextProps.activeTab };
            });
        }
    };

    TabsContainer.prototype.changeTab = function changeTab(event) {
        var currentTarget = event.currentTarget;

        var activeTab = currentTarget.getAttribute('data-id');

        this.setState(function () {
            return { activeTab: activeTab };
        });
    };

    return TabsContainer;
}(_react2.default.Component);

process.env.NODE_ENV !== "production" ? TabsContainer.propTypes = {
    activeTab: _propTypes2.default.string,
    children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.element])
} : void 0;

exports.default = TabsContainer;
module.exports = exports['default'];