import React, {useState} from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components'

//import {useRef} from 'react-router-dom';

let fileRead = new FileReader();

const Container = styled.div`
`

function Detail(){

    const {userID} = useParams();
    const userPW = localStorage.getItem(userID);

    const [finalText, setFinalText] = useState('');
    const [finalImage, setFinalImage] = useState('');

    let txtDATA = localStorage.getItem(`${userID}fortxt`);
    let imageDATA = localStorage.getItem(`${userID}forimg`);

    let fileBuffer = null;

    async function fileOpenButton(){
        [fileBuffer] = await window.showOpenFilePicker();
        
        let fileData = await fileBuffer.getFile();
        console.log(fileData);
    
        if(fileData.type !== 'image/png'){
            //interface file data
            //await fileRead.readAsDataURL(fileData)
            let text = await fileData.text();
            localStorage.setItem(`${userID}fortxt`, text)

            setFinalText(text);
            return (
                <Container>
                <button className="fileOpen" type="file" onClick={fileOpenButton}>파일 불러오기</button>
                (<pre className="textArea" contentEditable>{finalText}</pre>
                <div className="imageAreaCover"><img className="imageArea" src={finalImage}></img></div>
                <button className="fileSave">파일 저장하기</button>
                <button className="fileSaveAs">다른 이름으로 파일 저장하기</button>
                </Container>
                )
    
        }else if(fileData.type == 'image/png' || 'image/jpeg'){
            //fileReader가 fileData를 먼저 읽어야 한다.
            await fileRead.readAsDataURL(fileData);
            fileRead.addEventListener('load', () => {
                localStorage.setItem(`${userID}forimg` , fileRead.result);
                setFinalImage(fileRead.result);
                //console.log(fileRead.result);
                //console.log(imageArea.src);
                })
            
            
            return(
                <Container>
                <button className="fileOpen" type="file" onClick={fileOpenButton}>파일 불러오기</button>
                <pre className="textArea" contentEditable>{finalText}</pre>
                <div className="imageAreaCover"><img className="imageArea" src={finalImage}></img></div>
                <button className="fileSave">파일 저장하기</button>
                <button className="fileSaveAs">다른 이름으로 파일 저장하기</button>
                </Container>
            )

            

            //fileRead - null, fileRead.result - image URL.
            //upload event를 부여할 경우에만 fileRead에서 data를 읽어올 수 있다.
            
        }else{
            return;
        }
    };

    return(
        <Container>
            <button className="fileOpen" type="file" onClick={fileOpenButton}>파일 불러오기</button>
            {txtDATA? (<pre className="textArea" contentEditable>{txtDATA}</pre>) : (
            <div>NO SAVED TEXT DATA</div>)}
            {imageDATA? (<div className="imageAreaCover"><img className="imageArea" src={imageDATA}></img></div>) : (
                <div>NO SAVED IMAGE DATA</div>)}
            <button className="fileSave">파일 저장하기</button>
            <button className="fileSaveAs">다른 이름으로 파일 저장하기</button>
        </Container>
    )
}

export default Detail;