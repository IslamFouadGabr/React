function Button({onClick,children}){

    return(
        <button
            id="btn"
            className="loadmore"
            onClick={onClick}

        >
            {children}
        </button>
    )
}
function LoadMoreButton({name}){
    function getProductElementData (){
        const loadMore = document.getElementById('btn');
        const eleName = [...document.querySelectorAll('.hidden')];
        eleName.splice(0,3).forEach( test => test.classList.replace('hidden','product'));

        if(eleName.length === 0){
            loadMore.style.visibility = 'hidden';

        }

    }
    return(
        <Button onClick={getProductElementData}>
            {name}
        </Button>
    )
}
export default function  FullButton(){
    return(
        <div className="loadbutton">
            <LoadMoreButton name="Load More" >

            </LoadMoreButton>
        </div>

    )
}