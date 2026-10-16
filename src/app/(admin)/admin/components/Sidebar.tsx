import React from 'react'
import Image from "next/image";
import Link from "next/link"
import { localImg } from '../../../../../images/loacalImg';
// import GridViewIcon from '@mui/icons-material/GridView';
// import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
// import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';

// import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Sidebar() {
    return (
        <>
            <aside className="aside is-placed-left is-expanded">
                <div className="aside-tools">
                    <div className="site-logo">
                        <Image src={localImg.logo} alt=""  width="200" />
                    </div>
                </div>
                <div className="menu is-menu-main">
                    <ul className="menu-list">
                        <li>

                            <Link href="/admin/dashboard">
                                {/* <span className="icon"><GridViewIcon /></span> */}
                                <span className="menu-item-label">Dashboard</span>
                            </Link>
                        </li>
                        <li>

                            <Link href="/admin/blog">
                                {/* <span className="icon"><GridViewIcon /></span> */}
                                <span className="menu-item-label">Blog</span>
                            </Link>
                        </li>
                        <li>

                            <Link href="/admin/category">
                                {/* <span className="icon"><GridViewIcon /></span> */}
                                <span className="menu-item-label">Category</span>
                            </Link>
                        </li>
                        <li>

                            <Link href="/admin/tag">
                                {/* <span className="icon"><GridViewIcon /></span> */}
                                <span className="menu-item-label">Tag</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar