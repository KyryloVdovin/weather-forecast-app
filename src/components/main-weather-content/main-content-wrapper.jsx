import MainContentContainer from './main-content-container';
import HeaderContainer from '../header/header-container';
import './main-content-wrapper.css';

const MainContentWrapper = () => {
    return (
        <div className='body'>
            {/* <meta name="viewport" content="width=device-width, initial-scale=1"></meta> */}
            <div className="weather-wrapper">
                <div className='weather-body'>
                    <div className='weather-content'>
                        <HeaderContainer />
                        <MainContentContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContentWrapper;