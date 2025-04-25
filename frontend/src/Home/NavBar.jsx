import React, { useContext } from "react";
import { UserDataContext } from "../Context/LoginContext";
import { useNavigate } from "react-router-dom";
import NavBarElement from "../Components/NavBarElement";
import '../styles/navbar.css'

const NavBar = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(UserDataContext);
    const navigate = useNavigate();
    return (
        <nav className="navbar">

            {!isLoggedIn &&
                <ul className="navbar-list">
                    <NavBarElement
                        name="Prepare"
                        key="Prepare"
                        sections={[
                            { name: "PathFinder" },
                            { name: "NCAT" },
                            { name: "Expert speak" },
                            { name: "Resume maker" },
                            { name: "Personilised interview Q/A" },
                            { name: "Career guidance" },


                        ]}
                    />
                    <NavBarElement
                        name="Participate"
                        sections={[
                            { name: "Contests" },
                            { name: "All India NCAT" },
                            { name: "Naukri Campas Young Turks" },
                            { name: "Naukri Campas Squad" },
                            { name: "Engineer's Ring of Honour" },
                        ]}
                    />
                    <NavBarElement
                        name="Opportunities"
                        sections={[
                            { name: "Recommended jobs" },
                            { name: "Job invites" },
                            { name: "Jobs from alerts" },
                            { name: "Application status" },
                            { name: "Saved jobs" },
                        ]}
                    />
                    <div className="search-box" >
                        <input type="search" className="job-search" id="job-search" placeholder="Search jobs here" />

                    </div>
                </ul> ||

                <ul>


                </ul>
            }
        </nav>
    )
}

export default NavBar