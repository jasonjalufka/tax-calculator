import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import theme from './theme';
// import Parallax from 'react-rellax';
import { single, married } from './constants';
import ToggleSwitch from './components/ToggleSwitch';

// const Section = styled.div`
//   display: flex;
//   align-items: stretch;
//   align-content: space-around;
//   height: 50vh;
//   width: 100vw;
//   justify-content: ${props => (props.primary ? 'flex-start' : 'flex-end')};
// `;

// const Content = styled.h1`
//   padding-left: 1em;
//   padding-right: 1em;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   color: ${props => (props.primary ? 'white' : 'orange')};
// `;

// const Button = styled.button`
//   ${props => props.theme.animations.show}
//   animation-delay: 200ms;
//   opacity: 0;
//   transform: translateY(20px);
//   font-family: sans-serif;
//   border: none;
//   border-radius: ${theme.borderRadius};
//   background: #00b4db;
//   background: -webkit-linear-gradient(to right, #0083b0, #00b4db);
//   background: linear-gradient(to right, #0083b0, #00b4db);

//   color: white;
//   padding-left: 10px;
// `;

const Layout = styled.div`
  /* ${props => props.theme.animations.show}; */
  /* animation-delay: 100ms; */
  /* opacity: 0;
  /* transform: translateY(20px); */
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-around;
  height: 100vh;
`;

const IncomeBox = styled.div`
  display: flex;
  flex-direction: column;

  background-color: white;
  padding: 20px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  ${props => props.theme.animations.show};
  opacity: 0;

  @media (max-width: 700px) {
    width: 90%;
    margin-top: 30px;
    margin-bottom: 0;
  }

  @media (min-width: 701px) {
    min-width: 350px;
    min-height: 40%;
    width: 30%;
    margin-top: 100px;
    margin-bottom: 100px;
  }
`;

const IncomeForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 60%;
`;

const IncomeField = styled.div`
  width: 100%;
  height: 56px;
  border-radius: ${theme.borderRadius};
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
  transition: 0.3s all;
`;

const IncomeInput = styled.input`
  width: 100%;
  position: relative;
  padding: 10px 5px;
  border: none;
  border-bottom: 2px solid;
  border-image-source: linear-gradient(to left, #5b86e5, #36d1dc);
  border-image-slice: 1;
  font-size: 16px;
  line-height: normal;
  background-color: transparent;
  color: #282828;
  outline: none;
  transition: 0.3s padding ease-in-out;
  -webkit-appearance: none;

  &:focus {
    padding: 15px 10px;
  }
`;

// const SubmitButton = styled.button`
//   color: white;
//   font-size: 1rem;
//   font-weight: 300;
//   text-transform: uppercase;
//   border: none;
//   outline: none;
//   cursor: pointer;
//   border-radius: ${theme.borderRadius};
//   padding: 10px 15px;
//   background: linear-gradient(to left, #5b86e5, #36d1dc);
//   box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
//   position: relative;

//   &:before {
//     content: ' ';
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     border-radius: ${theme.borderRadius};
//     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
//     opacity: 0;
//     transition: opacity 0.3s ease-in-out;
//   }

//   &:hover:before {
//     opacity: 1;
//   }
// `;

const Summary = styled.div`
  width: 60%;
  min-width: 350px;
  background: white;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Table = styled.div`
  width: 100%;
  padding: 15px;
`;

const TableRow = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-self: stretch;
  font-family: ${props =>
    props.numerical ? 'Roboto Mono, monospace' : 'inherit'};
  border-radius: ${props => (props.total ? '0' : theme.borderRadius)};
  border-top: ${props => (props.total ? '2px solid' : 'none')};
  border-image-source: linear-gradient(to left, #5b86e5, #36d1dc);
  border-image-slice: 1;
  color: ${props => (props.isBracket ? 'white' : 'inherit')};
  background: ${props =>
    props.isBracket ? 'linear-gradient(to left, #0083b0, #00b4db)' : 'inherit'};
  ${props => props.theme.animations.show};
  animation-delay: ${props => props.rowNumber * 10}ms;
  transform: translateY(-20px);
  opacity: 0;
`;

const TableColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  flex-basis: 100%;
  flex: 1;

  &:nth-child(1) {
    flex: 2;
  }
`;

const TableItem = styled.div`
  font-weight: ${props => (props.header || props.total ? 'bold' : '400')};
  font-family: ${props =>
    props.numerical ? 'Roboto Mono, monospace' : 'inherit'};
  width: 100%;
  flex-grow: 2;
  /* margin-bottom: 20px; */
`;

const App = () => {
  const [grossIncome, setGrossIncome] = useState(0);
  const [isMarried, setIsMarried] = useState(false);
  const [tableData, setTableData] = useState({});

  useEffect(() => {
    updateTableData(0);
  }, []);

  const calculateBracketTax = (lower, upper, rate, grossIncome) => {
    if (grossIncome < lower) return 0;
    if (grossIncome > upper) return (upper * rate) / 100;
    else {
      return ((grossIncome - lower) * rate) / 100;
    }
  };

  const isTaxBracket = (lower, upper, grossIncome) => {
    if (grossIncome >= lower && grossIncome <= upper) {
      return true;
    } else {
      return false;
    }
  };

  const updateGrossIncome = value => {
    setGrossIncome(value);
    updateTableData(value, isMarried);
  };

  const toggleStatus = () => {
    setIsMarried(!isMarried);
    updateTableData(grossIncome, !isMarried);
  };

  const updateTableData = (grossIncome, status) => {
    const newTable = {};
    const data = status ? [...married] : [...single];
    console.log(
      'data stuff:',
      isMarried ? 'loading married' : 'loading single'
    );
    data.forEach(
      (bracket, index) =>
        (newTable[index] = {
          ...bracket,
          bracketId: index,
          totalPaid: calculateBracketTax(
            bracket.lower,
            bracket.upper,
            bracket.rate,
            grossIncome
          ),
          isBracket: isTaxBracket(bracket.lower, bracket.upper, grossIncome)
        })
    );
    setTableData(newTable);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Layout>
          <IncomeBox>
            <h2 style={{ fontWeight: 'bold' }}>Tax Calculator</h2>
            <IncomeForm>
              <IncomeField>
                <IncomeInput
                  placeholder='Gross Income'
                  type='number'
                  name='gross-income'
                  onChange={e => updateGrossIncome(e.target.value)}
                />
              </IncomeField>
              <ToggleSwitch
                updateTableData={() => toggleStatus()}
                isMarried={isMarried}
              />
            </IncomeForm>
          </IncomeBox>
          <Summary>
            <Table>
              <TableRow rowNumber={0}>
                <TableColumn>
                  <TableItem header>Income Range</TableItem>
                </TableColumn>
                <TableColumn>
                  <TableItem header>Tax Rate</TableItem>
                </TableColumn>
                <TableColumn>
                  <TableItem header>You Pay</TableItem>
                </TableColumn>
              </TableRow>
              {Object.keys(tableData).map(bracket => (
                <TableRow
                  numerical
                  key={bracket}
                  rowNumber={bracket + 1}
                  isBracket={tableData[bracket].isBracket}
                >
                  <TableColumn>
                    <TableItem>
                      ${Number(tableData[bracket].lower).toLocaleString()} - $
                      {Number(tableData[bracket].upper).toLocaleString()}
                    </TableItem>
                  </TableColumn>
                  <TableColumn>
                    <TableItem>{tableData[bracket].rate} %</TableItem>
                  </TableColumn>
                  <TableColumn>
                    <TableItem>
                      ${Number(tableData[bracket].totalPaid).toLocaleString()}
                    </TableItem>
                  </TableColumn>
                </TableRow>
              ))}
              <TableRow total rowNumber={90}>
                <TableColumn>
                  <TableItem total>Total:</TableItem>
                </TableColumn>
                <TableColumn>
                  <TableItem total numerical>
                    {grossIncome &&
                      (
                        (Object.keys(tableData).reduce(
                          (prev, key) => prev + tableData[key].totalPaid,
                          0
                        ) /
                          grossIncome) *
                        100
                      ).toFixed(2)}
                    %
                  </TableItem>
                </TableColumn>
                <TableColumn>
                  <TableItem total numerical>
                    {' $'}
                    {Number(
                      Object.keys(tableData).reduce(
                        (prev, key) => prev + tableData[key].totalPaid,
                        0
                      )
                    ).toLocaleString()}
                  </TableItem>
                </TableColumn>
              </TableRow>
            </Table>
          </Summary>
        </Layout>
      </>
    </ThemeProvider>
  );
};

export default App;
