'use client'
import React, { useState, useEffect } from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import Image from 'next/image';
import { useRouter, usePathname } from "next/navigation";
import { getClientToken } from './utils/client-utils';
import { AppBar, Toolbar, Typography } from "@mui/material";


function Navbar() {
    const [active, setActive] = useState(false)
    const router = useRouter()
    const pathname = usePathname();

    /* useEffect(() => {
        const verifyToken = async () => {
            const tokenIsValid = await getClientToken();
            if (!tokenIsValid) {
                console.log('Token is invalid or not present');
            }
        };
        verifyToken();
    }, [router]); */

    const handleLogout = async () => {
        // Remove token from cookies if stored there
        await fetch("/api/logout");
        router.push("/admin");
    }

    // Determine the title based on the top-level route
    const getTitle = () => {
        if (pathname.startsWith("/admin/blog")) return "Blogs";
        if (pathname.startsWith("/admin/category")) return "Categories";
        if (pathname.startsWith("/admin/tag")) return "Tags";
        if (pathname.startsWith("/admin/dashboard")) return "Dashboard";
        return "Admin";
    };

    return (
        <>
            <nav id="navbar-main" className="navbar is-fixed-top">
                <div className="navbar-brand">
                    <a className="navbar-item mobile-aside-button">
                        <span className="icon"><i className="mdi mdi-forwardburger mdi-24px"></i></span>
                    </a>
                    <div className="navbar-item">
                        <p className="title">
                            {getTitle()}
                        </p>
                    </div>
                </div>
                <div className="navbar-brand is-right">
                    <a className="navbar-item --jb-navbar-menu-toggle" data-target="navbar-menu">
                        <span className="icon"><i className="mdi mdi-dots-vertical mdi-24px"></i></span>
                    </a>
                </div>
                <div className="navbar-menu" id="navbar-menu">
                    <div className="navbar-end">
                        <div className={`navbar-item dropdown has-divider has-user-avatar ${active && 'active'}`}>
                            <a className="navbar-link" onClick={() => setActive(!active)}>
                                <div className="user-avatar">
                                    <Image src="https://avatars.dicebear.com/v2/initials/john-doe.svg" alt="John Doe" className="rounded-full" height="200" width="200" />
                                </div>
                                <div className="is-user-name"><span>John Doe</span></div>
                                <span className="icon"><i className="mdi mdi-chevron-down"></i></span>
                            </a>
                            <div className="navbar-dropdown" onClick={handleLogout}>
                                <a className="navbar-item">
                                    <span className="icon"><LogoutIcon /></span>
                                    <span>Log Out</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar