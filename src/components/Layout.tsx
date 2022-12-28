
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/slate">Slate</Link>
                        <div>Full customize, but it require a lot manual work if you start from scratch</div>
                    </li>
                    <li>
                        <Link to="/email-editor">React Email Editor</Link>
                        <div>Instead of a rich text editor, this is more of a drag and drop email template</div>
                    </li>
                    <li>
                        <Link to="/quill2">ReactQuill v2</Link>
                        <div>Easy to setup, store data in html already, less customizable than Slate </div>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;