import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ExpandableTitle from './ExpandableTitle';
import ExpandableTitleItem from './ExpandableTitleItem';

configure({adapter: new Adapter()});

describe('<ExpandableTitle />', () =>{
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ExpandableTitle />)
    })
    it('should render <ExpandableTitleItem /> elements', () => {
        wrapper.setProps({header: 'Some Header', description: 'Some description', details: 'Detailed description'})
        expect(wrapper.find(ExpandableTitleItem))
    })
})