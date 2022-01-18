import React,{useState} from 'react';
import  ReactPaginate from 'react-paginate'
const Pagination = ({postsData, postsPerPage, setPageNumber}) => {

    const [posts] = useState(postsData.slice(0,50));

    const pageCount = Math.ceil(posts.length / postsPerPage);
    
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    return (
        <>
            <ReactPaginate 
                previousLabel={"Prev"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationContainer"}
                previousLinkClassName={"prev-btn"}
                nextLinkClassName={"next-btn"}
                activeClassName={"active-btn"}
                disabledClassName={"disabled-btn"}
            />
        </>
    )
};

export default Pagination;