import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";


export default function MainNavigation () {
    return (
       <header className={classes.header}>
        <h1  className={classes.logo}>React Meetups</h1>
        <nav>
            <ul>
                <li>
                    {/* It's Link istead of a(in HTML) */}
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    {/* It's Link istead of a(in HTML) */}
                    <Link to='/new-meetup'>Add new Meetup</Link>
                </li>
                <li>
                    {/* It's Link istead of a(in HTML) */}
                    <Link to='/favourites'>Favourites MeetUp</Link>
                </li>
            </ul>
        </nav>
       </header>
    )
}