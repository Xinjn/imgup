import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStores } from '../stores';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Side = styled.div`
    background:orange;
    color:#fff;
    border-radius:4px;
`

const Component = observer(() => {
    const { UserStore } = useStores()

    return (
        <>
             <Side >xx</Side>
            {/* {
                UserStore.currentUser
                    ?
                    null
                    :
                   
                    <div >xx</div>
            } */}
        </>
    )
})

export default Component