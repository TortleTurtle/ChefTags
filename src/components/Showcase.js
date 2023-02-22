import ShowcaseItem from "@/components/ShowcaseItem";
import ShowcaseStyles from "@/styles/Showcase.module.scss";
import ItemStyles from "@/styles/ShowcaseItem.module.scss";

export default function Showcase(){
    return(
        <div className={ShowcaseStyles.showcase}>
            <ShowcaseItem className={ItemStyles.left} />
            <ShowcaseItem className={ItemStyles.right} />
        </div>
    )
}