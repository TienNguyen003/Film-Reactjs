import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'rsuite';
import 'rsuite/Pagination/styles/index.css';
import './Pagination.css';

export default function Page({ total, page }) {
    const [activePage, setActivePage] = useState(page);
    const navigate = useNavigate();

    const handleChangePage = (page) => {
        setActivePage(page);
        navigate(`?page=${page}`);
    };

    useEffect(() => {
        setActivePage(page);
    }, [page]);

    return (
        <>
            <Pagination
                layout={['pager', 'skip']}
                size={'md'}
                prev
                next
                first
                last
                ellipsis
                boundaryLinks
                total={total}
                limit={24}
                maxButtons={5}
                activePage={activePage}
                onChangePage={handleChangePage}
            />
        </>
    );
}
