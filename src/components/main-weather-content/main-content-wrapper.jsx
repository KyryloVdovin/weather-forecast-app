import MainContentContainer from './main-content-container';
import HeaderContainer from '../header/header-container';
import './main-content-wrapper.css';

const MainContentWrapper = () => {
    return (
        <div className='body'>
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