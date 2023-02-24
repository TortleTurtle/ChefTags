import Header from "@/components/Header";
import Contact from "@/components/Contact";

export default function Layout({children}) {
    return (
        <>
            <Header/>
            {children}
            <Contact/>
        </>
    )
}