import classes from "./Layout.module.css";
import MainNavigation from './MainNavigation.js'

export default function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <main className={classes.main}>
                 {props.children}
            </main>
        </div>
    )
}