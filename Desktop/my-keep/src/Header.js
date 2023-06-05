import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'

function Header({ search, setSearch }) {
    return (
        <div className='header'>
            <div className="header__left">
                <img
                    src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
                    alt=''
                />
                <h3>MyKeep</h3>
            </div>
            <div className="header__search">
                <SearchIcon />
                <input
                    id='search'
                    type='text'
                    role='searchbox'
                    placeholder='Search Items by title '
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Header