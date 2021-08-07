import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStores } from '../stores';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Tips = styled.div`
    background:orange;
    padding:10px;
    margin:30px 0;
    color:#fff;
    border-radius:4px;
`

const Component = observer(({ children }) => {
    const { UserStore } = useStores()

    return (
        <>
            {
                UserStore.currentUser
                    ?
                    null
                    :
                   
                    <Tips >{children}</Tips>
            }
        </>
    )
})

export default Component