import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #DDD;
`

const Header = styled.div`
`

const Content = styled.div`
  flex: 1;
  box-sizing: border-box;
  padding: 20px;
  padding-top: 0;
`

const Text = styled.textarea`
  flex: 1;
  resize: none;
  border: 0;
  background: white;
  height: 100%;
  width: 100%;
  outline; none;
  border-radius: 5px;
  padding: 10px;
  line-height: 1.2em;
  box-sizing: border-box;
  font-family: Verdana;
  font-size: 24px;

`

const Line = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`

const LineLabel = styled.div`
  width: 80px;
  font-weight: bold;
  padding: 5px;
`

const LineValue = styled.div`
  flex: 1;
`

const Name = styled.span`
  background: white;
  border-radius: 20px;
  padding: 5px 15px;
  display: inline-block;
`


export default ({from, to, subject, text}) =>
  <Container>

    <Header>

      <Line>
        <LineLabel>
          Von:
        </LineLabel>
        <LineValue>
          <Name>
            {to}
          </Name>
        </LineValue>
      </Line>
        
      <Line>
        <LineLabel>
          An:
        </LineLabel>
        <LineValue>
          <Name>
            {to}
          </Name>
        </LineValue>
      </Line>

    </Header>
    
    <Content>
      <Text>
        dvdvsdvds vds v ds vds v ds vdsv
        dvdvsdvds vds v ds vds v ds vdsv
        dvdvsdvds vds v ds vds v ds vdsv
        dvdvsdvds vds v ds vds v ds vdsv
        dvdvsdvds vds v ds vds v ds vdsv
        dvdvsdvds vds v ds vds v ds vdsv
        dvdvsdvds vds v ds vds v ds vdsv
      </Text>
    </Content>

  </Container>
