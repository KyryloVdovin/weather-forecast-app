// import Accordion from 'react-bootstrap/Accordion';
import Accordion from './weather-accordion-item';
import './main-content.css';

const MainContent = (props) => {
    return (
        <div className="weather-content-flex">
            <div className="detail-info-container">

            </div>
            <div className="accordion-items-container">
                <Accordion title='Item 1' content='This works fine for a single section of the accordion. But if we have multiple sections, it will not be good to copy-paste the same JSX code again and again with different content.' />
                <Accordion title='Item 1' content='This works fine for a single section of the accordion. But if we have multiple sections, it will not be good to copy-paste the same JSX code again and again with different content.' />
                <Accordion title='Item 1' content='This works fine for a single section of the accordion. But if we have multiple sections, it will not be good to copy-paste the same JSX code again and again with different content.' />
            </div>
        </div>
    )
}

export default MainContent;