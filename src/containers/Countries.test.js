import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adaptor from '@wojtekmaj/enzyme-adapter-react-17';
import Countries from './Countries';
import Country from '../components/Country';
import { Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';

configure({ adapter: new Adaptor() });

const mockCountryData = [
    {
        "ID": "703101be-1dd6-4888-b190-9527459b5771",
        "Country": "Afghanistan",
        "NewConfirmed": 62,
        "TotalConfirmed": 55121,
        "NewDeaths": 1,
        "TotalDeaths": 2405,
        "NewRecovered": 75,
        "TotalRecovered": 47798
    },
    {
        "ID": "c03f6ced-6898-407b-b7ee-380e19a73e1c",
        "Country": "Albania",
        "NewConfirmed": 942,
        "TotalConfirmed": 79934,
        "NewDeaths": 5,
        "TotalDeaths": 1398,
        "NewRecovered": 455,
        "TotalRecovered": 48377
    }
]

describe('<Countries />', () => {
    let wrapper;

    // beforeEach(() => {
    //     wrapper = shallow(<Countries />);
    // });

    it('should render two <Link /> elements for the two countries within mockCountryData', () => {
        wrapper = shallow(<Countries />);
        const instance = wrapper.instance();
        //setting data for two countries on the instance state
        instance.setState({ countries: mockCountryData });
        //checking that only two Link elements are rendered
        expect(wrapper.find(Link)).toHaveLength(2);
    });

    it('should render a single <Country /> element for the country selected', () => {
        //mounting without path to any country, expecting Country Route never to render
        wrapper = mount(
            <MemoryRouter initialEntries={['/countries']}>
                <Countries />
            </MemoryRouter>
        );
        expect(wrapper.find(Country)).toHaveLength(0);
        //mounting with a path to a fake country, expecting a single Country Element to Render
        wrapper = mount(
            <MemoryRouter initialEntries={['/countries/fakeCountry']}>
                <Countries />
            </MemoryRouter>
        );
        expect(wrapper.find(Country)).toHaveLength(1);
    });
});