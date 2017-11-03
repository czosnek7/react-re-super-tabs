import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Tabs from './Tabs'
import TabList from './TabList'
import Tab from './Tab'
import TabPanel from './TabPanel'
