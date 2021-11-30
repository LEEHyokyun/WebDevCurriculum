import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {gql, useQuery} from '@apollo/client';
import styled from 'styled-components';

const dataContext = React.createContext();

const getAllUserInfor = gql`
{
    getAllUserInfor{
        id
        userID
        userPW
    }
}`

const Container = styled.div`
`

const Title = styled.h1`
    padding: 1%;
    align-items: center;
`

const UserInformation = styled.div`
    display: flex;
`

function Home() {
    //console.log는 Mount 되기 전,후 두번 호출
    const {loading, error , data} = useQuery(getAllUserInfor);
    //console.log(loading, error , data);

    const [userID, setUserID] = useState('');
    const [userPW, setUserPW] = useState('');

    const updateUserID = e => {
        const {target : {value}} = e;
        //value 변수 자체는 문자 하나하나
        //각각 입력될때마다 반응

        setUserID(value);
        //이 입력되는 값들에 대해
        //상태관리화하면 (누적된) 상태관리가 가능해진다.
        console.log(userID);
    };

    const updateUserPW = e => {
        const {target : {value}} = e;
        //value 변수 자체는 문자 하나하나
        //각각 입력될때마다 반응

        setUserPW(value);
        //이 입력되는 값들에 대해
        //상태관리화하면 (누적된) 상태관리가 가능해진다.
        console.log(userPW);
    };
    
    const saveStateValues = (userID, userPW) => {
        localStorage.setItem(userID, userPW);
    };

    return(
        <Container>
            <Title>사용자 로그인</Title>
            <UserInformation>
                <input type='text' placeholder="ID" value={userID} onChange={updateUserID}/>
                <input type='password' placeholder="PW" value={userPW} onChange={updateUserPW}/>
            </UserInformation>
            <Link to={{
                pathname: `/${userID}`
            }} onClick={() => saveStateValues(userID, userPW)}>로그인하기</Link>
        </Container>
    )
};

export default Home;