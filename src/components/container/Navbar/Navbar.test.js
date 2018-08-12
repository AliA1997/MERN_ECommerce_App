/////Make sure to import react
import React from 'react';
//When initiating a snapshot make sure to import the needed components.
import { Navbar } from './Navbar';
import renderer from 'react-test-renderer';

test('Check if Navbar is correct!', () => {
    //Renderer.create creates a snapshot to compare it with component.
    const component = renderer.create(
        <Navbar />
    );
    //Before comparing it make sure your convert it to json.
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()
})