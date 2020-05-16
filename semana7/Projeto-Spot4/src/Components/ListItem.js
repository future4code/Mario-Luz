import styled from 'styled-components'

const ListItem = styled.div`
  display: flex;
  width:100%;
  border-bottom: 1px solid #7bed9f;
  border-bottom-right-radius: 5px;
  justify-content: space-between;
  align-items: center;
  margin-bottom:10px;
  span:first-child{
    :hover {
      cursor: pointer;
      font-style:italic;
    }
  }
  span:nth-child(2){
    width:35px;
    height:35px;
    background-color:#7bed9f;
    border-radius:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    :hover{
      background-color:#7bed9f;
      cursor: pointer;
      .fa-trash-o{
        color:#7bed9f
      }
    }
  }
  .fa-trash-o{
    font-size:25px;
    color:#000;
  }
`

export default ListItem