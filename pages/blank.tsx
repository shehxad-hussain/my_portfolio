import { Fragment } from 'react';
import type { NextPage } from 'next';
import { Navbar } from 'components/blocks/navbar';
import { Hero2 } from 'components/blocks/hero';

const Blank: NextPage = () => {
    return (
        <Fragment>
            {/* ========== header section ========== */}
            <header className="wrapper mb-1">
                <Navbar social navClassName="navbar navbar-expand-lg center-nav transparent navbar-light caret-none" />
            </header>

            <main className="content-wrapper">
                <div className='container'>
                    <h1>This is blank page</h1>
                </div>

            </main>

        </Fragment>
    )
}

export default Blank;