import './TagList.scss';
import tagData from "../../data/tags.json";

function TagList(props){
    return(
        <section className="tag-list">
            <h2 className="tag-list__title">Filters</h2>
            <ul className="tag-list__list">
                {tagData.map((tag, index)=>{
                    //check if tag is the selectedTag
                    let isSelectedTag = tag ===props.selectedTag;
                    return (
                        <li onClick={()=>{
                            props.handleTagClick(tag);
                        }}
                        key={index}
                        
                        className={`tag-list__item ${isSelectedTag ? `tag-list__item--active` : ""

                        }`}
                        >
                            {tag}
                        </li>
                    )
                })}
            </ul>
        </section>
    );

}
export default TagList