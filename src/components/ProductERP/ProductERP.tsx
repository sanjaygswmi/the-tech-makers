import dynamic from 'next/dynamic';

const Banner = dynamic(() => import('./Sections/Banner/Banner'));
const Header = dynamic(() => import('../Header/Header'));
const Footer = dynamic(() => import('../Footer2/Footer'));
const FromStartups = dynamic(() => import('./Sections/FromStartups/FromStartups'));
const Interfaces = dynamic(() => import('./Sections/Interfaces/Interfaces'));
const Options = dynamic(() => import('./Sections/Options/Options'));
const Wanttomeasure = dynamic(() => import('./Sections/Wanttomeasure/Wanttomeasure'));
const SoftwareInformation = dynamic(() => import('./Sections/SoftwareInformation/SoftwareInformation'));
const WeShare = dynamic(() => import('../Home Page/Sections/WeShare/WeShare'));
const Reviews = dynamic(() => import('../Home Page/Sections/Reviews/Reviews'));
const Concept = dynamic(() => import('./Sections/Concepts/Concepts'));

// Usage of the dynamically imported components
// e.g., <Banner />


const ProductERP = ()=>{
    return(
        <div className="product-detail">
            <Header/>
            <Banner/>
            <FromStartups />
            <Concept/>
            <Interfaces/>
            <Options/>
            <Wanttomeasure/>
            <SoftwareInformation/>
            <WeShare/>
            <Reviews/>
            <Footer/>
        </div>
    )
}

export default ProductERP