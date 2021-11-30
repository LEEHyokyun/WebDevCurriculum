import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components'
//import {useRef} from 'react-router-dom';

const Container = styled.div`
`

function Detail(){

    const {userID} = useParams();
    const userPW = localStorage.getItem(userID);

    console.log(userID, userPW);

    return(
        <Container>
            <button class="fileOpen" type="file">파일 불러오기</button>
            <pre class="textArea" contenteditable></pre>
            <div class="imageAreaCover"><img class="imageArea"></img></div>
            <button class="fileSave">파일 저장하기</button>
            <button class="fileSaveAs">다른 이름으로 파일 저장하기</button>
        </Container>
    )
}

export default Detail;