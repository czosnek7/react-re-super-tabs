# react-re-super-tabs

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/czosnek7/react-re-super-tabs/builds/279023576

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-re-super-tabs

React reusable tab component

## Demo

GIF

## Installing
 yarn:
 
 ```yarn add react-re-super-tabs```
 
 npm:
 
 ```npm install react-re-super-tabs --save```

## Usage
```js
import { Tabs, Tab, TabPanel, TabList } from 'react-re-super-tabs';
import { Info, About } from '../information'
import CustomTab from '../CustomTab'

export default () => (
  <Tabs activeTab='about'>
    <TabList>
      <Tab component={() => <div>info</div>} id='info'/>
      <Tab component={CustomTab} label='about' id='about' />
      <Tab component={() => <div>contact</div>} id='contact' />
    </TabList>
    <TabList>
      <TabPanel component={Info} id='info'/>
      <TabPanel component={About} id='about'/>
      <TabPanel component={() => <p>contact content ...</p>} id='contact'/>
    </TabList>
  </Tabs>
)
```

## Component API
#### Tabs
Main container for `TabList` components. Use exactly two `TabList` components for `Tab` components with labels, and `TabPanel` components with views  
##### children: `Array<TabList> | TabList`
##### activeTab: `string`
```js
<Tabs activeTab='about'>
  <TabList>
   ...
  </TabList>
  <TabList>
     ...
  </TabList>
</Tabs>
```

#### TabList
Container for `Tab`, `TabPanel` components 
##### children: `Array<Tab> | Tab | Array<TabPanel> | TabPanel`
##### className: `string`

```js
<Tabs activeTab='info'>
    <TabList>
      <Tab component={CustomTab} label='info' id='info' />
      ...
    </TabList>
    <TabList className={styles.list}>
        <TabPanel component={Info} id='info'/>
        ...
    </TabList>
</Tabs>
```

#### Tab
Clickable label component that change the content view - `TabPanel`.
Each `Tab` component should have an identifier corresponding to the identifier of the `TabPanel` component

##### component: `function`
##### label: `string`
##### id: `string`

```js
<Tab component={() => <div>info</div>} id='info' /> 
```
with CustomTab
```js
const CustomTab = ({children, isActive}) =>
    <span className={`${styles.customTab} ${isActive ? styles.active : ''}`}>{children}</span>
    
    ...
<Tab component={CustomTab} id='info' /> 
```
remember that you have an access to isActive prop

#### TabPanel
View component.
Each `TabPanel` component should have an identifier corresponding to the identifier of the `Tab` component

##### component: `function`
##### id: `string`
```js
  <TabPanel component={() => <p>info content</p>} id='info' />
```
```js
  <TabPanel component={Info} id='info' />
```