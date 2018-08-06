import React, { Component } from 'react';
//Import the css file for styling.
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div className="about container">
                <div className='about-info container'>
                    <h1>About</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut justo in mauris lobortis bibendum nec nec tellus. Morbi est ipsum, pretium nec est vel, maximus congue metus. Proin eu euismod turpis, eget ornare nunc. Suspendisse id aliquet justo, eget ornare ligula. Nunc eu pretium nisi, vel maximus leo. Ut tempus risus quis ultricies dictum. Donec at mauris justo. Vestibulum ut lorem vitae tellus facilisis volutpat vitae quis purus. Suspendisse lobortis fermentum placerat.
                    </p>
                    <p>
                    Nam efficitur dui et urna ullamcorper rhoncus. Proin porta aliquet ipsum, ac volutpat diam auctor eu. Ut tristique odio ligula, ut aliquam ex consequat rutrum. In vel magna a velit rhoncus ornare. Phasellus arcu felis, consectetur non nunc nec, finibus rutrum libero. Nulla consequat lorem et felis semper, ut tempus orci lacinia. Sed molestie mi sodales lacinia scelerisque. Pellentesque tellus augue, molestie non sagittis sed, eleifend ac eros. Vivamus tortor quam, viverra sit amet libero a, dignissim auctor odio. In erat nulla, molestie a urna eu, porttitor euismod felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum sapien, fermentum sit amet eleifend eget, consequat a lacus. Sed nulla odio, laoreet ut dictum sit amet, ornare quis augue. Nam blandit et metus ut vestibulum. Maecenas bibendum diam laoreet urna sollicitudin, in pellentesque diam condimentum.
                    </p>
                </div>
            </div>
        );
    }
}