import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';
import Logo from '@/Components/Logo';

import './index.css';

export default class Header extends React.Component {
    onNavClick(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();

        const target = e.target as HTMLAnchorElement;
        const destinationId = target.getAttribute('data-destination');
        const destinationDom: HTMLElement | null = window.document.querySelector(`#${destinationId}`);

        if (!destinationDom) {
            return;
        }

        window.scrollTo({
            top: destinationDom.offsetTop,
            behavior: 'smooth',
        });
    }

    render() {
        return (
            <div className="header">
                <Container size={Sizes.large}>
                    <Logo className="header--logo" />

                    <ul className="header--links">
                        <li>
                            <a onClick={this.onNavClick} href="#about" data-destination="about">
                                About 🍕
                            </a>
                        </li>

                        <li>
                            <a onClick={this.onNavClick} href="#sponsors" data-destination="sponsors">
                                Sponsors
                            </a>
                        </li>
                        <li>
                            <a href="https://forms.gle/98nPd3pYZkELSzvs5" target="_blank" rel="noopener noreferrer">
                                Call for Proposals
                            </a>
                        </li>
                        <li>
                            <a onClick={this.onNavClick} href="#travel" data-destination="travel">
                                Travel Info
                            </a>
                        </li>
                        <li>
                            <a onClick={this.onNavClick} href="#coc" data-destination="coc">
                                CoC
                            </a>
                        </li>
                        <li>
                            <a onClick={this.onNavClick} href="#imprint" data-destination="imprint">
                                Imprint
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://ti.to/pythonpizza/pypizza-sudwest"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Tickets
                            </a>
                        </li>
                    </ul>
                </Container>
            </div>
        );
    }
}

// <li>
//<a onClick={this.onNavClick} href="#schedule" data-destination="schedule">
//Schedule
//</a>
//</li>
