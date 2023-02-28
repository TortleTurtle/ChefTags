import ShowcaseItem from "@/components/ShowcaseItem";
import ShowcaseStyles from "@/styles/Showcase.module.scss";
import ItemStyles from "@/styles/ShowcaseItem.module.scss";

export default function Showcase({projects}) {
    const showCaseItems = projects.map(
        (project, i) => <ShowcaseItem
            project={project}
            className={i % 2 === 0 ? ItemStyles.left : ItemStyles.right}
            key={i}
        />);

    return (
        // TODO: Load items based on props.
        <div className={ShowcaseStyles.showcase}>
            {showCaseItems}
        </div>
    )
}